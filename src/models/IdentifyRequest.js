/* IdentifyRequest
 *
 * Node version 16
 *
 * @category Class
 * @package  Yoonik\Face
 * @author   Yoonik dev
 * @link     https://github.com/dev-yoonik/YK-Face-SDK-NODE
 */

/**
 * IdentifyRequest Class 
 * @category Class
 * @package  Yoonik\Face
 * @author   Yoonik dev
 * @link     https://github.com/dev-yoonik/YK-Face-SDK-NODE
 */
const SuperRequest = require("./SuperRequest");

class IdentifyRequest extends SuperRequest{

    /**
      * Constructor
      * @param {Object} - data of property values initializing the model
      */
    constructor(data={}){
        super(data);

        this.container = {};

        /**
          * The original name of the model.
          * @param {String} - identify_request
          */
        this.modelName = 'identify_request';

         /**
           * Object of property to type mappings. Used for (de)serialization
           * @type {Object} - types 
           */
        this.types = {
             'template' : 'string',
             'candidate_list_length' : 'int',
             'minimum_score' : 'double',
             'gallery_id' : 'string'
         };

         /**
           * Object of property to format mappings. Used for (de)serialization
           * @type {Object} - formats 
           */
        this.formats = {
             'template' : null,
             'candidate_list_length' : null,
             'minimum_score' : 'double',
             'gallery_id' : null
        };

        /**
         * Object of attributes where the key is the local name, and the value is the original name
         * @type {Object} - attributeMap 
         */
        this.attributeMap = {
            'template' : 'template',
            'candidate_list_length' : 'candidate_list_length',
            'minimum_score' : 'minimum_score',
            'gallery_id' : 'gallery_id'
        };


        /**
         * Object of attributes to setter functions (for deserialization of responses)
         * @type {Object} - setters 
         */
        this.setters = {
            'template' : 'setTemplate',
            'candidate_list_length' : 'setCandidateListLength',
            'minimum_score' : 'setMinimumScore',
            'gallery_id' : 'setGalleryId'
        };

        /**
         * Object ofattributes to getter functions (for serialization of requests)
         * @type {Object} - getters 
         */
        this.getters = {
            'template' : 'getTemplate',
            'candidate_list_length' : 'getCandidateListLength',
            'minimum_score' : 'getMinimumScore',
            'gallery_id' : 'getGalleryId'
        };
    }
 

    /**
     * Show all the invalid properties with reasons.
     * @returns {Array} - Array invalid properties with reasons
     */
    getListInvalidProperties(){
        const invalidProperties = [];

        if (this.container['template'] === null) {
            invalidProperties.push("'template' can't be null");
        }
        if (this.container['candidate_list_length'] && (this.container['candidate_list_length'] < 1)) {
            invalidProperties.push("invalid value for 'candidate_list_length', must be bigger than or equal to 1.");
        }

        if (this.container['minimum_score'] && (this.container['minimum_score'] < -1)) {
            invalidProperties.push("invalid value for 'minimum_score', must be bigger than or equal to -1.");
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

    /**
     * Sets template
     * @param {String} - template
     */
    setTemplate(template){
        this.container['template'] = template; 
    }

    /**
     * Gets candidate_list_length
     * @returns {Integer} - candidate_list_length 
     */
    getCandidateListLength(){
        return this.container['candidate_list_length'];
    }

    /**
     * Sets candidate_list_length
     * @returns {Integer} - candidate_list_length
     */
    setCandidateListLength(candidate_list_length){

        if( !candidate_list_length || candidate_list_length < 1 ){
            throw new Error("Invalid value for $candidate_list_length when calling IdentifyRequest., must be bigger than or equal to 1.");
        }
        this.container['candidate_list_length'] = candidate_list_length;
    }

    /**
     * Gets minimum_score
     * @returns {Double} - minimum_score 
     */
    getMinimumScore(){
        return this.container['minimum_score'];
    }

    /**
     * Sets minimum_score
     * @param {Double} - minimum_score 
     */
    setMinimumScore(minimum_score){

        if( !minimum_score || minimum_score < -1 ){
            throw new Error("Invalid value for $minimum_score when calling IdentifyRequest., must be bigger than or equal to -1.");
        }

        this.container['minimum_score'] = minimum_score;
    }

    /**
     * Gets gallery_id
     * @returns {String} - gallery_id
     */
    getGalleryId(){
        return this.container['gallery_id'].toString();
    }

    /**
     * Sets gallery_id
     * @param {String} - gallery_id
     */
    setGalleryId(gallery_id){
        this.container['gallery_id'] = gallery_id;
    }
}

module.exports = {
    IdentifyRequest
}