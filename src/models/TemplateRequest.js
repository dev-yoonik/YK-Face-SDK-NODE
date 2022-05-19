/**
 * TemplateRequest
 *
 * Node version 16
 * @category Class
 * @package  Yoonik\Face
 * @author   Yoonik dev
 * @link     https://github.com/dev-yoonik/YK-Face-SDK-NODE
 */

const SuperRequest = require("./SuperRequest");
/**
 * TemplateRequest Class 
 * @category Class
 * @package  Yoonik\Face
 * @author   Yoonik dev
 * @link     https://github.com/dev-yoonik/YK-Face-SDK-NODE
 */


class TemplateRequest extends SuperRequest{

    /**
     * Constructor
     * @param mixed[] data Associated array of property values initializing the model
     */
    constructor(data={}){
        super(data);

        /**
        * Object for storing property values
        * @param {Object} - storing property values
        */
        this.container = {};

        /**
         * The original name of the model.
         * @returns {String} - modelName
         */
        this.modelName = 'template_request';

        /**
         * Array of property to type mappings. Used for (de)serialization
         * @type {Object} - types 
         */
        this.types = {
            'template' : 'string'
        }

        /**
         * Array of property to format mappings. Used for (de)serialization
         * @type {Object} - formats 
         */
        this.formats = {
            'template' : null
        }

        /**
         * Array of attributes where the key is the local name, and the value is the original name
         * @type {Object} - attributeMap 
         */
        this.attributeMap = {
            'template' : 'template'
        };

        /**
         * Array of attributes to setter functions (for deserialization of responses)
         * @type {Object} - setters 
         */
        this.setters = {
            'template' : 'setTemplate'
        };
      
        /**
         * Array of attributes to getter functions (for serialization of requests)
         * @type {Object} - getters 
         */
        this.getters = {
            'template' : 'getTemplate'
        };

    }

    /**
     * Show all the invalid properties with reasons.
     * @returns {Array} - array invalid properties with reasons
     */
    getListInvalidProperties(){
        const invalidProperties = [];

        if (this.container['template'] === null) {
            invalidProperties.push("'template' can't be null");
        }
        return invalidProperties;
    }
 
    /**
     * Gets template
     * @returns {String} - template 
     */
    getTemplate(){
        return this.container['template'];
    }

    /**
     * Sets template
     * @param {String} - template 
     */
    setTemplate(template){
        this.container['template'] = template;
    }
}

module.exports = {
    TemplateRequest
}