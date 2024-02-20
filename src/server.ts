/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { NextFunction } from 'express';
import { flashcardRouter } from './routers/flashcardRouter.js';
import cors from 'cors';
import { maintenanceMode } from './middleware/maintenanceMode.js';
import { logger, morganRouteLogger } from './logger.js';

export const app = express();
app.use(express.json());
app.use(cors());
app.use(maintenanceMode);
app.use(morganRouteLogger);

app.get('/', (req, res) => {
	res.send(`
<html>
	<head>
		<style>
			body {
				background-color: #aaa;
				font-family: sans-serif;
				padding: 1rem;
			}
			li {
				margin-bottom: .5rem;
			}
		</style>
	</head>
	<body>
	<h1>Node/Express API</h1>
	<ul>
		<li>GET all flashcards - <a href="http://localhost:4206/flashcards">http://localhost:4206/flashcards</a></li>
		<li>GET one flashcard - <a href="http://localhost:4206/flashcards/82Js23">http://localhost:4206/flashcards/82Js23</a></li>
		<li>GET log report - <a href="http://localhost:4206/flashcards/info/logs">http://localhost:4206/flashcards/info/logs</a></li>
		<li>For POST, PUT, PATCH and DELETE routes, see <strong>test.rest</strong> (requires <a href="https://marketplace.visualstudio.com/items?itemName=humao.rest-client">VSCode REST Client</a>)</li>
	</ul>
	</body>
</html>
	`)

});

app.use('/flashcards', flashcardRouter);

// global error catching
app.use((err: Error, req: express.Request, res: express.Response, next: NextFunction) => {
	console.error(err.message)
	logger.error(err.message);
	res.status(500).send('We are currently experiencing technical difficulties. Try again at a later time, or call 423 23423 23 234.')
});