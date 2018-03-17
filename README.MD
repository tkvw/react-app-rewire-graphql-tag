# react-app-rewire-graphql-tag

## Usage:

Make sure you have installed [react-app-rewire](https://github.com/timarney/react-app-rewired),
(and you may need `graphql-tag`)

```
yarn add react-app-rewire-graphql-tag graphql-tag
```

in config-overrides.js:

```javascript
const rewireGqlTag = require("react-app-rewire-graphql-tag");

module.exports = function override(config, env) {
  conf = rewireGqlTag(config, env);
  return conf;
};
```
