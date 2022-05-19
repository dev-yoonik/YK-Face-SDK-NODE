/**
 * VerifyRequest
 *
 * NodeJS v16
 *
 * @category Class
 * @package  Yoonik\Face
 * @author   Yoonik dev
 * @link     https://github.com/dev-yoonik/YK-Face-SDK-NODE
 */

/**
 * VerifyRequest Class 
 * @category Class
 * @package  Yoonik\Face
 * @author   Yoonik dev
 * @link     https://github.com/dev-yoonik/YK-Face-SDK-NODE
 */

const SuperRequest = require("./SuperRequest");
class VerifyRequest extends SuperRequest{

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
        this.modelName = "verify_request";

        /**
         * Object of property to type mappings. Used for (de)serialization
         * @type {Object} - types 
         */
        this.types = {
            first_template: '',
            second_template: ''
        };

        /**
         * Object of property to format mappings. Used for (de)serialization
         * @type {Object} - formats 
         */
        this.formats = {
            first_template: null,
            second_template: null
        };

        /**
         * Object of attributes where the key is the local name, and the value is the original name
         * @type {Object} - attributeMap 
         */
        this.attributeMap = {
            first_template: 'first_template',
            second_template: 'second_template'
        };

        /**
         * Object of attributes to setter functions (for deserialization of responses)
         * @type {Object} - setters 
         */
        this.setters = {
            first_template: 'setFirstTemplate',
            second_template: 'setSecondTemplate'
        };

        /**
         * Object of attributes to getter functions (for serialization of requests)
         * @type {Object} - getters 
         */
        this.getters = {
            first_template: 'getFirstTemplate',
            second_template: 'getSecondTemplate'
        };
    }

    /**
     * Show all the invalid properties with reasons.
     * @returns {Array} invalidProperties - array invalid properties with reasons
     */
    getListInvalidProperties() {
        const invalidProperties = [];

        if (this.container['first_template'] === null) {
            invalidProperties.push("'first_template' can't be null");
        }

        if (this.container['second_template'] === null) {
            invalidProperties.push("'second_template' can't be null");
        }
         
        return invalidProperties;
    }


    /**
     * Gets first_template
     * @returns {String} - first_template
     */
    getFirstTemplate() {
        return this.container["first_template"];
    }

    /**
     * Sets first_template
     * @param {String} firstTemplate first template
     */
    setFirstTemplate(firstTemplate) {
        this.container["first_template"] = firstTemplate;
    }

    /**
     * Gets second_template
     * @returns {String} - second_template
     */
    getSecondTemplate() {
        return this.container["second_template"];
    }

    /**
     * Sets second_template
     * @param {String} secondTemplate second template
     */
    setSecondTemplate(secondTemplate) {
        this.container["second_template"] = secondTemplate;
    }
}

module.exports = { 
    VerifyRequest 
}