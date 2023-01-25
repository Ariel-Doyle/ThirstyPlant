export default class GetPlantIdFromLocalImage {
  static GetPlantID(localImagesArray) {
    const myHeaders = new Headers();
    myHeaders.append("accept", "application/json");
  
    const formData = new FormData();
    formData.append("images", localImagesArray[0]);
    formData.append("organs", "leaf");
  
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formData
    };
  
    return fetch(`https://my-api.plantnet.org/v2/identify/all?include-related-images=true&no-reject=true&lang=en&api-key=${process.env.PlantNet_API_Key}`, requestOptions)
      .then(function(response) {
        if (!response.ok) {
          const jResponse = response.json();
          const errorMessage = `${jResponse.statusCode} ${jResponse.error} ${jResponse.message}`;
          throw new Error(errorMessage);
        } else {
          return response.json();
        }
      })
      .catch(function(error) {
        return error;
      });
  }
}