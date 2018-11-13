(function() {
  function Pet(id, name, details) {
    this.id = id;
    this.name = name.toLowerCase();
    this.details = details;
  }
  
  Pet.prototype.getImage = function() {
    return './images/' + this.name + '.png';
  }

  Pet.prototype.getLink = function() {
    return '/adoptar/' + this.name;
  }
  
  window.Pet = Pet;
})();