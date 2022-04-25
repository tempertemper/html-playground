module.exports = function(eleventyConfig) {

  /* List tags belonging to a page */
  eleventyConfig.addFilter("tagsOnPage", tags => {
    const notRendered = ['all'];
    return tags
      .filter(d => !notRendered.includes(d))
      .sort();
  });

  eleventyConfig.setBrowserSyncConfig({
    port: 3000,
    watch: true,
    server: {
      baseDir: "./dist/",
      serveStaticOptions: {
        extensions: ["html"]
      }
    },
    open: false,
    notify: false
  });
  return {
    templateFormats : ["njk", "html", "md", "txt"],
    dir: {
      input: "src/site",
      output: "dist",
      includes: "_includes",
      layouts: "_layouts"
    },
    htmlTemplateEngine : "njk",
    markdownTemplateEngine : "njk"
  };
};
