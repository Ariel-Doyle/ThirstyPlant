import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import PlantService from './plant_service';

//Business Logic

async function getPlantInfo(plant) {
  const response = await PlantService.getPlantInfo(plant);
  // let html ='';
  response.forEach(element => {
    const div = document.createElement('div');
    const image = document.createElement('img');
    const name = document.createElement('h5');
    const water = document.createElement('p');
    const light = document.createElement('p');
    const show = document.querySelector(`#showResponse`);
    div.classList = 'card'
    image.classList = 'card-image'
    image.src = element.img
    name.innerText = `${element.common}`
    // name.innerText = `${element[`Common name`]}`
    water.innerHTML = `<strong>Watering: </strong>${element.watering}`
    // water.innerHTML = `<strong>Watering: </strong>${element.Watering}`
    light.innerHTML = `<strong>Light Needs: </strong>${element.ideallight}`
    // light.innerHTML = `<strong>Light Needs: </strong>${element[`Light tolered`]}`

    div.appendChild(image),
      div.appendChild(name),
      div.appendChild(water),
      div.appendChild(light),
      show.appendChild(div)
  });
}

function handleFormSubmission(event) {
  event.preventDefault();
  let plant = document.querySelector('#plant').value;
  getPlantInfo(plant);
}

window.addEventListener("load", function () {
  document.querySelector("form").addEventListener("submit", handleFormSubmission);
});

  //   let htmlSegment = `<div class='plantName> 
  //                        <h2>${element.Categories} ${element[`Common name (fr.)`]}</h2>
  //                       </div>
  //                       <div class="showImg"> <img src='${element.img}'>
  //                       </div>`;
  //                       html += htmlSegment;
  // });
  // document.querySelector('#showResponse').innerHTML = html;
  // if (response) {
  //   printElements(response, plant);
  // } else {
  //   printError(response, plant)
  // }
// }
//     .then(function (response) {
//       let output = ''
//       response.map(function (plant) {
//         output += `${plant[`Common name (fr.)`]}`;
//       })
//       document.querySelector('#showResponse').innerText = output;
//     }, function (errorMessage) {
//       printError(errorMessage);
//     });
// }

// function printElements(response, plant) {
//   let output = response;
//   console.log(response);
//   document.querySelector('#showResponse').innerText = `Display results for ${plant}: ${output}`;
// }

// function printError(errorMessage) {
//   document.querySelector('#showResponse').innerText = errorMessage;
// }

