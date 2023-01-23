//Ariel_Branch
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './css/styles.css';
import GetPlantIdFromLocalImage from './services/Test_Code.js';
import GetPlantIdFromURL from './services/Plant_Id_API.js';

async function getPlantIdFromURL() {
  const response = await GetPlantIdFromURL.getPlantId();
  if (response.query) {
    printElements(response);
  } else {
    printError(response);
  }
}

function printElements(response) {
  const output = document.querySelector('output');
  let img = document.createElement("img");
  img.src = `${response.results[0].images[0].url.m}`;
  output.appendChild(img);

  
  document.querySelector('#showAPIResponse').innerText = `Your plant ID top match is: ${response.bestMatch}, 
  Common Names are: ${response.results[0].species.commonNames},

  Other possible matches are: ${response.results[2].species.commonNames} ${response.results[2].images[0].url.m} 

  ${response.results[4].species.commonNames} ${response.results[4].images[0].url.m}`;
}

function printError(error) {
  document.querySelector('#showErrorResponse').innerText = `There was an error accessing the plant information: ${error}`;
}


function handleFormSubmission(e) {
  e.preventDefault();
  getPlantIdFromLocalImage();
  getPlantIdFromURL();
}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener('submit', handleFormSubmission);
});


// let imagesArray = [];

// window.addEventListener("change", function(e) {
//   e.preventDefault();
//   let fileInput = document.querySelector('input[type="file"]');
//   imagesArray.push(fileInput.files[0]);
//   displayImages();
// });


// function displayImages() {
//   let output = document.querySelector("#output");
//   let images = "";

//   imagesArray.forEach((image, index) => {
//     images += `<div class="image">
//                 <img src="${URL.createObjectURL(image)}" alt="image">
//                 <span onclick="${deleteImage(index)})">&times;</span>
//                 </div>`;
//   });

//   output.innerHTML = images;
// }

// function deleteImage(index) {
//   imagesArray.splice(index, 1);
//   displayImages();
// }

async function getPlantIdFromLocalImage() {
  const response = await GetPlantIdFromLocalImage.GetPlantID(imagesArray);
  if (response.query) {
    printElements(response);
  } else {
    printError(response);
  }
}

// function getPlantID() {
//   const myHeaders = new Headers();
//   myHeaders.append("accept", "application/json");

//   const formData = new FormData();
//   formData.append("images", imagesArray[0]);
//   formData.append("organs", "leaf");

//   const requestOptions = {
//     method: 'POST',
//     headers: myHeaders,
//     body: formData
//   };

//   let jResponse = response.json();

//   return fetch(`https://my-api.plantnet.org/v2/identify/all?include-related-images=true&no-reject=true&lang=en&api-key=2b10ueg7nSzYau5fSFuJ4PfQ8e`, requestOptions)
//     .then(function(response) {
//       if (!response.ok) {
//         const errorMessage = `${jResponse.statusCode} ${jResponse.error} ${jResponse.message}`;
//         throw new Error(errorMessage);
//       } else {
//         return jResponse;
//       }
//     })
//     .catch(function(error) {
//       return error;
//     });
// }