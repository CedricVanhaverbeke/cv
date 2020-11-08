exports.createPages = ({ actions }) => {
  const { createRedirect } = actions;

  createRedirect({
    fromPath: `/*`,
    toPath: `/`,
    redirectInBrowser: true,
    isPermanent: true,
  });
};
