export function listAllTags(array, key) {
  let allHiddenTags = [];
  blogs.map((item) =>
    item[key]
      ?.split(',')
      .map((t) => t != '' && t != ' ' && allHiddenTags.push(t.trim()))
  );
  return [...new Set(allHiddenTags)];
}
