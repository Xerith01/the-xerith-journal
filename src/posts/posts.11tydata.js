module.exports = {
  layout: "post.njk",
  tags: ["post"],
  permalink: data => `/journal/${data.slug || data.page.fileSlug}/index.html`
};
