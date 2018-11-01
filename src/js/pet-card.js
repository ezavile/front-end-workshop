(function() {
  var addPet = document.getElementById('addPet');
  var adoptCards = document.getElementById('adoptCards');
  
  var adoptCardsContent;
  var pet;
  var i = 0;

  addPet.addEventListener('click', function(ev) {
    ev.preventDefault();
    pet = new AdoptCardBuilder(pets[i]);
    adoptCardsContent = adoptCards.innerHTML + pet.getBody();
    adoptCards.innerHTML = adoptCardsContent;
    i++;
  });
})();
