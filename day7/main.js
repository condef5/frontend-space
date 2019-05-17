// pop
const pop = (arr) => {
  const last = arr[arr.length - 1];
  arr.length = arr.length - 1;
  return last;
};

const arr = [1, 2, 3, 4];
pop(arr);
// 4

// every
const every = (arr, fn) => {
  for (let index = 0; index < arr.length; index++) {
    if (!fn(arr[index])) return false;
  }
  return true;
};

const arr = [1, 2, 3, 4];
every(arr, (num) => num % 2 == 0);
// false

// some
const some = (arr, fn) => {
  for (let index = 0; index < arr.length; index++) {
    if (fn(arr[index])) return true;
  }
  return false;
};

const arr = [-1, -4, 3, -5];
some(arr, (num) => num > 0); // some number is positive
// true

// find
const find = (arr, fn) => {
  for (let index = 0; index < arr.length; index++) {
    if (fn(arr[index])) return arr[index];
  }
  return undefined;
};

const arr = [5, 12, 8, 130, 44];
find(arr, (num) => num > 10); // find number
// 12

// join
const join = (arr, separator = ',') => {
  let result = '';
  for (let index = 0; index < arr.length - 1; index++) {
    result += arr[index] + separator;
  }
  return result + arr[arr.length - 1];
};

const arr = [1, 2, 3, 4, 5];
join(arr); // join numbers
// "1,2,3,4,5"

const arr = [1, 2, 3, 4, 5];
join(arr, '-'); // join numbers
// "1-2-3-4-5"

// --- opcionals ---

// forEach
const forEach = (arr, fn) => {
  for (let index = 0; index < arr.length; index++) {
    fn(arr[index]);
  }
  return void 0; // mola más que devolver un undefined
};

const arr = [1, 2, 3, 4, 5];
forEach(arr, (num) => console.log(num)); // ejecuta un console.log(num) por cada numero

// push
const push = (arr, ...elements) => {
  const length = arr.length;
  for (let index = 0; index < elements.length; index++) {
    arr[length + index] = elements[index];
  }
  return arr.length;
};

const arr = [1, 2, 3, 4, 5];
push(arr, 10);
// 6
push(arr, 11, 13);
// 8

// map
const map = (arr, fn) => {
  const newArr = [];
  for (let index = 0; index < arr.length; index++) {
    newArr.push(fn(arr[index]));
  }
  return newArr;
};

const arr = [1, 2, 3, 4, 5];
map(arr, (num) => num ** 2); // mapea el array con potencia
// [1, 4, 9, 16, 25]

// filter
const filter = (arr, fn) => {
  const newArr = [];
  for (let index = 0; index < arr.length; index++) {
    if (fn(arr[index])) newArr.push(arr[index]);
  }
  return newArr;
};

const arr = [1, 2, 3, 4, 5];
filter(arr, (num) => num > 2);
//  [3, 4, 5]

// reduce
// const reduce = (arr, fn, initValue) => {
//   return arr.length > 0
//     ? reduce(arr.slice(1), fn, fn(initValue, arr[0]))
//     : initValue;
// };

const reduce = (arr, fn, initialValue) => {
  const recurse = (remaining, prev, idx) =>
    !remaining.length
      ? prev
      : recurse(remaining.slice(1), fn(prev, remaining[0], idx, arr), idx + 1);

  return recurse(arr, initialValue, 0);
};

//  example reduce
reduce(
  [1, 2, 3],
  (a, b) => {
    return a + b;
  },
  0
);
// 6

// concat
const concat = (arr, ...elements) => {
  for (let index = 0; index < elements.length; index++) {
    arr.push(elements[index]);
  }
  return arr;
};

const arr = [1, 2, 3, 4, 5];
concat(arr, 6, 7); // concat numbers
// [1, 2, 3, 4, 5, 6, 7]
