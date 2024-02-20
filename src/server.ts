/* eslint-disable @typescript-eslint/no-unused-vars */
import express from 'express';
import cors from 'cors';
import { employeeRouter } from './routers/employeeRouter';
import * as config from './config.js';

export const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
	res.send(`
<html>
	<body>
	<h1>Minimal Node/Express API</h1>
	<ul>
		<li>GET all users - <a href="http://localhost:${config.getPort()}/employees">http://localhost:${config.getPort()}/employees</a></li>
	</ul>
	</body>
</html>
	`)

});

app.use('/employees', employeeRouter);
