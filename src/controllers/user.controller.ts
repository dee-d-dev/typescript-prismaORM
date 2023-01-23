import UserService from "../services/user.service";
import { Request, Response } from "express";

class userController {
  user = new UserService();

  public getAll = async (req: Request, res: Response) => {
    const users = await this.user.getUsers();

    return res.status(200).json(users);
  };

  public createUser = async (req: Request, res: Response) => {
    const { firstName, lastName } = req.body;
    const user = await this.user.createUser(firstName, lastName);

    return res.status(200).json(user);
  };

  public getUser = async (req: Request, res: Response) => {
    const user = await this.user.getUser();

    return res.status(200).json(user);
  }
}

export default userController;
