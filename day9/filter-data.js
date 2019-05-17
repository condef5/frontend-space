function gooseFilter(birds) {
  const geese = [
    'African',
    'Roman Tufted',
    'Toulouse',
    'Pilgrim',
    'Steinbacher'
  ];

  return birds.filter((bird) => !geese.includes(bird));
}

const cat = {
  sound: 'meow',
  age: 5
};
