import BaseAPI from '@/api/base/BaseAPI.js';
import BaseAPIConfig from '@/api/base/BaseAPIConfig.js';
class EmployeesAPI extends BaseAPI {
    constructor(){
        super();
        this.controler = "employees";
    }
    getMaxEmployeeCode(){
        return BaseAPIConfig.get(`${this.controler}/getmaxemployeecode`);
    }
}

export default new EmployeesAPI();