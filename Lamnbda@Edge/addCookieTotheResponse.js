'use strict';

exports.handler = (event, context, callback) => {
    const response = event.Records[0].cf.response;
    const headers = response.headers;

    headers['server'] = [{
        key: "Server",
        value: "My lovely S3 bucket!",
    }];

    headers['content-security-policy'] = [{
        key: "content-security-policy",
        value: "What is my security policy? :)",
    }];
    
    headers['x-xss-protection'] = [{
        key: "x-xss-protection",
        value: "1; mode=block (or whatever value that you prefer!)",
    }];
    
    response.cookie[0] = [{
	key: "GB",
	value: "Yes",
    }];
 
    callback(null, response);
};
