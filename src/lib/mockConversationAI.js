(function () {
  const scenarioTags = {
    smalltalk: ["conversation", "smalltalk", "followup", "naturalness"],
    cafe: ["conversation", "cafe", "request", "polite"],
    travel: ["conversation", "travel", "problem", "solution"],
    work: ["conversation", "work", "business", "structure", "polite"],
  };

  const topicLexicon = {
    smalltalk: [
      ["weekend", "weekends"],
      ["hobby", "hobbies"],
      ["movie", "movies", "film"],
      ["music", "song", "songs"],
      ["cafe", "coffee"],
      ["reading", "book", "books"],
      ["exercise", "gym", "workout"],
      ["travel", "trip"],
      ["work", "office"],
      ["quiet time", "quiet"],
    ],
    cafe: [
      ["coffee", "latte", "americano", "espresso"],
      ["oat milk", "milk"],
      ["iced", "ice"],
      ["hot"],
      ["size", "medium", "large"],
      ["pastry", "sandwich", "cake"],
      ["decaf"],
      ["recommendation", "recommend"],
    ],
    travel: [
      ["hotel", "room", "front desk"],
      ["booking", "reservation"],
      ["key", "room key", "card"],
      ["luggage", "bag"],
      ["flight", "airport"],
      ["taxi", "cab"],
      ["check-in", "check in"],
      ["delay", "late"],
    ],
    work: [
      ["deadline"],
      ["client"],
      ["timeline", "schedule"],
      ["budget"],
      ["scope"],
      ["meeting"],
      ["draft", "summary"],
      ["priority", "prioritize"],
      ["delay"],
    ],
  };

  const intentLabels = {
    ask: "질문/확인 요청",
    request: "요청",
    problem: "문제 설명",
    preference: "취향/선호 공유",
    decision: "결정/제안",
    explain: "설명 확장",
  };

  function countWords(value) {
    return (String(value || "").match(/[A-Za-z]+(?:['’-][A-Za-z]+)*/g) || []).length;
  }

  function clampScore(value) {
    return Math.max(0, Math.min(100, Math.round(value)));
  }

  function splitSentences(value) {
    return String(value || "")
      .split(/(?<=[.!?])\s+|\n+/)
      .map((sentence) => sentence.trim())
      .filter(Boolean);
  }

  function shorten(value, limit = 78) {
    const normalized = String(value || "").replace(/\s+/g, " ").trim();
    if (normalized.length <= limit) return normalized;
    return `${normalized.slice(0, limit - 1).trim()}...`;
  }

  function cleanClause(value) {
    return shorten(
      String(value || "")
        .replace(/\b(?:because|so|but|when|if|and then)\b[\s\S]*$/i, "")
        .replace(/[.!?]+$/g, "")
        .replace(/^(?:to|that|for)\s+/i, "")
        .trim(),
      64,
    );
  }

  function addUnique(list, value, limit = 5) {
    const cleaned = shorten(String(value || "").trim(), 78);
    if (!cleaned) return;
    const exists = list.some((item) => item.toLowerCase() === cleaned.toLowerCase());
    if (!exists) list.unshift(cleaned);
    if (list.length > limit) list.length = limit;
  }

  function includesAny(value, patterns) {
    const lower = String(value || "").toLowerCase();
    return patterns.some((pattern) => lower.includes(pattern));
  }

  function escapeRegExp(value) {
    return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function keywordMatches(value, keyword) {
    const normalizedKeyword = String(keyword || "").trim().toLowerCase();
    if (!normalizedKeyword) return false;
    if (/^[a-z0-9\s']+$/.test(normalizedKeyword)) {
      const pattern = escapeRegExp(normalizedKeyword).replace(/\s+/g, "\\s+");
      return new RegExp(`\\b${pattern}\\b`).test(value);
    }
    return value.includes(normalizedKeyword);
  }

  function extractTopics(answer, scenarioId) {
    const lower = String(answer || "").toLowerCase();
    const lexicon = [
      ...(topicLexicon[scenarioId] || []),
      ...topicLexicon.smalltalk,
      ...topicLexicon.cafe,
      ...topicLexicon.travel,
      ...topicLexicon.work,
    ];
    const topics = [];
    lexicon.forEach((group) => {
      const hit = group.find((keyword) => keywordMatches(lower, keyword));
      if (hit && !topics.includes(group[0])) topics.push(group[0]);
    });
    return topics.slice(0, 4);
  }

  function extractFacts(answer, scenarioId) {
    const sentences = splitSentences(answer);
    const lower = String(answer || "").toLowerCase();
    const facts = {
      topics: extractTopics(answer, scenarioId),
      preferences: [],
      problems: [],
      requests: [],
      decisions: [],
    };

    const preferenceMatch = answer.match(
      /\b(?:i\s+(?:also\s+|really\s+)?(?:like|love|enjoy|prefer)|i'm into|i am into|i usually)\s+([^.!?]{2,90})/i,
    );
    if (preferenceMatch) addUnique(facts.preferences, cleanClause(preferenceMatch[1]), 3);

    sentences.forEach((sentence) => {
      if (/\b(problem|difficult|hard|delay|wrong|issue|can't|cannot|out of|missed|late|not working|broken|frustrating)\b/i.test(sentence)) {
        addUnique(facts.problems, sentence, 3);
      }
      if (
        /\?$/.test(sentence) ||
        /\b(could you|can you|would you|can i have|could i get)\b/i.test(sentence) ||
        /^\s*i\s+(?:need|want|would like|['’]d like)\s+(?:a|an|some|to|get|have|change|order|ask|know|help)\b/i.test(sentence)
      ) {
        addUnique(facts.requests, sentence, 3);
      }
      if (/\b(i think we should|we should|we need to|let's|i will|i'll|i decided|i recommend|i suggest)\b/i.test(sentence)) {
        addUnique(facts.decisions, sentence, 3);
      }
    });

    if (!facts.problems.length && includesAny(lower, ["the thing is", "given that"])) {
      addUnique(facts.problems, answer, 3);
    }

    return facts;
  }

  function inferIntent(answer, facts) {
    if (/\?\s*$/.test(answer)) return "ask";
    if (facts.requests.length) return "request";
    if (facts.problems.length) return "problem";
    if (facts.decisions.length) return "decision";
    if (facts.preferences.length) return "preference";
    return "explain";
  }

  function inferSentiment(answer) {
    const lower = String(answer || "").toLowerCase();
    if (/\b(love|great|amazing|fun|enjoy|excited|relaxed|happy|nice)\b/.test(lower)) return "positive";
    if (/\b(problem|difficult|hard|delay|wrong|issue|can't|cannot|frustrating|tired|worried)\b/.test(lower)) return "concerned";
    if (/\b(maybe|not sure|i think|kind of|sort of)\b/.test(lower)) return "uncertain";
    return "neutral";
  }

  function createSession(scenarioId = "smalltalk") {
    return {
      scenarioId,
      history: [],
      memory: {
        topics: [],
        preferences: [],
        problems: [],
        requests: [],
        decisions: [],
        summary: "",
      },
      turnCount: 0,
      lastResult: null,
    };
  }

  function resetSession(session, scenarioId = "smalltalk") {
    const fresh = createSession(scenarioId);
    Object.keys(session).forEach((key) => delete session[key]);
    Object.assign(session, fresh);
    return session;
  }

  function buildMemorySummary(memory) {
    const parts = [];
    if (memory.topics.length) parts.push(`주제: ${memory.topics.slice(0, 3).join(", ")}`);
    if (memory.preferences.length) parts.push(`선호: ${memory.preferences.slice(0, 2).join(" / ")}`);
    if (memory.problems.length) parts.push(`문제: ${memory.problems.slice(0, 2).map((item) => shorten(item, 44)).join(" / ")}`);
    if (memory.requests.length) parts.push(`요청: ${memory.requests.slice(0, 2).map((item) => shorten(item, 44)).join(" / ")}`);
    if (memory.decisions.length) parts.push(`결정: ${shorten(memory.decisions[0], 54)}`);
    return parts.join(" · ");
  }

  function updateMemory(session, facts) {
    facts.topics.forEach((topic) => addUnique(session.memory.topics, topic, 6));
    facts.preferences.forEach((item) => addUnique(session.memory.preferences, item, 4));
    facts.problems.forEach((item) => addUnique(session.memory.problems, item, 4));
    facts.requests.forEach((item) => addUnique(session.memory.requests, item, 4));
    facts.decisions.forEach((item) => addUnique(session.memory.decisions, item, 4));
    session.memory.summary = buildMemorySummary(session.memory);
  }

  function selectByTags(collection, tags, limit = 1) {
    const source = collection || [];
    return source
      .map((item) => ({
        item,
        score: (item.tags || []).filter((tag) => tags.includes(tag)).length,
      }))
      .filter((entry) => entry.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
      .map((entry) => entry.item);
  }

  function scoreTurn(answer, facts, previousMemory, scenarioId) {
    const words = countWords(answer);
    const lower = String(answer || "").toLowerCase();
    const connectorCount = ["because", "so", "but", "when", "if", "also", "after that"].filter((word) =>
      new RegExp(`\\b${word}\\b`).test(lower),
    ).length;
    const hasPreviousContext = Boolean(
      previousMemory.topics.length ||
        previousMemory.preferences.length ||
        previousMemory.problems.length ||
        previousMemory.requests.length ||
        previousMemory.decisions.length,
    );
    const topicOverlap = facts.topics.some((topic) =>
      previousMemory.topics.some((item) => item.toLowerCase() === topic.toLowerCase()),
    );
    const intentSignals =
      facts.preferences.length + facts.problems.length + facts.requests.length + facts.decisions.length;

    return {
      context: clampScore(44 + (hasPreviousContext ? 18 : 0) + (topicOverlap ? 18 : 0) + Math.min(intentSignals, 3) * 6),
      intent: clampScore(42 + Math.min(words, 20) * 2 + Math.min(intentSignals, 3) * 9),
      flow: clampScore(40 + Math.min(words, 24) * 2 + connectorCount * 8 + (/\?\s*$/.test(answer) ? 8 : 0)),
      scenario: clampScore(44 + (scenarioTags[scenarioId] || []).filter((tag) => lower.includes(tag)).length * 8 + Math.min(facts.topics.length, 3) * 7),
    };
  }

  function confidenceFor(answer, facts) {
    const words = countWords(answer);
    const signalCount =
      facts.topics.length +
      facts.preferences.length +
      facts.problems.length +
      facts.requests.length +
      facts.decisions.length;
    if (words >= 14 && signalCount >= 2) return "높음";
    if (words >= 7 || signalCount >= 1) return "보통";
    return "낮음";
  }

  function tagsFor(scenarioId, facts, intent) {
    const tags = new Set(["conversation", intent, ...(scenarioTags[scenarioId] || [])]);
    if (facts.problems.length) tags.add("problem").add("solution");
    if (facts.requests.length) tags.add("request").add("polite");
    if (facts.decisions.length) tags.add("followup").add("structure");
    if (facts.preferences.length) tags.add("smalltalk").add("detail");
    if (facts.topics.length) tags.add("detail");
    return [...tags];
  }

  function acknowledgmentFor(sentiment, intent) {
    if (intent === "ask") return "Good question.";
    if (sentiment === "positive") return "I can see why that matters to you.";
    if (sentiment === "concerned") return "I see. That sounds like something we should handle carefully.";
    if (sentiment === "uncertain") return "Yeah, I get what you mean.";
    if (intent === "request") return "Sure, that request is clear.";
    if (intent === "decision") return "That sounds like a practical direction.";
    return "That makes sense.";
  }

  function bridgeFromMemory(previousMemory, facts) {
    if (previousMemory.problems.length) {
      return `Earlier you mentioned ${shorten(previousMemory.problems[0], 56)}, so let's keep that context in mind.`;
    }
    if (previousMemory.preferences.length) {
      return `Earlier you mentioned ${shorten(previousMemory.preferences[0], 48)}, so this connects nicely.`;
    }
    if (previousMemory.requests.length) {
      return `Since you asked about ${shorten(previousMemory.requests[0], 48)}, let's make the next answer more specific.`;
    }
    const previousTopic = previousMemory.topics.find((topic) => facts.topics.includes(topic)) || previousMemory.topics[0];
    if (previousTopic) return `Let's keep the focus on ${previousTopic}.`;
    return "";
  }

  function mainTopic(memory, facts) {
    return facts.topics[0] || memory.topics[0] || "that";
  }

  function buildContextualPrompt({ scenario, scenarioId, facts, memory, previousMemory, turnIndex }) {
    if (scenarioId === "travel" && memory.problems.length) {
      const problem = shorten(memory.problems[0], 44);
      return `For ${problem}, would you prefer a quick fix, a replacement, or another option?`;
    }
    if (scenarioId === "work" && (memory.problems.length || memory.decisions.length)) {
      const focus = memory.problems[0] || memory.decisions[0] || memory.topics[0] || "this situation";
      return `Given ${shorten(focus, 48)}, what should we tell the client or team as the next step?`;
    }
    if (scenarioId === "cafe" && (memory.requests.length || memory.topics.length)) {
      const topic = mainTopic(memory, facts);
      return `For the ${topic}, would you like to keep it as is, or change the size, milk, or temperature?`;
    }
    if (scenarioId === "smalltalk" && (memory.preferences.length || facts.topics.length)) {
      if (previousMemory.preferences.length && facts.preferences.length) {
        return `How are ${shorten(previousMemory.preferences[0], 34)} and ${shorten(facts.preferences[0], 34)} connected for you?`;
      }
      const topic = mainTopic(memory, facts);
      return `When it comes to ${topic}, what do you like most about it, and how often do you do it?`;
    }
    const promptIndex = Math.min(turnIndex, scenario.prompts.length - 1);
    return scenario.prompts[promptIndex];
  }

  function buildCoaching({ tags, scores, confidence, facts }) {
    const kb = window.FiveishMockKnowledgeBase || {};
    const insight = selectByTags(kb.insights, tags, 1)[0];
    const recommendation = selectByTags(kb.recommendations, tags, 1)[0];
    const template = selectByTags(kb.templates, tags, 1)[0];
    const lowScore = Object.entries(scores).sort((a, b) => a[1] - b[1])[0];
    const headline =
      scores.context >= 75
        ? "이전 맥락을 잘 이어가고 있어요."
        : "답변은 이해되지만 앞 대화와의 연결 단서를 더 넣으면 좋아요.";

    return {
      headline,
      insight: insight?.copy || "입력값 기반 분석 결과입니다. 답변의 의도와 대화 흐름을 기준으로 다음 질문을 조정했습니다.",
      nextAction:
        recommendation?.copy ||
        "다음 답변에는 because로 이유를 붙이고 마지막에 짧은 후속 질문을 넣어보세요.",
      usableSentence:
        template?.copy ||
        (facts.problems.length
          ? "The thing is, [problem], so could you [solution]?"
          : "Not gonna lie, [opinion]. What about you?"),
      weakPoint: lowScore ? lowScore[0] : "context",
      confidence,
    };
  }

  function analyzeTurn({ session, scenario, scenarioId, answer, turnIndex = 0 }) {
    const activeSession = session || createSession(scenarioId);
    const previousMemory = JSON.parse(JSON.stringify(activeSession.memory));
    const facts = extractFacts(answer, scenarioId);
    const isShortContinuation = countWords(answer) <= 5;
    if (isShortContinuation && !facts.topics.length && previousMemory.topics.length) {
      facts.topics = previousMemory.topics.slice(0, 2);
    }
    const intent = inferIntent(answer, facts);
    const sentiment = inferSentiment(answer);
    const scores = scoreTurn(answer, facts, previousMemory, scenarioId);
    const confidence = confidenceFor(answer, facts);
    const tags = tagsFor(scenarioId, facts, intent);
    const coaching = buildCoaching({ tags, scores, confidence, facts });

    updateMemory(activeSession, facts);
    const bridge = bridgeFromMemory(previousMemory, facts);
    const reply = [
      acknowledgmentFor(sentiment, intent),
      bridge,
      buildContextualPrompt({ scenario, scenarioId, facts, memory: activeSession.memory, previousMemory, turnIndex }),
    ]
      .filter(Boolean)
      .join(" ")
      .replace(/\s+/g, " ")
      .trim();

    activeSession.turnCount += 1;
    activeSession.history.push({ role: "user", text: answer, facts, turnIndex });
    activeSession.history.push({ role: "tutor", text: reply, turnIndex });

    const result = {
      reply,
      facts,
      intent,
      intentLabel: intentLabels[intent] || "설명",
      sentiment,
      scores,
      confidence,
      tags,
      coaching,
      memorySummary: activeSession.memory.summary,
      hasPreviousContext: Boolean(bridge),
    };
    activeSession.lastResult = result;
    return result;
  }

  window.FiveishMockConversationAI = {
    createSession,
    resetSession,
    analyzeTurn,
    buildMemorySummary,
  };
})();
