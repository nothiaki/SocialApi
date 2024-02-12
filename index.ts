import express from 'express';
import cors from 'cors';
import router from './routes/routes.js';

const app = express();
const PORT: number = 3000;

app.use(express.json());
app.use(cors());
app.use('/', router);

app.listen(PORT, () => {
    console.log(`> Server on: http://localhost:${PORT}`);
});