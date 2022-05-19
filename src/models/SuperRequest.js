class SuperRequest{

    /**
     * Array of attributes where the key is the local name, and the value is the original name
     * @returns {Object} - attributeMap
     */
    getAttributeMap(){
        return  this.attributeMap;
    }

    /**
     * Array of property to type mappings. Used for (de)serialization
     * @returns {Object} - types
     */
    getTypes() {  
        return this.types;
    }

    /**
     * Array of property to format mappings. Used for (de)serialization
     * @returns {Object} - formats
     */
    getFormats() {
        return this.formats;
    }

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     * @returns {Object} - setters
     */
    getSetters(){
        return this.setters;
    }

    /**
     * Array of attributes to getter functions (for serialization of requests)
     * @returns {Object} - getters
     */
    getGetters(){
        return this.getters;
    }

    /**
     * The original name of the model.
     * @returns {Object} - modelName
     */
    getModelName(){
        return this.modelName;
    }

    /**
     * Validate all the properties in the model return true if all passed
     * @returns {Bolean} - bool True if all properties are valid
     */
    valid(){
        return this.getListInvalidProperties().length === 0;
    }

    /**
     * Gets the string presentation of the object
     * @returns {String} - container
     */
    toString(){
        return JSON.stringify(this.container);
    }

}

module.exports = SuperRequest;