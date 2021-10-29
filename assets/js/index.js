'use strict';

const cardsContainer = document.getElementById('cardsContainer');

const htmlElements = actors.map((actor) => createActorCard(actor));

function createActorCard(actor){
  const card = document.createElement('li');
  card.classList.add('cardWrapper');
  
  const container = document.createElement('article');container.classList.add('cardContainer');
  
  const img = document.createElement('img');
  img.classList.add('cardImage');
  img.setAttribute('src', actor.photo);
  img.setAttribute('alt', actor.name);
  
  const name = document.createElement('h2');
  name.classList.add('cardName');
  name.append(document.createTextNode(actor.name));
  // name.textContent = actor.name;

  const description = document.createElement('p');
  description.classList.add('cardDescription');
  // description.append(document.createTextNode(actor.birthdate));
  description.textContent = actor.birthdate;

  container.append(img, name, description);
  card.appendChild(container);

  return card;
}

// cardsContainer.append(...htmlElements);