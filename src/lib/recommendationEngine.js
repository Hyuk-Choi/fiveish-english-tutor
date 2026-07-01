(function () {
  function byPriority(priority) {
    return { "높음": 0, "중간": 1, "낮음": 2 }[priority] ?? 2;
  }

  function commentForScore(label, score) {
    if (score >= 80) {
      return `${label}는 안정권입니다. 지금 구조를 유지하면서 표현 밀도만 조금 더 다듬으면 좋습니다.`;
    }
    if (score >= 55) {
      return `${label}는 기본 방향은 맞지만, 한 가지 보완 요소를 추가하면 결과가 더 선명해집니다.`;
    }
    return `${label}는 우선 개선 구간입니다. 다음 답변에서는 이 항목을 먼저 의식하는 편이 효율적입니다.`;
  }

  function buildRecommendations(input, scored) {
    const baseKb = window.FiveishMockKnowledgeBase || {};
    const marketingKb = window.FiveishMarketingKnowledgeBase || {};
    const kb = input.mode === "marketing"
      ? {
          industries: marketingKb.industries || [],
          personas: baseKb.personas || [],
          goals: marketingKb.goals || [],
          painPoints: marketingKb.painPoints || [],
          strategies: marketingKb.strategies || [],
          benchmarks: marketingKb.benchmarks || [],
          templates: marketingKb.templates || [],
          insights: marketingKb.insights || [],
          recommendations: marketingKb.recommendations || [],
          warnings: marketingKb.warnings || [],
          examples: marketingKb.examples || [],
        }
      : baseKb;
    const variation = window.FiveishTextVariation || {};
    const templates = window.FiveishCopyTemplates || {};
    const seed = `${input.mode}:${input.contextId}:${input.targetLevel}:${input.variant || 0}:${input.seed || ""}`;
    const tags = scored.tags || [];
    const selectRelevant = variation.selectRelevant || ((items) => (items || []).slice(0, 3));
    const pick = variation.pick || ((items) => items?.[0]);
    const uniqueByCopy = variation.uniqueByCopy || ((items) => items || []);

    const insightPool = uniqueByCopy([
      ...selectRelevant(kb.insights, tags, 8, `${seed}:insights`),
      ...selectRelevant(kb.personas, tags, 4, `${seed}:personas`).map((item) => ({
        copy: item.cue,
        tags: item.tags,
      })),
    ]);
    const problemPool = selectRelevant(kb.painPoints, tags, 8, `${seed}:problems`);
    const strategyPool = selectRelevant(kb.strategies, tags, 8, `${seed}:strategies`)
      .sort((a, b) => byPriority(a.priority) - byPriority(b.priority));
    const recommendationPool = selectRelevant(kb.recommendations, tags, 8, `${seed}:recommendations`);
    const examplePool = selectRelevant(kb.examples, tags, 8, `${seed}:examples`);
    const templatePool = selectRelevant(kb.templates, tags, 5, `${seed}:templates`);
    const warningPool = selectRelevant(kb.warnings, tags, 5, `${seed}:warnings`);

    const scoreComments = Object.entries(scored.scores || {})
      .filter(([key]) => key !== "improvementPriority")
      .sort((a, b) => a[1] - b[1])
      .slice(0, 2)
      .map(([key, value]) => commentForScore(scored.scoreLabels[key], value));

    const keyInsights = [
      ...scoreComments,
      ...insightPool.map((item) => item.copy),
    ].slice(0, 3);

    const missingSignals = scored.missingInputs || [];
    const problems = [
      ...missingSignals,
      ...problemPool.map((item) => `${item.title}: ${item.diagnosis}`),
    ].slice(0, input.mode === "marketing" ? 5 : 3);

    const recommendations = [
      ...strategyPool.map((item) => `${item.title}: ${item.action}`),
      ...recommendationPool.map((item) => item.copy),
    ].slice(0, input.mode === "opic" ? 5 : 4);

    const priorityActions = strategyPool.slice(0, 4).map((item) => ({
      priority: item.priority || "중간",
      action: item.action,
      reason: item.title,
    }));

    const generatedCopyPool = [
      ...examplePool.map((item) => `${item.title}: ${item.copy}`),
      ...templatePool.map((item) => item.copy),
      ...((templates.generatedCopy || {})[input.mode] || []),
      ...((templates.generatedCopy || {}).business || []),
    ];
    const generatedCopy = Array.from(new Set(generatedCopyPool)).slice(0, 4);

    const nextTestIdeas = [
      ...((templates.testIdeas || []).map((copy) => ({ copy }))),
      ...strategyPool.map((item) => ({ copy: `${item.title}만 적용한 답변을 한 번 더 만들어 보세요.` })),
    ]
      .map((item, index) => ({
        copy: item.copy,
        order: Number(String(variation.hashSeed?.(`${seed}:test:${index}`) || index).replace("-", "")),
      }))
      .sort((a, b) => a.order - b.order)
      .map((item) => item.copy)
      .slice(0, 3);

    const caution = pick(warningPool.map((item) => item.copy), `${seed}:warning`) ||
      "이 결과는 내부 분석 로직 기반의 학습용 참고 결과이며 공식 평가를 대체하지 않습니다.";

    return {
      keyInsights,
      problems,
      recommendations,
      priorityActions,
      generatedCopy,
      nextTestIdeas,
      caution,
    };
  }

  window.FiveishRecommendationEngine = {
    buildRecommendations,
  };
})();
