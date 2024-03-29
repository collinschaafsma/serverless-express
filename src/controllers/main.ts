import { Request, Response } from 'express';

export class MainController {

  public index(req: Request, res: Response) {
    res.status(200).send({
      message: 'Hello World',
    });
  }

  public secure(req: Request, res: Response) {
    res.status(200).send({
      user: res.locals.user,
    });
  }
}
