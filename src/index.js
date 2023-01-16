import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import PlantService from './plant_service.js';

//Business Logic

function getPlantInfo(plant) {
  PlantService.getPlantInfo(plant)
    .then(function(response) {
      document.querySelector("#showResponse").innerText = response;
    }, function(errorMessage) {
      printError(errorMessage);
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

window.addEventListener("load", function() {
  document.querySelector("form").addEventListener("submit", handleFormSubmission);
});