/* eslint-disable no-console */
const config = require("../")
const path = require("path")
const { readFileSync } = require("fs")
const stylelint = require("stylelint")

stylelint.lint({
  code: readFileSync(path.join(__dirname, "./css/valid.css"), "utf8"),
  config: config,
}).then(res => console.log(res))

console.log("running on invalid")

stylelint.lint({
  code: readFileSync(path.join(__dirname, "./css/invalid.css"), "utf8"),
  config: config,
}).then(({ results: [{ warnings }] }) => console.log(warnings.map(({ text }) => text).join("\n")))
