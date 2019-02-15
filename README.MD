# react-app-rewire-graphql-tag

import .gql or .graphql files to create-react-app application with react-app-rewired

## Usage:

Make sure you have installed [react-app-rewire](https://github.com/timarney/react-app-rewired),

```
yarn add react-app-rewire-graphql-tag
```

in config-overrides.js:

```
const rewireGqlTag = require('react-app-rewire-graphql-tag');

module.exports = function override(config, env) {
    conf = rewireGqlTag(config,env);
    return conf;
}
```

in your component

```
import MY_GQL_QUERY_OR_MUTATION from "./PATH/TO/GraphQL/FILE.gql";

```
