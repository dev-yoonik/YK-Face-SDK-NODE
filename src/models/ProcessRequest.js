/**
 * ProcessRequest
 *
 * NodeJS v16
 *
 * @category Class
 * @package  Yoonik\Face
 * @author   Yoonik dev
 * @link     https://github.com/dev-yoonik/YK-Face-SDK-NODE
 */
 
/**
 * ProcessRequest Class 
 * @category Class
 * @package  Yoonik\Face
 * @author   Yoonik dev
 * @link     https://github.com/dev-yoonik/YK-Face-SDK-NODE
 */

 const SuperRequest = require("./SuperRequest");

class ProcessRequest extends SuperRequest{

    /**
     * Constructor
     * @param mixed[] $data Associated array of property values initializing the model
     */
    
     constructor(data={}){
        
        super(data);
        /**
        * Associative array for storing property values
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
        this.modelName = 'process_request';

        /**
         * Array of property to type mappings. Used for (de)serialization
         * @type {Object} - types 
         */
        this.types = {
            'image' : "",
            'processings' : Array(),
            'configuration' : Array()
        };

        /**
         * Array of property to format mappings. Used for (de)serialization
         * @type {Object} - formats
         */
        this.formats = {
            'image' : null,
            'processings' : null,
            'configuration' : null
        };


        /**
         * Array of attributes where the key is the local name, and the value is the original name
         * @type {Object} - attributeMap 
         */
         this.attributeMap = {
            image : 'image',
            processings : 'processings',
            configuration : 'configuration'
        };

        /**
         * Array of attributes to setter functions (for deserialization of responses)
         * @type {Object} - setters 
         */
        this.setters = {
            'image' : 'setImage',
            'processings' : 'setProcessings',
            'configuration' : 'setConfiguration'
        };

        /**
         * Array of attributes to getter functions (for serialization of requests)
         * @type {Object} - getters 
         */
         this.getters = {
            image : 'getImage',
            processings : 'getProcessings',
            configuration : 'getConfiguration'
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
                this.PROCESSINGS_NONE,
            ];
    }
    
    /**
     * Show all the invalid properties with reasons.
     * @returns {Array} invalidProperties - array invalid properties with reasons
     */
    getListInvalidProperties(){
        const invalidProperties = [];

        if (this.container['image'] === null) {
            invalidProperties.push("'image' can't be null");
        }
        return invalidProperties;
    }

    /**
     * Gets image
     * @returns {String} - image
     */
    getImage(){
        // return "/9j/4AAQSkZJRgABAQA"
        return   this.container['image'];
    }

    /**
     * Sets image
     * @param {String} images - image 
     */
    setImage(image){
        this.container['image'] = image;
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
}

module.exports = { 
    ProcessRequest 
}