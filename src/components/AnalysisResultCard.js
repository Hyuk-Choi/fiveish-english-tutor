(function () {
  function component(name) {
    return window.FiveishAnalysisComponents?.[name];
  }

  function escapeHtml(value) {
    const escape = component("escapeHtml");
    return escape ? escape(value) : String(value ?? "");
  }

  function renderMetricPill(label, value, detail) {
    return `
      <div class="analysis-metric-pill">
        <small>${escapeHtml(label)}</small>
        <strong>${escapeHtml(value)}</strong>
        ${detail ? `<span>${escapeHtml(detail)}</span>` : ""}
      </div>
    `;
  }

  function renderBenchmark(benchmark) {
    if (!benchmark?.label) return "";
    const items = [
      benchmark.wordRange ? `단어 ${benchmark.wordRange}` : "",
      benchmark.connectorRange ? `연결어 ${benchmark.connectorRange}` : "",
      benchmark.detailRange ? benchmark.detailRange : "",
      benchmark.targetSignal ? benchmark.targetSignal : "",
      benchmark.expectedRange ? `예상 범위 ${benchmark.expectedRange}` : "",
    ].filter(Boolean);
    return `
      <section class="analysis-benchmark">
        <span class="section-kicker">REFERENCE BENCHMARK</span>
        <h3>${escapeHtml(benchmark.label)}</h3>
        <p>${escapeHtml(benchmark.note || "내부 기준값")}</p>
        <div>
          ${items.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
        </div>
      </section>
    `;
  }

  function renderCopyList(title, items, icon) {
    return `
      <section class="analysis-copy-block">
        <div class="analysis-list-heading">
          <span><i data-lucide="${escapeHtml(icon)}"></i></span>
          <h3>${escapeHtml(title)}</h3>
        </div>
        <div class="analysis-copy-list">
          ${(items || []).map((item) => `<p>${escapeHtml(item)}</p>`).join("")}
        </div>
      </section>
    `;
  }

  function renderCompactResult(result) {
    const scoreBreakdown = component("renderScoreBreakdown");
    return `
      <article class="analysis-compact-card">
        <div class="analysis-compact-top">
          <span class="analysis-badge">입력값 기반 자동 분석</span>
          <strong>${Number(result.totalScore)}</strong>
        </div>
        <h3>${escapeHtml(result.summary)}</h3>
        <p>${escapeHtml(result.keyInsights?.[0] || result.reasoningSummary)}</p>
        ${scoreBreakdown ? scoreBreakdown(result, { compact: true }) : ""}
        <div class="analysis-compact-bottom">
          <span>신뢰도 ${escapeHtml(result.confidenceLevel)}</span>
          <span>입력 완성도 ${Number(result.inputCompleteness)}%</span>
        </div>
      </article>
    `;
  }

  function renderResultCard(result, options = {}) {
    const idPrefix = options.idPrefix || "analysis";
    const scoreBreakdown = component("renderScoreBreakdown");
    const insightList = component("renderInsightList");
    const actionPlan = component("renderActionPlan");
    return `
      <article class="analysis-result-card" data-analysis-result>
        <div class="analysis-result-hero">
          <div class="analysis-score-orb">
            <strong>${Number(result.totalScore)}</strong>
            <small>종합 점수</small>
          </div>
          <div>
            <span class="analysis-badge">AI 분석형 결과 · 로컬 시뮬레이션</span>
            <span class="analysis-step-label">핵심 진단 한 줄</span>
            <h2>${escapeHtml(result.summary)}</h2>
            <p>${escapeHtml(result.reasoningSummary)}</p>
          </div>
        </div>

        <div class="analysis-metric-grid">
          ${renderMetricPill("신뢰도", result.confidenceLevel, "입력값 충분성 기준")}
          ${renderMetricPill("입력 완성도", `${Number(result.inputCompleteness)}%`, "부족 정보 반영")}
          ${renderMetricPill("분석 방식", "로컬 규칙 기반", "외부 API 호출 없음")}
          ${renderMetricPill("결과 용도", "학습 참고", "공식 평가 아님")}
        </div>

        <div class="analysis-section-title score-title">
          <span class="section-kicker">SCORE BREAKDOWN</span>
          <h3>항목별 점수</h3>
        </div>
        ${scoreBreakdown ? scoreBreakdown(result) : ""}
        ${renderBenchmark(result.benchmarkRange)}

        <div class="analysis-grid-block">
          ${insightList ? insightList("주요 인사이트", result.keyInsights, { icon: "sparkles" }) : ""}
          ${insightList ? insightList("발견된 문제점", result.problems, { icon: "triangle-alert", tone: "warning" }) : ""}
          ${insightList ? insightList("개선 전략", result.recommendations, { icon: "route", tone: "success" }) : ""}
        </div>

        ${actionPlan ? actionPlan(result.priorityActions) : ""}

        <div class="analysis-two-column">
          ${renderCopyList("바로 사용할 수 있는 문장", result.generatedCopy, "message-square-text")}
          ${renderCopyList("다음 테스트 제안", result.nextTestIdeas, "flask-conical")}
        </div>

        <section class="analysis-caution">
          <span><i data-lucide="shield-check"></i></span>
          <div>
            <strong>주의사항</strong>
            <p>${escapeHtml(result.caution)}</p>
          </div>
        </section>

        <div class="analysis-export-row">
          <button class="secondary-button" id="${escapeHtml(idPrefix)}-copy">
            <i data-lucide="copy"></i>결과 복사
          </button>
          <button class="secondary-button" id="${escapeHtml(idPrefix)}-download">
            <i data-lucide="download"></i>텍스트 저장
          </button>
          <button class="secondary-button" id="${escapeHtml(idPrefix)}-print">
            <i data-lucide="printer"></i>PDF 저장
          </button>
          <button class="primary-button" id="${escapeHtml(idPrefix)}-regenerate">
            <i data-lucide="refresh-cw"></i>다른 버전 보기
          </button>
        </div>
      </article>
    `;
  }

  window.FiveishAnalysisComponents = {
    ...(window.FiveishAnalysisComponents || {}),
    renderCompactResult,
    renderResultCard,
  };
})();
