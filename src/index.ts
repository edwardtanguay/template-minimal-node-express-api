import * as config from './config.js';
import { app } from './server.js';

app.listen(config.getPort(), () => {
	console.log(`http://localhost:${config.getPort()}`);
})