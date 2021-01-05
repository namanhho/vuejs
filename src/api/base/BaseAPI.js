import BaseAPIConfig from '@/api/base/BaseAPIConfig.js';

export default class BaseAPI {

    constructor() {
        this.controler = null;
    }
    /**
     * Phương thức lấy tất cả dữ liệu
     */
    async getAll() {
     return await BaseAPIConfig.get(`${this.controler}`);
    }
    /**
     * Hàm lấy dữ liệu phân trang
     * @param {*} payload 
     */
    paging(payload) {
        return BaseAPIConfig.get(`${this.controler}/paging`, { params: payload });
    }
    /**
     * Hàm thêm mới dữ liệu
     * @param {*} body 
     */
    post(body){
        return BaseAPIConfig.post(`${this.controler}`, body);
    }
    /**
     * Hàm cập nhật dữ liệu
     * @param {*} id 
     * @param {*} body 
     */
    update(id, body) {
        return BaseAPIConfig.put(`${this.controler}/${id}`, body);
    }
    /**
     * Hàm xóa bản ghi
     * @param {*} id 
     */
    delete(id) {
        return BaseAPIConfig.delete(`${this.controler}/${id}`);
    }

    getById(id) {
        return BaseAPIConfig.get(`${this.controler}/${id}`);
    }
}