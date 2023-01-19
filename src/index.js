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
  
}