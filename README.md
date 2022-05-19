![https://yk-website-images.s3.eu-west-1.amazonaws.com/LogoV4_TRANSPARENT.png](https://yk-website-images.s3.eu-west-1.amazonaws.com/LogoV4_TRANSPARENT.png)

# YooniK Face API Client SDK NODE

[![License](https://img.shields.io/github/license/dev-yoonik/YK-Face-SDK-NODE)](https://github.com/dev-yoonik/YK-Face-SDK-NODE/blob/master/LICENSE)
[![Version](https://img.shields.io/github/v/release/dev-yoonik/YK-Face-SDK-NODE?display_name=tag)](https://github.com/dev-yoonik/YK-Face-SDK-NODE)

This repository implements an integration SDK to facilitate the consumption of the YooniK.Face API, an [YooniK Services](https://yoonik.me) offering.

For more information please [contact us](mailto:tech@yoonik.me).

## Requirements

NODE 16 and later

## Getting Started

```
npm install yoonik-face-api
```

## Example

Verifies the faces similarity between two images in base 64

```javascript
const apiKey = "YOUR-X-API-KEY";
const baseURL = "YOUR-API-ENDPOINT";
const { Face, ImageUtils, VerifyImagesRequest} = require('../../src/initImporter');

const client = new Face({apiKey, baseURL});
const payload = new VerifyImagesRequest();
const iu = new ImageUtils();

(async () => {
    try {
        const img1 = await iu.imagePath_base64_encode("<IMAGE_PATH>")
        payload.setFirstImage(img1);     
        
        const img2 = await iu.imagePath_base64_encode("<IMAGE_PATH>")
        payload.setSecondImage(img2);

        let result = await client.verify_images(payload);
        console.log(result);
    } catch (error) {
        console.error('Exception when calling client.verify_images: ', error);
    }
})();
 
```

If you're interested in using YooniK.Face API for identification purposes, please visit our [examples](https://github.com/dev-yoonik/YK-Face-SDK-NODE/tree/main/examples).