first()
  .then(function(response) {
    return second(response);
  })
  .then(function(response) {
    onFulfilled(response);
  });

function onFulfilled(response) {
  console.log(response);
}
