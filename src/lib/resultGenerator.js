(function () {
  function getBenchmark(input) {
    const benchmarks = window.FiveishBenchmarkData || {};
    if (input.mode === "marketing") {
      const benchmark = benchmarks.marketing?.[input.industry] || benchmarks.marketing?.ecommerce || {};
      return {
        label: benchmark.label || "마케팅 참고 벤치마크",
        wordRange: benchmark.ctr ? `CTR ${benchmark.ctr}` : "",
        connectorRange: benchmark.cpc ? `CPC ${benchmark.cpc}` : "",
        detailRange: benchmark.conversionRate ? `CVR ${benchmark.conversionRate}` : "",
        targetSignal: "시뮬레이션 기준",
        note: benchmark.note || "내부 기준값",
      };
    }
    if (input.mode === "opic") {
      return benchmarks.opic?.[input.targetLevel] || benchmarks.opic?.intermediate || {};
    }
    return benchmarks.conversation?.[input.contextId] || benchmarks.conversation?.smalltalk || {};
  }

  function summaryFor(input, totalScore, confidenceLevel) {
    const templates = window.FiveishCopyTemplates || {};
    const variation = window.FiveishTextVariation || {};
    const band = variation.scoreBand ? variation.scoreBand(totalScore) : totalScore >= 80 ? "high" : totalScore >= 55 ? "middle" : "low";
    const variants = input.mode === "marketing"
      ? templates.marketingSummary?.[band] || []
      : templates.summary?.[band] || [];
    if (variants.length) {
      const baseSeed = Math.abs(variation.hashSeed?.(`${input.mode}:${input.contextId}:${input.targetLevel}:${confidenceLevel}`) || 0);
      return variants[(baseSeed + Number(input.variant || 0)) % variants.length];
    }
    return variation.pick?.(variants, `${input.mode}:${input.contextId}`) ||
      "입력값과 내부 기준값을 비교해 학습 방향을 자동으로 정리했습니다.";
  }

  function buildReasoningSummary(input, scored, benchmark) {
    const basis = input.mode === "marketing"
      ? `목표, 업종, 타깃, 예산, 채널, 현재 문제와 핵심 제안`
      : input.mode === "opic"
        ? `선택 주제, 목표 등급, ${input.answeredCount || 0}개 답변, 평균 단어 수, 연결어와 구체 단서`
        : `대화 상황, 목표 표현, 답변 길이, 연결어, 자연스러운 표현 신호`;
    const benchmarkText = benchmark?.label ? `${benchmark.label}과 비교해` : "내부 기준값과 비교해";
    return `${basis}를 기준으로 ${benchmarkText} 점수와 추천을 생성했습니다. 이 과정은 외부 API 호출 없이 브라우저 안의 로컬 분석 로직으로 처리됩니다.`;
  }

  function createPlainText(result) {
    const scores = Object.entries(result.scores || {})
      .map(([key, value]) => `- ${result.scoreLabels?.[key] || key}: ${value}`)
      .join("\n");
    const list = (title, items) => `${title}\n${(items || []).map((item, index) => `${index + 1}. ${item}`).join("\n")}`;
    const actions = (result.priorityActions || [])
      .map((item, index) => `${index + 1}. [${item.priority}] ${item.action} - ${item.reason}`)
      .join("\n");

    return [
      "Fiveish AI 분석형 결과",
      "",
      `핵심 진단: ${result.summary}`,
      `종합 점수: ${result.totalScore}`,
      `신뢰도: ${result.confidenceLevel}`,
      `입력 완성도: ${result.inputCompleteness}%`,
      "",
      "판단 근거",
      result.reasoningSummary,
      "",
      "항목별 점수",
      scores,
      "",
      list("주요 인사이트", result.keyInsights),
      "",
      list("문제점", result.problems),
      "",
      list("개선 전략", result.recommendations),
      "",
      "우선순위 액션 플랜",
      actions,
      "",
      list("바로 사용할 수 있는 문장", result.generatedCopy),
      "",
      `주의사항: ${result.caution}`,
      "",
      list("다음 테스트 제안", result.nextTestIdeas),
    ].join("\n");
  }

  function generate(input) {
    const scoring = window.FiveishScoringEngine;
    const recommendation = window.FiveishRecommendationEngine;
    if (!scoring || !recommendation) {
      throw new Error("Fiveish analysis modules are not loaded.");
    }

    const scored = scoring.score(input);
    const benchmarkRange = getBenchmark(input);
    const recommendationResult = recommendation.buildRecommendations(input, scored);

    return {
      summary: summaryFor(input, scored.totalScore, scored.confidenceLevel),
      totalScore: scored.totalScore,
      confidenceLevel: scored.confidenceLevel,
      inputCompleteness: scored.inputCompleteness,
      reasoningSummary: buildReasoningSummary(input, scored, benchmarkRange),
      benchmarkRange,
      scores: scored.scores,
      scoreLabels: scored.scoreLabels,
      ...recommendationResult,
    };
  }

  window.FiveishAnalysisEngine = {
    generate,
    createPlainText,
  };
})();
