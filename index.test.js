'use strict';

const config = require("./");
const stylelint = require("stylelint");
const { join } = require("path");
const { readFileSync } = require("fs");

async function lint(filename, warningsCount) {
  const result = await stylelint.lint({
    code: readFileSync(join(__dirname, "css", `${filename}.css`), "utf8"),
    config,
  });

  const { results:  [{ warnings }] } = result

  expect(warnings).toHaveLength(warningsCount)
}

it("results in no warnings on valid CSS", () => lint("valid", 0))

it("results in 11 warnings on invalid CSS", () => lint("invalid", 11))
