<template class="dx-fieldset">
  <div class="dx-field">
    <div class="dx-field-label">{{ label }}</div>
    <div class="dx-field-value">
      <DxSelectBox
        :items="datas"
        style="height: 32px"
        :placeholder="placeholder"
        :value="valueSelectDefault"
        @selection-changed="valueChanged($event)"
        :read-only="(stateShowForm == 'reviewForm')? true: false"
        :onFocusOut="onBlur"
      >
        <DxValidator v-if="validate">
          <DxRequiredRule v-if="required" message="Address is required" />
        </DxValidator>
      </DxSelectBox>
    </div>
  </div>
</template>
<script>
import DxSelectBox from "devextreme-vue/select-box";
import DxValidationSummary from "devextreme-vue/validation-summary";
import { DxValidator, DxRequiredRule } from "devextreme-vue/validator";
export default {
  data() {
    return {
      valueSelectDefault: (this.objectData[this.fieldName])? this.objectData[this.fieldName]:this.datas[0],
    };
  },
  components: {
    DxSelectBox,
    DxValidator,
    DxRequiredRule,
  },
  props: {
    label: {
      type: [String],
      default: "Label",
    },
    datas: {
      type: Array,
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
    objectData: {
      type: Object,
      default: null,
    },
    fieldName: {
      type: String,
      default: null,
    },
    stateShowForm: {
      type: String,
      default: null,
    },
  },
  watch: {
    objectData: function () {
      this.valueSelectDefault= (this.objectData[this.fieldName])? this.objectData[this.fieldName]:this.datas[0];
    }
  },
  methods: {
    onBlur(e){
    },
    /**
     * Hàm xử lý sự kiện khi nội dung input thay đổi
     */
    valueChanged(e) {
      var fieldName = this.fieldName;
      this.objectData[fieldName] = e.selectedItem;

      this.valueSelectDefault = e.selectedItem;
      //gửi emit chứa nội dung thay đổi đã được thêm vào đối tượng objectData- được gửi xuống từ cha
      this.$emit("getValue", this.objectData);
    },
  },
};
</script>
<style>
/* Css ghi đè lên css của thư viện */
.dx-list:not(.dx-list-select-decorator-enabled) .dx-list-item.dx-state-hover {
  background-color: #e7f4ff !important;
}
.dx-list:not(.dx-list-select-decorator-enabled) .dx-list-item.dx-state-active {
  background-color: #cfe9ff;
}
.dx-list:not(.dx-list-select-decorator-enabled) .dx-list-item.dx-list-item-selected {
  background-color: #cfe9ff !important;
}
.dx-fieldset {
  margin: 30px 0;
  padding: 0;
}
.dx-field {
  min-height: 30px;
  padding: 0;
  margin: 0 0 10px;
  display: flex;
}
.dx-field-label {
  padding: 0;
  padding-right: 15px;
}
.dx-texteditor-input {
  padding: 0;
  padding-left: 9px;
  min-height: 30px;
}
.dx-dropdowneditor.dx-state-active .dx-dropdowneditor-icon,
.dx-dropdowneditor.dx-state-hover:not(.dx-custom-button-hovered) .dx-dropdowneditor-icon {
  background-color: #ffffff !important;
}
.dx-placeholder::before {
  padding-left: 9px;
  line-height: 30px;
}
</style>
