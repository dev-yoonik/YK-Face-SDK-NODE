/**
 * ProcessMultipleRequest
 *
 * NodeJS v16
 *
 * @category Class
 * @package  Yoonik\Face
 * @author   Yoonik dev
 * @link     https://github.com/dev-yoonik/YK-Face-SDK-NODE
 */

/**
 * ProcessMultipleRequest Class 
 * @category Class
 * @package  Yoonik\Face
 * @author   Yoonik dev
 * @link     https://github.com/dev-yoonik/YK-Face-SDK-NODE
 */

const SuperRequest = require("./SuperRequest");

class VerifyImagesRequest extends SuperRequest{

    constructor(data = null) {
        super(data);

        /**
         * Object for storing property values
         * @type {String} - modelName 
         */
        this.container = {};
 
       /**
        * The original name of the model.
        * @type {String} - modelName 
        */
        this.modelName = "verify_images";

        /**
         * Object of property to type mappings. Used for (de)serialization
         * @type {Object} - types 
         */
        this.types = {
            "first_image": "string",	
            "second_image": "string"
        };

        /**
         * Object of property to format mappings. Used for (de)serialization
         * @type {Object} - formats
         */
        this.formats = {
            "first_image": null,
            "second_image": null
        };

        /**
         * Object of attributes where the key is the local name, and the value is the original name
         * @type {Object} - attributeMap
         */
        this.attributeMap = {
            first_image: "first_image",
            second_image: "second_image",
        };

        /**
         * Array of attributes to setter functions (for deserialization of responses)
         * @type {Object} - setters
         */
        this.setters = {
            first_image: "setFirstImage",
            second_image: "setSecondImage"
        };

        /**
         * Array of attributes to getter functions (for serialization of requests)
         * @type {Object} - getters
         */
        this.getters = {
            first_image: "getFirstImage",
            second_image: "getSecondImage"
        };
    }

    /**
     * Show all the invalid properties with reasons.
     * @returns {Array} invalidProperties - array invalid properties with reasons
     */
    getListInvalidProperties() {
        const invalidProperties = [];
  
        if (this.container["first_image"] === null) {
            invalidProperties.push("'first_image' can't be null");
        }
        if (this.container["second_image"] === null) {
            invalidProperties.push("'second_image' can't be null");
        }
        return invalidProperties;
    }

   /**
     * Gets first_image
     * @returns {String} - first_image
     */
    getFirstImage(){
        return this.container['first_image'];
    }

    /**
     * Sets first_image
     * @param {String} firstImage - first image   
     */
    setFirstImage(firstImage){
        this.container['first_image'] = firstImage;
    }

    /**
     * Gets second_image
     * @returns {String} - second_image
     */
    getSecondImage(){
        return this.container['second_image'];
    }

    /**
     * Sets second_image
     * @param {String} secondImage - second image 
     */
    setSecondImage(secondImage){
        this.container['second_image'] = secondImage;
    }
}

module.exports = { VerifyImagesRequest }