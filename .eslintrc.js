const { getBaseConfig } = require('@edx/frontend-build');
const config = getBaseConfig('eslint');

Object.assign(config, {
  "extends": "google",
  "rules": {
    "indent": [
      2,
      4,
      {
        "SwitchCase": 1
      }
    ],
    "max-len": [
      2,
      120
    ],
    "one-var": 0,
    "camelcase": [
      2,
      {
        "properties": "always"
      }
    ],
    "brace-style": [
      2,
      "1tbs",
      {
        "allowSingleLine": true
      }
    ],
    "no-var": "off",
    "valid-jsdoc": "off",
    "require-jsdoc": "off",
    "camelcase": ["error", { "properties": "never" }],
    "prefer-rest-params": "off",
    "no-invalid-this": "off",
  }
});

console.log(config);

module.exports = config;
