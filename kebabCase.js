function kebabCase(str) {
  return str
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .trim()
    .split(/[\s_-]+/)
    .filter(Boolean)
    .join("-")
    .toLowerCase();
}
module.exports = { kebabCase };
