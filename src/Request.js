const fetch = require("node-fetch");
const { ObjectSerializer } = require('./../src/client/configurations/ObjectSerializer')

class Request {

    constructor(data) {

        this.apiKey = data.apiKey;
        this.objectSerializer = new ObjectSerializer();
    }

    /**
     * Get API KEY     
     * @returns {String} - apiKey 
     */
    getApiKey(){
        return this.apiKey;
    }

    /**
     * Prepare Request, assign method, header and message body
     * @param {Object}   payload     (required)
     * @param {String}   method      http method
     * @param {String}   model       
     * @returns {Object} request structure 
     */
    prepare_request(payload, method, model){

        const config = {
                        method: method, 
                        headers: {
                                    'Content-Type': 'application/json',
                                    'x-api-key': this.getApiKey(),
                                    'Accept': 'application/json'
                                } 
                    };
        if( payload && Object.keys(payload).length > 0 ){
            Object.assign(config,{ body: this.objectSerializer.serialize(payload) });
        }else{
            Object.assign(config,{ body: payload });
        }
        return config;   
    }

    /**
     * Prepare parse Response, build response in http function method
     * @param {Object}    payload      (required)
     * @param {String}   method      http method
     * @param {String}   model       
     * @returns {Object} request structure 
     */
    async parseResponse(payload, response, model ){
     
        let resp;
        if( response.status == 200){
            await response.json().then( json => {  
                resp = payload ? this.objectSerializer.deserialize(json, model) : json;
            });
            return resp;
        }else if(response.status == 204){
            return {"status" : response.status, "message": "Record updated successfully"};
        }else{
            return {"status" : response.status, "message": response.statusText};
        }
    }

    /**
     * Create Request
     * @param {Object}   payload    (required)
     * @param {String}   url        host 
     * @param {String}   method     http method
     * @param {String}   model       
     * @returns {Object} object deserialized
     */
    async create(payload, url, method, model) {

        let resp;
        const request = this.prepare_request(payload, method, model);
 
        try {
            await fetch(url, request).then((response) => {  
                resp = this.parseResponse(payload, response, model);
              
            }).catch(function (error) {
                console.error(error);
            });
        } catch(error) {
            console.error(error);
        }
        return resp;
    }
}

module.exports = {
    Request
}