<template>
  <div class="dx-field">
    <div class="dx-field-label">{{ label }}</div>
    <div class="dx-field-value">
      <DxNumberBox
        :value="valueDefaultNumber"
        :show-spin-buttons="true"
        @value-changed="valueChanged($event)"
        :read-only="(stateShowForm == 'reviewForm')? true: false"
      />
    </div>
  </div>
</template>
<script>
import { DxNumberBox } from "devextreme-vue/number-box";
export default {
  components: {
    DxNumberBox,
  },
  data() {
    return {
      valueDefaultNumber: (this.objectData[this.fieldName]) ? this.objectData[this.fieldName] : this.valueDefault,
    };
  },
  props: {
    label: {
      type: String,
      default: "",
    },
    valueDefault: {
      type: Number,
      default: new Date().getFullYear(),
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
    }
  },
  watch: {
    objectData: function () {
      this.valueDefaultNumber= (this.objectData[this.fieldName]) ? this.objectData[this.fieldName] : new Date().getFullYear();
    },
  },
  methods: {
    /**
     * Hàm xử lý sự kiện khi có nội dung input thay đổi
     */
    valueChanged(e) {
      var fieldName = this.fieldName;
      this.objectData[fieldName] = e.value;
      this.valueDefaultNumber= e.value;
      // gửi emit chứa objectData đã được thêm nội dung dữ liệu thay đổi
      this.$emit("getValue", this.objectData);
    },
  },
};
</script>
<style scoped></style>
