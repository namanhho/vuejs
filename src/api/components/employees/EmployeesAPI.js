import BaseAPI from '@/api/base/BaseAPI.js';

class EmployeesAPI extends BaseAPI {
    constructor(){
        super();
        this.controler = "employees";
    }
}

export default new EmployeesAPI();