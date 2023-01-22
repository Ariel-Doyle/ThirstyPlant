import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './css/styles.css';
import './services/Plant_Id_API.js';
import GetPlantIdFromImage from './services/Plant_Id_API.js';

async function getPlantId() {
  const response = await GetPlantIdFromImage.getPlantId();
  if (response.query) {
    printElements(response);
  } else {
    printError(response);
  }
}

function printElements(response) {
  document.querySelector('#showAPIResponse').innerText = `Your plant ID top match is: ${response.bestMatch}, 
  Common Names are: ${response.results[0].commonNames},
  ${response.results[0].images[0].url.m}
  Other possible matches are: ${response.results[1].images[0].url.m} ${response.results[2].images[0].url.m}`;
}

function printError(response) {
  document.querySelector('#showErrorResponse').innerText = `There was an error accessing the plant information: ${response.statusCode}: ${response['error-type']}.`;
}


function handleFormSubmission(e) {
  e.preventDefault();
  getPlantId();
}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener('submit', handleFormSubmission);
});