const test = require("node:test");
const assert = require("node:assert");
const { isEmpty } = require("./isEmpty");

test("empty and whitespace strings", () => {
  assert.strictEqual(isEmpty(""), true);
  assert.strictEqual(isEmpty("  "), true);
});
test("non-empty string", () => {
  assert.strictEqual(isEmpty("a"), false);
});
