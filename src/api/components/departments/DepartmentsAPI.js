import BaseAPI from '@/api/base/BaseAPI.js';

class DepartmentsAPI extends BaseAPI {
    constructor(){
        super();
        this.controler = "departments";
    }
}

export default new DepartmentsAPI();