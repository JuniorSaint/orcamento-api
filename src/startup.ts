import * as express from 'express';
import * as cors from 'cors';
import DataBase from './infra/db';
import productRouter from './routers/budgeting-router';
import clientRouter from './routers/client-router';
import typeServiceRouter from './routers/type-service-router';
import userRouter from './routers/user-router';
import budgetingRouter from './routers/budgeting-router'
// import authRouter from './routers/auth-router';
// import Auth from './infra/auth';

class StartUp {

    public app: express.Application;
    private _db: DataBase;

    constructor() {
        this.app = express();
        this._db = new DataBase();
        this._db.createConnection();
        this.middler();
        this.routes();
    }

    enableCors() {
        const options: cors.CorsOptions = {
          methods: 'GET,OPTIONS,PUT,POST,DELETE,PATCH',
          origin: '*'
        };
    
        this.app.use(cors(options));
      }

    middler() {
        this.enableCors();
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }

    routes() {        
        this.app.route('/').get((req, res) => {
            res.send({ versao: '0.0.1' });
        });        

        // this.app.use('/', productRouter);               
        this.app.use('/client', clientRouter);        
        this.app.use('/typeservice', typeServiceRouter);        
        this.app.use('/user', userRouter);        
        this.app.use('/budgeting', budgetingRouter);        
    }
}

export default new StartUp();