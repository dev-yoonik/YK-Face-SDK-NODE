const apiKey = "YOUR-X-API-KEY";
const baseURL = "YOUR-API-ENDPOINT";
const { Face } = require('./../../src/initImporter');
const client = new Face({apiKey, baseURL});

(async () => {
  try {
    const result = await client.get_template_from_gallery("<GALLERY_ID>", "<PERSON_ID>");
    console.log(result);
  } catch (error) {
      console.error('Exception when calling client.get_template_from_gallery: ', error);
  }
})();