class ImageUtils {

    constructor() {
        this.fs = require('fs');
        this.axios = require('axios');
    }

    /**
     * function to encode file data to base64 encoded string
     * @param {String} file -  image to convert (required)
     */
    base64_encode(file) {
        return this.fs.readFileSync(file, 'base64');
    }

    async imagePath_base64_encode(path) {
        let image = await this.axios.get(path, { responseType: 'arraybuffer' });
        return Buffer.from(image.data).toString('base64');
    }
}

module.exports = {
    ImageUtils
}