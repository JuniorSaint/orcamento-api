import budgetingRespository from "../repositories/budgeting-respository";
import BudgetingRepository from "../repositories/budgeting-respository";
     
class BudgetingService {
  
  async get() {
    let result = await BudgetingRepository.find({}).sort({name: 1});
    return result;
  }
 
  async getById(_id) {
    let result = await BudgetingRepository.findById(_id);
    return result;
  }

  async getByCli(_id) {
    let result = await budgetingRespository.find({_idClient: _id});
  }

  async post(news) {
    let result = await BudgetingRepository.create(news);
    return result;
  }
 
  async put(_id, news) {
    let result = await BudgetingRepository.findByIdAndUpdate(_id, news);
    return result;
  }
 
  async delete(_id) {
    let result = await BudgetingRepository.findByIdAndRemove(_id);
    return result;
  }
}
 
export default new BudgetingService();