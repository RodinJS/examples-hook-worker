import crypto from 'crypto';

export default (requestHmac, body, secret) => {
	let generatedHmac = crypto.createHmac('sha1', secret).update(new Buffer(JSON.stringify(body), 'utf-8')).digest('hex');
	return generatedHmac === requestHmac;
};