const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'b06dd144b3msh9c2b8e46c2b3b73p13a792jsn27224a9ce455',
    'X-RapidAPI-Host': 'house-plants2.p.rapidapi.com'
  }
};

export default class PlantService {
  static async getPlantInfo(plant) {
    try {
      const response = await fetch(`https://house-plants2.p.rapidapi.com/`, options);
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