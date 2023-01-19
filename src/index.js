import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './css/styles.css';
import GetPlantIdFromImage from './services/Plant_Id_API.js';

//Business
async function getPlantId() {
  const response = await GetPlantIdFromImage.getPlantId();
  if (response.result) {
    printElements(response);
  } else {
    printError(response);
  }
}

//UI Logic

function printElements(response) {
  document.querySelector('#showAPIResponse').innerText = `${response.bestMatch} ${response.results[0].commonNames} ${response.results[0].images[0].url.m} ${response.results[1].images[0].url.m} ${response.results[2].images[0].url.m}`;
}

function printError(response) {
  document.querySelector('#showErrorResponse').innerText = `There was an error accessing the plant information: ${response}.`
}

function handleFormSubmission(e) {
  e.preventDefault();
}

window.addEventListener("load", function() {
  getPlantId();
  document.querySelector('form').addEventListener('submit', handleFormSubmission);
});