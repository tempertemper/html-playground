export default function(config) {

  // Generate assets
  config.addPassthroughCopy({ "src/css": "assets/css" })

  // List tags belonging to a page
  config.addFilter("tagsOnPage", tags => {
    const notRendered = ["all"]
    return tags
      .filter(d => !notRendered.includes(d))
      .sort()
  })

  // Localhost server config
  config.setServerOptions({
    port: 3000
  })

  return {
    dir: {
      input: "src/site",
      output: "dist",
      includes: "_includes",
      layouts: "_layouts"
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  }
}
