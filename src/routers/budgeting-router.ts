import * as express from "express";
import budgetingController from "../controllers/budgeting-controller";

const EntryRouter = express.Router();

EntryRouter.route("/").get(budgetingController.get);
EntryRouter.route("/:id").get(budgetingController.getById);
EntryRouter.route("/create").post(budgetingController.post);
EntryRouter.route("/:id").put(budgetingController.put);
EntryRouter.route("/:id").delete(budgetingController.delete);

export default EntryRouter;