import express, { Router } from 'express';
import * as employeeHandlers from '../handlers/employeeHanders';

export const employeeRouter = Router();

employeeRouter.get('/', (_req, res: express.Response) => {
	const employees = employeeHandlers.getAllEmployees();
	res.json(employees);
});