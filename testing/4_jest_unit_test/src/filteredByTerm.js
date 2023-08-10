export default function filterByTerm(inputArr, searchTerm) {
  if (!inputArr.length || !searchTerm.length) {
    throw new Error("empty arguments");
  }
  return inputArr.filter(function (arrayElement) {
    const regex = new RegExp(searchTerm, "i");
    return arrayElement.url.match(regex);
  });
}
