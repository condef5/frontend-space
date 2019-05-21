const promise = Promise.reject(new Error('error'));

promise
  .then(undefined, function(error) {
    console.log(error.message);
  })
  .catch(function(error) {
    console.log(error.message);
  });
