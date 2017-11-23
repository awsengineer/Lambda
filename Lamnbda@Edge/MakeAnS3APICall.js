'use strict';

exports.handler = (event, context, callback) => {
    /*
     * Generate HTTP response using 200 status code with a simple body.
     */
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
        
        var params = {
  Bucket: "ztest1411", 
  Key: "test"
 };
 s3.getObject(params, function(err, body){
   if (err) console.log(err, err.stack); // an error occurred
   else     console.log(body);           // successful response

 });
        
        
    };

    callback(null, response);
};

