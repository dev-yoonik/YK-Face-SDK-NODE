const apiKey = "YOUR-X-API-KEY";
const baseURL = "YOUR-API-ENDPOINT";
const { Face, VerifyIdRequest} = require('./../../src/initImporter');

const client = new Face({apiKey, baseURL});
const payload = new VerifyIdRequest();

payload.setTemplate("<TEMPLATE>");
payload.setTemplateId("<TEMPLATE_ID>");
 
(async () => {
    try {
        const result = await client.verify_id(payload);
        console.log(result);
    } catch (error) {
        console.error('Exception when calling client.verify_id: ', error);
    }
})();