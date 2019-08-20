'use strict';

module.exports = {
  rules: {
    'declaration-no-important': true,
    'keyframe-declaration-no-important': true,
    'selector-max-type': [0, { ignoreTypes: '/^((?!^i-amp-).)*$/' }],
    'selector-class-pattern': '^((?!^-amp-).)*$',
    'selector-id-pattern': '^((?!^-amp-).)*$',
    'property-blacklist': ['behavior', '-moz-binding', 'filter'],
    'declaration-property-value-whitelist': {
      transition: ['/opacity/', '/transform/']
    },
    'at-rule-whitelist': [
      '@font-face',
      '@keyframes',
      '@media',
      '@page',
      '@supports'
    ]
  }
};
