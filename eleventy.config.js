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

  // Order items if they have the 'order' front matter key
  config.addFilter("ordered", (items, key = "order", desc = false) => {
    if (!Array.isArray(items)) return [];
    const getOrderValue = (item) => {
      const orderValue = item?.data?.[key];
      return orderValue === undefined ? Number.POSITIVE_INFINITY : orderValue;
    };
    return [...items].sort((a, b) => {
      const aOrder = getOrderValue(a);
      const bOrder = getOrderValue(b);
      if (aOrder === bOrder) {
        const aTitle = a?.data?.title || a.fileSlug || "";
        const bTitle = b?.data?.title || b.fileSlug || "";
        return aTitle.localeCompare(bTitle);
      }
      return desc ? bOrder - aOrder : aOrder - bOrder;
    });
  });


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
