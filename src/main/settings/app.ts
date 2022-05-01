import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import { userRoutes } from '@/main/routes/user';
import { roomRoutes } from '@/main/routes/room';
import { mensagemRoutes } from '@/main/routes/mensagem';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(userRoutes);
app.use(roomRoutes);
app.use(mensagemRoutes);

export { app };
