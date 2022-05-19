const apiKey = "YOUR-X-API-KEY";
const baseURL = "YOUR-API-ENDPOINT";
const { Face, ImageUtils, ProcessRequest} = require('../../src/initImporter');

const client = new Face({apiKey, baseURL});
const payload = new ProcessRequest();
const iu = new ImageUtils();

(async () => {
    try {
        const img = await iu.imagePath_base64_encode("<IMAGE_PATH>")
        payload.setImage(img);

        const result = await client.process(payload);
        console.log(result);
    } catch (error) {
        console.error('Exception when calling client.process: ', error);
    }
})();
 