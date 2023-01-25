export default class GetPlantIdFromURL {
  static async getPlantId(imageInput) {
    try {
      const response = await fetch(`https://my-api.plantnet.org/v2/identify/all?images=${imageInput}&organs=leaf&include-related-images=true&no-reject=true&lang=en&api-key=${process.env.PlantNet_API_Key}`, {
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