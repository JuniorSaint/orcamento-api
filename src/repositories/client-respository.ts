import * as mongoose from "mongoose";
import ClientSchema from "../models/client-model";

export default mongoose.model('client', ClientSchema);