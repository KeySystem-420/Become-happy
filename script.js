const http = require('http');
const querystring = require('querystring');

const data = querystring.parse(process.argv[2]);

for (let i = 0; i < data.requests; i++) {
http.request({
host: data.ip,
port: data.port,
method: 'HEAD',
headers: {
'Content-Length': data.bytes
}
}).end();
}