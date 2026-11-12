const test = require("node:test");
const assert = require("node:assert");
const { kebabCase } = require("./kebabCase");

test("converts spaces", () => {
  assert.strictEqual(kebabCase("Hello World"), "hello-world");
});
test("converts camelCase", () => {
  assert.strictEqual(kebabCase("fooBar"), "foo-bar");
});
test("collapses extra spaces", () => {
  assert.strictEqual(kebabCase("  many   spaces "), "many-spaces");
});
