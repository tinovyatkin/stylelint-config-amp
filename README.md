# stylelint-config-amp

[![NPM version](http://img.shields.io/npm/v/stylelint-config-amp.svg)](https://www.npmjs.org/package/stylelint-config-amp) [![Build Status](https://travis-ci.org/tinovyatkin/stylelint-config-amp.svg?branch=master)](https://travis-ci.org/stylelint/stylelint-config-amp) [![Build status](https://ci.appveyor.com/api/projects/status/o8rfhyax6n7bjnlt/branch/master?svg=true)](https://ci.appveyor.com/project/stylelint/stylelint-config-standard/branch/master)

> The stylelint config to enforce CSS requirements of Accelerated Mobile Pages ![amp-logo](https://www.ampproject.org/static/img/logo-blue.svg).

This is stylelint config you may use either in authoring CSS for Accelerated Mobile Pages or for lint against requirements from [Supported CSS for AMP](https://www.ampproject.org/docs/guides/responsive/style_pages)

Enforces all requirements that can be enforce using current stylelint rules, including tag and classes names blacklist.

_Note: the config is tested against AMP project homepage CSS that at the moment appears to violate it's own rules._

## Installation

```bash
npm install stylelint-config-amp --save-dev
```

## Usage

If you've installed `stylelint-config-amp` locally within your project, just set your `stylelint` config to:

```json
{
  "extends": "stylelint-config-amp"
}
```

If you've globally installed `stylelint-config-amp` using the `-g` flag, then you'll need to use the absolute path to `stylelint-config-amp` in your config e.g.

```json
{
  "extends": "/absolute/path/to/stylelint-config-amp"
}
```

### Limitations

styleling at the moment have to rules to check allowed declarations within `@keyframes` and I planing to submit pull request for such rule.
We also don't check for maximum CSS size, nor for pseudo selectors used without tag names (it's prohibited at AMP) - I'm planing to submit such rules pull request to styleling however.


## [Changelog](CHANGELOG.md)

## [License](LICENSE)
