const apiKey = "YOUR-X-API-KEY";
const baseURL = "YOUR-API-ENDPOINT";
const { Face, ImageUtils, VerifyImagesRequest} = require('../../src/initImporter');

const client = new Face({apiKey, baseURL});
const payload = new VerifyImagesRequest();
const iu = new ImageUtils();

(async () => {
    try {
        const img1 = await iu.imagePath_base64_encode("<IMAGE_PATH>")
        payload.setFirstImage(img1);     
        
        const img2 = await iu.imagePath_base64_encode("<IMAGE_PATH>")
        payload.setSecondImage(img2);

        let result = await client.verify_images(payload);
        console.log(result);
    } catch (error) {
        console.error('Exception when calling client.verify_images: ', error);
    }
})();