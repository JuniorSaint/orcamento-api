import * as express from "express";
import ClientController from "../controllers/Client-controller";

const EntryRouter = express.Router();

EntryRouter.route("/").get(ClientController.get);
EntryRouter.route("/:id").get(ClientController.getById);
EntryRouter.route("/id/name").get(ClientController.getByIdName);
EntryRouter.route("/create").post(ClientController.post);
EntryRouter.route("/:id").put(ClientController.put);
EntryRouter.route("/:id").delete(ClientController.delete);


export default EntryRouter;