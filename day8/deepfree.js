Object.deepFreeze = function(object) {
  if (typeof object != 'object') return;

  Object.freeze(object);

  Object.keys(object).forEach((key) => {
    Object.deepFreeze(object[key]);
  });
};

// tests

// var a = { b: [42, { x: 9 }] };
// Object.deepFreeze(a);

// a.b = 42;
// Test.assertSimilar(a.b, [42, { x: 9 }]);

// a.b[1] = 42;
// Test.assertSimilar(a.b[1], { x: 9 });
