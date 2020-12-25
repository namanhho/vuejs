<template>
  <!-- <div class="form-add-employee"> -->
  <!-- <Header></Header>
    <div class="content-block-body">
      <NavBar></NavBar> -->
  <div class="content-body">
    <div class="header-body">
      <div class="title-body">
        <div class="icon-back" @click="backPage()"></div>
        <div class="title">Thêm mới hồ sơ</div>
      </div>
      <div class="btn-header-body">
        <MSButton class="btn btn-save" v-on:btn-click="addEmployee()">Cất</MSButton>
        <MSButton class="btn btn-save-and-add">Cất và thêm</MSButton>
        <MSButton class="btn btn-cancel">Hủy bỏ</MSButton>
        <MSButton class="btn">Nhận diện hồ sơ tự động</MSButton>
        <MSButton class="btn">Thiết lập ngầm định</MSButton>
      </div>
    </div>
    <div class="content-info style-scollbar" style="display: flex">
      <div class="m-flex3 dx-fieldset">
        <div class="info-general">
          <div class="title-info-general">Thông tin chung</div>
          <div class="m-row">
            <div class="m-flex1" style="display: flex; margin-top: 24px">
              <div class="m-label" style="width: 150px;">Ảnh chân dung</div>
              <div
                style="width: calc(100% - 150px);"
                @mouseover="inputFileShow = true"
                @mouseleave="inputFileShow = false"
              >
                <div class="blockImage">
                  <img
                    v-if="item.imageUrl"
                    :src="item.imageUrl"
                    alt="fail"
                    style="width: 120px; height: 160px"
                  />
                  <img
                    v-else
                    src="@/assets/img/AvatarDefault.png"
                    alt="fail"
                    style="width: 120px; height: 160px"
                  />
                  <div>
                    <input
                      ref="inputTypeFile"
                      type="file"
                      accept=".png,.jpg,.jpeg,.gif"
                      class="inputTypeFile"
                      v-bind:value="fileName"
                      @change="onChangeImage"
                    />
                  </div>
                  <div>
                    <button v-if="inputFileShow" class="btn-choose-file" @click="triger">
                      Chọn Ảnh
                    </button>
                  </div>
                  <div>
                    <button
                      v-if="item.imageUrl"
                      class="btn-delete-image"
                      type="submit"
                      @click="(item.imageUrl = null), (fileName = '')"
                    ></button>
                  </div>
                </div>
              </div>
            </div>
            <div class="m-flex1"></div>
          </div>
          <div class="content-info-general">
            <div class="m-block-info">
              <div class="m-flex1 content-info-left">
                <TextInput
                  label="Mã nhân viên"
                  :validate="true"
                  :required="true"
                  :maxLength="true"
                  :objectData="employee"
                  fieldName="EmployeeCode"
                  v-on:getValue="employee = $event"
                >
                </TextInput>
                <div style="display: flex; width: 100%;">
                <TextInput
                  style="width: 75%;"
                  label="Họ và tên"
                  placeholder="Họ và đệm"
                  rules="required"
                  :validate="true"
                  :required="true"
                  :maxLength="true"
                  :notNumber="true"
                  :objectData="employee"
                  fieldName="FirstName"
                  v-on:getValue="employee = $event"
                >
                  <!-- <template v-slot:lastName>
                        <input type="text" style="width: 35%; margin-left: 10px; float: right;">
                        </template> -->
                </TextInput>
                <TextInput
                style="display: inline; width: 25%; margin-left: 10px"
                customStyle="width: 100% !important;"
                  placeholder="Tên"
                  rules="required"
                  :validate="true"
                  :required="true"
                  :maxLength="true"
                  :notNumber="true"
                  :objectData="employee"
                  fieldName="LastName"
                  v-on:getValue="employee = $event"
                ></TextInput>
                </div>
                <SelectInput
                  label="Giới tính"
                  :datas="genders"
                  :objectData="employee"
                  fieldName="GenderName"
                  v-on:getValue="employee = $event"
                >
                </SelectInput>
                <CalendarInput
                  :objectData="employee"
                  fieldName="DateOfBirth"
                  v-on:getValue="employee = $event"
                  label="Ngày sinh"
                ></CalendarInput>
                <TextInput
                  label="MST cá nhân"
                  :objectData="employee"
                  fieldName="PersonalTaxCode"
                  v-on:getValue="employee = $event"
                >
                </TextInput>
              </div>
              <div class="m-flex1" style="margin-left: 24px">
                <DropDownInput
                  label="Đơn vị công tác"
                  :datas="departments"
                  :validate="true"
                  :required="true"
                  :objectData="employee"
                  fieldName="DepartmentName"
                  v-on:getValue="employee = $event"
                >
                </DropDownInput>
                <DropDownInputDataGrid
                  label="Vị trí công việc"
                  :datas="positions"
                  :validate="true"
                  :required="true"
                  :objectData="employee"
                  fieldName="PositionName"
                  v-on:getValue="employee = $event"
                ></DropDownInputDataGrid>
                <SelectInput
                  label="Dân tộc"
                  :datas="nations"
                  :objectData="employee"
                  fieldName="Nation"
                  v-on:getValue="employee = $event"
                ></SelectInput>
                <SelectInput
                  label="Tôn giáo"
                  :datas="religions"
                  :objectData="employee"
                  fieldName="Religions"
                  v-on:getValue="employee = $event"
                ></SelectInput>
                <SelectInput
                  label="Quốc tịch"
                  :datas="nationalities"
                  :objectData="employee"
                  fieldName="Nationalities"
                  v-on:getValue="employee = $event"
                ></SelectInput>
              </div>
            </div>
            <div class="m-block-info">
              <div class="m-flex1 content-info-left">
                <div class="m-row m-flex1" style="font-weight: bold">
                  Số CMND/Thẻ căn cước
                </div>
                <TextInput
                  label="Số"
                  :objectData="employee"
                  fieldName="IdentityNumber"
                  v-on:getValue="employee = $event"
                >
                </TextInput>
                <CalendarInput
                  :objectData="employee"
                  fieldName="IdentityDate"
                  v-on:getValue="employee = $event"
                  label="Ngày cấp"
                ></CalendarInput>
                <SelectInput
                  label="Nơi cấp"
                  :datas="cities"
                  :objectData="employee"
                  fieldName="IdentityPlace"
                  v-on:getValue="employee = $event"
                ></SelectInput>
                <CalendarInput
                  :objectData="employee"
                  fieldName="IdentityExpired"
                  v-on:getValue="employee = $event"
                  label="Ngày hết hạn"
                ></CalendarInput>
              </div>
              <div class="m-flex1" style="margin-left: 24px">
                <div class="m-row m-flex1" style="font-weight: bold">Hộ chiếu</div>
                <TextInput
                  label="Số"
                  v-on:getValue="Nation = $event"
                  :objectData="employee"
                  fieldName="PassportNumber"
                >
                </TextInput>
                <CalendarInput
                  label="Ngày cấp"
                  :objectData="employee"
                  fieldName="PassportDate"
                  v-on:getValue="employee = $event"
                ></CalendarInput>
                <SelectInput
                  label="Nơi cấp"
                  :datas="cities"
                  :objectData="employee"
                  fieldName="PassportPlace"
                  v-on:getValue="employee = $event"
                ></SelectInput>
                <CalendarInput
                  label="Ngày hết hạn"
                  :objectData="employee"
                  fieldName="PassportExpired"
                  v-on:getValue="employee = $event"
                ></CalendarInput>
              </div>
            </div>
            <div class="m-block-info">
              <div class="m-flex1 content-info-left">
                <div class="m-row m-flex1" style="font-weight: bold">
                  Trình độ bằng cấp
                </div>
                <TextInput
                  label="Trình độ văn hóa"
                  :objectData="employee"
                  fieldName="EducationalLevel"
                  v-on:getValue="employee = $event"
                ></TextInput>
                <SelectInput
                  label="Trình độ đào tạo"
                  :datas="qualification"
                  :objectData="employee"
                  fieldName="Qualification"
                  v-on:getValue="employee = $event"
                ></SelectInput>
                <SelectInput
                  label="Nơi đào tạo"
                  :datas="school"
                  :objectData="employee"
                  fieldName="School"
                  v-on:getValue="employee = $event"
                ></SelectInput>
                <SelectInput
                  label="Khoa"
                  :datas="faculties"
                  :objectData="employee"
                  fieldName="Faculty"
                  v-on:getValue="employee = $event"
                ></SelectInput>
                <SelectInput
                  label="Chuyên ngành"
                  :datas="majors"
                  :objectData="employee"
                  fieldName="Majors"
                  v-on:getValue="employee = $event"
                ></SelectInput>
                <NumberInput
                  label="Năm tốt nghiệp"
                  :objectData="employee"
                  fieldName="GraduationYear"
                  v-on:getValue="employee = $event"
                ></NumberInput>
                <SelectInput
                  label="Xếp loại"
                  :datas="classification"
                  :objectData="employee"
                  fieldName="Classification"
                  v-on:getValue="employee = $event"
                ></SelectInput>
              </div>
              <div class="m-flex1" style="margin-left: 24px">
                <div class="m-row m-flex1" style="font-weight: bold">
                  Thành phần gia đình
                </div>
                <SelectInput
                  label="TT hôn nhân"
                  :datas="maritalstatus"
                  :objectData="employee"
                  fieldName="MaritalStatus"
                  v-on:getValue="employee = $event"
                ></SelectInput>
                <SelectInput
                  label="TP gia đình"
                  :datas="familystatus"
                  :objectData="employee"
                  fieldName="FamilyStatus"
                  v-on:getValue="employee = $event"
                ></SelectInput>
                <SelectInput
                  label="TP bản thân"
                  :datas="yourselfstatus"
                  :objectData="employee"
                  fieldName="YourselfStatus"
                  v-on:getValue="employee = $event"
                ></SelectInput>
              </div>
            </div>
          </div>
        </div>
        <div class="info-contact">
          <div class="title-info-contact">Thông tin liên hệ</div>
          <div class="content-info-contact">
            <div class="m-block-info">
              <div class="m-flex1 content-info-left">
                <TextInput
                  label="Điện thoại di động"
                  :objectData="employee"
                  fieldName="PhoneNumber"
                  v-on:getValue="employee = $event"
                ></TextInput>
                <TextInput
                  label="Điện thoại cơ quan"
                  :objectData="employee"
                  fieldName="CompanyPhoneNumber"
                  v-on:getValue="employee = $event"
                ></TextInput>
                <TextInput
                  label="Điện thoại nhà riêng"
                  :objectData="employee"
                  fieldName="HomePhoneNumber"
                  v-on:getValue="employee = $event"
                ></TextInput>
                <TextInput
                  label="Điện thoại khác"
                  :objectData="employee"
                  fieldName="OtherPhoneNumber"
                  v-on:getValue="employee = $event"
                ></TextInput>
                <TextInput
                  label="Email cá nhân"
                  :objectData="employee"
                  fieldName="Email"
                  v-on:getValue="employee = $event"
                ></TextInput>
                <TextInput
                  label="Email cơ quan"
                  :objectData="employee"
                  fieldName="EmailCompany"
                  v-on:getValue="employee = $event"
                ></TextInput>
                <TextInput
                  label="Email khác"
                  :objectData="employee"
                  fieldName="OtherEmail"
                  v-on:getValue="employee = $event"
                >
                </TextInput>
                <TextInput
                  label="Skype"
                  :objectData="employee"
                  fieldName="Skype"
                  v-on:getValue="employee = $event"
                >
                </TextInput>
                <TextInput
                  label="Facebook"
                  :objectData="employee"
                  fieldName="Facebook"
                  v-on:getValue="employee = $event"
                ></TextInput>
                <TextInput
                  label="Zalo"
                  :objectData="employee"
                  fieldName="Zalo"
                  v-on:getValue="employee = $event"
                >
                </TextInput>
                <TextInput
                  label="MSN ID"
                  :objectData="employee"
                  fieldName="PersonalTaxCode"
                  v-on:getValue="employee = $event"
                >
                </TextInput>
              </div>
              <div class="m-flex1" style="margin-left: 24px">
                <TextAreaInput
                  label="Nguyên quán"
                  :objectData="employee"
                  fieldName="Domicile"
                  v-on:getValue="employee = $event"
                ></TextAreaInput>
                <SelectInput
                  label="Tỉnh thành phố"
                  :datas="cities"
                  :objectData="employee"
                  fieldName="CityContact"
                  v-on:getValue="employee = $event"
                ></SelectInput>
                <TextAreaInput
                  label="Nơi sinh"
                  :objectData="employee"
                  fieldName="PlaceOfBirth"
                  v-on:getValue="employee = $event"
                ></TextAreaInput>
              </div>
            </div>
            <div class="m-block-info">
              <div class="m-flex1 content-info-left">
                <div class="m-row m-flex1" style="font-weight: bold">
                  Hộ khẩu thường trú
                </div>
                <SelectInput
                  label="Quốc gia"
                  :datas="nationalities"
                  :objectData="employee"
                  fieldName="NationalHouseholdRegistration"
                  v-on:getValue="employee = $event"
                ></SelectInput>
                <SelectInput
                  label="Tỉnh/Thành phố"
                  :datas="cities"
                  :objectData="employee"
                  fieldName="CityHouseholdRegistration"
                  v-on:getValue="employee = $event"
                ></SelectInput>
                <SelectInput
                  label="Quận/Huyện"
                  :datas="district"
                  :objectData="employee"
                  fieldName="DistrictHouseholdRegistration"
                  v-on:getValue="employee = $event"
                ></SelectInput>
                <SelectInput
                  label="Xã/Phường"
                  :datas="wards"
                  :objectData="employee"
                  fieldName="WardsHouseholdRegistration"
                  v-on:getValue="employee = $event"
                ></SelectInput>
                <TextInput
                  label="Số nhà/Đường phố/Thôn xóm"
                  :objectData="employee"
                  fieldName="HomeNumberHouseholdRegistration"
                  v-on:getValue="employee = $event"
                ></TextInput>
                <TextAreaInput
                  label="Địa chỉ"
                  :objectData="employee"
                  fieldName="AddressHouseholdRegistration"
                  v-on:getValue="employee = $event"
                ></TextAreaInput>
                <TextInput
                  label="Số sổ hộ khẩu"
                  :objectData="employee"
                  fieldName="HouseholdRegistrationNumber"
                  v-on:getValue="employee = $event"
                ></TextInput>
                <TextInput
                  label="Mã số hộ gia đình"
                  :objectData="employee"
                  fieldName="HouseholdCode"
                  v-on:getValue="employee = $event"
                ></TextInput>
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
                  <div class="m-flex2" style="font-weight: bold">Chỗ ở hiện nay</div>
                  <div class="m-flex3">
                    <input type="checkbox" class="m-label m-flex1" />
                    <label>Giống hộ khẩu thường trú</label>
                  </div>
                </div>
                <SelectInput
                  label="Quốc gia"
                  :datas="nationalities"
                  :objectData="employee"
                  fieldName="NationalCurrent"
                  v-on:getValue="employee = $event"
                ></SelectInput>
                <SelectInput
                  label="Tỉnh/Thành phố"
                  :datas="cities"
                  :objectData="employee"
                  fieldName="CityCurrent"
                  v-on:getValue="employee = $event"
                ></SelectInput>
                <SelectInput
                  label="Quận/Huyện"
                  :datas="district"
                  :objectData="employee"
                  fieldName="DistrictCurrent"
                  v-on:getValue="employee = $event"
                ></SelectInput>
                <SelectInput
                  label="Xã/Phường"
                  :datas="wards"
                  :objectData="employee"
                  fieldName="WardsCurrent"
                  v-on:getValue="employee = $event"
                ></SelectInput>
                <TextInput
                  label="Số nhà/Đường phố/Thôn xóm"
                  :objectData="employee"
                  fieldName="HomeNumberCurrent"
                  v-on:getValue="employee = $event"
                ></TextInput>
                <TextAreaInput
                  label="Địa chỉ"
                  :objectData="employee"
                  fieldName="AddressCurrent"
                  v-on:getValue="employee = $event"
                ></TextAreaInput>
              </div>
            </div>
            <div class="m-block-info">
              <div class="m-flex1 content-info-left">
                <div class="m-row m-flex1" style="font-weight: bold">
                  Liên hệ khẩn cấp
                </div>
                <TextInput
                  label="Họ và tên"
                  :objectData="employee"
                  fieldName="UrgencyFullName"
                  v-on:getValue="employee = $event"
                ></TextInput>
                <SelectInput
                  label="Quan hệ"
                  :datas="relationship"
                  :objectData="employee"
                  fieldName="UrgencyRelationship"
                  v-on:getValue="employee = $event"
                ></SelectInput>
                <TextInput
                  label="ĐT di động"
                  :objectData="employee"
                  fieldName="UrgencyPhoneNumber"
                  v-on:getValue="employee = $event"
                ></TextInput>
                <TextInput
                  label="Đt nhà riêng"
                  :objectData="employee"
                  fieldName="UrgencyHomePhoneNumber"
                  v-on:getValue="employee = $event"
                ></TextInput>
                <TextInput
                  label="Email"
                  :objectData="employee"
                  fieldName="UrgencyEmail"
                  v-on:getValue="employee = $event"
                >
                </TextInput>
                <TextAreaInput
                  label="Địa chỉ"
                  :objectData="employee"
                  fieldName="UrgencyAddress"
                  v-on:getValue="employee = $event"
                ></TextAreaInput>
              </div>
              <div class="m-flex1" style="margin-left: 24px"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="m-flex1"></div>
    </div>
  </div>
  <!-- </div> -->
  <!-- </div> -->
</template>
<script>
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import MSButton from "@/components/MSButton";
import DropDownInput from "@/components/InputBox/DropDownInput";
import DropDownInputDataGrid from "@/components/InputBox/DropDownInputDataGrid";
import CalendarInput from "@/components/InputBox/CalendarInput";
import SelectInput from "@/components/InputBox/SelectInput";
import NumberInput from "@/components/InputBox/NumberInput";
import TextInput from "@/components/InputBox/TextInput";
import TextAreaInput from "@/components/InputBox/TextAreaInput";

import service from "@/data/data.js";
import {
  genders,
  positions,
  departments,
  nations,
  religions,
  nationalities,
  cities,
  qualification,
  school,
  faculties,
  majors,
  classification,
  maritalstatus,
  familystatus,
  yourselfstatus,
  district,
  wards,
  relationship,
} from "@/data/InfoGeneralDatas.js";
 import { uuid } from 'vue-uuid' // Import uuid  
// import { employee } from "@/data/Employee.js";
export default {
  data() {
    const simpleProducts = service.getSimpleProducts();
    return {
      textValue: null,
      simpleProducts,
      genders,
      positions,
      departments,
      nations,
      religions,
      nationalities,
      cities,
      qualification,
      school,
      faculties,
      majors,
      classification,
      maritalstatus,
      familystatus,
      yourselfstatus,
      district,
      wards,
      relationship,
      employee: this.employeeObject,
      item: {
        //...
        image: null,
        imageUrl: this.employeeObject["EmployeeImage"],
      },
      inputFileShow: false,
      fileName: "",
      uuid: uuid.v1(),
    };
  },
  props: {
    employeeObject: {
      type: Object,
      default: null,
    },
  },
  created() {},
  components: {
    Header,
    NavBar,
    MSButton,
    DropDownInput,
    DropDownInputDataGrid,
    CalendarInput,
    SelectInput,
    NumberInput,
    TextInput,
    TextAreaInput,
  },
  methods: {
    backPage() {
      // this.$router.push("employee");
      this.$emit("backPage");
    },
    updateText() {
      debugger;
      this.textValue = $event.target.value;
    },
    addEmployee() {
      debugger;
      this.employee.EmployeeId= this.$uuid.v4();
      this.$emit("addEmployee", this.employee);
    },
    /**
     * Hàm để chuyển đổi hình ảnh sang base64
     * CreatedBy: HNANH (22/12/2020)
     */
    readFileAsync(file){
      return new Promise((resolve, reject) =>{
        const reader = new FileReader();
        reader.onload = function(abc){
          resolve(abc.target.result);
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      })
    },
    async onChangeImage(e) {
      const file = e.target.files[0];
      this.image = file;
      // this.item.imageUrl = URL.createObjectURL(file);
      this.item.imageUrl = await this.readFileAsync(file);
    },
    /**
     * Hàm để tạo sự kiện click cho input có type là file
     */
    triger() {
      this.$refs.inputTypeFile.click();
    },
  },
};
</script>
<style scoped>
.blockImage {
  position: relative;
  width: 120px;
  height: 160px;
}
.inputTypeFile {
  position: absolute;
  bottom: 0;
  width: 70px;
  visibility: hidden;
}
.btn-choose-file {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 30px;
  background-color: #757879;
  color: #ffffff;
  border: none;
  outline: none;
}
.btn-delete-image {
  background-color: #ffffff;
  position: absolute;
  top: 0;
  right: 0;
  outline: none;
  border: 1px solid #bbbbbb;
  border-radius: 4px;
  width: 24px;
  height: 24px;
  background-image: url("~@/assets/img/img-delete.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 16px 16px;
}
.btn-delete-image:hover {
  background-color: #e7f4ff;
}
.btn-delete-image:focus {
  background-color: #cfe9ff;
}
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
