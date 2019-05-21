const promise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve('FULFILLED!');
  }, 300);
}).then(function(response) {
  console.log(response);
});
