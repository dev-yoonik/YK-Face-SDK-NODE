/**
 * VerifyResponse
 *
 * NodeJS v16
 *
 * @category Class
 * @package  Yoonik\Face
 * @author   Yoonik dev
 * @link     https://github.com/dev-yoonik/YK-Face-SDK-NODE
 */

/**
 * VerifyResponse Class 
 * @category Class
 * @package  Yoonik\Face
 * @author   Yoonik dev
 * @link     https://github.com/dev-yoonik/YK-Face-SDK-NODE
 */

const SuperRequest = require("./SuperRequest");

class VerifyResponse extends SuperRequest{

    constructor(data){
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
        this.modelName = 'verify_response';

        /**
          * Array of property to type mappings. Used for (de)serialization
          * @type {Object} - types 
          */
        this.types = {
            'score': 'double'
         }

        /**
         * Array of property to format mappings. Used for (de)serialization
         * @type {Object} - formats 
         */
        this.formats = {
            'score': 'double'
        }

        /**
         * Array of attributes where the key is the local name, and the value is the original name
         * @type {Object} - attributeMap 
         */
        this.attributeMap = {
            'score' : 'score'
        }


        /**
         * Array of attributes to setter functions (for deserialization of responses)
         * @type {Object} - setters
         */
        this.setters = {
            'score' : 'setScore'
        };

        /**
         * Array of attributes to getter functions (for serialization of requests)
         * @type {Object} - getters
         */
        this.getters = {
            'score' : 'getScore'
        };
    }
    //---------------------------------------------------------------------------------------
    //                                      Methods
    //---------------------------------------------------------------------------------------

    /**
     * Gets score
     * @returns {Double} - score
     */
    getScore(){
        return parseFloat(this.container['score'] ).toFixed(3); 
    }

    /**
     * Sets score
     * @param {Double} score - score 
     */
    setScore(score){
        this.container['score'] = score;
    }
}

module.exports =   {
    VerifyResponse
}
