<template>
  <!-- <form action="your-action" @submit="onFormSubmit($event)"> -->
  <div class="dx-field">
    <div v-if="label" class="dx-field-label">{{ label }}<span v-if="required && label" style="color: red;">(*)</span></div>
    <div class="dx-field-value" :style="customStyle">
      <DxTextBox :placeholder="placeholder" v-model="currentValue"  @value-changed="valueChanged">
        <DxValidator v-if="validate">
          <DxRequiredRule v-if="required" message="Trường này không được phép để trống" />
          <DxEmailRule v-if="typeEmail" message="Email is invalid" />
          <DxAsyncRule v-if="duplicate"
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
      <!-- <DxTextBox v-if="inputsecond" :placeholder="placeholder" v-model="currentValue"  @value-changed="valueChanged">
        <DxValidator v-if="validate">
          <DxRequiredRule v-if="required" message="Trường này không được phép để trống" />
          <DxEmailRule v-if="typeEmail" message="Email is invalid" />
          <DxAsyncRule v-if="duplicate"
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
      </DxTextBox> -->
      <!-- <slot name="lastName"></slot> -->
    </div>
    <div></div>
    <!-- <div class="dx-fieldset">
      <DxValidationSummary id="summary" />
      <DxButton id="button" :use-submit-behavior="true" text="Register" type="success" />
    </div> -->
  </div>
  <!-- </form> -->
</template>
<script>
import DxTextBox from "devextreme-vue/text-box";
import DxValidationSummary from "devextreme-vue/validation-summary";
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
    // debugger
    return {
      namePattern: /^[^0-9]+$/,
      currentValue: this.objectData[this.fieldName],
    };
  },
  created() {
    // debugger
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
    }
  },
  methods: {
    onBlur() {
      debugger;
    },
    asyncValidation(params) {
      return sendRequest(params.value);
    },
    valueChanged(){
      // debugger
      var fieldName= this.fieldName;
      this.objectData[fieldName]= this.currentValue
      this.$emit('getValue', this.objectData);
      // alert(this.currentValue);
    }
  },
};
</script>
<style>
.dx-field-value{
  width: calc(100% - 150px) !important;
}
.dx-field-label{
  width: 150px;
}
</style>
