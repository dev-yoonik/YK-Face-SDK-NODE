const apiKey = "YOUR-X-API-KEY";
const baseURL = "YOUR-API-ENDPOINT";
const { Face } = require('yoonik-face-api');

const client = new Face({apiKey, baseURL});

(async () => {
  try {
    const result = await client.delete_gallery("<GALLERY_ID>");
    console.log(result);
  } catch (error) {
      console.error('Exception when calling client.delete_gallery: ', error);
  }
})();