import { Router } from "express";
import { addSchool, listSchools } from "../Controller/school.controller.js";

const schoolRouter = Router();

schoolRouter.get('/', listSchools);
schoolRouter.post('/add', addSchool);

export default schoolRouter;
