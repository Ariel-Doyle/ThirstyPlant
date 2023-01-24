//Ariel_Branch
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './css/styles.css';
import GetPlantIdFromLocalImage from './services/PlantNet_LocalImage_API.js';
import GetPlantIdFromURL from './services/PlantNet_URL_API.js';

//Business

async function getPlantIdFromURL() {
  const response = await GetPlantIdFromURL.getPlantId(imageInput);
  if (response.query) {
    printElements(response);
  } else {
    printError(response);
  }
}

async function getPlantIdFromLocalImage() {
  const response = await GetPlantIdFromLocalImage.GetPlantID(localImagesArray);
  if (response.query) {
    printElements(response);
  } else {
    printError(response);
  }
}

//UI

let localImagesArray = [];

function displayLocalImages() {
  let imageOutput = document.querySelector("#imageOutput");
  let images = "";

  localImagesArray.forEach((image, index) => {
    images += `<div class="image">
                <img src="${URL.createObjectURL(image)}" alt="image">
                <span onclick="deleteImage(${index})">&times;</span>
                </div>`;
  });

  imageOutput.innerHTML = images;
}

// function displayUrlImage() {
//   let urlOutput = document.getElementById('urlOuput');
//   let img = new Image();
//   img.src = document.querySelector('#imageUrl').value;
//   urlOutput.innerHTML = `${img.src}`;
// }

// function deleteImage(index) {
//   imagesArray.splice(index, 1);
//   displayImages();
// }

function printElements(response) {
  let output = document.querySelector('#showAPIResponse');
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

let imageInput;

window.addEventListener("load", function() {
  let formImage = document.getElementById('addLocalImage');
  
  formImage.addEventListener("change", function() {
    let fileInput = document.querySelector('input[type="file"]');
    localImagesArray.push(fileInput.files[0]);
    displayLocalImages();
  });

  let formUrl = document.getElementById('addUrl');

  formUrl.addEventListener("input", function() {
    imageInput = document.querySelector('#imageUrl').value;
    let image = document.getElementById("image");
    if (imageInput) {
      image.src = imageInput;
    }
    window.alert(image.src);
    console.log(imageInput);
    return imageInput;
  });

  let imageBtn = document.getElementById('imageBtn');

  imageBtn.addEventListener("click", function(e) {
    e.preventDefault();
    getPlantIdFromLocalImage();
  });

  let urlBtn = document.getElementById('urlBtn');

  urlBtn.addEventListener("click", function(e) {
    e.preventDefault();
    getPlantIdFromURL();
  });
});