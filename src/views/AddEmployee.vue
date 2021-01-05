<template>
  <div style="display: flex; width: calc(100% - 84px); height: 100%">
    <div v-if="stateShowForm == 'reviewForm'" class="nav-bar-info">
      <a href="#info-general" class="item-menu"
        ><div class="block-item-menu">Thông tim chung</div></a
      >
      <a href="#info-contact" class="item-menu"
        ><div class="block-item-menu">Thông tin liên hệ</div></a
      >
    </div>
    <div class="content-body">
      <div class="header-body">
        <div class="title-body">
          <div class="icon-back" @click="backPage()"></div>
          <div class="title">
            <div
              v-if="stateForm == 'reviewForm' && imgOnTitle"
              class="image-on-title"
              :style="{ backgroundImage: `url(${imgOnTitle})` }"
            ></div>
            <div
              v-else-if="stateForm == 'reviewForm' && !imgOnTitle"
              class="image-on-title img-default"
            ></div>

            <div class="title-main">{{ titleHeaderForm }}</div>
            <div v-if="stateForm == 'reviewForm'" class="sub-title">{{ subTitle }}</div>
          </div>
        </div>
        <div class="btn-header-body">
          <DxButton
            v-if="stateForm != 'reviewForm'"
            class="btn btn-save"
            text="Cất"
            @click="addEmployee"
          />
          <DxButton
            v-if="stateForm != 'reviewForm' && stateForm != 'editForm'"
            class="btn btn-save-and-add"
            text="Cất và thêm"
            @click="saveAndAddEmployee"
          />
          <DxButton
            v-if="stateForm != 'reviewForm'"
            class="btn btn-cancel"
            text="Hủy bỏ"
            @click="backPage"
          />
          <!-- <MSButton class="btn btn-save" v-on:btn-click="addEmployee">Cất</MSButton>
        <MSButton class="btn btn-save-and-add">Cất và thêm</MSButton>
        <MSButton class="btn btn-cancel">Hủy bỏ</MSButton> -->
        </div>
      </div>
      <div class="content-info style-scollbar" style="display: flex">
        <div class="m-flex3 dx-fieldset">
          <div class="info-general" id="info-general">
            <div class="title-info-general">
              Thông tin chung
              <button
                v-if="stateForm == 'reviewForm'"
                type="button"
                class="btn-edit-form"
                @click="btnEditFormClick"
              ></button>
            </div>
            <div class="m-row">
              <div class="m-flex1" style="display: flex; margin-top: 24px">
                <div class="m-label" style="width: 150px">Ảnh chân dung</div>
                <div
                  style="width: calc(100% - 150px)"
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
                      <button
                        v-if="stateForm != 'reviewForm' && inputFileShow"
                        type="button"
                        class="btn-choose-file"
                        @click="triger"
                      >
                        Chọn Ảnh
                      </button>
                    </div>
                    <div>
                      <button
                        v-if="item.imageUrl && stateForm != 'reviewForm'"
                        class="btn-delete-image"
                        type="button"
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
                    ref="employeeCode"
                    label="Mã nhân viên"
                    :validate="true"
                    :required="true"
                    :maxLength="true"
                    :objectData="employee"
                    fieldName="EmployeeCode"
                    v-on:getValue="employee = $event"
                    :stateShowForm="stateForm"
                  >
                  </TextInput>
                  <div style="display: flex; width: 100%">
                    <TextInput
                      style="width: 75%"
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
                      :stateShowForm="stateForm"
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
                      :stateShowForm="stateForm"
                    ></TextInput>
                  </div>
                  <SelectInput
                    label="Giới tính"
                    :datas="genders"
                    :objectData="employee"
                    fieldName="GenderName"
                    v-on:getValue="employee = $event"
                    :stateShowForm="stateForm"
                  >
                  </SelectInput>
                  <CalendarInput
                    :objectData="employee"
                    fieldName="DateOfBirth"
                    v-on:getValue="employee = $event"
                    label="Ngày sinh"
                    :stateShowForm="stateForm"
                  ></CalendarInput>
                  <TextInput
                    label="MST cá nhân"
                    :objectData="employee"
                    fieldName="PersonalTaxCode"
                    v-on:getValue="employee = $event"
                    :stateShowForm="stateForm"
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
                    :stateShowForm="stateForm"
                  >
                  </DropDownInput>
                  <DropDownInputDataGrid
                    label="Vị trí công việc"
                    :datas="positions"
                    :validate="true"
                    :required="true"
                    :objectData="employee"
                    fieldName="PositionId"
                    v-on:getValue="employee = $event"
                    :stateShowForm="stateForm"
                  ></DropDownInputDataGrid>
                  <SelectInput
                    label="Dân tộc"
                    :datas="nations"
                    :objectData="employee"
                    fieldName="Nation"
                    v-on:getValue="employee = $event"
                    :stateShowForm="stateForm"
                  ></SelectInput>
                  <SelectInput
                    label="Tôn giáo"
                    :datas="religions"
                    :objectData="employee"
                    fieldName="Religions"
                    v-on:getValue="employee = $event"
                    :stateShowForm="stateForm"
                  ></SelectInput>
                  <SelectInput
                    label="Quốc tịch"
                    :datas="nationalities"
                    :objectData="employee"
                    fieldName="Nationalities"
                    v-on:getValue="employee = $event"
                    :stateShowForm="stateForm"
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
                    :stateShowForm="stateForm"
                  >
                  </TextInput>
                  <CalendarInput
                    :objectData="employee"
                    fieldName="IdentityDate"
                    v-on:getValue="employee = $event"
                    label="Ngày cấp"
                    :stateShowForm="stateForm"
                  ></CalendarInput>
                  <SelectInput
                    label="Nơi cấp"
                    :datas="cities"
                    :objectData="employee"
                    fieldName="IdentityPlace"
                    v-on:getValue="employee = $event"
                    :stateShowForm="stateForm"
                  ></SelectInput>
                  <CalendarInput
                    :objectData="employee"
                    fieldName="IdentityExpired"
                    v-on:getValue="employee = $event"
                    label="Ngày hết hạn"
                    :stateShowForm="stateForm"
                  ></CalendarInput>
                </div>
                <div class="m-flex1" style="margin-left: 24px">
                  <div class="m-row m-flex1" style="font-weight: bold">Hộ chiếu</div>
                  <TextInput
                    label="Số"
                    v-on:getValue="Nation = $event"
                    :objectData="employee"
                    fieldName="PassportNumber"
                    :stateShowForm="stateForm"
                  >
                  </TextInput>
                  <CalendarInput
                    label="Ngày cấp"
                    :objectData="employee"
                    fieldName="PassportDate"
                    v-on:getValue="employee = $event"
                    :stateShowForm="stateForm"
                  ></CalendarInput>
                  <SelectInput
                    label="Nơi cấp"
                    :datas="cities"
                    :objectData="employee"
                    fieldName="PassportPlace"
                    v-on:getValue="employee = $event"
                    :stateShowForm="stateForm"
                  ></SelectInput>
                  <CalendarInput
                    label="Ngày hết hạn"
                    :objectData="employee"
                    fieldName="PassportExpired"
                    v-on:getValue="employee = $event"
                    :stateShowForm="stateForm"
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
                    :stateShowForm="stateForm"
                  ></TextInput>
                  <SelectInput
                    label="Trình độ đào tạo"
                    :datas="qualification"
                    :objectData="employee"
                    fieldName="Qualification"
                    v-on:getValue="employee = $event"
                    :stateShowForm="stateForm"
                  ></SelectInput>
                  <SelectInput
                    label="Nơi đào tạo"
                    :datas="school"
                    :objectData="employee"
                    fieldName="School"
                    v-on:getValue="employee = $event"
                    :stateShowForm="stateForm"
                  ></SelectInput>
                  <SelectInput
                    label="Khoa"
                    :datas="faculties"
                    :objectData="employee"
                    fieldName="Faculty"
                    v-on:getValue="employee = $event"
                    :stateShowForm="stateForm"
                  ></SelectInput>
                  <SelectInput
                    label="Chuyên ngành"
                    :datas="majors"
                    :objectData="employee"
                    fieldName="Majors"
                    v-on:getValue="employee = $event"
                    :stateShowForm="stateForm"
                  ></SelectInput>
                  <NumberInput
                    label="Năm tốt nghiệp"
                    :objectData="employee"
                    fieldName="GraduationYear"
                    v-on:getValue="employee = $event"
                    :stateShowForm="stateForm"
                  ></NumberInput>
                  <SelectInput
                    label="Xếp loại"
                    :datas="classification"
                    :objectData="employee"
                    fieldName="Classification"
                    v-on:getValue="employee = $event"
                    :stateShowForm="stateForm"
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
                    :stateShowForm="stateForm"
                  ></SelectInput>
                  <SelectInput
                    label="TP gia đình"
                    :datas="familystatus"
                    :objectData="employee"
                    fieldName="FamilyStatus"
                    v-on:getValue="employee = $event"
                    :stateShowForm="stateForm"
                  ></SelectInput>
                  <SelectInput
                    label="TP bản thân"
                    :datas="yourselfstatus"
                    :objectData="employee"
                    fieldName="YourselfStatus"
                    v-on:getValue="employee = $event"
                    :stateShowForm="stateForm"
                  ></SelectInput>
                </div>
              </div>
            </div>
          </div>
          <div class="info-contact" id="info-contact">
            <div class="title-info-contact">
              Thông tin liên hệ
              <button
                v-if="stateShowForm == 'reviewForm'"
                type="button"
                class="btn-edit-form"
                @click="btnEditFormClick"
              ></button>
            </div>
            <div class="content-info-contact">
              <div class="m-block-info">
                <div class="m-flex1 content-info-left">
                  <TextInput
                    label="Điện thoại di động"
                    :objectData="employee"
                    fieldName="PhoneNumber"
                    v-on:getValue="employee = $event"
                    :stateShowForm="stateForm"
                  ></TextInput>
                  <TextInput
                    label="Điện thoại cơ quan"
                    :objectData="employee"
                    fieldName="CompanyPhoneNumber"
                    v-on:getValue="employee = $event"
                    :stateShowForm="stateForm"
                  ></TextInput>
                  <TextInput
                    label="Điện thoại nhà riêng"
                    :objectData="employee"
                    fieldName="HomePhoneNumber"
                    v-on:getValue="employee = $event"
                    :stateShowForm="stateForm"
                  ></TextInput>
                  <TextInput
                    label="Điện thoại khác"
                    :objectData="employee"
                    fieldName="OtherPhoneNumber"
                    v-on:getValue="employee = $event"
                    :stateShowForm="stateForm"
                  ></TextInput>
                  <TextInput
                    label="Email cá nhân"
                    :objectData="employee"
                    fieldName="Email"
                    v-on:getValue="employee = $event"
                    :stateShowForm="stateForm"
                  ></TextInput>
                  <TextInput
                    label="Email cơ quan"
                    :objectData="employee"
                    fieldName="EmailCompany"
                    v-on:getValue="employee = $event"
                    :stateShowForm="stateForm"
                  ></TextInput>
                  <TextInput
                    label="Email khác"
                    :objectData="employee"
                    fieldName="OtherEmail"
                    v-on:getValue="employee = $event"
                    :stateShowForm="stateForm"
                  >
                  </TextInput>
                  <TextInput
                    label="Skype"
                    :objectData="employee"
                    fieldName="Skype"
                    v-on:getValue="employee = $event"
                    :stateShowForm="stateForm"
                    iconLabel='icon-skype'
                  >
                  </TextInput>
                  <TextInput
                    label="Facebook"
                    :objectData="employee"
                    fieldName="Facebook"
                    v-on:getValue="employee = $event"
                    :stateShowForm="stateForm"
                    iconLabel='icon-facebook'
                  ></TextInput>
                  <TextInput
                    label="Zalo"
                    :objectData="employee"
                    fieldName="Zalo"
                    v-on:getValue="employee = $event"
                    :stateShowForm="stateForm"
                    iconLabel='icon-zalo'
                  >
                  </TextInput>
                  <TextInput
                    label="MSN ID"
                    :objectData="employee"
                    fieldName="PersonalTaxCode"
                    v-on:getValue="employee = $event"
                    :stateShowForm="stateForm"
                    iconLabel='icon-msn'
                  >
                  </TextInput>
                </div>
                <div class="m-flex1" style="margin-left: 24px">
                  <TextAreaInput
                    label="Nguyên quán"
                    :objectData="employee"
                    fieldName="Domicile"
                    v-on:getValue="employee = $event"
                    :stateShowForm="stateForm"
                  ></TextAreaInput>
                  <SelectInput
                    label="Tỉnh thành phố"
                    :datas="cities"
                    :objectData="employee"
                    fieldName="CityContact"
                    v-on:getValue="employee = $event"
                    :stateShowForm="stateForm"
                  ></SelectInput>
                  <TextAreaInput
                    label="Nơi sinh"
                    :objectData="employee"
                    fieldName="PlaceOfBirth"
                    v-on:getValue="employee = $event"
                    :stateShowForm="stateForm"
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
                    :stateShowForm="stateForm"
                  ></SelectInput>
                  <SelectInput
                    label="Tỉnh/Thành phố"
                    :datas="cities"
                    :objectData="employee"
                    fieldName="CityHouseholdRegistration"
                    v-on:getValue="employee = $event"
                    :stateShowForm="stateForm"
                  ></SelectInput>
                  <SelectInput
                    label="Quận/Huyện"
                    :datas="district"
                    :objectData="employee"
                    fieldName="DistrictHouseholdRegistration"
                    v-on:getValue="employee = $event"
                    :stateShowForm="stateForm"
                  ></SelectInput>
                  <SelectInput
                    label="Xã/Phường"
                    :datas="wards"
                    :objectData="employee"
                    fieldName="WardsHouseholdRegistration"
                    v-on:getValue="employee = $event"
                    :stateShowForm="stateForm"
                  ></SelectInput>
                  <TextInput
                    label="Số nhà/Đường phố/Thôn xóm"
                    :objectData="employee"
                    fieldName="HomeNumberHouseholdRegistration"
                    v-on:getValue="employee = $event"
                    :stateShowForm="stateForm"
                  ></TextInput>
                  <TextAreaInput
                    label="Địa chỉ"
                    :objectData="employee"
                    fieldName="AddressHouseholdRegistration"
                    v-on:getValue="employee = $event"
                    :stateShowForm="stateForm"
                  ></TextAreaInput>
                  <TextInput
                    label="Số sổ hộ khẩu"
                    :objectData="employee"
                    fieldName="HouseholdRegistrationNumber"
                    v-on:getValue="employee = $event"
                    :stateShowForm="stateForm"
                  ></TextInput>
                  <TextInput
                    label="Mã số hộ gia đình"
                    :objectData="employee"
                    fieldName="HouseholdCode"
                    v-on:getValue="employee = $event"
                    :stateShowForm="stateForm"
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
                    :stateShowForm="stateForm"
                  ></SelectInput>
                  <SelectInput
                    label="Tỉnh/Thành phố"
                    :datas="cities"
                    :objectData="employee"
                    fieldName="CityCurrent"
                    v-on:getValue="employee = $event"
                    :stateShowForm="stateForm"
                  ></SelectInput>
                  <SelectInput
                    label="Quận/Huyện"
                    :datas="district"
                    :objectData="employee"
                    fieldName="DistrictCurrent"
                    v-on:getValue="employee = $event"
                    :stateShowForm="stateForm"
                  ></SelectInput>
                  <SelectInput
                    label="Xã/Phường"
                    :datas="wards"
                    :objectData="employee"
                    fieldName="WardsCurrent"
                    v-on:getValue="employee = $event"
                    :stateShowForm="stateForm"
                  ></SelectInput>
                  <TextInput
                    label="Số nhà/Đường phố/Thôn xóm"
                    :objectData="employee"
                    fieldName="HomeNumberCurrent"
                    v-on:getValue="employee = $event"
                    :stateShowForm="stateForm"
                  ></TextInput>
                  <TextAreaInput
                    label="Địa chỉ"
                    :objectData="employee"
                    fieldName="AddressCurrent"
                    v-on:getValue="employee = $event"
                    :stateShowForm="stateForm"
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
                    :stateShowForm="stateForm"
                  ></TextInput>
                  <SelectInput
                    label="Quan hệ"
                    :datas="relationship"
                    :objectData="employee"
                    fieldName="UrgencyRelationship"
                    v-on:getValue="employee = $event"
                    :stateShowForm="stateForm"
                  ></SelectInput>
                  <TextInput
                    label="ĐT di động"
                    :objectData="employee"
                    fieldName="UrgencyPhoneNumber"
                    v-on:getValue="employee = $event"
                    :stateShowForm="stateForm"
                  ></TextInput>
                  <TextInput
                    label="Đt nhà riêng"
                    :objectData="employee"
                    fieldName="UrgencyHomePhoneNumber"
                    v-on:getValue="employee = $event"
                    :stateShowForm="stateForm"
                  ></TextInput>
                  <TextInput
                    label="Email"
                    :objectData="employee"
                    fieldName="UrgencyEmail"
                    v-on:getValue="employee = $event"
                    :stateShowForm="stateForm"
                  >
                  </TextInput>
                  <TextAreaInput
                    label="Địa chỉ"
                    :objectData="employee"
                    fieldName="UrgencyAddress"
                    v-on:getValue="employee = $event"
                    :stateShowForm="stateForm"
                  ></TextAreaInput>
                </div>
                <div class="m-flex1" style="margin-left: 24px"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="m-flex1"></div>
      </div>
      <PopUpWarning
        v-if="showPopUpWaring"
        :infoMessage="infoMessage"
        v-on:onClickNo="onClickNo"
        v-on:onClickYes="onClickYes"
        v-on:onClickClose="onClickClose"
      ></PopUpWarning>
    </div>
  </div>
</template>
<script>
import MSButton from "@/components/Common/MSButton.vue";
import DropDownInput from "@/components/InputBox/DropDownInput.vue";
import DropDownInputDataGrid from "@/components/InputBox/DropDownInputDataGrid.vue";
import CalendarInput from "@/components/InputBox/CalendarInput.vue";
import SelectInput from "@/components/InputBox/SelectInput.vue";
import NumberInput from "@/components/InputBox/NumberInput.vue";
import TextInput from "@/components/InputBox/TextInput.vue";
import TextAreaInput from "@/components/InputBox/TextAreaInput.vue";
import DxValidationSummary from "devextreme-vue/validation-summary";
import DxButton from "devextreme-vue/button";
import EmployeesAPI from "@/api/components/employees/EmployeesAPI.js";
import DepartmentsAPI from "@/api/components/departments/DepartmentsAPI.js";
import PositionsAPI from "@/api/components/positions/PositionsAPI.js";
import PopUpWarning from "@/components/Common/PopUpWarning.vue";
import {
  genders,
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
export default {
  data() {
    return {
      genders,
      positions: [],
      departments: [],
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
      showPopUpWaring: false,
      infoMessage: {
        ContentMessage: null,
        typeMessage: null,
        stateMessage: null,
      },
      titleHeaderForm: this.$t("titleFormAddEmployee"),
      subTitle: null,
      imgOnTitle: this.employeeObject["EmployeeImage"],
      stateForm: this.stateShowForm,
    };
  },
  props: {
    employeeObject: {
      type: Object,
      default: null,
    },
    stateShowForm: {
      type: String,
      default: null,
    },
  },
  async created() {
    //Lấy dữ liệu phòng ban
    await this.getDataDepartment();
    //Lấy dữ liệu vị trí chức vụ
    await this.getDataPosition();
    //Kiểm tra trạng thái của form để gán tiêu đề thích hợp
    if (this.stateForm == "reviewForm") {
      this.titleHeaderForm = this.employee.FullName;
      this.subTitle = this.employee.EmployeeCode;
    }
  },
  components: {
    MSButton,
    DropDownInput,
    DropDownInputDataGrid,
    CalendarInput,
    SelectInput,
    NumberInput,
    TextInput,
    TextAreaInput,
    DxValidationSummary,
    DxButton,
    PopUpWarning,
  },
  mounted() {
    //focus đến vị trí input đầu tiên
    this.$refs.employeeCode.$el.focus();
  },
  watch: {
    // employee: function () {
    //   debugger
    //   this.employee= this.employeeData;
    // },
    employeeObject: function () {
      debugger
      this.employee= this.employeeObject;
      this.item.imageUrl=this.employeeObject["EmployeeImage"];
      this.imgOnTitle= this.employeeObject["EmployeeImage"];
    }
  },
  methods: {
    /**
     * Hàm lấy dữ liệu phòng ban
     * CreatedBy: HNANH(25/12/2020)
     */
    async getDataDepartment() {
      var a = this;
      var departments = [];
      await DepartmentsAPI.getAll()
        .then(function (res) {
          // console.log(res.data);
          departments = res.data;
          departments.forEach((element) => {
            a.departments.push(element);
          });
        })
        .catch(function (err) {
          debugger;
          console.log(err);
        });
    },
    /**
     * Hàm lấy dữ liệu vị trí chức vụ
     * CreatedBy: HNANH(25/12/2020)
     */
    async getDataPosition() {
      var a = this;
      var positions = [];
      await PositionsAPI.getAll()
        .then(function (res) {
          // console.log(res.data);
          positions = res.data;
          positions.forEach((element) => {
            a.positions.push(element);
          });
        })
        .catch(function (err) {
          console.log(err);
        });
    },
    /**Hàm xử lý khi nhấn nút quay lại */
    backPage() {
      // this.$router.push("employee");
      if(this.stateForm == 'saveAndAddForm'){
        document.location.reload();
      }
      this.$emit("backPage");
    },
    /**Hàm xử lý sự kiện khi ấn nút Không từ form cảnh báo */
    onClickNo() {
      this.showPopUpWaring = false;
      //gán lại trạng thái thông báo về null để có thể kiểm tra các lần nhấn nút cất và thêm tiếp
        this.infoMessage.stateMessage = null;
    },
    /**Hàm xử lý sự kiện khi ấn nút Đóng từ form cảnh báo */
    onClickClose() {
      if (this.infoMessage.stateMessage == "Success") {
        
        if(this.stateForm == 'addForm')
        {
          this.showPopUpWaring = false;
          //reload lại trang
          document.location.reload();
        }
        else if(this.stateForm == 'saveAndAddForm'){
          this.showPopUpWaring = false;
        }
        //gán lại trạng thái thông báo về null để có thể kiểm tra các lần nhấn nút cất và thêm tiếp
        this.infoMessage.stateMessage = null;
        
      } else if (this.infoMessage.stateMessage == "Error") {
        this.showPopUpWaring = false;
        //gán lại trạng thái thông báo về null để có thể kiểm tra các lần nhấn nút cất và thêm tiếp
        this.infoMessage.stateMessage = null;
      }
    },
    /**Hàm xử lý sự kiện khi ấn nút Yes từ form cảnh báo */
    onClickYes() {
      //gán lại trạng thái thông báo về null để có thể kiểm tra các lần nhấn nút cất và thêm tiếp
        this.infoMessage.stateMessage = null;
    },

    /**
     * Hàm xử lý sự kiện khi nhấn nút Cất, sử dụng DxButton của thư viện devextreme
     */
    async addEmployee(e) {
      var a = this;
      //Gán giá trị hình ảnh cho đối tượng employee
      this.employee.EmployeeImage = this.item.imageUrl;
      this.employee.FullName = this.employee.FirstName + " " + this.employee.LastName;
      //Lấy kết quả validate khi nhấn nút cất, sử dụng thư viện DXButtonBox
      let result = e.validationGroup.validate();
      //+ nếu tất cả các trường khai báo validate và dữ liệu validate hợp lệ thì isValid trả về true,
      //ngược lại trả về false
      if (result.isValid) {
        //+ nếu validate hợp lệ, kiểm tra trạng thái form

        //++ nếu trạng thái form là addForm thì tiến hành thêm mới
        if (a.stateForm == "addForm" || a.stateForm == "saveAndAddForm") {
         await EmployeesAPI.post(this.employee)
            .then(function (res) {
              console.log(res);
              debugger;
              //Đưa ra thông báo khi thêm thành công
              a.infoMessage.ContentMessage = a.$t("messAddSuccess");
              a.infoMessage.typeMessage = "Message";
              a.infoMessage.stateMessage = "Success";
              a.showPopUpWaring = true;

              // //reload lại trang
              // a.$nextTick(function () {
              //   document.location.reload();
              // })
            })
            .catch(function (err) {
              console.log(err);
              var messError = err.response.data.Data;
              var mess = messError.reduce(function (oldVal, newVal) {
                return oldVal + ". " + newVal;
              });
              a.infoMessage.ContentMessage = mess;
              a.infoMessage.typeMessage = "Message";
              a.infoMessage.stateMessage = "Error";
              a.showPopUpWaring = true;
              debugger;
            });
        }
        //++ nếu trạng thái form là editForm thì tiến hành cập nhật dữ liệu
        else if (a.stateForm == "editForm") {
        await  EmployeesAPI.update(this.employee.EmployeeId, this.employee)
            .then(function (res) {
              console.log(res);
              debugger;
              //Đưa ra thông báo khi cập nhật thành công
              a.infoMessage.ContentMessage = a.$t("messEditSuccess");

              a.infoMessage.typeMessage = "Message";
              a.infoMessage.stateMessage = "Success";
              a.showPopUpWaring = true;

              // //reload lại trang
              // a.$nextTick(function () {
              //   document.location.reload();
              // })
            })
            .catch(function (err) {
              debugger;
              console.log(err);
              var messError = err.response.data.Data;
              if(messError){
                var mess = messError.reduce(function (oldVal, newVal) {
                  return oldVal + ". " + newVal;
                });
                a.infoMessage.ContentMessage = mess;
                a.infoMessage.typeMessage = "Message";
                a.infoMessage.stateMessage = "Error";
                a.showPopUpWaring = true;
              }
            });
        }
        // Nếu có trường dữ liệu validate ko hợp lệ thì cần focus đến vị trí input đầu tiên
      } else {
        debugger
        // Lấy ra các trường có validates
        var validateInputs = e.validationGroup.validators;
        for (const input of validateInputs) {
          //kiểm tra xem trường nào có dữ liệu ko hợp lệ
          if (!input._validationInfo.result.isValid) {
            //tiến hành focus đến vị trí input có dữ liệu ko hợp lệ đầu tiên
            input.focus();
            return;
          }
        }
      }
    },
    /**
     * Hàm xử lý khi nhấn nút cất và thêm
     * CreatedBy: HNANH (28/12/2020)
     */
    async saveAndAddEmployee(e){
      debugger
      this.stateForm= 'saveAndAddForm';
      await this.addEmployee(e);

      // gán objData về trống chỉ khi việc cất và thêm đã thành công
      if(this.stateForm == 'saveAndAddForm' && this.infoMessage.stateMessage == "Success"){
        // gán objData về trống
        this.employee= {};
        this.item.imageUrl = null;
      }
    },
    /**
     * Hàm để chuyển đổi hình ảnh sang base64
     * CreatedBy: HNANH (22/12/2020)
     */
    readFileAsync(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = function (abc) {
          resolve(abc.target.result);
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    },
    /**Hàm xử lý sự kiện khi chọn hình ảnh 
     * CreatedBy: HNANH (23/12/2020)
    */
    async onChangeImage(e) {
      const file = e.target.files[0];
      this.image = file;
      // this.item.imageUrl = URL.createObjectURL(file);
      this.item.imageUrl = await this.readFileAsync(file);
    },
    /**
     * Hàm để tạo sự kiện click cho input có type là file
     *  CreatedBy: HNANH (23/12/2020)
     */
    triger() {
      this.$refs.inputTypeFile.click();
    },
    /**
     * Hàm để tạo sự kiện click vào icon edit để tiến hành chỉnh sửa thông tin hồ sơ
     *  CreatedBy: HNANH (27/12/2020)
     */
    btnEditFormClick() {
      this.stateForm = "editForm";
      this.titleHeaderForm = "Sửa thông tin - " + this.employee.FullName;
    },
  },
};
</script>
<style>
/* Css cho phần menu nav bar ở form xem và sửa */
.nav-bar-info {
  width: 220px;
  height: 100%;
  background-color: #f5f5f5;
}
.item-menu {
  text-decoration: none;
  color: #000000;
}
.item-menu:active {
  color: #000000;
}
.nav-bar-info .block-item-menu {
  width: auto;
  height: 40px;
  line-height: 40px;
  font-size: 13px;
  padding-left: 10px;
}
.block-item-menu:hover {
  font-weight: bold;
  background-color: #e5e5e5;
}
.block-item-menu:focus {
  font-weight: bold;
  background-color: #e5e5e5;
}
.block-item-menu:active {
  font-weight: bold;
  background-color: #e5e5e5;
}
.btn-edit-form {
  border: none;
  outline: none;
  background-color: #ffffff;
  width: 16px;
  height: 16px;
  background-image: url("~@/assets/icons/icon-edit-form.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 16px 16px;
  margin-left: 16px;
  cursor: pointer;
}

/* Css cho phần custom lại nút DXButtonBox */
.dx-button-content {
  display: flex;
  align-items: center;
}
.dx-button-has-text .dx-button-content {
  padding: 0 6px;
}
/* .dx-button-mode-contained.dx-state-focused{
  background-color: #cfe9ff;
} */
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
/* .content-block-body .content-body { */
.content-body {
  height: 100%;
  width: 100%;
  /* width: calc(100% - 84px); */
}
.content-body .header-body {
  padding-left: 16px;
  width: auto;
  height: 62px;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  position: relative;
}
.header-body .title-body {
  display: flex;
  align-items: center;
  height: 100%;
  width: auto;
}
.title-body .icon-back {
  width: 24px;
  height: 100%;
  background-image: url("~@/assets/icons/icon-back.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 24px 24px;
  cursor: pointer;
}
.title-body .title {
  height: 100%;
  margin-left: 16px;
  display: flex;
  align-items: center;
}
.title .image-on-title {
  width: 40px;
  height: 40px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 40px 53px;
  margin-right: 10px;
  border-radius: 50%;
}
.img-default {
  background-image: url("~@/assets/img/AvatarDefault.png");
}
.title .title-main {
  font-size: 24px;
  line-height: 62px;
}
.title .sub-title {
  font-size: 16px;
  line-height: 62px;
  color: #919191;
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
  border: none;
}
.btn:hover {
  background-color: #e7f4ff;
}
.btn:active {
  background-color: #cfe9ff;
}
.btn:focus {
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
