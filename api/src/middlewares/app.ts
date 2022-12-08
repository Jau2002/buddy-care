import express, { NextFunction, Request, Response } from 'express';
import morganBody from 'morgan-body';
import rootRoute from '../routes';

const app = express();

app.use(express.json({ strict: true }));

app.use(express.urlencoded({ extended: true }));

app.use((_: Request, res: Response, next: NextFunction): any => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Credentials', 'true');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});

morganBody(app, {
	theme: 'inverted',
	logReqDateTime: false,
	logIP: false,
	logReqUserAgent: false,
	immediateReqLog: false,
});

app.use('/', rootRoute);

export default app;
