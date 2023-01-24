import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import PlantService from './plant_service';

async function getPlantInfo(plant) {
  const response = await PlantService.getPlantInfo();
  if (response.toString().includes("Error")) {
    printError(response, plant);
  } else {
    printElements(response, plant);
  }
}

function printElements(response, plant) {
  document.querySelector('#showResponse').innerHTML = "";
  console.log(plant);
  console.log(response[0]['Common name'][0]);
  let thisArray = (response.filter(function (element) {
    if (element['Common name'] === null) {
      console.log('null');
    } else if (element['Common name'][0] === plant) {
      console.log(element);
      return element;
    }
  }));
  thisArray.forEach(element => {
    const div = document.createElement('div');
    const image = document.createElement('img');
    const name = document.createElement('h5');
    const water = document.createElement('p');
    const light = document.createElement('p');
    const show = document.querySelector('#showResponse');
    div.classList = 'card';
    image.classList = 'card-image';
    image.src = element.img;
    name.innerHTML = `<strong>${element['Common name']}</strong> \n ${element['Latin name']}`;
    water.innerHTML = `<strong>Watering: </strong>${element.Watering}`;
    light.innerHTML = `<strong>Light Needs: </strong>${element['Light tolered']}`;

    div.appendChild(image),
    div.appendChild(name),
    div.appendChild(water),
    div.appendChild(light),
    show.appendChild(div);
    document.querySelector('#plant').value = null;
  });
}

function printError(errorMessage) {
  document.querySelector('#showResponse').innerText = errorMessage;
}

function handleFormSubmission(event) {
  event.preventDefault();
  let plant = document.querySelector('#plant').value;
  getPlantInfo(plant);
}

window.addEventListener("load", function () {
  document.querySelector("form").addEventListener("submit", handleFormSubmission);
});



