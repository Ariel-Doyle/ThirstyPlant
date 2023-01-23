//Ariel_Branch
export default class GetPlantIdFromURL {
  static async getPlantId() {
    try {
      const response = await fetch(`https://my-api.plantnet.org/v2/identify/all?images=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F1407305%2Fpexels-photo-1407305.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26w%3D1260%26h%3D750%26dpr%3D1&organs=leaf&include-related-images=true&no-reject=true&lang=en&api-key=${process.env.PlantNet_API_Key}`, {
        headers: {
          'accept': 'application/json'
        }
      });
      const jResponse = await response.json();
      if (!response.ok) {
        const errorMessage = `${jResponse.statusCode}: ${jResponse.error}: ${jResponse.message}.`;
        throw new Error(errorMessage);
      }
      return jResponse;
    } catch(error) {
      return error;
    }
  }
}