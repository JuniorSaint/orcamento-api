import * as express from "express";
import UserController from "../controllers/user-controller";

const userRouter = express.Router();

userRouter.route("/").get(UserController.get);
userRouter.route("/:id").get(UserController.getById);
userRouter.route("/create").post(UserController.post);
userRouter.route("/:id").put(UserController.put);
userRouter.route("/:id").delete(UserController.delete);

export default userRouter;