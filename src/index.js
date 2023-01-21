import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './css/styles.css';

function getPlantID() {
  const myHeaders = new Headers();
  myHeaders.append("accept", "application/json");
  myHeaders.append("Content-Type", "multipart/form-data");

  const formdata = new FormData();
  formdata.append("images", ["/C:/Users/Schadenfreude/OneDrive/Desktop/epicodus_projects/ThirstyPlant/src/assets/images/succulent.jpg"]);
  formdata.append("organs", "leaf");

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow'
  };

  fetch("https://my-api.plantnet.org/v2/identify/all?include-related-images=true&no-reject=true&lang=en&api-key=2b10ueg7nSzYau5fSFuJ4PfQ8e", requestOptions)
    .then(response => response.text())
    .then(function(result) {
      printElements(result);
    })
    .catch(function(error) {
      printError(error);
    });
}

// async function getPlantId(url = `https://my-api.plantnet.org/v2/identify/all`, payload) {
//   const response = await fetch(url, {
//     method: 'POST',
//     params: {
//       'api-key': `${process.env.PlantNet_API_Key}`
//     },
//     headers: {
//       'include-related-images': 'true',
//       'no-reject': 'true',
//       'lang': 'en',
//       'accept': 'application/json',
//       'Content-Type': 'multipart/form-data' 
//     },
//     form: {
      
//     }
//   });
//   return response.json();
// }


//import GetPlantIdFromImage from './services/Plant_Id_API.js';

//Business
// async function getPlantId() {
//   const response = await GetPlantIdFromImage.getPlantId();
//   if (response.results) {
//     printElements(response);
//   } else {
//     printError(response);
//   }
// }

//UI Logic

// function logFile (event) {
//   let imageDisplay = document.querySelector('#imageDisplay');
//   let str = event.target.result;
//   let img = document.createElement('img');
//   img.src = str;
//   imageDisplay.append(img);  
// }


function handleFormSubmission(e) {
  e.preventDefault();
  getPlantID();
  // let file = document.querySelector('#myFile');
  // if (!file.value.length) {
  //   return "Please upload a photo to get your plant ID.";
  // }
  // const uri = URL.createObjectURL(file.files[0]);
  // const img = document.createElement('img');
  // const imageDisplay = document.querySelector('#imageDisplay');
  // img.src = uri;
  // imageDisplay.append(img);

  //URL.revokeObjectURL(uri);
  // const payload = {
  //   'images':'/C:/Users/Schadenfreude/OneDrive/Desktop/epicodus_projects/ThirstyPlant/src/assets/images/succulent.jpg',
  //   'organs':'leaf'
  // };
  //const url = `https://my-api.plantnet.org/v2/identify/all`;

  // getPlantId(url)
  //   .then(function(response) {
  //     if (isNaN(response.created)) {
  //       const errorMessage = `${response.statusCode}: ${response.error}: ${response.message}`;
  //       throw new Error(errorMessage);
  //     } else {
  //       return response;
  //     }
  //   })
  //   .then(function(jsonResponse) {
  //     printElements(jsonResponse);
  //   })
  //   .catch(function(error) {
  //     printError(error.message);
  //   });
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

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener('submit', handleFormSubmission);
});