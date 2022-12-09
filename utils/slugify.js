export function slugify(text) {
  if (text !== undefined) {
    return text
      .toString()
      .toLowerCase()
      .replace(/á/g, "a")
      .replace(/č/g, "c")
      .replace(/ď/g, "c")
      .replace(/é/g, "e")
      .replace(/ě/g, "e")
      .replace(/í/g, "i")
      .replace(/ň/g, "n")
      .replace(/ó/g, "o")
      .replace(/ř/g, "r")
      .replace(/š/g, "s")
      .replace(/ť/g, "t")
      .replace(/ú/g, "u")
      .replace(/ů/g, "u")
      .replace(/ž/g, "z")
      .replace(/\s+/g, "-") // Replace spaces with -
      .replace(/[^\w-]+/g, "") // Remove all non-word chars
      .replace(/--+/g, "-") // Replace multiple - with single -
      .replace(/^-+/, "") // Trim - from start of text
      .replace(/-+$/, ""); // Trim - from end of text
  }
}
