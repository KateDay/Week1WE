const https = require('https');

const options = {
	host: 'www.example.org',
	path: '/',
};

let callback = function(response) {
	console.log('In response handler callback!');

	response.on('data', function(chunk) {
		console.log('[-- CHUNK OF LENGTH ' + chunk.length + ' --]');
		console.log(chunk.toString());
	});
};

console.log('Im about to make the request!');

https.request(options, callback).end();
console.log("I've made the request!");
