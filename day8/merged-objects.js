function objConcat(arr) {
  const newObj = {};
  arr.forEach((obj) => {
    for (key in obj) {
      newObj[key] = obj[key];
    }
  });
  return newObj;
}

// const objConcat = arrObj => arrObj.reduce((m, o) => ({ ...m, ...o }));
