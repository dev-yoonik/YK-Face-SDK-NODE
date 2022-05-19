const apiKey = "YOUR-X-API-KEY";
const baseURL = "YOUR-API-ENDPOINT";
const { Face, IdentifyRequest} = require('./../../src/initImporter');

const client = new Face({apiKey, baseURL});
const payload = new IdentifyRequest();


payload.setTemplate("<TEMPLATE>");
payload.setCandidateListLength(1);
payload.setMinimumScore(0.6);
payload.setGalleryId("<GALLERY_ID>");

(async () => {
    try {
        const result = await client.identify(payload);
        console.log(result);
    } catch (error) {
        console.error('Exception when calling client.identify: ', error);
    }
})();