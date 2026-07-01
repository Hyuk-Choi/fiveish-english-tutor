(function () {
  function hashSeed(value) {
    return String(value || "")
      .split("")
      .reduce((seed, character) => ((seed << 5) - seed + character.charCodeAt(0)) | 0, 5381);
  }

  function seededRandom(seed) {
    let value = seed >>> 0;
    return () => {
      value += 0x6d2b79f5;
      let result = value;
      result = Math.imul(result ^ (result >>> 15), result | 1);
      result ^= result + Math.imul(result ^ (result >>> 7), result | 61);
      return ((result ^ (result >>> 14)) >>> 0) / 4294967296;
    };
  }

  function pick(items, seed, offset = 0) {
    if (!items?.length) return "";
    const random = seededRandom(hashSeed(`${seed}:${offset}`));
    return items[Math.floor(random() * items.length)];
  }

  function scoreByTags(item, tags) {
    const tagSet = new Set(tags || []);
    return (item.tags || []).reduce((score, tag) => score + (tagSet.has(tag) ? 2 : 0), 0);
  }

  function selectRelevant(items, tags, count, seed) {
    const random = seededRandom(hashSeed(`${seed}:select:${count}`));
    return [...(items || [])]
      .map((item) => ({
        item,
        score: scoreByTags(item, tags) + random() * 0.4,
      }))
      .sort((a, b) => b.score - a.score)
      .slice(0, count)
      .map(({ item }) => item);
  }

  function uniqueByCopy(items, key = "copy") {
    const seen = new Set();
    return (items || []).filter((item) => {
      const value = item?.[key] || item;
      if (seen.has(value)) return false;
      seen.add(value);
      return true;
    });
  }

  function scoreBand(score) {
    if (score >= 80) return "high";
    if (score >= 55) return "middle";
    return "low";
  }

  window.FiveishTextVariation = {
    hashSeed,
    pick,
    scoreByTags,
    selectRelevant,
    uniqueByCopy,
    scoreBand,
  };
})();
