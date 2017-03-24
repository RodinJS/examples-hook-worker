import { version } from '../../package.json';
import { Router } from 'express';
import { exec } from 'child_process';

export default (config) => {
	let api = Router();

	// expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version });
	});

	api.post('/hook', (req, res) => {
		if(req.body.secret === config.secret) {
			exec(`cd /var/www/samples/ && git pull git@github.com:RodinJS/Rodin-Samples.git`, (error, stdout, stderr) => {
				if (error) {
					console.error(`-----> exec error: ${error}`);
					res.status(400).send({error: error, secret: true, body: req.body});
				}
				console.log(`stdout: ${stdout}`);
				console.log(`-----> stderr: ${stderr}`);
				res.status(200).send({secret: true, body: req.body});
			});
		} else {
			res.status(400).send({secret: false, body: req.body});
		}
	});

	return api;
}