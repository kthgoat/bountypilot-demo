   function titleCase(text) {
     return String(text).toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase());
   }
   module.exports = { titleCase };
