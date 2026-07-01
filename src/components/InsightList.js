(function () {
  function getEscape() {
    return window.FiveishAnalysisComponents?.escapeHtml || ((value) => String(value ?? ""));
  }

  function renderInsightList(title, items, options = {}) {
    const escapeHtml = getEscape();
    const icon = options.icon || "sparkles";
    const tone = options.tone || "";
    return `
      <section class="analysis-list-block ${tone}">
        <div class="analysis-list-heading">
          <span><i data-lucide="${escapeHtml(icon)}"></i></span>
          <h3>${escapeHtml(title)}</h3>
        </div>
        <ol>
          ${(items || [])
            .map((item) => `<li>${escapeHtml(item)}</li>`)
            .join("")}
        </ol>
      </section>
    `;
  }

  window.FiveishAnalysisComponents = {
    ...(window.FiveishAnalysisComponents || {}),
    renderInsightList,
  };
})();
