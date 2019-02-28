"use strict";

let content_card = document.querySelector("#content");

(function showTable() {
  fetch("seitos.json")
    .then(resp => resp.json())
    .then(data => {
      createTable(data);
    });
})();

function createTable(data) {
  //console.log(data)
  content_card.innerHTML = "";
  for (let i of data) {
    content_card.innerHTML += `
      <tr>
        <td>${i.id}</td>
        <td><img src="imagenes/${i.Profile_img}" class="mini"></td>
        <td>${i.Name}</td>
        <td>${i.Paternal_surname}</td>
        <td>${i.Maternal_surname}</td>
        <td>${i.Area}</td>
        <td>${i.Skillsets[0]},${i.Skillsets[1]},${i.Skillsets[2]}</td>
        <td><a class="pprofile" href="profile_complete.html?${
          i.id
        }">Ver mas</a></td>
      </tr>
    `;
  }
}

function createEmptyTable() {
  content_card.innerHTML = "Ningun registro fue encontrado";
}

function filter() {
  let search = document.getElementById("valor").value;
  let typesearch = document.querySelector(".typesearch").value;
  search = search.toLowerCase();
  console.log(search);
  fetch("seitos.json")
    .then(resp => resp.json())
    .then(data => {
      const results = data.filter(data => {
        switch (typesearch) {
          case "Name":
            return data.Name.toLowerCase().indexOf(search) > -1;
          case "Paternal_surname":
            return data.Paternal_surname.toLowerCase().indexOf(search) > -1;
          case "Maternal_surname":
            return data.Maternal_surname.toLowerCase().indexOf(search) > -1;
          case "Area":
            return data.Area.toLowerCase().indexOf(search) > -1;
        }
      });
      console.log(results);
      if (results.length >= 1) {
        createTable(results);
      } else if (results.length === 0) {
        createEmptyTable(results);
      }
    });
}
