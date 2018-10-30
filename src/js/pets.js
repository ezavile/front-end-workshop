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

var templates = [];

for(var i = 0; i < pets.length; i++) {
  var id = (pets[i]['id-pet'] + '-' + i * 2) + '-' + ('-' + i%2 == 0);
  // '-' + i%2 === 0 associativity
  // 3 > 2 > 1 coercion
  templates.push(buildCard(id, pets[i].name, pets[i].details));
}

console.log(templates);
