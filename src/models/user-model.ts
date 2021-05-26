import * as mongoose from 'mongoose';



const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  active:  Boolean,
  userKind: String

  },
{ timestamps: true ,
  versionKey: false
},
);

export default UserSchema;
