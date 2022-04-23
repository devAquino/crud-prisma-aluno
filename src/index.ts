import 'express-async-errors';
import 'dotenv/config';
import bodyParser from 'body-parser';
import { router } from './routes';
import { exceptionError } from './middleware/exceptionError';
import express from 'express';

const app = express();


app.use(express.json());
app.use(bodyParser.json())
app.use(router);

app.use(exceptionError);

export {app};