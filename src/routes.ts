import { NextFunction, Request, Response } from 'express';
import { MainController } from './controllers/main';
import { auth } from './services/auth';

export class Routes {

  public mainController: MainController = new MainController();

  public routes(app: any): void {
    app.route('/')
      .get(this.mainController.index);

    app.route('/secure')
      .get((this.requireUser), this.mainController.secure);
  }

  // Middleware to require a user on Cognito
  private requireUser(req: Request, res: Response, next: NextFunction) {
    const accessToken = req.headers.authorization.toString().split(' ')[1];

    if (!accessToken) {
      return res.status(401).send({
        message: 'Access Token missing from header',
      });
    }

    auth.validate(accessToken, (err: any, response: any) => {
      if (err) {
        return res.status(401).send({
          message: err,
        });
      }

      res.locals.user = response;
      next();
    });
  }
}
