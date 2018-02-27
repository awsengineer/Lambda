'use strict';
var AWS = require("aws-sdk")
var s3 = new AWS.S3();

exports.handler = (event, context, callback) => {
    /*
     * Generate HTTP response using 200 status code with a simple body.
     */
    var params = {
        Bucket: "mybucket", 
        Key: "object1"
       };
       s3.getObject(params, function(err, data) {
         if (err) console.log(err, err.stack); // an error occurred
         else     {
             console.log(data);           // successful response
            const response = {
                status: '200',
                statusDescription: 'OK',
                headers: {
                    vary: [{
                        key: 'Vary',
                        value: '*',
                    }],
                    'last-modified': [{
                        key: 'Last-Modified',
                        value: '2017-01-13',
                    }],
                },
                body: data,
            };
        }
        callback(null, response);
       });
};