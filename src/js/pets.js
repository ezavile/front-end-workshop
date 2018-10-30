
(function() {
  var pets = [
    {
      name: 'Benito',
      details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.',
      'id-pet': 1
    },
    {
      name: 'Felipe',
      details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.',
      'id-pet': 2
    },
    {
      name: 'Remmy',
      details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.',
      'id-pet': 3
    },
    {
      name: 'Claudio',
      details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.',
      'id-pet': 4
    },
    {
      name: 'Shisha',
      details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.',
      'id-pet': 5
    },
    {
      name: 'Brandon',
      details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.',
      'id-pet': 6
    },
  ];

  var scofield = {
    name: 'Scofield',
    details: 'some details...',
    'id-pet': 7,
  };

  pets.push(scofield);

  window.pets = pets;
})();

// console.log(scofield); // throw an error since template it is inside of IIFE
