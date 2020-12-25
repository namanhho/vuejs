<template>
  <div class="dx-field">
    <div class="dx-field-label">{{label}}</div>
    <div class="dx-field-value">
      <DxTextArea :height="90" v-model="currentValue" @value-changed="valueChanged"/>
    </div>
  </div>
</template>
<script>
import DxTextArea from "devextreme-vue/text-area";
export default {
  data() {
    return{
      currentValue: this.objectData[this.fieldName],
    }
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
    }
  },
  methods: {
    valueChanged(){
      // debugger
      var fieldName= this.fieldName;
      this.objectData[fieldName]= this.currentValue;
      this.$emit('getValue', this.objectData);
    }
  }
};
</script>
<style scoped></style>
