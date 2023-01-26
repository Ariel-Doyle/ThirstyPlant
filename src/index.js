//Ariel_Branch
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './css/styles.css';
import GetPlantIdFromLocalImage from './services/PlantNet_LocalImage_API.js';
import GetPlantIdFromURL from './services/PlantNet_URL_API.js';
import PlantService from './services/plant_service.js';

//Business

async function getPlantIdFromURL() {
  const response = await GetPlantIdFromURL.getPlantId(imageInput);
  if (response.query) {
    printElementsForImageId(response);
  } else {
    printErrorForImageId(response);
  }
}

async function getPlantIdFromLocalImage() {
  const response = await GetPlantIdFromLocalImage.GetPlantID(localImagesArray);
  if (response.query) {
    printElementsForImageId(response);
  } else {
    printErrorForImageId(response);
  }
}

async function getPlantInfo(plant) {
  const response = await PlantService.getPlantInfo();
  if (response.toString().includes("Error")) {
    printError(response, plant);
  } else {
    printElements(response, plant);
  }
}

//UI

let localImagesArray = [];

function displayLocalImages() {
  let imageOutput = document.querySelector("#imageOutput");
  let images = "";

  localImagesArray.forEach((image) => {
    images += `<div class="localImageDisplayDiv">
                <img src="${URL.createObjectURL(image)}" alt="image">
               </div>`;
  });
  imageOutput.innerHTML = images;

}

// function deleteImage(index) {
//   localImagesArray.splice(index, 1);
//   displayLocalImages();
// }

function printElementsForImageId(response) {
  let output = document.querySelector('#showAPIResponse');
  let img = document.createElement("img");
  img.src = `${response.results[0].images[0].url.m}`;
  output.appendChild(img);

  document.querySelector('#showAPIResponse').innerText = `Your plant ID top match is: ${response.bestMatch}, 
  Common Names are: ${response.results[0].species.commonNames},

  Other possible matches are: ${response.results[2].species.commonNames} ${response.results[2].images[0].url.m} 

  ${response.results[4].species.commonNames} ${response.results[4].images[0].url.m}`;
}

function printElements(response, plant) {
  document.querySelector('#showResponse').innerHTML = "";
  // console.log(plant);
  // console.log(response[0]['Common name'][0]);
  let thisArray = (response.filter(function (element) {
    if (element['Common name'] === null) {
      console.log('null');
    } else if (element['Common name'][0] === plant) {
      // console.log(element);
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

function printErrorForImageId(error) {
  document.querySelector('#showErrorResponse').innerText = `There was an error accessing the plant information: ${error}`;
}

function printError(errorMessage) {
  document.querySelector('#showResponse').innerText = errorMessage;
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

  let plantButton = document.querySelector('#getPlant');

  plantButton.addEventListener("click", function() {
    let plant = document.querySelector('#plant').value;
    getPlantInfo(plant);
  });  
});



