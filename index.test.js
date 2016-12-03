const config = require("./")
const { join } = require("path")
const { readFileSync } = require("fs")
const stylelint = require("stylelint")

function lint(filename, warningsCount) {
  return stylelint.lint({
    code: readFileSync(join(__dirname, "css", `${filename}.css`), "utf8"),
    config,
  })
  .then(result => {
    const { results:  [{ warnings }] } = result
    expect(warnings.length).toBe(warningsCount)
  })
}

it("results in no warnings on valid CSS", () => lint("valid", 0))

it("results in 11 warnings on invalid CSS", () => lint("invalid", 11))
