import { IApiStatus } from './interfaces.js';

export const getPort = () => {
	return 4206;
}

export const apiStatus = (): IApiStatus => {
	return {
		status: "live",
		whenLiveAgainDateTime: "2024-01-21 14:00:00"
	}
}