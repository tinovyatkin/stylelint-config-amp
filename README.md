# stylelint-config-amp

[![NPM version](http://img.shields.io/npm/v/stylelint-config-amp.svg)](https://www.npmjs.org/package/stylelint-config-amp) [![Build Status](https://travis-ci.org/tinovyatkin/stylelint-config-amp.svg?branch=master)](https://travis-ci.org/tinovyatkin/stylelint-config-amp)

> The stylelint config to enforce CSS requirements of Accelerated Mobile Pages

<img src="https://status.ampproject.org/static/img/logo-blue.svg" style="float: left; margin-right: 20px" />

AMP CSS requirements: <https://amp.dev/documentation/guides-and-tutorials/develop/style_and_layout/style_pages/>

<hr/>


This is stylelint config you may use either in authoring CSS for Accelerated Mobile Pages or for lint against requirements from [Supported CSS for AMP](https://www.ampproject.org/docs/guides/responsive/style_pages) and [AMP HTML Specification](https://amp.dev/documentation/guides-and-tutorials/learn/spec/amphtml/?format=websites#@-rules).
All allowed CSS code on that page must be inlined at single `<style amp-custom>` tag at a document `<head>`,
so, you may use this config either from building tools during linting before inlining the CSS task or if your IDE support `stylelint` linting for inline rules.  

Enforces all requirements that can be checked using current `stylelint` rules, including tag and classes names blacklist.

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
Lint from a build script:

```javascript
const config = require("stylelint-config-amp")
const { readFileSync } = require("fs")
const stylelint = require("stylelint")

function lint(filename, warningsCount) {
  return stylelint.lint({
    code: readFileSync(filename), "utf8"),
    config,
  })
  .then(result => {
    const { results:  [{ warnings }] } = result
    expect(warnings.length).toBe(warningsCount)
  })
}
```

Lint task for `npm` / `yarn` `package.json`:

```json
"scripts": {
  "lint:amp-css": "stylelint --config=stylelint-config-amp src/stylesheets/amp/*.css"
},
"devDependencies": {
  "stylelint": "^10.0.0",
  "stylelint-config-amp": "^2.0.0"
}
  ```

### Limitations

`stylelint` at the moment has no rules to check allowed declarations within `@keyframes` and I'm planing to submit pull request for such rule(s).
We also don't check for maximum CSS size, nor for pseudo selectors used without tag names (it's prohibited at AMP) - I'm planing to submit such rules pull request to `stylelint` too.

