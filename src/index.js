import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './css/styles.css';
import './services/Plant_Id_API.js';
import GetPlantIdFromImage from './services/Plant_Id_API.js';
import GetPlantIdFromURL from './services/test_code.js';

let imagesArray = [];

window.addEventListener("change", function(e) {
  e.preventDefault();
  let fileInput = document.querySelector('input[type="file"]');
  imagesArray.push(fileInput.files[0]);
  displayImages();
});


function displayImages() {
  let output = document.querySelector("#output");
  let images = "";

  imagesArray.forEach((image, index) => {
    images += `<div class="image">
                <img src="${URL.createObjectURL(image)}" alt="image">
                <span onclick="${deleteImage(index)})">&times;</span>
                </div>`;
  });

  output.innerHTML = images;
}

function deleteImage(index) {
  imagesArray.splice(index, 1);
  displayImages();
}


async function getPlantIdFromLocalImage() {
  const response = await GetPlantIdFromImage.GetPlantID(imagesArray);
  if (response.query) {
    printElements(response);
  } else {
    printError(response);
  }
}

// function printElements(response) {
//   const output = document.querySelector('output');
//   let img = document.createElement("img");
//   img.src = `${response.results[0].images[0].url.m}`;
//   output.appendChild(img);

  
//   document.querySelector('#showAPIResponse').innerText = `Your plant ID top match is: ${response.bestMatch}, 
//   Common Names are: ${response.results[0].species.commonNames},

//   Other possible matches are: ${response.results[2].species.commonNames} ${response.results[2].images[0].url.m} 

//   ${response.results[4].species.commonNames} ${response.results[4].images[0].url.m}`;
// }

// function printError(error) {
//   document.querySelector('#showErrorResponse').innerText = `There was an error accessing the plant information: ${error}`;
// }

window.addEventListener("submit", function(e) {
  e.preventDefault();
  getPlantIFromLocalImage();
});


// async function getPlantIdFromURL() {
//   const response = await GetPlantIdFromURL.GetPlantID();
//   if (response.query) {
//     printElements(response);
//   } else {
//     printError(response);
//   }
// }

// function printElements(response) {
//   const output = document.querySelector('output');
//   let img = document.createElement("img");
//   img.src = `${response.results[0].images[0].url.m}`;
//   output.appendChild(img);

  
//   document.querySelector('#showAPIResponse').innerText = `Your plant ID top match is: ${response.bestMatch}, 
//   Common Names are: ${response.results[0].species.commonNames},

//   Other possible matches are: ${response.results[2].species.commonNames} ${response.results[2].images[0].url.m} 

//   ${response.results[4].species.commonNames} ${response.results[4].images[0].url.m}`;
// }

// function printError(error) {
//   document.querySelector('#showErrorResponse').innerText = `There was an error accessing the plant information: ${error}`;
// }


// function handleFormSubmission(e) {
//   e.preventDefault();
//   getPlantIdFromLocalImage();
//   getPlantIdFromURL();
// }

// window.addEventListener("load", function() {
//   document.querySelector('form').addEventListener('submit', handleFormSubmission);
// });