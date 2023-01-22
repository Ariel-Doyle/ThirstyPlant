// function deleteImage(index) {
//   imagesArray.splice(index, 1);
//   displayImages();
// }

// function getPlantID() {
//   const myHeaders = new Headers();
//   myHeaders.append("accept", "application/json");
//   myHeaders.append("Content-Type", "multipart/form-data");

//   const formdata = new FormData();
//   formdata.append("images", imagesArray);
//   formdata.append("organs", "leaf");

//   const requestOptions = {
//     method: 'POST',
//     headers: myHeaders,
//     body: formdata
//   };

//   fetch("https://my-api.plantnet.org/v2/identify/all?include-related-images=true&no-reject=true&lang=en&api-key=2b10ueg7nSzYau5fSFuJ4PfQ8e", requestOptions)
//     .then(response => response.text())
//     .then(function(response) {
//       printElements(response);
//     })
//     .catch(function(error) {
//       window.alert(error);
//       printError(error);
//     });
// }

// async function getPlantIdFromImage() {
//   const myHeaders = new Headers();
//   myHeaders.append("accept", "application/json");
//   myHeaders.append("Content-Type", "multipart/form-data");

//   const formdata = new FormData();
//   formdata.append("images", imagesArray);
//   formdata.append("organs", "leaf");

//   const requestOptions = {
//     method: 'POST',
//     headers: myHeaders,
//     body: JSON.stringify(formdata)
//   };

//   let url = `https://my-api.plantnet.org/v2/identify/all?include-related-images=true&no-reject=true&lang=en&api-key=${process.env.PlantNet_API_Key}`;

//   try {
//     const response = await fetch (url, requestOptions);

//     if (!response.ok) {
//       const errorMessage = `${response.statusCode}: ${response.error}: ${response.message}`;
//       throw new Error(errorMessage);
//     }
//     return response.json();
//   } catch(error) {
//     return(error);
//   }
// }



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

// async function getPlantID() {
//   const response = await getPlantIdFromImage();
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

// function handleFormSubmission(e) {
//   e.preventDefault();
//   getPlantID();
//   // let file = document.querySelector('#myFile');
//   // if (!file.value.length) {
//   //   return "Please upload a photo to get your plant ID.";
//   // }
//   // const uri = URL.createObjectURL(file.files[0]);
//   // const img = document.createElement('img');
//   // const imageDisplay = document.querySelector('#imageDisplay');
//   // img.src = uri;
//   // imageDisplay.append(img);

//   //URL.revokeObjectURL(uri);
//   // const payload = {
//   //   'images':'/C:/Users/Schadenfreude/OneDrive/Desktop/epicodus_projects/ThirstyPlant/src/assets/images/succulent.jpg',
//   //   'organs':'leaf'
//   // };
//   //const url = `https://my-api.plantnet.org/v2/identify/all`;

//   // getPlantId(url)
//   //   .then(function(response) {
//   //     if (isNaN(response.created)) {
//   //       const errorMessage = `${response.statusCode}: ${response.error}: ${response.message}`;
//   //       throw new Error(errorMessage);
//   //     } else {
//   //       return response;
//   //     }
//   //   })
//   //   .then(function(jsonResponse) {
//   //     printElements(jsonResponse);
//   //   })
//   //   .catch(function(error) {
//   //     printError(error.message);
//   //   });
// }