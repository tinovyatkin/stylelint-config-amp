'use strict';

module.exports = {
  "rules": {
    "declaration-no-important": true,
    "keyframe-declaration-no-important": true,
    "selector-max-universal": 0,
    "selector-pseudo-class-blacklist": "not",
    "selector-max-type": [ 0, { ignoreTypes: "/^((?!^i-amp-).)*$/" } ],
    "selector-class-pattern": "^((?!^-amp-).)*$",
    "property-blacklist": [ "behavior", "-moz-binding", "filter" ],
    "declaration-property-value-whitelist": {
      "transition": [ "/opacity/", "/transform/" ],
    },
  },
}
