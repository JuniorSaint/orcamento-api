import * as HttpStatus from "http-status";
import ClientService from '../services/client-service';
import Helper from "../infra/helper";
import BedgetingService from "../services/budgeting-service"

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
            const bud = BedgetingService.getByCli(_id);
            if(!bud){
            await ClientService.delete(_id);
            Helper.sendResponse(res, HttpStatus.OK, "Deletado com sucesso!");
            }else{
                res.status(301).json({
                    message: 'Cliente esta vinculado a um orçamento'
                })
            }
        } catch (error) {
            console.error(error);
        }
    }
}

export default new ClientController();