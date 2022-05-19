const apiKey = "YOUR-X-API-KEY";
const baseURL = "YOUR-API-ENDPOINT";

const { Face, TemplateRequest} = require('./../../src/initImporter');
const payload = new TemplateRequest();
const client = new Face({apiKey, baseURL});
 
payload.setTemplate("<TEMPLATE>");

(async () => {
  try {
    const result = await client.add_template_to_gallery("<GALLERY_ID>", "<PERSON_ID>", payload);
    console.log(result);
  } catch (error) {
      console.error(`Exception when calling client.add_template_to_gallery: ${error}`);
  }
})();