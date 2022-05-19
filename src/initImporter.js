const { Face } = require('./Face');
const { ImageUtils } = require('./utils/image_utils');
const { ProcessRequest } = require('./models/ProcessRequest');
const { IdentifyRequest } = require('./models/IdentifyRequest');
const { VerifyRequest } = require('./models/VerifyRequest');
const { VerifyIdRequest } = require('./models/VerifyIdRequest');
const { VerifyImagesRequest } = require('./models/VerifyImagesRequest');
const { TemplateRequest } = require('./models/TemplateRequest');

module.exports = {
    Face, 
    ImageUtils, 
    ProcessRequest,
    IdentifyRequest, 
    VerifyRequest,
    VerifyIdRequest,
    VerifyImagesRequest,
    TemplateRequest
}