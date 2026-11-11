   function truncate(text, max) {
     return text.length > max ? text.slice(0, max) + "..." : text;
   }
   module.exports = { truncate };
