const gqlExtension = /\.(graphql|gql)$/;

const flatten = array =>
  array.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []);

function rewireGraphQLTag(config, env) {
  const fileLoader = flatten(
    config.module.rules.map(rule => rule.oneOf || rule)
  ).find(rule => rule.loader && rule.loader.indexOf("file-loader") !== -1);

  if (fileLoader) {
    if (!fileLoader.exclude) {
      fileLoader.exclude = [gqlExtension];
    } else {
      fileLoader.exclude.push(gqlExtension);
    }
  }

  const gqlTagRule = {
    test: gqlExtension,
    loader: "graphql-tag/loader",
    exclude: /node_modules/
  };
  config.module.rules.push(gqlTagRule);

  return config;
}

module.exports = rewireGraphQLTag;
