function buildCard(id, name, details) {
  var name = name.toLowerCase();

  // console.log(buildLink()); throw an error since it is undefined for the hoisting phase

  var buildLink = function() {
    var link = '/adoptar/' + name;

    return (
      '<p class="yta_Adopt-card-description-link">' +
        '<a href="' + link + '" class="yta_Link-outline--primary">Adoptar</a>' +
      '</p>'
    );
  }


  var buildImage = function () {
    return '<div class="yta_Adopt-card-img" style="background-image: url(./images/' + name + '.png)"></div>';
  }

  return (
    '<article class="yta_Adopt-card" id="' + id + '">' +
      buildImage() +
      '<div class="yta_Adopt-card-description">' +
        '<h3 class="yta_Adopt-card-description-name">' + name + '</h3>' +
        '<p class="yta_Adopt-card-description-details">' + details + '</p>' +
        buildLink() +
      '</div>' +
    '</article>'
  );
}


window.buildCard = buildCard;
