import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import schoolRouter from './Routes/school.routes.js';

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/v1/', schoolRouter);

export default app;
