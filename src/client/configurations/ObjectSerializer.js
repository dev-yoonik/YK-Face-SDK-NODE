const {
    ProcessResponse, 
    VerifyResponse,
    IdentifyResponse,
    ProcessMultipleResponse,
    VerifyIdResponse
} = require("../../ModelImporter");


/**
 * ObjectSerializer
 * NODE version 16
 *
 * @category Class
 * @package  Yoonik\Face
 * @author   Yoonik dev
 * @link     https://github.com/dev-yoonik/YK-Face-SDK-NODE 
 */

/**
 * ObjectSerializer Class 
 * @category Class
 * @package  Yoonik\Face
 * @author   Yoonik dev
 * @link     https://github.com/dev-yoonik/YK-Face-SDK-NODE
 */
 
class ObjectSerializer{
    /**
     * Serialize data
     * @param {Object} data the data to serialize
     * @return {Object | String} serialized data
     */
    serialize(className){
        const response = {};

        Object.entries(className.getGetters()).map((item) => {
            const [key, value] = item; 
            response[key] = className[value]();
        });
       return  JSON.stringify(response);
    }


    /**
     * Deserialize a JSON string into an object
     * @param {Object}  data        object or primitive to be deserialized
     * @param {Sbject}  string      className      class name is passed as a string
     * @return object|array|null an single or an array of class instances
     */
    deserialize(data, className){
         
        if( !className ){
            return;
        }
 
        if(Array.isArray(data) && data.length == 0){ 
           return data;
        }else{
            data = Array.isArray(data) ? data[0] : data;

            const instance = eval(`new ${className}()`);
      
            if( Object.entries(instance.getSetters()) ){
                Object.entries(instance.getSetters()).map((item) => {
                    const [key, setter] = item; 
                  
                    Object.entries(data).map((data_item) => {
                        const [data_key, data_value] = data_item; 
    
                        if( key == data_key ){
                            instance[setter](data_value);
                        }
                    });
                });
            } 
            return instance;
        } 
    }
}

module.exports = {
    ObjectSerializer
}