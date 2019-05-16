function convertHashToArray(hash) {
  return Object.keys(hash)
    .sort()
    .map((key) => {
      return [key, hash[key]];
    });
}
