export function truncate(str, n) {
  const shortenedString = str.slice(0, n - 1);
  const lastIndex = shortenedString.lastIndexOf(" ");
  return str.length > n ? shortenedString.substring(0, lastIndex) + "..." : str;
}
