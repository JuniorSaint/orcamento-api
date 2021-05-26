
import * as mongoose from 'mongoose';


const TypeServiceSchema = new mongoose.Schema({


        typeService: String,
        descriptionService: String
  },
{ timestamps: true ,
  versionKey: false
},
);

export default TypeServiceSchema;




    