<template>
  <div class="dx-field">
    <div class="dx-field-label">{{ label }}</div>
    <div class="dx-field-value">
      <DxDateBox
        id="selected-date"
        v-model="currentValue"
        width="100%"
        @value-changed="valueChanged()"
        :read-only="(stateShowForm == 'reviewForm')? true: false"
      >
      </DxDateBox>
      
    </div>
  </div>
</template>
<script>
import DxDateBox from "devextreme-vue/date-box";
import { locale } from 'devextreme/localization';
export default {
  components: {
    DxDateBox,
  },
  data() {
    return {
      locale: 'vi',
      currentValue: (this.objectData[this.fieldName]) ? this.objectData[this.fieldName]: new Date(),
    };
  },
  created() {
    //Set locale để chuyển về tiếng việt
    locale(this.locale);
  },
  watch: {
    objectData: function () {
      this.currentValue= (this.objectData[this.fieldName]) ? this.objectData[this.fieldName]: new Date();
    }
  },
  methods: {
    /**Hàm xử lý khi dữ liệu input có sự thay đổi */
    valueChanged() {
      var fieldName = this.fieldName;
      this.objectData[fieldName] = this.currentValue;
      //gửi emit objectData đã được thêm dữ kiệu thay đổi
      this.$emit("getValue", this.objectData);
    },
  },
  props: {
    label: {
      type: String,
      default: "",
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
};
</script>
<style scoped></style>
