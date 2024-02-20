/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { NextFunction } from 'express';
import cors from 'cors';

export const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
	res.send(`
<html>
	<body>
	<h1>Minimal Node/Express API</h1>
	<ul>
		<li>GET all users - <a href="http://localhost:4206/flashcards">http://localhost:4206/flashcards</a></li>
	</ul>
	</body>
</html>
	`)

});

// app.use('/flashcards', flashcardRouter);
