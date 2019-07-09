'use strict';

const AWS = require('aws-sdk');
const SNS = new AWS.SNS();


module.exports.hello = (event, context, callback) => {
  var bucket = event.Records[0].s3.bucket.name;
  var fileName = event.Records[0].s3.object.key;

  console.log(bucket)
  console.log(fileName)

  const params = {
    Message: `A new file: ${fileName}has been uploaded to the bucket: ${bucket} `,
    TopicArn: "arn:aws:sns:us-east-1:${process.env.accountId}:s3uploadTopic"
  }
  //console.log("params", params)
  SNS.publish(params, function (err, data) {
    if (err) {
      console.error(err.stack);
      //return callback(error);
    } else {
      console.log(data);
    }
  })

}




module.exports.bye = (event, context, callback) => {
  var bucket = event.Records[0].s3.bucket.name;
  var fileName = event.Records[0].s3.object.key;

  console.log(bucket)
  console.log(fileName)

  const params = {
    Message: `A file named : ${fileName} has been deleted from the bucket: ${bucket} `,
    TopicArn: "arn:aws:sns:us-east-1:${process.env.accountId}:s3uploadTopic"
  }
  //console.log("params", params)
  SNS.publish(params, function (err, data) {
    if (err) {
      console.error(err.stack);
      //return callback(error);
    } else {
      console.log("sns msg sent", data);
    }
  })



}


