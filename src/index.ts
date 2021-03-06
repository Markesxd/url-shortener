import express from 'express';
import dotenv from 'dotenv';
import router from './routs';
import cors from 'cors';
import handler from './middleware/errhandler';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use(router);
app.use(handler);

app.listen(process.env.PORT, () => console.log(`Server Running on port ${process.env.PORT}`));