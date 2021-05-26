import TypeServiceRepository from "../repositories/type-service-repository";
     
class TypeServiceService {
  
  async get() {
    let result = await TypeServiceRepository.find({}).sort({name: 1});
    return result;
  }
 
  async getById(_id) {
    let result = await TypeServiceRepository.findById(_id);
    return result;
  }
 
  async post(news) {
    let result = await TypeServiceRepository.create(news);
    return result;
  }
 
  async put(_id, news) {
    let result = await TypeServiceRepository.findByIdAndUpdate(_id, news);
    return result;
  }
 
  async delete(_id) {
    let result = await TypeServiceRepository.findByIdAndRemove(_id);
    return result;
  }
}
 
export default new TypeServiceService();