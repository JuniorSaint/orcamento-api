import * as mongoose from 'mongoose';

const IService = new mongoose.Schema({
  typeServico: String,
  valueUnit: Number,
  amount: Number,
  valueAmount: Number
  });

const BudgetingSchema = new mongoose.Schema({

  _id: String,
  _idClient: String,
  dateEnter: Date,
  DateDelivery: Date,
  service: [IService], 
  valueTotal: Number,
  valueISS: Number,
  situation: String,
  note: String

  },
{ timestamps: true ,
  versionKey: false
},
);
export default BudgetingSchema;


