<template>
  <div class="form-add-employee">
    <Header></Header>
    <div class="content-block-body">
      <NavBar></NavBar>
      <div class="content-body">
        <div class="header-body">
          <div class="title-body">
            <div class="icon-back" @click="backPage()"></div>
            <div class="title">Thêm mới hồ sơ</div>
          </div>
          <div class="btn-header-body">
            <MSButton class="btn btn-save">Cất</MSButton>
            <MSButton class="btn btn-save-and-add">Cất và thêm</MSButton>
            <MSButton class="btn btn-cancel">Hủy bỏ</MSButton>
            <MSButton class="btn">Nhận diện hồ sơ tự động</MSButton>
            <MSButton class="btn">Thiết lập ngầm định</MSButton>
          </div>
        </div>
        <div class="content-info style-scollbar" style="display: flex">
          <div class="m-flex1 dx-fieldset">
            <div class="info-general">
              <div class="dx-field">
                <div class="dx-field-label">Select simple</div>
                <div class="dx-field-value">
                  <DxSelectBox :items="simpleProducts" style="height: 30px" />
                </div>
              </div>
              <div class="dx-field">
                <div class="dx-field-label">Default mode</div>
                <div class="dx-field-value">
                  <DxSelectBox :items="simpleProducts" style="height: 30px" />
                </div>
              </div>

              <div class="dx-field">
                <div class="dx-field-label">Data grouped in the DataSource</div>
                <div class="dx-field-value">
                  <DxSelectBox
                    :data-source="fromUngroupedData"
                    :grouped="true"
                    display-expr="Name"
                    value-expr="ID"
                  />
                </div>
              </div>

              <div class="dx-field">
                <div class="dx-field-label">Pre-grouped data</div>
                <div class="dx-field-value">
                  <DxSelectBox
                    :data-source="fromPregroupedData"
                    :grouped="true"
                    display-expr="Name"
                    value-expr="ID"
                  />
                </div>
              </div>
              <div class="title-info-general">Thông tin chung</div>
              <div class="m-row">
                <div class="m-flex1" style="display: flex; margin-top: 24px">
                  <div class="m-label m-flex1">Ảnh chân dung</div>
                  <div class="m-flex2">
                    <div class="img-info"></div>
                  </div>
                </div>
                <div class="m-flex1">
                  <input type="file" accept=".png,.jpg,.jpeg,.gif" />
                </div>
              </div>
              <div class="content-info-general">
                <div class="m-block-info">
                  <div class="m-flex1 content-info-left">
                    <div class="m-row">
                      <div class="m-label m-flex1">
                        Mã nhân viên (<span style="color: red">*</span>)
                      </div>
                      <input class="m-input m-flex2" type="date" />
                    </div>
                    <div class="m-row">
                      <div class="m-label m-flex1">
                        Họ và tên (<span style="color: red">*</span>)
                      </div>
                      <input class="m-input m-flex2" type="date" />
                    </div>
                    <div class="m-row">
                      <div class="m-label m-flex1">Giới tính</div>
                      <select class="m-input m-flex2">
                        <option value="0">Nam</option>
                        <option value="1">Nữ</option>
                      </select>
                    </div>
                    <div class="m-row">
                      <div class="m-label m-flex1">Ngày sinh</div>
                      <input type="date" class="m-input m-flex2" />
                    </div>
                    <div class="m-row">
                      <div class="m-label m-flex1">MST cá nhân</div>
                      <input class="m-input m-flex2" type="date" />
                    </div>
                  </div>
                  <div class="m-flex1" style="margin-left: 24px">
                    <div class="m-row">
                      <div class="m-label m-flex1">
                        Đơn vị công tác (<span style="color: red">*</span>)
                      </div>
                      <select class="m-input m-flex2">
                        <option value="0">Nam</option>
                        <option value="1">Nữ</option>
                      </select>
                    </div>
                    <div class="m-row">
                      <div class="m-label m-flex1">
                        Vị trí công việc (<span style="color: red">*</span>)
                      </div>
                      <select class="m-input m-flex2">
                        <option value="0">Nam</option>
                        <option value="1">Nữ</option>
                      </select>
                    </div>
                    <div class="m-row">
                      <div class="m-label m-flex1">Dân tộc</div>
                      <select class="m-input m-flex2">
                        <option value="0">Nam</option>
                        <option value="1">Nữ</option>
                      </select>
                    </div>
                    <div class="m-row">
                      <div class="m-label m-flex1">Tôn giáo</div>
                      <select class="m-input m-flex2">
                        <option value="0">Nam</option>
                        <option value="1">Nữ</option>
                      </select>
                    </div>
                    <div class="m-row">
                      <div class="m-label m-flex1">Quốc tịch</div>
                      <select class="m-input m-flex2">
                        <option value="0">Nam</option>
                        <option value="1">Nữ</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="m-block-info">
                  <div class="m-flex1 content-info-left">
                    <div class="m-row m-flex1" style="font-weight: bold">
                      Số CMND/Thẻ căn cước
                    </div>
                    <div class="m-row">
                      <div class="m-label m-flex1">Số</div>
                      <input class="m-input m-flex2" type="text" />
                    </div>
                    <div class="m-row">
                      <div class="m-label m-flex1">Ngày cấp</div>
                      <input type="date" class="m-input m-flex2" />
                    </div>
                    <div class="m-row">
                      <div class="m-label m-flex1">Nơi cấp</div>
                      <select class="m-input m-flex2">
                        <option value="0">Nam</option>
                        <option value="1">Nữ</option>
                      </select>
                    </div>
                    <div class="m-row">
                      <div class="m-label m-flex1">Ngày hết hạn</div>
                      <input class="m-input m-flex2" type="date" />
                    </div>
                  </div>
                  <div class="m-flex1" style="margin-left: 24px">
                    <div class="m-row m-flex1" style="font-weight: bold">
                      Hộ chiếu
                    </div>
                    <div class="m-row">
                      <div class="m-label m-flex1">Số</div>
                      <input class="m-input m-flex2" type="date" />
                    </div>
                    <div class="m-row">
                      <div class="m-label m-flex1">Ngày cấp</div>
                      <input type="date" class="m-input m-flex2" />
                    </div>
                    <div class="m-row">
                      <div class="m-label m-flex1">Nơi cấp</div>
                      <input class="m-input m-flex2" type="date" />
                    </div>
                    <div class="m-row">
                      <div class="m-label m-flex1">Ngày hết hạn</div>
                      <input type="date" class="m-input m-flex2" />
                    </div>
                  </div>
                </div>
                <div class="m-block-info">
                  <div class="m-flex1 content-info-left">
                    <div class="m-row m-flex1" style="font-weight: bold">
                      Trình độ bằng cấp
                    </div>
                    <div class="m-row">
                      <div class="m-label m-flex1">Trình độ văn hóa</div>
                      <input class="m-input m-flex2" type="date" />
                    </div>
                    <div class="m-row">
                      <div class="m-label m-flex1">Trình độ đào tạo</div>
                      <select class="m-input m-flex2">
                        <option value="0">Nam</option>
                        <option value="1">Nữ</option>
                      </select>
                    </div>
                    <div class="m-row">
                      <div class="m-label m-flex1">Nơi đào tạo</div>
                      <select class="m-input m-flex2">
                        <option value="0">Nam</option>
                        <option value="1">Nữ</option>
                      </select>
                    </div>
                    <div class="m-row">
                      <div class="m-label m-flex1">Khoa</div>
                      <select class="m-input m-flex2">
                        <option value="0">Nam</option>
                        <option value="1">Nữ</option>
                      </select>
                    </div>
                    <div class="m-row">
                      <div class="m-label m-flex1">Chuyên ngành</div>
                      <select class="m-input m-flex2">
                        <option value="0">Nam</option>
                        <option value="1">Nữ</option>
                      </select>
                    </div>
                    <div class="m-row">
                      <div class="m-label m-flex1">Năm tốt nghiệp</div>
                      <input type="number" class="m-input m-flex2" />
                    </div>
                    <div class="m-row">
                      <div class="m-label m-flex1">Xếp loại</div>
                      <select class="m-input m-flex2">
                        <option value="0">Nam</option>
                        <option value="1">Nữ</option>
                      </select>
                    </div>
                  </div>
                  <div class="m-flex1" style="margin-left: 24px">
                    <div class="m-row m-flex1" style="font-weight: bold">
                      Thành phần gia đình
                    </div>
                    <div class="m-row">
                      <div class="m-label m-flex1">TT hôn nhân</div>
                      <select class="m-input m-flex2">
                        <option value="0">Nam</option>
                        <option value="1">Nữ</option>
                      </select>
                    </div>
                    <div class="m-row">
                      <div class="m-label m-flex1">TP gia đình</div>
                      <select class="m-input m-flex2">
                        <option value="0">Nam</option>
                        <option value="1">Nữ</option>
                      </select>
                    </div>
                    <div class="m-row">
                      <div class="m-label m-flex1">TP bản thân</div>
                      <select class="m-input m-flex2">
                        <option value="0">Nam</option>
                        <option value="1">Nữ</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="info-contact">
              <div class="title-info-contact">Thông tin liên hệ</div>
              <div class="content-info-contact">
                <div class="m-block-info">
                  <div class="m-flex1 content-info-left">
                    <div class="m-row">
                      <div class="m-label m-flex1">Điện thoại di động</div>
                      <input class="m-input m-flex2" type="date" />
                    </div>
                    <div class="m-row">
                      <div class="m-label m-flex1">Điện thoại cơ quan</div>
                      <input class="m-input m-flex2" type="date" />
                    </div>
                    <div class="m-row">
                      <div class="m-label m-flex1">Điện thoại nhà riêng</div>
                      <input class="m-input m-flex2" type="date" />
                    </div>
                    <div class="m-row">
                      <div class="m-label m-flex1">Điện thoại khác</div>
                      <input class="m-input m-flex2" type="date" />
                    </div>
                    <div class="m-row">
                      <div class="m-label m-flex1">Email cá nhân</div>
                      <input class="m-input m-flex2" type="date" />
                    </div>
                    <div class="m-row">
                      <div class="m-label m-flex1">Email cơ quan</div>
                      <input class="m-input m-flex2" type="date" />
                    </div>
                    <div class="m-row">
                      <div class="m-label m-flex1">Email khác</div>
                      <input class="m-input m-flex2" type="date" />
                    </div>
                    <div class="m-row">
                      <div class="m-label m-flex1">Skype</div>
                      <input class="m-input m-flex2" type="date" />
                    </div>
                    <div class="m-row">
                      <div class="m-label m-flex1">Facebook</div>
                      <input class="m-input m-flex2" type="date" />
                    </div>
                    <div class="m-row">
                      <div class="m-label m-flex1">Zalo</div>
                      <input class="m-input m-flex2" type="date" />
                    </div>
                    <div class="m-row">
                      <div class="m-label m-flex1">MSN ID</div>
                      <input class="m-input m-flex2" type="date" />
                    </div>
                  </div>
                  <div class="m-flex1" style="margin-left: 24px">
                    <div class="m-row">
                      <div class="m-label m-flex1">Nguyên quán</div>
                      <textarea
                        class="m-input m-flex2"
                        rows=""
                        cols=""
                        style="height: 70px; resize: none"
                      ></textarea>
                    </div>
                    <div class="m-row">
                      <div class="m-label m-flex1">Tỉnh thành phố</div>
                      <select class="m-input m-flex2">
                        <option value="0">Nam</option>
                        <option value="1">Nữ</option>
                      </select>
                    </div>
                    <div class="m-row">
                      <div class="m-label m-flex1">Nơi sinh</div>
                      <textarea
                        class="m-input m-flex2"
                        rows=""
                        cols=""
                        style="height: 70px; resize: none"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div class="m-block-info">
                  <div class="m-flex1 content-info-left">
                    <div class="m-row m-flex1" style="font-weight: bold">
                      Hộ khẩu thường trú
                    </div>
                    <div class="m-row">
                      <div class="m-label m-flex1">Quốc gia</div>
                      <select class="m-input m-flex2">
                        <option value="0">Nam</option>
                        <option value="1">Nữ</option>
                      </select>
                    </div>
                    <div class="m-row">
                      <div class="m-label m-flex1">Tỉnh/Thành phố</div>
                      <select class="m-input m-flex2">
                        <option value="0">Nam</option>
                        <option value="1">Nữ</option>
                      </select>
                    </div>
                    <div class="m-row">
                      <div class="m-label m-flex1">Quận/Huyện</div>
                      <select class="m-input m-flex2">
                        <option value="0">Nam</option>
                        <option value="1">Nữ</option>
                      </select>
                    </div>
                    <div class="m-row">
                      <div class="m-label m-flex1">Xã/Phường</div>
                      <select class="m-input m-flex2">
                        <option value="0">Nam</option>
                        <option value="1">Nữ</option>
                      </select>
                    </div>
                    <div class="m-row">
                      <div class="m-label m-flex1">
                        Số nhà/Đường phố/Thôn xóm
                      </div>
                      <input class="m-input m-flex2" type="date" />
                    </div>
                    <div class="m-row">
                      <div class="m-label m-flex1">Địa chỉ</div>
                      <textarea
                        class="m-input m-flex2"
                        rows=""
                        cols=""
                        style="height: 70px; resize: none"
                      ></textarea>
                    </div>
                    <div class="m-row">
                      <div class="m-label m-flex1">Số sổ hộ khẩu</div>
                      <input class="m-input m-flex2" type="date" />
                    </div>
                    <div class="m-row">
                      <div class="m-label m-flex1">Mã số hộ gia đình</div>
                      <input class="m-input m-flex2" type="date" />
                    </div>
                    <div class="m-row">
                      <div class="m-flex1">
                        <input type="checkbox" class="m-label m-flex1" />
                        <label>Là chủ hộ</label>
                      </div>
                      <div class="m-flex2"></div>
                    </div>
                  </div>
                  <div class="m-flex1" style="margin-left: 24px">
                    <div class="m-row">
                      <div class="m-flex1" style="font-weight: bold">
                        Chỗ ở hiện nay
                      </div>
                      <div class="m-flex2">
                        <input type="checkbox" class="m-label m-flex1" />
                        <label>Giống hộ khẩu thường trú</label>
                      </div>
                    </div>
                    <div class="m-row">
                      <div class="m-label m-flex1">Quốc gia</div>
                      <select class="m-input m-flex2">
                        <option value="0">Nam</option>
                        <option value="1">Nữ</option>
                      </select>
                    </div>
                    <div class="m-row">
                      <div class="m-label m-flex1">Tỉnh/Thành phố</div>
                      <select class="m-input m-flex2">
                        <option value="0">Nam</option>
                        <option value="1">Nữ</option>
                      </select>
                    </div>
                    <div class="m-row">
                      <div class="m-label m-flex1">Quận/Huyện</div>
                      <select class="m-input m-flex2">
                        <option value="0">Nam</option>
                        <option value="1">Nữ</option>
                      </select>
                    </div>
                    <div class="m-row">
                      <div class="m-label m-flex1">Xã/Phường</div>
                      <select class="m-input m-flex2">
                        <option value="0">Nam</option>
                        <option value="1">Nữ</option>
                      </select>
                    </div>
                    <div class="m-row">
                      <div class="m-label m-flex1">
                        Số nhà/Đường phố/Thôn xóm
                      </div>
                      <select class="m-input m-flex2">
                        <option value="0">Nam</option>
                        <option value="1">Nữ</option>
                      </select>
                    </div>
                    <div class="m-row">
                      <div class="m-label m-flex1">Địa chỉ</div>
                      <textarea
                        class="m-input m-flex2"
                        rows=""
                        cols=""
                        style="height: 70px; resize: none"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div class="m-block-info">
                  <div class="m-flex1 content-info-left">
                    <div class="m-row m-flex1" style="font-weight: bold">
                      Liên hệ khẩn cấp
                    </div>
                    <div class="m-row">
                      <div class="m-label m-flex1">Họ và tên</div>
                      <input class="m-input m-flex2" type="date" />
                    </div>
                    <div class="m-row">
                      <div class="m-label m-flex1">Quan hệ</div>
                      <select class="m-input m-flex2">
                        <option value="0">Nam</option>
                        <option value="1">Nữ</option>
                      </select>
                    </div>
                    <div class="m-row">
                      <div class="m-label m-flex1">ĐT di động</div>
                      <input class="m-input m-flex2" type="date" />
                    </div>
                    <div class="m-row">
                      <div class="m-label m-flex1">Đt nhà riêng</div>
                      <input class="m-input m-flex2" type="date" />
                    </div>
                    <div class="m-row">
                      <div class="m-label m-flex1">Họ và tên</div>
                      <input class="m-input m-flex2" type="date" />
                    </div>
                    <div class="m-row">
                      <div class="m-label m-flex1">Email</div>
                      <input class="m-input m-flex2" type="date" />
                    </div>
                    <div class="m-row">
                      <div class="m-label m-flex1">Địa chỉ</div>
                      <textarea
                        class="m-input m-flex2"
                        rows=""
                        cols=""
                        style="height: 70px; resize: none"
                      ></textarea>
                    </div>
                  </div>
                  <div class="m-flex1" style="margin-left: 24px"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="m-flex1"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import MSButton from "@/components/MSButton";
import DxSelectBox from "devextreme-vue/select-box";
import service from "@/data/data.js";
import { ungroupedData, pregroupedData } from "@/data/data.js";
import DataSource from "devextreme/data/data_source";
export default {
  data() {
    const products = service.getProducts(),
      simpleProducts = service.getSimpleProducts();
    return {
      simpleProducts,
      fromUngroupedData: new DataSource({
        store: ungroupedData,
        key: "ID",
        group: "Category",
      }),
      fromPregroupedData: new DataSource({
        store: pregroupedData,
        map: function (item) {
          item.key = item.Category;
          item.items = item.Products;
          return item;
        },
      }),
    };
  },
  components: {
    Header,
    NavBar,
    MSButton,
    DxSelectBox,
  },
  methods: {
    backPage() {
      this.$router.push("employee");
    },
  },
};
</script>
<style scoped>
.m-row {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}
.m-label {
  margin-right: 4px;
}
.m-input {
  height: 26px;
  outline: none;
  padding: 0;
  border: 1px solid #bbbbbb;
  padding-left: 5px;
}
.m-block-info {
  margin-top: 24px;
  display: flex;
}
.block-img {
  display: flex;
  width: 100%;
}
.img-info {
  height: 160px;
  width: 120px;
  background-image: url("~@/assets/img/AvatarDefault.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 120px 160px;
}
.form-add-employee {
  height: 100vh;
  width: 100%;
}
.form-add-employee .content-block-body {
  width: 100%;
  height: calc(100% - 44px);
  display: flex;
}
.content-block-body .content-body {
  height: 100%;
  width: calc(100% - 84px);
}
.content-body .header-body {
  padding-left: 16px;
  width: auto;
  height: 62px;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
}
.header-body .title-body {
  display: flex;
  align-items: center;
  height: 100%;
  width: auto;
  position: relative;
}
.title-body .icon-back {
  width: 24px;
  height: 100%;
  background-image: url("~@/assets/icons/icon-back.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 24px 24px;
}
.title-body .title {
  height: 100%;
  font-size: 24px;
  line-height: 62px;
  margin-left: 16px;
}
.header-body .btn-header-body {
  display: flex;
  align-items: center;
  height: 62px;
  width: auto;
  position: absolute;
  right: 0;
}
.btn {
  height: 30px;
  border-radius: 4px;
  margin-right: 16px;
}
.btn:hover {
  background-color: #e7f4ff;
}
.btn:active {
  background-color: #cfe9ff;
}
/* .btn-save{
    background-color: #0F84E4 !important;
} */
.content-body .content-info {
  padding-left: 58px;
  padding-right: 16px;
  width: auto;
  height: calc(100% - 62px);
  overflow: auto;
}
.content-info .info-general {
  width: 100%;
  height: auto;
}
.info-general .title-info-general {
  font-weight: bold;
  font-size: 24px;
  margin-top: 34px;
}
.info-general .content-info-general {
  width: 100%;
}
.content-info .info-contact {
  width: 100%;
  height: auto;
}
.info-contact .title-info-contact {
  font-weight: bold;
  font-size: 24px;
  margin-top: 34px;
}
.info-contact .content-info-contact {
  width: 100%;
}
</style>