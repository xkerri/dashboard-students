"use strict";
let content_Professional = document.querySelector(".professional-info");
let localUrl = document.location.href;
let url = (function getElement(localUrl) {
  if (localUrl.indexOf("?") > 0) {
    let getString = localUrl.split("?")[1];
    console.log(getString);
    return getString;
  }
})(localUrl);
console.log(`valor url: ${url}`);
let idURL = url;
function showProfileProfessional() {
  console.log(idURL - 1);
  fetch("seitos.json")
    .then(resp => resp.json())
    .then(data => {
      console.log(data);
      console.log(data[idURL - 1]);
      console.log(data[idURL - 1].Name);
      createProfileProfessional(data, idURL - 1);
    });
}

function createProfileProfessional(data, id) {
  content_Professional.innerHTML = `
  <div class="profile-contain">
  <h2 class="subtitulos">Perfil Profesional</h2>
    <div class="professional">
      <span class="nameProfile">${data[id].Name} ${data[id].Paternal_surname} ${
    data[id].Maternal_surname
  }</span><br />
      <img src="imagenes/Professional/${data[id].Name}"><br />
      <span class="area">Area: ${data[id].Area}</span> <br />
      <span class="email">Email: ${data[id].Email}</span> <br />
      <span class="cel">Celular: ${data[id].Cel}</span> <br />
      <span class="university">Universidad: ${data[id].University}</span> <br />
      <span class="description">Descripcion: </span><br />
      <span class="StatementPro">${data[id].StatementPro}</span><br />
      <span class="LabelExp"> Experiencia:</span><br />
      <span class="Experience">${data[id].Experience}</span><br/>
      <h3>Skillsets</h3>
      <h4 class="description">Lenguajes de Programacion</h4>
      <span class="Languages">${data[id].Skillsets.Languages}</span><br />
      <h4>FrameWorks</h4>
      <span class="FrameWorks">${data[id].Skillsets.Frameworks}</span><br />
      <h4 class="descripcion">Tecnologías</h4>
      <span class="Tech">${data[id].Skillsets.Tech}</span><br/>
    </div>
    <div id="wouldLike">
     <h3>Me gustaria Aprender</h3>
     <h4>Lenguajes de Programación</h4>
     <span class="LikePro">${data[id].Would.Languages}</span>
     <h4>FrameWorks</h4>
     <span class="LikeFra">${data[id].Would.FrameWorks}</span>
     <h4>Tecnologías</h4>
     <span class="LikeTech">${data[id].Would.Tech}</span>
    </div>

  </div>
  `;
}

showProfileProfessional();
