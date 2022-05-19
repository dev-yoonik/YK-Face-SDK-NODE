const { Request } = require("./Request");
const { ProcessRequest } = require("./models/ProcessRequest");
const { VerifyRequest } = require("./models/VerifyRequest");
 
class Face {
    constructor(data) {
        this.baseURL = data.baseURL;
        this.request = new Request(data);
    }

    //--------------------------------------------------------
    //  Gallery operations Biometric gallery methods.
    //--------------------------------------------------------
    /**
     * Add specified gallery
     * @param {String} galleryId - Gallery name or identifier. (required)
     * @return {Object} of null, HTTP status code, HTTP response headers  
     */
     async add_gallery(galleryId) {

        if (!galleryId) {
            throw new Error('Gallery is not found.')
        }
        return await this.request.create(null, `${this.baseURL}/gallery/${galleryId}`, 'POST', null);
    }

    /**
     * List all enroled ids in a gallery
     * @param {String} galleryId - Gallery name or identifier. (required)
     */
     async get_list_galleries(galleryId) {
        if (!galleryId) {
            throw new Error('Gallery is not found.');
        }
        return await  this.request.create(null, `${this.baseURL}/gallery/${galleryId}`, 'GET', null);
    }

    /**
     * Remove specified gallery
     * @param {String} galleryId - Gallery name or identifier. (required)
     * @returns {Object} of null, HTTP status code, HTTP response headers 
     */
     async delete_gallery(galleryId) {
        if (!galleryId) {
            throw new Error('Gallery is not found.');
        }
        return await this.request.create(null, `${this.baseURL}/gallery/${galleryId}`, 'DELETE', null);
    }

    /**
    * Get a template from a gallery
    * @param {String} galleryId - Gallery name or identifier. (required)
    * @param {String} personId - Person id. (required)
    * @returns TemplateRequest
    */
     async get_template_from_gallery(galleryId, personId) {
        if (!galleryId) {
            throw new Error('Gallery is not found.');
        }
        if (!personId) {
            throw new Error('Person is not found.');
        }
        return await this.request.create(null, `${this.baseURL}/gallery/${galleryId}/${personId}`, 'GET', null);
    }

    /**
    * Insert a template into a gallery
    * @param {String} galleryId - Gallery name or identifier. (required)
    * @param {String} personId - Person id. (required)
    * @returns {Object} of null, HTTP status code, HTTP response headers 
    */
     async add_template_to_gallery(galleryId, personId, payload) {
        if (!galleryId) {
            throw new Error('Gallery is not found.');
        } else if (!personId) {
            throw new Error('Person is not found.');
        } else if (!payload) {
            throw new Error('Payload is not found.');
        }
        return await this.request.create(payload, `${this.baseURL}/gallery/${galleryId}/${personId}`, 'POST', null);
    }

    /**
    * Remove a specific template from a gallery
    * @param {String} galleryId - Gallery name or identifier. (required)
    * @param {String} personId - Person id. (required)
    * @returns {Object} of null, HTTP status code, HTTP response headers 
    */
    async delete_template_gallery(galleryId, personId) {
        if (!galleryId) {
            throw new Error('Gallery is not found.');
        } else if (!personId) {
            throw new Error('Person is not found.');
        }
        return await this.request.create(null, `${this.baseURL}/gallery/${galleryId}/${personId}`, 'DELETE', null);
    }

    //--------------------------------------------------------
    //  Face Yoonik.Face methods.
    //--------------------------------------------------------
    /**
     * Operation identify
     * Search an identification template against the enrollment set of a specified gallery
     * @param  payload (required)
     * @returns Model IdentifyResponse
     */
    async identify(payload) {
        if (!payload) {
            throw new Error('Payload is not found.');
        } 
        return await this.request.create(payload, `${this.baseURL}/face/identify`, 'POST', "IdentifyResponse");
    }

    /**
     * Operation process
     * Given an image and a set of configuration parameters return an array of Yoonik biometric object
     * @param  {Object} payload (required)
     * @returns {Object} Model ProcessResponse
     */
    async process(payload) {

        if (!payload) {
            throw new Error('Payload is not found.');
        } 
        return await this.request.create(payload, `${this.baseURL}/face/process`, 'POST', "ProcessResponse");
   
    }

    /**
     * Operation process multiple 
     * Given an image and a set of configuration parameters return an array of Yoonik biometric object
     * @param  payload (required)
     * @returns {Object} Model ProcessMultipleResponse
     */
    async process_multiple(payload) {
        if (!payload) {
            throw new Error('Payload is not found.');
        } 
        this.request.create(payload, `${this.baseURL}/face/process_multiple`, 'POST', "ProcessMultipleResponse");
    }

    /**
     * Operation verify
     * Compares two descriptors and outputs a similarity score
     * @param  {Object} VerifyRequest payload (required)
     * @returns {Object} Model VerifyResponse
     */
    async verify(payload) {
        if (!payload) {
            throw new Error('Payload is not found.');
        } 
        return await this.request.create(payload, `${this.baseURL}/face/verify`, 'POST', "VerifyResponse");
    }

    /**
     * Operation verifyId
     * Match template with a specific id in a gallery
     * @param  {Object} VerifyIdRequest payload (required)
     * @returns {Object} Model VerifyIdResponse
     */
    async verify_id(payload) {
        if (!payload) {
            throw new Error('Payload is not found.');
        } 
        return await this.request.create(payload, `${this.baseURL}/face/verify_id`, 'POST', "VerifyIdResponse");
    }

    /**
     * Operation verifyImages
     * Given an image and a set of configuration parameters and minimal set of parameters return an array of Yoonik biometric object
     * @param  {Object} Model VerifyImages  payload (required)
     * @returns {Object} Model VerifyResponse
     */
    async verify_images(payload) {
        if (!payload) {
            throw new Error('Payload is not found.');
        } 
        const processPayload = new ProcessRequest();

        processPayload.setImage(payload.getFirstImage());
        const firstResponse = await this.process(processPayload);
        const firstTemplate = firstResponse.getTemplate();
        
        processPayload.setImage(payload.getSecondImage());
        const secondResponse = await this.process(processPayload);
        const secondTemplate = secondResponse.getTemplate();

        const verifyPayload = new VerifyRequest();
        verifyPayload.setFirstTemplate(firstTemplate);
        verifyPayload.setSecondTemplate(secondTemplate);
        return await this.verify(verifyPayload);
    }
}

module.exports = {
    Face
}