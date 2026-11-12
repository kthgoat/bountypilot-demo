const test = require("node:test");
const assert = require("node:assert");
const { capitalize } = require("./capitalize");

test("capitalizes the first letter", () => {
  assert.strictEqual(capitalize("hello"), "Hello");
});
test("handles empty string", () => {
  assert.strictEqual(capitalize(""), "");
});
