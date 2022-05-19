/**
 * VerifyIdRequest
 *
 * NodeJS v16
 *
 * @category Class
 * @package  Yoonik\Face
 * @author   Yoonik dev
 * @link     https://github.com/dev-yoonik/YK-Face-SDK-NODE
 */

/**
 * VerifyIdRequest Class 
 * @category Class
 * @package  Yoonik\Face
 * @author   Yoonik dev
 * @link     https://github.com/dev-yoonik/YK-Face-SDK-NODE
 */

const SuperRequest = require("./SuperRequest");

class VerifyIdRequest extends SuperRequest{

    
    constructor(data = null) {
        super(data);

        /**
         * Object for storing property values
         * @param {Object} - storing property values
         */
        this.container = {};
 
        /**
         * The original name of the model.
         * @type {String} - modelName 
         */
        this.modelName = "verifyid_request";

        /**
         * Object of property to type mappings. Used for (de)serialization
         * @type {Object} - types 
         */
        this.types = {
            "template": "",	
            "template_id" :"",
            "gallery_id":""
        };

        /**
         * Object of property to format mappings. Used for (de)serialization
         * @type {Object} - formats 
         */
        this.formats = {
            template: null,
            template_id: null,
            gallery_id: null
        };

        /**
         * Object of attributes where the key is the local name, and the value is the original name
         * @type {Object} - attributeMap 
         */
        this.attributeMap = {
            template: "template",
            template_id: "template_id",
            gallery_id: "gallery_id",
        };

        /**
         * Object of attributes to setter functions (for deserialization of responses)
         * @type {Object} - setters 
         */
        this.setters = {
            template: "setTemplate",
            template_id: "setTemplateId",
            gallery_id: "setTGalleryId"
        };

        /**
        * Object of attributes to getter functions (for serialization of requests)
        * @type {Object} - getters 
        */
        this.getters = {
            template: "getTemplate",
            template_id: "getTemplateId",
            gallery_id: "getGalleryId"
        };
    }


    /**
     * Show all the invalid properties with reasons.
     * @returns {Array} - array invalid properties with reasons
     */
    getListInvalidProperties() {
        const invalidProperties = [];

        if (this.container['template'] === null) {
            invalidProperties.push("'template' can't be null");
        }

        if (this.container['template_id'] === null) {
            invalidProperties.push("'template_id' can't be null");
        }

        if (this.container['gallery_id'] === null) {
            invalidProperties.push("'gallery_id' can't be null");
        } 
        
        return invalidProperties;
    }

    
    /**
     * Gets template
     * @returns {String} - template 
     */
    getTemplate() {
        return this.container["template"];
    }

    /**
     * Sets template
     * @param {String} template template
     */
    setTemplate(template) {
        this.container["template"] = template;
    }

    /**
     * Gets template id
     * @returns {String} - template_id 
     */
     getTemplateId() {
        return this.container["template_id"];
    }

    /**
     * Sets template id
     * @param {String} - templateID
     */
    setTemplateId(templateId) {
        this.container["template_id"] = templateId;
    }

     /**
     * Gets gallery_id id
     * @returns {String} - gallery_id 
     */
    getGalleryId() {
        return this.container["gallery_id"];
    }

    /**
     * Sets gallery  id
     * @param {String} gallery_id gallery_id
     */
    setGalleryId(galleryId) {
        this.container["gallery_id"] = galleryId;
    }
}

module.exports = { 
    VerifyIdRequest 
}