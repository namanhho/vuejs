<template>
  <div class="dx-field">
    <div class="dx-field-label">{{ label }}</div>
    <div class="dx-field-value">
      <DxTextArea
        :height="90"
        v-model="currentValue"
        @value-changed="valueChanged"
        :read-only="stateShowForm == 'reviewForm' ? true : false"
      />
    </div>
  </div>
</template>
<script>
import DxTextArea from "devextreme-vue/text-area";
export default {
  data() {
    return {
      currentValue: this.objectData[this.fieldName],
    };
  },
  components: {
    DxTextArea,
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
  watch: {
    objectData: function () {
      this.currentValue= this.objectData[this.fieldName];
    }
  },
  methods: {
    //Hàm xử lý khi nội dung input có sự thay đổi
    valueChanged() {
      var fieldName = this.fieldName;
      this.objectData[fieldName] = this.currentValue;
      //gửi emit chứa đối tượng đã được thêm nội dung thay đổi cho cha
      this.$emit("getValue", this.objectData);
    },
  },
};
</script>
<style scoped></style>
