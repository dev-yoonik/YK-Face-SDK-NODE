const apiKey = "YOUR-X-API-KEY";
const baseURL = "YOUR-API-ENDPOINT";
const { Face, VerifyRequest} = require('./../../src/initImporter');

const client = new Face({apiKey, baseURL});
const payload = new VerifyRequest();
 
payload.setFirstTemplate("<TEMPLATE>");
payload.setSecondTemplate("<TEMPLATE>");

(async () => {
    try {
        const result = await client.verify(payload);
        console.log(result);
    } catch (error) {
        console.error('Exception when calling client.verify: ', error);
    }
})();