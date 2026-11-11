   function slugify(text) {
     return String(text).trim().toLowerCase().replace(/\s+/g, "-");
   }
   module.exports = { slugify };
