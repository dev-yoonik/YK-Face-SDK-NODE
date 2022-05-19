
const Request = require("./SuperRequest");

class IdentifyResponse  extends Request{

    constructor(data={}){
        super(data);
  
        /**
         * Object for storing property values
         * @param {Object} - storing property values
         */
        this.container = {};

        /**
         * The original name of the model.
         * @param {String} - identify_response
         */
        this.modelName = 'identify_response';

         /**
         * Object of property to type mappings. Used for (de)serialization
         @type {Object} - types 
         */
        this.types = {
            'template_id' : 'string',
            'score' : 'double'
        };

        /**
         * Object of property to format mappings. Used for (de)serialization
         * @type {Object} - formats 
         */
        this.formats = {
            'template_id' : 'string',
            'score' : 'double'
        };


        /**
         * Object of attributes where the key is the local name, and the value is the original name
         * @type {Object} - attributeMap 
         */
        this.attributeMap = {
            'template_id' : 'template_id',
            'score' : 'score'
        };


        /**
         * Object of attributes to setter functions (for deserialization of responses)
         * @type {Object} - setters 
         */
        this.setters = {
            'template_id' : 'setTemplateId',
            'score' : 'setScore'
        };


        /**
         * Object of attributes to getter functions (for serialization of requests)
         * @type {Object} - getters 
         */
        this.getters = {
            'template_id' : 'getTemplateId',
            'score' : 'getScore'
        };

    }

    //---------------------------------------------------------------------------------------
    //                                      Methods
    //---------------------------------------------------------------------------------------

    /**
     * Gets template_id
     * @returns {String} - template_id
     */
    getTemplateId(){
        return this.container['template_id'];
    }

    /**
     * Sets template_id
     * @returns {String} - template_id
     */
    setTemplateId(templateId){
        this.container['template_id'] = templateId;
    }

    /**
     * Gets score
     * @returns {Double} - score
     */
    getScore(){
        return this.container['score'];
    }

    /**
     * Sets score
     * @param {Double} - score
     */
    setScore(score){
        this.container['score'] = score;
    }
}
 
module.exports =  {
    IdentifyResponse
}