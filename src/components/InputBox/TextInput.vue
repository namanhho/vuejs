<template>
  <!-- <form action="your-action" @submit="onFormSubmit($event)"> -->
  <div class="dx-field">
    <div v-if="label" class="dx-field-label">
      <div
        v-if="iconLabel"
        :class="iconLabel"
        style="margin-right: 4px; float: left"
      ></div>
      {{ label }}<span v-if="required && label" style="color: red">(*)</span>
    </div>
    <div class="dx-field-value" :style="customStyle">
      <DxTextBox
        :ref="fieldName"
        :placeholder="placeholder"
        v-model="currentValue"
        :onFocusOut="onBlur"
        @value-changed="valueChanged"
        :read-only="stateShowForm == 'reviewForm' ? true : false"
      >
        <DxValidator v-if="validate">
          <DxRequiredRule v-if="required" message="Trường này không được phép để trống" />
          <DxEmailRule v-if="typeEmail" message="Email is invalid" />
          <DxAsyncRule
            v-if="duplicate"
            :validation-callback="asyncValidation"
            message="Email is already registered"
          />
          <DxPatternRule
            v-if="notNumber"
            :pattern="namePattern"
            message="Trường này không được bao gồm số"
          />
          <DxStringLengthRule
            v-if="maxLength"
            :max="20"
            message="Trường này không được quá 20 ký tự"
          />
        </DxValidator>
      </DxTextBox>
    </div>
    <div></div>
  </div>
</template>
<script>
import DxTextBox from "devextreme-vue/text-box";
import DxValidationSummary from "devextreme-vue/validation-summary";
import EmployeesAPI from "@/api/components/employees/EmployeesAPI.js";
import {
  DxValidator,
  DxRequiredRule,
  DxCompareRule,
  DxEmailRule,
  DxPatternRule,
  DxStringLengthRule,
  DxAsyncRule,
} from "devextreme-vue/validator";
const sendRequest = function (value) {
  const validEmail = "test@dx-email.com";
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve(value === validEmail);
    }, 1000);
  });
};
export default {
  data() {
    return {
      namePattern: /^[^0-9]+$/,
      currentValue: this.objectData[this.fieldName],
      maxEmployeeCode: null,
    };
  },
  created() {
    // if(!this.currentValue){
    //   this.currentValue= null;
    // }
  },
  mounted() {
    //focus đến vị trí ô input đầu tiên
    if (this.fieldName == "EmployeeCode") this.$refs.EmployeeCode.$el.focus();

    //Lấy mã nhân viên lớn nhất

    //+ Kiểm tra trường input này có phải là của employeecode không và form đang mở có nhiệm vụ thêm hay không
    if (this.fieldName == "EmployeeCode" && this.stateShowForm == "addForm") {
      this.getMaxEmployeeCode();
    }
  },
  watch: {
    maxEmployeeCode: function () {
      this.currentValue = this.maxEmployeeCode;
    },
    objectData: function () {
      debugger;
      //Cập nhật giá trị vào khi đối tượng objectData thay đổi
      this.currentValue = this.objectData[this.fieldName];

      //Đối với trường input của mã nhân viên, cần tiến hành tự động tăng để cập nhật giá trí lớn nhất
      if (this.fieldName == "EmployeeCode" && (this.stateShowForm == "addForm" || this.stateShowForm == "saveAndAddForm")) {
        this.getMaxEmployeeCode();
      }
    },
  },
  components: {
    DxTextBox,
    DxValidator,
    DxRequiredRule,
    DxCompareRule,
    DxEmailRule,
    DxPatternRule,
    DxStringLengthRule,
    DxValidationSummary,
  },
  props: {
    label: {
      type: [String],
      default: null,
    },
    placeholder: {
      type: String,
      default: null,
    },
    validate: {
      type: Boolean,
      default: false,
    },
    required: {
      type: Boolean,
      default: false,
    },
    notNumber: {
      type: Boolean,
      default: false,
    },
    maxLength: {
      type: Boolean,
      default: false,
    },
    typeEmail: {
      type: Boolean,
      default: false,
    },
    duplicate: {
      type: Boolean,
      default: false,
    },
    objectData: {
      type: Object,
      default: null,
    },
    fieldName: {
      type: String,
      default: null,
    },
    customStyle: {
      type: String,
      default: null,
    },
    stateShowForm: {
      type: String,
      default: null,
    },
    iconLabel: {
      type: String,
      default: null,
    },
  },
  methods: {
    /**
     * Hàm lấy mã nhân viên max và tự động tăng
     * CreatedBy: HNANH(27/12/2020)
     */
    async getMaxEmployeeCode() {
      debugger
      var me = this;
      await EmployeesAPI.getMaxEmployeeCode()
        .then(function (res) {
          var maxCode = res.data;
          //Tiến hành đảo ngược mã vì tự động tăng từ cuối lên đầu
          var reverseMaxCode = maxCode.split("").reverse().join("");
          var increased = false;
          //CHuyển chuỗi về mảng và dùng map để tính toán ra vị trí mã cần tăng
          var newCode = reverseMaxCode.split("").map(function (x) {
            if (!increased) {
              var asciiCode = x.charCodeAt(0);
              if (
                (asciiCode < 57 && asciiCode >= 48) ||
                (asciiCode < 90 && asciiCode >= 65) ||
                (asciiCode < 122 && asciiCode >= 97)
              ) {
                increased = true;
                asciiCode++;
                return String.fromCharCode(asciiCode);
              } else {
                return 0;
              }
            }
            return x;
          });

          var resultCode = newCode.reverse().join("");
          me.currentValue = resultCode;
        })
        .catch(function (err) {});
    },
    /**
     * Hàm xử lý sự kiện blur, mục đích để làm thay đổi giá trị từ null sang '' để hàm
     * validate của thư viện có thể hiểu là đang trống
     */
    onBlur() {
      debugger;
      if (!this.currentValue) {
        this.currentValue = "";
      }
    },
    /**
     * Hàm validate động email của thư viện devextreme
     */
    asyncValidation(params) {
      return sendRequest(params.value);
    },
    /**
     * Hàm xử lý sự kiện khi nội dung input có sự thay đổi
     * CreatedBy: HNANH(20/12/2020)
     */
    valueChanged() {
      debugger;
      var fieldName = this.fieldName;
      var value = this.currentValue ? this.currentValue.toString().trim() : null;
      if (value == "") {
        value = null;
      }
      this.objectData[fieldName] = value;

      this.$emit("getValue", this.objectData);
    },
  },
};
</script>
<style>
/* Css ghi đè lại css của thư viện */
.dx-field-value {
  width: calc(100% - 150px) !important;
}
.dx-field-label {
  width: 150px;
}
</style>
