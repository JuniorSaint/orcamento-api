import config from '../infra/config';
import * as HttpStatus from "http-status";
import ClientService from '../services/client-service';
import Helper from "../infra/helper";
import BudgetingController from "./budgeting-controller";


class ClientController {

    async post(req, res) {
        try {
            let vm = req.body;
            await ClientService.post(vm);
            Helper.sendResponse(res, HttpStatus.OK, "Cadastrado com sucesso!");
        } catch (error) {
            console.error(error);
        }
    }



    async put(req, res) {
        try {
            const _id = req.params.id;
            let news = req.body;
            await ClientService.put(_id, news);
            Helper.sendResponse(res, HttpStatus.OK, `Atualizado com sucesso!`);

        } catch (error) {
            console.error(error);
        }
    }



    async get(req, res) {

        try {
            let response = await ClientService.get();
            Helper.sendResponse(res, HttpStatus.OK, response)

        } catch (error) {
            console.error(error);
        }
    }
    async getByIdName(req, res) {

        try {
            let response = await ClientService.getByIdName();
            Helper.sendResponse(res, HttpStatus.OK, response)

        } catch (error) {
            console.error(error);
        }
    }

    async getById(req, res) {
        try {
            const _id = req.params.id;
            let response = await ClientService.getById(_id);
            Helper.sendResponse(res, HttpStatus.OK, response);

        } catch (error) {
            console.error(error);
        }
    }




    async delete(req, res) {
        try {
            const _id = req.params.id;
            const bud = BudgetingController.getByCli({_idClient: _id});
            if(!bud){
            await ClientService.delete(_id);
            Helper.sendResponse(res, HttpStatus.OK, "Deletado com sucesso!");
            }else{
                Helper.sendResponse(res, HttpStatus.OK, "Cliente Vinculado a um orçamento");
            }
        } catch (error) {
            console.error(error);
        }
    }

}

export default new ClientController();