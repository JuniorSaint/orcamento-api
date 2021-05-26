import * as express from "express";
import TypeServiceController from "../controllers/type-service-controller";

const EntryRouter = express.Router();

EntryRouter.route("/typeservice").get(TypeServiceController.get);
EntryRouter.route("/typeservice/:id").get(TypeServiceController.getById);
EntryRouter.route("/typeservice/create").post(TypeServiceController.post);
EntryRouter.route("/typeservice/:id").put(TypeServiceController.put);
EntryRouter.route("/typeservice/:id").delete(TypeServiceController.delete);



export default EntryRouter;