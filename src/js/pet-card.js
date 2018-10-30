window['id-pet'] = 'id-scofield';
window.name = 'Scofield';
window.details = 'Scofield details....';

console.log('--------- THIS - window ---------');
console.log(buildCard());


console.log('--------- THIS - object ---------');
for(var i = 0; i < pets.length; i++) {
  pets[i].buildCard = buildCard;
  console.log(pets[i].buildCard());
}

console.log('--------- BIND ---------');
var buildCardBenito = buildCard.bind(pets[0]);
console.log(buildCardBenito());

console.log('--------- CALL ---------');
console.log(buildCard.call(pets[1], 'rottweiler', 'edgar'));

console.log('--------- APPLY ---------');
console.log(buildCard.apply(pets[1], ['hamster', 'edgar']));
