const promise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    reject(Error('REJECTED!'));
  }, 300);
}).then(undefined, function(error) {
  onReject(error);
});
function onReject(error) {
  console.log(error.message);
}
