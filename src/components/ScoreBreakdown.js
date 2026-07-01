(function () {
  function escapeHtml(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function renderScoreBreakdown(result, options = {}) {
    const compact = Boolean(options.compact);
    const entries = Object.entries(result.scores || {});
    const visibleEntries = compact ? entries.filter(([key]) => key !== "improvementPriority").slice(0, 4) : entries;
    return `
      <div class="analysis-score-breakdown ${compact ? "compact" : ""}">
        ${visibleEntries
          .map(
            ([key, value]) => `
              <div class="analysis-score-row">
                <span>${escapeHtml(result.scoreLabels?.[key] || key)}</span>
                <strong>${Number(value)}</strong>
                <i><em style="width:${Number(value)}%"></em></i>
              </div>
            `,
          )
          .join("")}
      </div>
    `;
  }

  window.FiveishAnalysisComponents = {
    ...(window.FiveishAnalysisComponents || {}),
    escapeHtml,
    renderScoreBreakdown,
  };
})();
