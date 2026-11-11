   const test = require("node:test");
   const assert = require("node:assert");
   const { slugify } = require("./slugify");

   test("slugify", () => {
     assert.strictEqual(slugify("  Hello World "), "hello-world");
   });
