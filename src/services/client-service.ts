import ClientRepository from "../repositories/client-respository";
     
class ClientService {
  
  async get() {
    let result = await ClientRepository.find({}).sort({name: 1});
    return result;
  }
  
  async getByIdName() {
    let result = await ClientRepository.find({}, 'name').sort({name: 1});
    return result;
  }
 
  async getById(_id) {
    let result = await ClientRepository.findById(_id);
    return result;
  }
 
  async post(news) {
    let result = await ClientRepository.create(news);
    return result;
  }
 
  async put(_id, news) {
    let result = await ClientRepository.findByIdAndUpdate(_id, news);
    return result;
  }
 
  async delete(_id) {
    let result = await ClientRepository.findByIdAndRemove(_id);
    return result;
  }
}
 
export default new ClientService();