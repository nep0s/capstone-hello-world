import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

const cors = require('cors')

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5000;
app.use(cors({
  origin: '*'
}));

app.get('/', async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send({
    message: 'Hello from backend!',
  });
});

try {
  app.listen(port, (): void => {
    console.log(`Connected successfully on port ${port}`);
  });
} catch (error: any) {
  console.error(`Error occurred: ${error.message}`);
}
