import * as HttpStatus from "http-status";
import BudgetingService from '../services/budgeting-service'
import Helper from "../infra/helper";

class BudgetingController {
    async post(req, res) {
        try {
            let vm = req.body;
            await BudgetingService.post(vm);
            Helper.sendResponse(res, HttpStatus.OK, "Cadastrado com sucesso!");
        } catch (error) {
            console.error(error);
        }
    }

    async getByCli(req, res) {
        try {
            let _id = req.params.id
            let result = await BudgetingService.getByCli({ id: _id });
            return result;
        } catch (error) {
            console.error(error);
        }
    }

    async put(req, res) {
        try {
            const _id = req.params.id;
            let news = req.body;
            await BudgetingService.put(_id, news);
            Helper.sendResponse(res, HttpStatus.OK, `Atualizado com sucesso!`);
        } catch (error) {
            console.error(error);
        }
    }

    async get(req, res) {
        try {
            let response = await BudgetingService.get();
            Helper.sendResponse(res, HttpStatus.OK, response)
        } catch (error) {
            console.error(error);
        }
    }

    async getById(req, res) {
        try {
            const _id = req.params.id;
            let response = await BudgetingService.getById(_id);
            Helper.sendResponse(res, HttpStatus.OK, response);
        } catch (error) {
            console.error(error);
        }
    }

    async delete(req, res) {
        try {
            const _id = req.params.id;
            await BudgetingService.delete(_id);
            Helper.sendResponse(res, HttpStatus.OK, "Deletado com sucesso!");
        } catch (error) {
            console.error(error);
        }
    }
}

export default new BudgetingController();