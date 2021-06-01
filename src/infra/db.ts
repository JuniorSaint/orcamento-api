import * as mongoose from "mongoose";

class DataBase{
    private DB_URL = 'mongodb+srv://junior:t4az32UHr4bsVqH@ecommerce.jfuj2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

    createConnection(){
        mongoose
        .connect(this.DB_URL, {
          useCreateIndex: true,
          useNewUrlParser: true,
          useUnifiedTopology: true,
        })
        .then(() => console.log('Database connected:', this.DB_URL))
        .catch(error => console.error('Database connection error:', error));
    }
}

export default  DataBase;


