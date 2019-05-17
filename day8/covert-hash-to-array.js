function convertHashToArray(hash) {
  return Object.keys(hash)
    .sort()
    .map((key) => {
      return [key, hash[key]];
    });
}

console.log(
  convertHashToArray({ name: 'Jeremy', age: 24, role: 'Software Engineer' })
);
// [["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]
