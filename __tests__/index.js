import config from "../"
import path from "path"
import { readFileSync } from "fs"
import stylelint from "stylelint"
import test from "ava"

test("no warnings with valid css", t => {
  return stylelint.lint({
    code: readFileSync(path.join(__dirname, "./css/valid.css"), "utf8"),
    config: config,
  })
  .then(data => {
    const { errored, results } = data
    const { warnings } = results[0]
    t.falsy(errored, warnings.map(({ text }) => text).join("\n"))
    t.is(warnings.length, 0, "flags no warnings")
  })
})

test("a warning with invalid css", t => {
  return stylelint.lint({
    code: readFileSync(path.join(__dirname, "./css/invalid.css"), "utf8"),
    config: config,
  })
  .then(data => {
    const { errored, results } = data
    const { warnings } = results[0]
    t.truthy(errored, "errored")
    t.is(warnings.length, 1, "flags one warning")
    t.is(warnings[0].text, "Unexpected universal selector (selector-no-universal)", "correct warning text")
  })
})
