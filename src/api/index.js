import { version } from '../../package.json';
import { Router } from 'express';
import { exec } from 'child_process';
import validate from'./validate';

export default (config) => {
	let api = Router();

	// expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version });
	});

	api.post('/hook', validate, (req, res) => {	
		exec(`cd /var/www/samples/ && git pull git@github.com:RodinJS/Rodin-Samples.git`, (error, stdout, stderr) => {
			if (error) {
				console.error(`-----> exec error: ${error}`);
				res.status(400).send({error: error, secret: true, body: req.body});
			}
			console.log(`stdout: ${stdout}`);
			console.log(`-----> stderr: ${stderr}`);
			res.status(200).send({secret: true, headers: req.headers, body: req.body});
		});
	});

	return api;
}