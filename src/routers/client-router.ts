import * as express from "express";
import ClientController from "../controllers/Client-controller";

const EntryRouter = express.Router();

EntryRouter.route("/client").get(ClientController.get);
EntryRouter.route("/client/:id").get(ClientController.getById);
EntryRouter.route("/client/id/name").get(ClientController.getByIdName);
EntryRouter.route("/client/create").post(ClientController.post);
EntryRouter.route("/client/:id").put(ClientController.put);
EntryRouter.route("/client/:id").delete(ClientController.delete);


export default EntryRouter;