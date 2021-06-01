import * as mongoose from 'mongoose';

const PhoneSchema = new mongoose.Schema({
    phoneType: String,
    phoneNumber: String,
    social: String
})

const ClientSchema = new mongoose.Schema({
    name: String,
    cpf: Number,
    email: {
        type: String,
        lowercase: true
    },
    phone: [PhoneSchema],
    address: {
        street: String,
        district: String,
        complement: String,
        city: String,
        UF: String,
        zipCode: Number,
    },
    note: String,
}, {
    timestamps: true,
    versionKey: false
},
);

export default ClientSchema;