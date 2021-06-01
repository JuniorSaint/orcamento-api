import * as express from "express";
import TypeServiceController from "../controllers/type-service-controller";

const EntryRouter = express.Router();

EntryRouter.route("/").get(TypeServiceController.get);
EntryRouter.route("/:id").get(TypeServiceController.getById);
EntryRouter.route("/create").post(TypeServiceController.post);
EntryRouter.route("/:id").put(TypeServiceController.put);
EntryRouter.route("/:id").delete(TypeServiceController.delete);

export default EntryRouter;