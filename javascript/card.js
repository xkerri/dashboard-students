'use strict'

let content_cards = document.querySelector("#content_cards")

function showcards(){
  fetch('seitos.json')
    .then(resp => resp.json())
    .then(data => {
      console.log(data);
      createCard(data);
    })
}

function createCard(data){
  for(let i of data){
    content_cards.innerHTML +=
    `
    <div class="card">
    <img src="imagenes/${i.Profile_img}" class="profile_img">
    <h2>${i.Name} ${i.Paternal_surname} ${i.Maternal_surname}</h2>
    <p>${i.Area}</p>
    <p>${i.Skillsets}</p>
    <img src="imagenes/avatars/${i.Avatar}" class="avatar">
    <p class="tagline">${i.Tagline}</p>
    </div>
    <div class="space">
    </div>
    `
  }
}

showcards();
