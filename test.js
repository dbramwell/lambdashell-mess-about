// const s3 = new AWS.S3();

// s3.listBuckets().promise()
Promise.resolve({})
  .then((res) => {
    console.log(res);
    const AWS = require('aws-sdk');
  })
  .catch((err) => {
    console.error(err);
  });
