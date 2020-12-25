<template>
  <div class="dx-field">
    <div class="dx-field-label">{{ label }}</div>
    <div class="dx-field-value">
      <DxDateBox
        id="selected-date"
        v-model="currentValue"
        width="100%"
        @value-changed="valueChanged()"
      >
      </DxDateBox>
      
    </div>
    <!-- <div>{{currentValue}}</div> -->
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
    locale(this.locale);
    debugger
    // document.location.reload();
  },
  methods: {
    valueChanged() {
      debugger;
      // this.$emit("getValue", this.currentValue);
      var fieldName = this.fieldName;
      this.objectData[fieldName] = this.currentValue;
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
  },
};
</script>
<style scoped></style>
