import { describe, expect, it } from 'vitest';
import request from 'supertest';
import { app } from "./server.js";

describe('GET /', async () => {
	const response = await request(app).get('/');

	it('receives the correct HTTP code', () => {
		expect(response.statusCode).toBe(200);
	});

	it('has the correct content-type', () => {
		expect(response.headers['content-type']).toMatch(/text\/html/);
	});

	it('includes expected text', () => {
		expect(response.text.includes('Node/Express')).toBeTruthy();
	});
});

describe('GET /flaschards/info/logs', async () => {
	const response = await request(app).get('/flashcards/info/logs');

	it('receives the correct HTTP code', () => {
		expect(response.statusCode).toBe(200);
	});

	it('has the correct content-type', () => {
		expect(response.headers['content-type']).toMatch(/text\/html/);
	});
});

describe('GET /flashcards', async () => {
	const response = await request(app).get('/flashcards');
	it('receives correct HTTP code', () => {
		expect(response.statusCode).toBe(200);
	});
	it('has correct content-type', () => {
		expect(response.headers['content-type']).toMatch(/application\/json/);
	});
});


