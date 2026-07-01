(function () {
  const scoreLabels = {
    marketFit: "상황 적합도",
    targetFit: "목표 적합도",
    messageClarity: "메시지 명확도",
    conversionPotential: "실전 전환 가능성",
    budgetEfficiency: "연습 효율성",
    executionDifficulty: "실행 난이도 관리",
    improvementPriority: "개선 우선순위",
  };

  function clampScore(value) {
    return Math.max(0, Math.min(100, Math.round(value)));
  }

  function confidenceFromCompleteness(inputCompleteness) {
    if (inputCompleteness >= 80) return "높음";
    if (inputCompleteness >= 50) return "보통";
    return "낮음";
  }

  function countWords(value) {
    return (String(value || "").match(/[A-Za-z]+(?:['’-][A-Za-z]+)*/g) || []).length;
  }

  function includesAny(value, patterns) {
    const lower = String(value || "").toLowerCase();
    return patterns.some((pattern) => lower.includes(pattern));
  }

  function inferTags(input) {
    const tags = new Set([input.mode, input.contextId, input.targetLevel, input.targetLevelLabel]);

    if (input.mode === "marketing") {
      tags.add("marketing");
      tags.add(input.industry);
      tags.add(input.goal);
      tags.add(input.budget);
      (input.channels || []).forEach((channel) => tags.add(channel));
      if (input.budget === "low-budget") tags.add("low-budget");
      if (input.budget === "high-budget") tags.add("high-budget");
      if ((input.channels || []).length > 2) tags.add("channel");
      if (input.problemText) tags.add("problem").add("message");
      if (input.offerText) tags.add("offer");
      if (String(input.targetText || "").length < 8) tags.add("target");
      if (input.goal === "conversion") tags.add("conversion").add("cta");
      if (input.goal === "lead") tags.add("lead").add("trust");
      if (input.goal === "awareness") tags.add("awareness").add("reach");
      if (input.goal === "retention") tags.add("retention").add("repeat");
      if (input.goal === "install") tags.add("install").add("app");
      if ((input.channels || []).some((channel) => ["meta-ads", "search-ads"].includes(channel))) {
        tags.add("paid");
      }
      if ((input.channels || []).some((channel) => ["instagram", "shorts", "influencer"].includes(channel))) {
        tags.add("ugc");
      }
      if ((input.channels || []).some((channel) => ["email", "kakao"].includes(channel))) {
        tags.add("crm");
      }
      if ((input.channels || []).includes("landing")) tags.add("landing");
      if ((input.channels || []).includes("search-ads")) tags.add("search").add("intent");
      if (!input.goal || !input.industry || !input.targetText || !input.problemText || !input.budget) {
        tags.add("low-confidence");
      }
    }

    if (input.mode === "conversation") {
      tags.add("conversation");
      if (input.contextId === "smalltalk") tags.add("smalltalk");
      if (input.contextId === "cafe") tags.add("cafe").add("request").add("polite");
      if (input.contextId === "travel") tags.add("travel").add("problem").add("solution");
      if (input.contextId === "work") tags.add("work").add("business").add("structure");
      if (input.targetUsed) tags.add("target");
      if ((input.wordCount || 0) < 10) tags.add("short").add("length");
      if ((input.connectorsCount || 0) < 2) tags.add("connector").add("structure");
      if (input.answerText && includesAny(input.answerText, ["could", "would", "please", "might"])) {
        tags.add("polite");
      }
    }

    if (input.mode === "opic") {
      tags.add("opic").add("benchmark");
      if (input.targetLevel === "intermediate") tags.add("intermediate").add("foundation");
      if (input.targetLevel === "upper") tags.add("upper").add("story");
      if (input.targetLevel === "advanced") tags.add("advanced").add("logic");
      if ((input.averageWords || 0) < (input.targetWords || 60)) tags.add("short").add("length");
      if ((input.averageConnectors || 0) < (input.connectorMinimum || 2)) tags.add("connector");
      if ((input.averageDetails || 0) < (input.detailMinimum || 2)) tags.add("detail");
      if ((input.problemQuestionCount || 0) > 0) tags.add("problem").add("solution");
      if ((input.roleplayQuestionCount || 0) > 0) tags.add("roleplay");
    }

    tags.add("privacy").add("routine").add("export");
    return [...tags].filter(Boolean);
  }

  function scoreMarketing(input) {
    const targetLength = String(input.targetText || "").trim().length;
    const problemLength = String(input.problemText || "").trim().length;
    const offerLength = String(input.offerText || "").trim().length;
    const channelCount = (input.channels || []).length;
    const hasGoal = Boolean(input.goal);
    const hasIndustry = Boolean(input.industry);
    const hasTarget = targetLength >= 8;
    const hasBudget = Boolean(input.budget);
    const hasChannel = channelCount > 0;
    const hasProblem = problemLength >= 10;
    const hasOffer = offerLength >= 8;
    const lowBudget = input.budget === "low-budget";
    const highBudget = input.budget === "high-budget";
    const focusedChannel = channelCount > 0 && channelCount <= 2;
    const tooManyChannels = lowBudget && channelCount >= 3;
    const paidChannels = (input.channels || []).filter((channel) =>
      ["meta-ads", "search-ads", "youtube"].includes(channel),
    ).length;
    const organicChannels = (input.channels || []).filter((channel) =>
      ["naver-blog", "community", "instagram", "shorts"].includes(channel),
    ).length;
    const conversionGoal = ["conversion", "lead", "reservation", "install"].includes(input.goal);
    const retentionGoal = ["retention", "reactivation", "upsell"].includes(input.goal);
    const awarenessGoal = ["awareness", "launch", "community"].includes(input.goal);

    const marketFit = clampScore(
      34 +
        (hasIndustry ? 18 : 0) +
        (hasGoal ? 15 : 0) +
        (hasProblem ? 17 : 0) +
        (hasOffer ? 8 : 0) +
        (awarenessGoal && organicChannels ? 8 : 0),
    );
    const targetFit = clampScore(
      30 +
        (hasTarget ? 30 : 0) +
        (hasProblem ? 12 : 0) +
        (hasChannel ? 10 : 0) +
        (focusedChannel ? 8 : 0) -
        (tooManyChannels ? 14 : 0),
    );
    const messageClarity = clampScore(
      28 +
        (hasProblem ? 20 : 0) +
        (hasOffer ? 18 : 0) +
        (hasGoal ? 10 : 0) +
        (String(input.problemText || "").includes("전환") || String(input.offerText || "").includes("무료") ? 5 : 0),
    );
    const conversionPotential = clampScore(
      32 +
        (conversionGoal ? 16 : 8) +
        (hasChannel ? 12 : 0) +
        (hasOffer ? 13 : 0) +
        (paidChannels && hasBudget ? 8 : 0) +
        ((input.channels || []).includes("landing") ? 9 : 0),
    );
    const budgetEfficiency = clampScore(
      42 +
        (hasBudget ? 15 : 0) +
        (lowBudget && focusedChannel ? 18 : 0) +
        (lowBudget && organicChannels ? 10 : 0) +
        (highBudget && channelCount >= 2 ? 10 : 0) -
        (tooManyChannels ? 18 : 0) -
        (!hasBudget ? 8 : 0),
    );
    const executionDifficulty = clampScore(
      82 -
        channelCount * 6 -
        (tooManyChannels ? 12 : 0) +
        (hasTarget ? 6 : 0) +
        (hasProblem ? 5 : 0) +
        (retentionGoal && (input.channels || []).some((channel) => ["email", "kakao"].includes(channel)) ? 8 : 0),
    );
    const totalScore = clampScore(
      marketFit * 0.16 +
        targetFit * 0.18 +
        messageClarity * 0.18 +
        conversionPotential * 0.19 +
        budgetEfficiency * 0.14 +
        executionDifficulty * 0.15,
    );
    const missingCount = [hasGoal, hasIndustry, hasTarget, hasBudget, hasChannel, hasProblem, hasOffer]
      .filter(Boolean).length;
    const inputCompleteness = clampScore((missingCount / 7) * 88 + Math.min(channelCount, 3) * 4);
    const improvementPriority = clampScore(100 - totalScore + (inputCompleteness < 55 ? 14 : 0));

    const missingInputs = [];
    if (!hasTarget) missingInputs.push("타깃 정보가 부족해 타깃 적합도는 일반 기준으로 산정했습니다.");
    if (!hasBudget) missingInputs.push("예산 정보가 없어 채널 우선순위와 예산 효율성 판단을 보수적으로 계산했습니다.");
    if (!hasChannel) missingInputs.push("채널 정보가 없어 실행 전략은 기본 채널 패턴 중심으로 제안했습니다.");
    if (!hasProblem) missingInputs.push("현재 문제가 구체적이지 않아 메시지 명확도 판단에 제한이 있습니다.");
    if (!hasOffer) missingInputs.push("제품/서비스의 핵심 제안이 부족해 바로 사용할 카피는 범용 템플릿 위주로 구성했습니다.");
    if (tooManyChannels) missingInputs.push("낮은 예산 대비 선택 채널이 많아 실행 난이도와 예산 효율성이 낮게 계산됐습니다.");

    return {
      totalScore,
      inputCompleteness,
      confidenceLevel: confidenceFromCompleteness(inputCompleteness),
      scores: {
        marketFit,
        targetFit,
        messageClarity,
        conversionPotential,
        budgetEfficiency,
        executionDifficulty,
        improvementPriority,
      },
      missingInputs,
    };
  }

  function scoreConversation(input) {
    const words = input.wordCount ?? countWords(input.answerText);
    const connectors = input.connectorsCount || 0;
    const naturalMarkers = input.naturalMarkersCount || 0;
    const targetUsed = Boolean(input.targetUsed);
    const hasQuestion = /\?\s*$/.test(input.answerText || "");
    const hasReason = includesAny(input.answerText, ["because", "so", "that's why", "the reason"]);
    const hasExample = includesAny(input.answerText, ["for example", "last", "yesterday", "weekend", "when i"]);
    const isTooShort = words < 7;
    const isRightLength = words >= 10 && words <= 42;

    const marketFit = clampScore(48 + (isRightLength ? 18 : 6) + (hasReason ? 12 : 0) + (hasQuestion ? 8 : 0) + connectors * 4);
    const targetFit = clampScore(targetUsed ? 82 + Math.min(naturalMarkers, 3) * 4 : 46 + naturalMarkers * 5);
    const messageClarity = clampScore(40 + Math.min(words, 26) * 1.5 + connectors * 6 + (hasReason ? 10 : 0));
    const conversionPotential = clampScore((input.baseScore || 45) + (hasQuestion ? 8 : 0) + (hasExample ? 6 : 0));
    const budgetEfficiency = clampScore(78 + Math.min(words, 18) * 0.5 + (targetUsed ? 7 : 0));
    const executionDifficulty = clampScore(84 - (isTooShort ? 22 : 0) - (!targetUsed ? 13 : 0) - (connectors < 1 ? 11 : 0));
    const totalScore = clampScore(
      marketFit * 0.16 +
        targetFit * 0.18 +
        messageClarity * 0.2 +
        conversionPotential * 0.18 +
        budgetEfficiency * 0.12 +
        executionDifficulty * 0.16,
    );
    const improvementPriority = clampScore(100 - totalScore + (isTooShort ? 14 : 0) + (!targetUsed ? 9 : 0));
    const inputCompleteness = clampScore(26 + Math.min(words, 28) * 1.7 + connectors * 9 + (targetUsed ? 14 : 0) + (hasReason ? 9 : 0));

    const missingInputs = [];
    if (isTooShort) missingInputs.push("답변 길이가 짧아 세부 판단은 일반 기준으로 산정했습니다.");
    if (!targetUsed) missingInputs.push("목표 표현 사용 여부가 낮아 목표 적합도 판단이 보수적으로 계산됐습니다.");
    if (connectors < 1) missingInputs.push("연결어가 부족해 흐름 평가는 제한적으로 반영했습니다.");

    return {
      totalScore,
      inputCompleteness,
      confidenceLevel: confidenceFromCompleteness(inputCompleteness),
      scores: {
        marketFit,
        targetFit,
        messageClarity,
        conversionPotential,
        budgetEfficiency,
        executionDifficulty,
        improvementPriority,
      },
      missingInputs,
    };
  }

  function scoreOpic(input) {
    const answeredRatio = input.questionCount ? (input.answeredCount || 0) / input.questionCount : 0;
    const targetWords = input.targetWords || 60;
    const wordRatio = Math.min((input.averageWords || 0) / targetWords, 1);
    const connectorRatio = Math.min((input.averageConnectors || 0) / (input.connectorMinimum || 2), 1);
    const detailRatio = Math.min((input.averageDetails || 0) / (input.detailMinimum || 2), 1);
    const metrics = input.metrics || {};

    const marketFit = clampScore((metrics.task || input.average || 0) * 0.72 + answeredRatio * 28);
    const targetFit = clampScore((input.average || 0) * 0.55 + wordRatio * 22 + connectorRatio * 14 + detailRatio * 9);
    const messageClarity = clampScore((metrics.structure || 0) * 0.52 + (metrics.detail || 0) * 0.28 + connectorRatio * 20);
    const conversionPotential = clampScore((metrics.naturalness || 0) * 0.45 + (input.average || 0) * 0.35 + answeredRatio * 20);
    const budgetEfficiency = clampScore(66 + answeredRatio * 19 + Math.min(input.answeredCount || 0, 12));
    const executionDifficulty = clampScore(88 - Math.max(0, targetWords - (input.averageWords || 0)) * 0.35 - Math.max(0, (input.connectorMinimum || 2) - (input.averageConnectors || 0)) * 8);
    const totalScore = clampScore(
      marketFit * 0.18 +
        targetFit * 0.19 +
        messageClarity * 0.2 +
        conversionPotential * 0.17 +
        budgetEfficiency * 0.1 +
        executionDifficulty * 0.16,
    );
    const improvementPriority = clampScore(100 - totalScore + (answeredRatio < 0.7 ? 18 : 0));
    const inputCompleteness = clampScore(answeredRatio * 44 + wordRatio * 22 + connectorRatio * 16 + detailRatio * 12 + (input.topicCount || 0) * 2);

    const missingInputs = [];
    if (answeredRatio < 0.8) missingInputs.push("응답한 문항 수가 적어 종합 결과는 일부 답변 기준으로 산정했습니다.");
    if ((input.averageWords || 0) < targetWords) missingInputs.push("평균 답변 길이가 목표 단어 수보다 짧아 목표 적합도 판단이 보수적으로 계산됐습니다.");
    if ((input.averageConnectors || 0) < (input.connectorMinimum || 2)) missingInputs.push("연결어 사용이 부족해 구조 점수의 개선 여지가 크게 잡혔습니다.");
    if ((input.averageDetails || 0) < (input.detailMinimum || 2)) missingInputs.push("구체 단서가 부족해 세부 묘사 평가는 일반 기준을 함께 적용했습니다.");

    return {
      totalScore,
      inputCompleteness,
      confidenceLevel: confidenceFromCompleteness(inputCompleteness),
      scores: {
        marketFit,
        targetFit,
        messageClarity,
        conversionPotential,
        budgetEfficiency,
        executionDifficulty,
        improvementPriority,
      },
      missingInputs,
    };
  }

  function score(input) {
    const normalizedInput = input || {};
    const scored = normalizedInput.mode === "marketing"
      ? scoreMarketing(normalizedInput)
      : normalizedInput.mode === "opic"
        ? scoreOpic(normalizedInput)
        : scoreConversation(normalizedInput);

    return {
      ...scored,
      tags: inferTags(normalizedInput),
      scoreLabels,
    };
  }

  window.FiveishScoringEngine = {
    score,
    scoreLabels,
    clampScore,
    confidenceFromCompleteness,
  };
})();
