(function () {
  function getEscape() {
    return window.FiveishAnalysisComponents?.escapeHtml || ((value) => String(value ?? ""));
  }

  function renderActionPlan(actions) {
    const escapeHtml = getEscape();
    return `
      <section class="analysis-action-plan">
        <div class="analysis-section-title">
          <span class="section-kicker">PRIORITY ACTION PLAN</span>
          <h3>우선순위 액션 플랜</h3>
        </div>
        <div class="analysis-action-grid">
          ${(actions || [])
            .map(
              (item, index) => `
                <article>
                  <span class="priority-badge ${escapeHtml(item.priority)}">${escapeHtml(item.priority)}</span>
                  <strong>${String(index + 1).padStart(2, "0")}. ${escapeHtml(item.action)}</strong>
                  <p>${escapeHtml(item.reason)}</p>
                </article>
              `,
            )
            .join("")}
        </div>
      </section>
    `;
  }

  window.FiveishAnalysisComponents = {
    ...(window.FiveishAnalysisComponents || {}),
    renderActionPlan,
  };
})();
