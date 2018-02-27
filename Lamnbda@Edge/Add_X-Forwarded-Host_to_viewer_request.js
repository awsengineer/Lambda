'use strict';

const querystring = require('querystring');

exports.handler = (event, context, callback) => {
    const request = event.Records[0].cf.request;

    request.headers['x-forwarded-host'] = [{ key: 'x-forwarded-host', value: 'example.com' }];

    callback(null, request);
};

