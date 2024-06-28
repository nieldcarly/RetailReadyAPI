const AWS = require('aws-sdk');
const fs = require('fs');

AWS.config.update({
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    region: process.env.REGION
});

// Create S3 service object
const s3 = new AWS.S3();

function uploadFileToS3(bucketName, key, filePath) {
    const params = {
        Bucket: bucketName,
        Key: key,
        Body: fs.createReadStream(filePath)
    };

    return new Promise((resolve, reject) => {
        s3.upload(params, (err, data) => {
            if (err) reject(err);
            else resolve(data);
        });
    });
}

function downloadFileFromS3(bucketName, key, downloadPath) {
    const params = {
        Bucket: bucketName,
        Key: key
    };

    return new Promise((resolve, reject) => {
        s3.getObject(params, (err, data) => {
            if (err) {
                console.error('Error retrieving file from S3:', err);
                reject(err);
            } else {
                const fileStream = require('fs').createWriteStream(downloadPath);
                fileStream.write(data.Body);
                fileStream.end();
                resolve(downloadPath);
            }
        });
    });
}

module.exports = {
    uploadFileToS3,
    downloadFileFromS3
};