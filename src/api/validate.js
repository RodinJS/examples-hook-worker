import checkHmac from './hmacChecker';
import config from '../config.json';

export default (req, res, next) => {
  if (!req.headers['x-hub-signature'] || !req.headers['x-hub-signature'].length >= 5) {
    let err = new Error('You must include x-hub-signature header. See github docs.');
    err.status = 401;
    return next(err);
  }

  let requestHmac = req.headers['x-hub-signature'].substring(5),
      secret = config.secret;

  if (!checkHmac(requestHmac, req.body, secret)) {
    let err = new Error('HMAC Failed!');
    err.status = 403;
    return next(err);
  }

  next();
};