var id;
var name;
var details;

for(var i = 0; i < pets.length; i++) {
  id = pets[i]['id-pet'];
  name = pets[i].name;
  details = pets[i].details;
  pets[i].buildCard = buildCard(id, name, details);
  console.log(pets[i].buildCard());
}
