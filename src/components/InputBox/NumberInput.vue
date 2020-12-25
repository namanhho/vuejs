<template>
  <div class="dx-field">
    <div class="dx-field-label">{{ label }}</div>
    <div class="dx-field-value">
      <DxNumberBox
        :value="objectData[fieldName] ? objectData[fieldName] : valueDefault"
        :show-spin-buttons="true"
        @value-changed="valueChanged($event)"
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
    return {};
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
  },
  methods: {
    valueChanged(e) {
      debugger;
      var fieldName = this.fieldName;
      this.objectData[fieldName] = e.selectedItem;
      this.$emit("getValue", this.objectData);
      // alert("changed");
    },
  },
};
</script>
<style scoped></style>
