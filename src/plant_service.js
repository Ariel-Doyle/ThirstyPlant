const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '44cd67c618mshb7b1598b50085f9p1eede7jsn1362f2657e81',
    'X-RapidAPI-Host': 'house-plants.p.rapidapi.com'
  }
};

export default class PlantService {
  static async getPlantInfo(plant) {
    try {
      const response = await fetch(`https://house-plants.p.rapidapi.com/common/?q=${plant}`, options);
      const jResponse = await response.json();
      if (!response.ok) {
        const errorMessage = `${response.status} ${response.statusText} ${jResponse.message}`;
        throw new Error(errorMessage);
      }
      return jResponse;
    } catch (error) {
      return error;
    }
  }
}

// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '44cd67c618mshb7b1598b50085f9p1eede7jsn1362f2657e81',
//     'X-RapidAPI-Host': 'house-plants2.p.rapidapi.com'
//   }
// };

// export default class PlantService {
//   static async getPlantInfo(plant) {
//     try {
//       const response = await fetch(`https://house-plants2.p.rapidapi.com/?q=${plant}`, options);
//       const jResponse = await response.json();
//       if (!response.ok) {
//         const errorMessage = `${response.status} ${response.statusText} ${jResponse.message}`;
//         throw new Error(errorMessage);
//       }
//       return jResponse;
//     } catch (error) {
//       return error;
//     }
//   }
// }