module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "static/uploads": "uploads" });
  eleventyConfig.addPassthroughCopy({ "admin": "admin" });
  eleventyConfig.addFilter("dateReadable", date => {
    const d = new Date(date);
    return d.toLocaleDateString("en", { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" });
  });
  eleventyConfig.addFilter("dateIso", date => new Date(date).toISOString());
  eleventyConfig.addFilter("dateYear", value => new Date().getFullYear());
  eleventyConfig.addFilter("readingTime", content => {
    const words = String(content || "").replace(/<[^>]*>/g, " ").trim().split(/\s+/).filter(Boolean).length;
    return `${Math.max(1, Math.ceil(words / 220))} min read`;
  });
  eleventyConfig.addCollection("post", api => {
    return api.getFilteredByGlob("src/posts/*.md")
      .filter(item => !item.data.draft && new Date(item.date) <= new Date())
      .sort((a, b) => b.date - a.date);
  });
  return {
    dir: { input: "src", includes: "_includes", output: "_site" },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
