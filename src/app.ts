import { eventContext } from 'aws-serverless-express/middleware';
import { json, urlencoded } from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';

class App {

  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();    
  }

  private config(): void {
    this.app.use(cors());
    this.app.use(json());
    this.app.use(urlencoded({ extended: true }));
    this.app.use(eventContext());

    this.app.get('/', (req, res) => {
      res.send('Hello World!');
    });
  }
}

export default new App().app;
