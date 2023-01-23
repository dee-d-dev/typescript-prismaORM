import { Router } from "express";
import userController from "../controllers/user.controller";

const userRoute: Router = Router();
const controller = new userController();

userRoute.get("/user", controller.getAll);
userRoute.post("/create", controller.createUser);
userRoute.post("/get", controller.getUser);

export default userRoute;
