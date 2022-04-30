import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

export { app };
