console.log('--- Global Execution Context ---');
console.log(version);
console.log('--- Creation and Hoisting ---');
console.log(name);
console.log(buildCard);
// console.log(otherVar); throw an error

var name = 'Benito';
var details = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.';

var benitoTemplate = buildCard(name, details);

console.log(benitoTemplate);

function buildCard(name, details) {
  console.log('--- Execution Context ---');
  var name = name.toLowerCase();

  return (
    '<article class="yta_Adopt-card">' +
      buildImage() +
      '<div class="yta_Adopt-card-description">' +
        '<h3 class="yta_Adopt-card-description-name">' + name + '</h3>' +
        '<p class="yta_Adopt-card-description-details">' + details + '</p>' +
        buildLink() +
      '</div>' +
    '</article>'
  );
  
  function buildLink() {
    console.log('--- Lexical Environments And Scope Chain ---');
    var link = '/adoptar/' + name;

    return (
      '<p class="yta_Adopt-card-description-link">' +
        '<a href="' + link + '" class="yta_Link-outline--primary">Adoptar</a>' +
      '</p>'
    );
  }
}

function buildImage() {
  return '<div class="yta_Adopt-card-img" style="background-image: url(./images/' + name + '.png)"></div>';
}

window.buildCard = buildCard;
