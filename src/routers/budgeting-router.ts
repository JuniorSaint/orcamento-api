import * as express from "express";
import budgetingController from "../controllers/budgeting-controller";

const EntryRouter = express.Router();

EntryRouter.route("/budgeting").get(budgetingController.get);
EntryRouter.route("/budgeting/:id").get(budgetingController.getById);
EntryRouter.route("/budgeting/create").post(budgetingController.post);
EntryRouter.route("/budgeting/:id").put(budgetingController.put);
EntryRouter.route("/budgeting/:id").delete(budgetingController.delete);



export default EntryRouter;