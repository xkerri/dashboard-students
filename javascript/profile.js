'use strict'

let content_profile = document.querySelector(".profile");
let localUrl=document.location.href;

let url=(function getElement(localUrl){
  if(localUrl.indexOf('?')>0){
  let getString=localUrl.split('?')[1];
  return getString;
  }
})(localUrl);
console.log("El return es: "+localUrl);
console.log("obtener string cortada: "+url);
console.log("El tipo es: "+typeof url);
let urlInt=(Number(url));
console.log("tipo de urlInt "+typeof urlInt);
console.log("El urlInt es: "+urlInt)
// console.log("Url data int"+urlInt);


function showProfile(){
  console.log("entro");
  fetch('seitos.json')
    .then(resp => resp.json())
    .then(data => {
      console.log("Entro al json");
      console.log(data);
      console.log(data[urlInt-1]);
      // console.log("esto es lo que quiero imprimir: "+ data[urlInt-1]);
      console.log(data[urlInt-1].Name);
      // console.log("Esto es beto: "+data[urlInt-1].Name);
      createProfile(data,(urlInt-1));
    })
}
showProfile();
function createProfile(data,id){
  content_profile.innerHTML=
  `
  <div class="profile-container">
  <div class="img-container">
    <div class="img-center">
      <img class="profile-photo" src="imagenes/${data[id].Personal_img}">
    </div>
  </div>
  <h2 class="subtitulos">${data[id].Name} ${data[id].Paternal_surname} ${data[id].Maternal_surname}</h2>
  <div class="container">
  <div class="Personal">
  <h3>Perfil Personal</h3>
  <p><strong>Avatar: </strong></p>
  <img class="avatar" src="imagenes/avatars/${data[id].Avatar}"</p>
  <p><strong>Tagline: </strong>${data[id].Tagline}</p>
      <p class="gustos"><strong>Gustos personales: </strong></p>
      <ul class="gustos-list">
        <li>${data[id].PersonalPleasures[0]}</li>
        <li>${data[id].PersonalPleasures[1]}</li>
        <li>${data[id].PersonalPleasures[2]}</li>
      </ul>

    </div>
    <div class="professional">
      <h3>Perfil Profesional</h3>
      <p class="nameProfile"><strong>Nombre:</strong> ${data[id].Name} ${data[id].Paternal_surname} ${data[id].Maternal_surname}</p>
      <p class="area"><strong>Area:</strong> ${data[id].Area}</p>
      <p class="email"><strong>Email:</strong> ${data[id].Email}</p>
      <p class="cel"><strong>Celular: </strong>${data[id].Cel}</p>
      <p class="university"><strong>Universidad: </strong>${data[id].University}</p>
      <p class="description"><strong>Main skillsets: </strong></p>
      <ul>
        <li>${data[id].Skillsets[0]}</li>
        <li>${data[id].Skillsets[1]}</li>
        <li>${data[id].Skillsets[2]}</li>
      </ul>
    </div>
    <div class="wouldLike">
     <h3>Me gustaria Aprender</h3>
     <ul>
      <li>${data[id].Would[0]}</li>
      <li>${data[id].Would[1]}</li>
      <li>${data[id].Would[2]}</li>
     </ul>
    </div>
  </div>
  </div>
  `
}
