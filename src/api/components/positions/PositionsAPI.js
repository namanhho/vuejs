import BaseAPI from '@/api/base/BaseAPI.js';

class PositionsAPI extends BaseAPI {
    constructor(){
        super();
        this.controler = "positions";
    }
}

export default new PositionsAPI();