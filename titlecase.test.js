   const test = require("node:test");
   const assert = require("node:assert");
   const { titleCase } = require("./titlecase");

   test("titleCase", () => {
     assert.strictEqual(titleCase("hello world"), "Hello World");
   });
