export interface INewFlashcard {
	category: string;
	front: string
	back: string;
}

export interface IFlashcard extends INewFlashcard {
	suuid: string;
}

export interface ITestingFlashcard extends IFlashcard {
	backIsShowing: boolean;
}

export type IApiStatus = {
	status: "live" | "maintenanceMode",
	whenLiveAgainDateTime: string
}

export interface ILogItem {
	timestamp: string;
	level: string;
	message: string;
	method: string;
	status: string;
	remoteAddr: string;
	url: string;
	responseTime: string;
}

export interface IPatchFlashcard {
	category?: string;
	front?: string
	back?: string;
}

export interface IDatabase {
	flashcards: IFlashcard[];
}

export interface IPromiseResolution {
	message: string;
}

export const convertFlashcardToTestingFlaschard = (flashcard: IFlashcard): ITestingFlashcard => {
	return {
		...flashcard,
		backIsShowing: false
	}
}

export const blankNewFlashcard: INewFlashcard = {
	category: 'linux',
	front: '',
	back: ''
}
