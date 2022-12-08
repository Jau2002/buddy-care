import express from 'express';
import morganBody from 'morgan-body';
import rootRoute from '../routes';

const app = express();

app.use(express.json({ limit: '50mb' }));

morganBody(app, {
	theme: 'inverted',
	logReqDateTime: false,
	logIP: false,
	logReqUserAgent: false,
	immediateReqLog: false,
});

app.use('/', rootRoute);

export default app;
