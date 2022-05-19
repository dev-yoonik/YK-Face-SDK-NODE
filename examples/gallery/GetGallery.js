const apiKey = "YOUR-X-API-KEY";
const baseURL = "YOUR-API-ENDPOINT";
const { Face } = require('./../../src/initImporter');
const client = new Face({apiKey, baseURL});

(async () => {
  try {
    const result = await client.get_list_galleries("<GALLERY_ID>");
    console.log(result);
  } catch (error) {
      console.error('Exception when calling client.get_list_galleries: ', error);
  }
})();