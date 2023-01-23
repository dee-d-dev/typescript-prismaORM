import UserModel from "../models/user.model";
import { Request, Response } from "express";

class userController {
  user = new UserModel();

  public getAll = (req: Request, res: Response) => {
    this.user.getUser("user controller", "from route");
  };
}

export default userController;
