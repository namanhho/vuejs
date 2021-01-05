import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    'en': {},
    'vi': {
        messAddSuccess: 'Thông tin nhân viên đã được thêm thành công',
        messEditSuccess: 'Thông tin nhân viên đã được sửa thành công',
        messDeleteSuccess: 'Thông tin nhân viên đã được sửa thành công',
        confirmDelete: "Bạn có thực sự muốn xóa nhân viên đã chọn không?",
        messDeleteNotChooseRecord: 'Vui lòng chọn bản ghi muốn xóa',
        messEditNotChooseRecord: 'Vui lòng chọn bản ghi muốn xem và sửa',
        titleFormAddEmployee: "Thêm mới hồ sơ",
    }
};

const i18n = new VueI18n({
    locale: 'vi', // set locale
    fallbackLocale: 'vi', // set fallback locale
    messages, // set locale messages
});

export default i18n;