const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '44cd67c618mshb7b1598b50085f9p1eede7jsn1362f2657e81',
    'X-RapidAPI-Host': 'house-plants.p.rapidapi.com'
  }
};
export default class PlantService {  
  static getPlantInfo(plant) {
    return fetch(`https://house-plants.p.rapidapi.com/common/${plant}`, options)
      .then(function(response) {
        if (!response.ok) {
          const errorMessage = `${response.status} ${response.statusText}`;
          throw new Error(errorMessage);
        } else {
          return response.json();
        }
      })
      .catch(function (error) {
        return error;
      });
  }
}

// export default class PlantService {  
//   static getPlantInfo(plant) {
//     return fetch(`https://trefle.io/api/v1/plants/search?token=${process.env.API_KEY}q=${plant}`)
//       .then(function(response) {
//         if (!response.ok) {
//           const errorMessage = `${response.status} ${response.statusText}`;
//           throw new Error(errorMessage);
//         } else {
//           return response.json();
//         }
//       })      
//       .catch(function(error) {
//         return error;
//       });
//   }
// }