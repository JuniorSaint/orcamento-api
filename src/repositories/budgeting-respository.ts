import * as mongoose from "mongoose";
import BudgetingSchema from "../models/budgeting-model";

export default mongoose.model('budgeting', BudgetingSchema);