/**
 * ProcessMultipleResponse
 * NodeJS v16
 *
 * @category Class
 * @package  Yoonik\Face
 * @author   Yoonik dev
 * @link     https://github.com/dev-yoonik/YK-Face-SDK-NODE
 */

/**
 * ProcessMultipleResponse Class 
 * @category Class
 * @package  Yoonik\Face
 * @author   Yoonik dev
 * @link     https://github.com/dev-yoonik/YK-Face-SDK-NODE
 */

const SuperRequest = require("./SuperRequest");

class ProcessMultipleResponse extends SuperRequest{

     constructor(data={}){
        
        super(data);
        /**
        * Object for storing property values
        * @param {Object} - storing property values
        */
        this.container = {};

        this.PROCESSINGS_DETECT = 'detect';
        this.PROCESSINGS_ANALYZE = 'analyze';
        this.PROCESSINGS_TEMPLIFY = 'templify';
        this.PROCESSINGS_NONE = 'none';

        /**
        * The original name of the model.
        * @type {String} - modelName 
        */
        this.modelName = 'process_multiple_response';

        /**
         * Array of property to type mappings. Used for (de)serialization
         * @type {Object} - types 
         */
        this.types = {
            'images': new Array(),
            'processings': new Array(),
            'configuration': new Array(),
            'minimum_score': "integer"
        }
      
        /**
         * Array of attributes where the key is the local name, and the value is the original name
         * @type {Object} - attributeMap 
         */
        this.attributeMap = {
            images: "images",
            processings: "processings",
            configuration: "configuration",
            minimum_score: "minimum_score"
        };

        /**
         * Array of attributes to setter functions (for deserialization of responses)
         * @type {Object} - setters 
         */
        this.setters = {
            images : 'setImage',
            processings : 'setProcessings',
            configuration : 'setConfiguration',
            minimum_score : 'setCMinimumScore'
        };
getProcessingsAllowableValues
        /**
         * Array of attributes to getter functions (for serialization of requests)
         * @type {Object} - getters 
         */
         this.getters = {
            images : 'getImages',
            processings : 'getProcessings',
            configuration : 'getConfiguration',
            minimum_score : 'getCMinimumScore'
        };
    }

    //---------------------------------------------------------------------------------------
    //                                      Methods
    //---------------------------------------------------------------------------------------
    /**
     * Gets allowable values of the enum
     * @returns {Array} - processings allowable values
     */
    getProcessingsAllowableValues(){
        return [
                this.PROCESSINGS_DETECT,
                this.PROCESSINGS_ANALYZE,
                this.PROCESSINGS_TEMPLIFY,
                this.PROCESSINGS_NONE
            ];
    }

    /**
     * Show all the invalid properties with reasons.
     *  @returns {Array} invalidProperties - array invalid properties with reasons
     */
    getListInvalidProperties(){
        const invalidProperties = [];

        if (this.container['images'] === null) {
            invalidProperties.push("'image' can't be null");
        }

        if (this.container['processings'] === null) {
            invalidProperties.push("'processings' can't be null");
        }

        if (this.container['configuration'] === null) {
            invalidProperties.push("'configuration' can't be null");
        }

        if (this.container['minimum_score'] === null) {
            invalidProperties.push("'minimum_score' can't be null");
        }

        return invalidProperties;
    }

    /**
     * Gets images
     * @returns {String} - images
     */
    getImages(){
        return this.container['images'];
    }

    /**
     * Sets images
     * @param {String} images - image 
     */
    setImages(images){
        this.container['images'].push(images);
    }

    /**
     * Gets processings
     * @returns {Array} - processings
     */
    getProcessings(){
        return this.container['processings'];
    }

    /**
     * Sets processings
     * @param {String} - processings Requested biometric processings.
     */
    setProcessings(processings){

        const allowedValues = this.getProcessingsAllowableValues();

        if (processings && !allowedValues.includes(processings)) {
            throw new Error(`Invalid value for 'processings', must be one of ${allowedValues.join()}`);
        }
        this.container['processings'].push(processings);
    }

    /**
     * Gets configuration
     * @return {Array} - configuration
     */
    getConfiguration(){
        return this.container['configuration'];
    }

    /**
     * Sets configuration
     * @param {String} configuration - Extensible configurations for biometric processing.
     */
    setConfiguration(configuration){ 
        this.container['configuration'].push(configuration);
    }

    /**
     * Gets MinimumScore
     * @return  {String} minimum_score - minimum score 
     */
    getMinimumScore(){
        return this.container['minimum_score'];
    }

    /**
     * Sets minimum_score
     * @param {String} - minimum_score
     */
    setMinimumScore(minimum_score){
        this.container['minimum_score'] = minimum_score;
    }
}

module.exports = { 
    ProcessMultipleResponse 
}