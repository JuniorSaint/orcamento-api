import config from '../infra/config'
import * as HttpStatus from "http-status";
import TypeServiceService from '../services/type-service-service'
import Helper from "../infra/helper";
import BudgetingController from './budgeting-controller';



class TypeServiceController {
    
    async delete(req, res) {
        try {

            const _id = req.params.id;
            await TypeServiceService.delete(_id);
            Helper.sendResponse(res, HttpStatus.OK, "Deletado com sucesso!");
    
        } catch (error) {
            console.error(error);
        }
    }

    async post(req, res) {
        try {
            let vm = req.body;
            await TypeServiceService.post(vm);
            Helper.sendResponse(res, HttpStatus.OK, "Cadastrado com sucesso!");
        } catch (error) {
            console.error(error);
        }
    }



    async put(req, res) {
        try {
            const _id = req.params.id;
            let news = req.body;
            await TypeServiceService.put(_id, news);
            Helper.sendResponse(res, HttpStatus.OK, `Atualizado com sucesso!`);

        } catch (error) {
            console.error(error);
        }
    }



    async get(req, res) {

        try {
            let response = await TypeServiceService.get();
            Helper.sendResponse(res, HttpStatus.OK, response)

        } catch (error) {
            console.error(error);
        }
    }

    async getById(req, res) {
        try {
            const _id = req.params.id;
            let response = await TypeServiceService.getById(_id);
            Helper.sendResponse(res, HttpStatus.OK, response);

        } catch (error) {
            console.error(error);
        }
    }





}

export default new TypeServiceController();