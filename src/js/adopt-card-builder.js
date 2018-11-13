(function() {
  
  function AdoptCardBuilder(pet) {
    this.pet = pet;
  }

  AdoptCardBuilder.prototype.buildLink = function() {
    return (
      '<p class="yta_Adopt-card-description-link">' +
        '<a href="' + this.pet.getLink() + '" class="yta_Link-outline--primary">Adoptar</a>' +
      '</p>'
    );
  }

  AdoptCardBuilder.prototype.buildImage = function() {
    return '<div class="yta_Adopt-card-img" style="background-image: url(' + this.pet.getImage() + ')"></div>';
  }

  AdoptCardBuilder.prototype.getBody = function() {
    return (
      '<article class="yta_Adopt-card" id="' + this.pet.id + '">' +
        this.buildImage() +
        '<div class="yta_Adopt-card-description">' +
          '<h3 class="yta_Adopt-card-description-name">' + this.pet.name + '</h3>' +
          '<p class="yta_Adopt-card-description-details">' + this.pet.details + '</p>' +
          this.buildLink() +
        '</div>' +
      '</article>'
    );
  }
  
  window.AdoptCardBuilder = AdoptCardBuilder;
})();