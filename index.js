module.exports = {
  "rules": {
    "declaration-no-important": true,
    "selector-no-universal": true,
    "selector-pseudo-class-blacklist": "not",
    "selector-no-type": [ true, { ignoreTypes: /^((?!^i-amp-).)*$/gm } ],
    // "selector-class-pattern": /^((?!^-amp-).)*$/gm,
    "property-blacklist": [ "behavior", "-moz-binding", "filter" ],
    "declaration-property-value-whitelist": {
      "transition": [ "/opacity/", "/transform/" ],
    },
  },
}
