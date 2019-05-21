function all(promise1, promise2) {
  const result = [];
  return new Promise((resolve, reject) => {
    return promise1.then((response) => {
      result.push(response);
      return promise2.then((response) => {
        result.push(response);
        resolve(result);
      });
    });
  });
}

all(getPromise1(), getPromise2()).then((response) => {
  console.log(response);
});
