import { eventContext } from 'aws-serverless-express/middleware';
import { json, urlencoded } from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';
import { Routes } from './routes';

class App {

  public app: express.Application;
  public apiRoutes: Routes = new Routes();

  constructor() {
    this.app = express();
    this.config();
    this.apiRoutes.routes(this.app);
  }

  private config(): void {
    this.app.use(cors());
    this.app.use(json());
    this.app.use(urlencoded({ extended: true }));
    this.app.use(eventContext());
  }
}

export default new App().app;
