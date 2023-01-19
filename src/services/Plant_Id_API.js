export default class GetPlantIdFromImage {
  static async getPlantId() {
    try {
      const response = await fetch(`https://my-api.plantnet.org/v2/identify/all?include-related-images=true&no-reject=true&lang=en&api-key=${process.env.PlantNet_API_Key}`, {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'multipart/form-data'
        },
        body: {
          'images': '../assets/services/unknown.jpg',
          'organs': 'leaf'
        }
      })
      const jsonifiedResponse = await response.json();
      if (!response.ok) {
        const errorMessage = `${response.statusText}`;
        throw new Error(errorMessage);
      }
      return jsonifiedResponse;
    } catch(error) {
      return(error);
    }
  }
}