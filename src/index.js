import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './css/styles.css';

let imagesArray = [];
let input = document.querySelector("#myFile");
const file = input.files[0];

window.addEventListener("change", function(e) {
  e.preventDefault();
  let input = document.querySelector("#myFile");
  const file = input.files[0];
  imagesArray.push(file[0]);
  displayImages();
});

function displayImages() {
  let output = document.querySelector("#output");
  let images = "";
  imagesArray.forEach((image, index) => {
    images += `<div class="image">
                <img src= ${URL.createObjectURL(image)} alt="image">
                <span onclick="deleteImage(${index})">&times;</span>
               </div>`;
  });
  output.innerHTML = images;
  window.alert(imagesArray[0].Fil);
}

function getPlantID() {
  const myHeaders = new Headers();
  myHeaders.append("accept", "application/json");
  myHeaders.append("Content-Type", "multipart/form-data");

  const formdata = new FormData();
  formdata.append("images", file);
  formdata.append("organs", "leaf");

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata
  };

  return fetch(`https://my-api.plantnet.org/v2/identify/all?include-related-images=true&no-reject=true&lang=en&api-key=2b10ueg7nSzYau5fSFuJ4PfQ8e`, requestOptions)
    //.then(response => response.text())
    .then(function(response) {
      if (!response.ok) {
        const errorMessage = `${response.statusCode} ${response.statusText}`;
        throw new Error(errorMessage);
      } else {
        return response.json();
      }
    })
    .catch(function(error) {
      window.alert(error);
      return error;
    });
}




// function printElements(response) {
//   document.querySelector('#showAPIResponse').innerText = `Your plant ID top match is: ${response.bestMatch}, 
//   Common Names are: ${response.results[0].commonNames},
//   ${response.results[0].images[0].url.m}
//   Other possible matches are: ${response.results[1].images[0].url.m} ${response.results[2].images[0].url.m}`;
// }

// function printError(response) {
//   document.querySelector('#showErrorResponse').innerText = `There was an error accessing the plant information: ${response.statusCode}: ${response['error-type']}.`;
// }


function handleFormSubmission(e) {
  e.preventDefault();
  getPlantID();
}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener('submit', handleFormSubmission);
});