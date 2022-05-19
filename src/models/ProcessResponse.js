
/**
 * ProcessMultipleResponse
 * NodeJS v16
 
 /**
  * ProcessResponse Class 
  * @category Class
  * @package  Yoonik\Face
  * @author   Yoonik dev
  * @link     https://github.com/dev-yoonik/YK-Face-SDK-NODE
  */
 
const Request = require("./SuperRequest");

class ProcessResponse  extends Request{

    constructor(data={}){
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
        this.modelName = 'process_response';

         /**
         * Array of property to type mappings. Used for (de)serialization
         * @type {Object} - types 
         */
        this.types = {
            'biometric_type' : 'string',
            'x' : 'double',
            'y' : 'double',
            'width' : 'double',
            'height' : 'double',
            'z' : 'double',
            'matching_score' : 'double',
            'template' : 'string',
            'template_version' : 'string',
            'matching_image' : 'string',
            'tracking_id' : 'string',
            'template_id' : 'string',
            'biometric_points' : 'object[]',
            'quality_metrics' : 'object[]'
        };

        /**
         * Array of property to format mappings. Used for (de)serialization
         * @type {Object} - formats 
         */
        this.formats = {
            'biometric_type' : null,
            'x' : 'double',
            'y' : 'double',
            'width' : 'double',
            'height' : 'double',
            'z' : 'double',
            'matching_score' : 'double',
            'template' : 'byte',
            'template_version' : null,
            'matching_image' : 'byte',
            'tracking_id' : null,
            'template_id' : null,
            'biometric_points' : null,
            'quality_metrics' : null
        };


        /**
         * Array of attributes where the key is the local name, and the value is the original name
         * @type {Object} - attributeMap 
         */
        this.attributeMap = {
            'biometric_type' : 'biometric_type',
            'x' : 'x',
            'y' : 'y',
            'width' : 'width',
            'height' : 'height',
            'z' : 'Z',
            'matching_score' : 'matching_score',
            'template' : 'template',
            'template_version' : 'template_version',
            'matching_image' : 'matching_image',
            'tracking_id' : 'tracking_id',
            'template_id' : 'template_id',
            'biometric_points' : 'biometric_points',
            'quality_metrics' : 'quality_metrics'
        };


        /**
         * Array of attributes to setter functions (for deserialization of responses)
         * @type {Object} - setters 
         */
        this.setters = {
            'biometric_type' : 'setBiometricType',
            'x' : 'setX',
            'y' : 'setY',
            'width' : 'setWidth',
            'height' : 'setHeight',
            'z' : 'setZ',
            'matching_score' : 'setMatchingScore',
            'template' : 'setTemplate',
            'template_version' : 'setTemplateVersion',
            'matching_image' : 'setMatchingImage',
            'tracking_id' : 'setTrackingId',
            'template_id' : 'setTemplateId',
            'biometric_points' : 'setBiometricPoints',
            'quality_metrics' : 'setQualityMetrics'
        };


        /**
         * Array of attributes to getter functions (for serialization of requests)
         * @type {Object} - getters 
         */
        this.getters = {
            'biometric_type' : 'getBiometricType',
            'x' : 'getX',
            'y' : 'getY',
            'width' : 'getWidth',
            'height' : 'getHeight',
            'z' : 'getZ',
            'matching_score' : 'getMatchingScore',
            'template' : 'getTemplate',
            'template_version' : 'getTemplateVersion',
            'matching_image' : 'getMatchingImage',
            'tracking_id' : 'getTrackingId',
            'template_id' : 'getTemplateId',
            'biometric_points' : 'getBiometricPoints',
            'quality_metrics' : 'getQualityMetrics'
        };

    }

    //---------------------------------------------------------------------------------------
    //                                      Methods
    //---------------------------------------------------------------------------------------

    /**
     * Gets biometric_type
     * @returns {String} - biometric_type
     */
    getBiometricType(){
        return this.container['biometric_type'];
    }

    /**
     * Sets biometric_type
     * @param {String} - biometric_type
     */
    setBiometricType(biometric_type){
        this.container['biometric_type'] = biometric_type;
    }

    /**
     * Gets x
     * @returns {Double} - biometric_type
     */
    getX(){
        return this.container['x'];
    }

    /**
     * Sets x
     * @param {Double} x - detection center coordinate x 
     */
    setX(x){
        this.container['x'] = x;
    }

    /**
     * Gets y
     * @returns {Double} y
     */
    getY(){
        return this.container['y'];
    }

    /**
     * Sets y
     * @param {Double} y - detection center coordinate y
     */
    setY(y){
        this.container['y'] = y;
    }

    /**
     * Gets width
     * @returns {Double} width
     */
    getWidth(){
        return this.container['width'];
    }

    /**
     * Sets width
     * @param {Double} width - detection bounding box width
     */
    setWidth(width){
        this.container['width'] = width;
    }

    /**
     * Gets height
     * @returns {Double} height
     */
    getHeight(){
        return this.container['height'];
    }

    /**
     * Sets height
     * @param {Double} height - detection bounding box width
     */
    setHeight(height){
        this.container['height'] = height;
    }

    /**
     * Gets z
     * @returns {Double} z
     */
    getZ(){
        return this.container['z'];
    }

    /**
     * Sets z
     * @param {Double} z - detection center 3D coordinate Z
     */
    setZ(z){
        this.container['z'] = z;
    }

    /**
     * Gets matching_score
     * @returns {Double} matching_score
     */
    getMatchingScore(){
        return this.container['matching_score'];
    }

    /**
     * Sets matching_score
     * @param {Double} matching_score - Matching score obtained with template_id person
     */
    setMatchingScore(matching_score){
        this.container['matching_score'] = matching_score;
    }

    /**
     * Gets template
     * @returns {Double} matching_score
     */
    getTemplate(){
        return this.container['template'];
    }

    /**
     * Sets template
     * @param {String} template - Biometric template
     */
    setTemplate(template){
        this.container['template'] = template;
    }

    /**
     * Gets template_version
     * @returns {String} template_version
     */
    getTemplateVersion(){
        return this.container['template_version'];
    }

    /**
     * Sets template_version
     * @param {String} template_version - Template version
     */
    setTemplateVersion(template_version){
        this.container['template_version'] = template_version;
    }

    /**
     * Gets matching_image
     * @returns {String} matching_image
     */
    getMatchingImage(){
        return this.container['matching_image'];
    }

    /**
     * Sets matching_image
     * @param {String} matching_image - Thumbnail/crop used for template extraction
     */

    setMatchingImage(matching_image){
        this.container['matching_image'] = matching_image;
    }

    /**
     * Gets tracking_id
     * @returns {String} - tracking_id
     */
    getTrackingId(){
        return this.container['tracking_id'];
    }

    /**
     * Sets tracking_id
     * @param {String} tracking_id - Tracking id. Available when processing video
     */
    setTrackingId(tracking_id){
        this.container['tracking_id'] = tracking_id;
    }

    /**
     * Gets template_id
     * @returns {String} template_id
     */
    getTemplateId(){
        return this.container['template_id'];
    }

    /**
     * Sets template_id
     * @param {String} template_id - Template Id
     */
    setTemplateId(template_id){
        this.container['template_id'] = template_id;
    }

    /**
     * Gets biometric_points
     * @returns {String} - biometric_points
     */
    getBiometricPoints(){
        return this.container['biometric_points'];
    }

    /**
     * Sets biometric_points
     * @param {Object} biometric_points - biometric_points
     */
    setBiometricPoints(biometric_points){
        this.container['biometric_points'] = biometric_points;
    }

    /**
     * Gets quality_metrics
     * @returns {Object} quality_metrics
     */
    getQualityMetrics(){
        return this.container['quality_metrics'];
    }

    /**
     * Sets quality_metrics
     * @param {Object} quality_metrics - quality metrics
     */
    setQualityMetrics(quality_metrics){
        this.container['quality_metrics'] = quality_metrics;
    }
}
 
module.exports =  {
    ProcessResponse
}
 
