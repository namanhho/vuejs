<template>
  <div class="dx-field">
    <div class="dx-field-label">{{ label }}<span v-if="required" style="color: red;">(*)</span></div>
    <div class="dx-field-value">
      <DxDropDownBox
        v-model="gridBoxValueUpdate"
        :defer-rendering="false"
        :display-expr="gridBoxDisplayExpr"
        :show-clear-button="true"
        :data-source="gridDataSource"
        value-expr="PositionId"
        :placeholder="placeholder"
        @value-changed="valueChanged($event)"
      >
        <DxValidator v-if="validate">
          <DxRequiredRule v-if="required" message="Trường này không được phép để trống" />
        </DxValidator>
        <template #content="{ data }">
          <DxDataGrid
            :data-source="gridDataSource"
            :columns="gridColumns"
            :hover-state-enabled="true"
            v-model="gridBoxValueUpdate"
            height="100%"
            @selection-changed="itemSelectionChanged($event)"
          >
            <DxSelection mode="single" />
            <DxPaging :enabled="true" :page-size="10" />
            <DxFilterRow :visible="true" />
            <DxScrolling mode="infinite" />
          </DxDataGrid>
        </template>
      </DxDropDownBox>
    </div>
  </div>
</template>
<script>
import DxDropDownBox from "devextreme-vue/drop-down-box";
import DxValidationSummary from "devextreme-vue/validation-summary";
import { DxValidator, DxRequiredRule } from "devextreme-vue/validator";
import {
  DxDataGrid,
  DxSelection,
  DxPaging,
  DxFilterRow,
  DxScrolling,
} from "devextreme-vue/data-grid";
import DataSource from "devextreme/data/data_source";
import { locale } from 'devextreme/localization';
export default {
  data() {
    return {
      gridDataSource: null,
      gridBoxValue: [3],
      gridColumns: ["PositionCode", "PositionName", "Department"],
    };
  },
  props: {
    label: {
      type: String,
      default: "",
    },
    datas: {
      type: Array,
      default: [],
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
  },
  created() {
    this.gridDataSource = this.makeDataSource();
    locale('vi');
    this.selectPosition();
  },
  components: {
    DxDropDownBox,
    DxDataGrid,
    DxSelection,
    DxPaging,
    DxFilterRow,
    DxScrolling,
    DxValidator,
    DxRequiredRule,
  },
  computed: {
    gridBoxValueUpdate: {
      get: function () {
        return this.gridBoxValue;
      },
      set: function (value) {
        this.gridBoxValue = value || [];
      },
    },
  },
  methods: {
    selectPosition(){
      var positionName= this.objectData[this.fieldName];
      var position= this.datas.find(function(data, index){
        return data.PositionName == positionName;
      })
      if(position) this.gridBoxValue = position.PositionId;
      else this.gridBoxValue = null;
    },
    makeDataSource() {
      return new DataSource({
        store: this.datas,
        map: function (item) {
          item.key = item['PositionId'];
          return item;
        },
      });
    },
    itemSelectionChanged(e) {
      debugger;
      this.gridBoxValue = [e.selectedRowKeys[0]['PositionId']];
      // this.$emit("getValue", e.currentSelectedRowKeys[0].PositionName);
      var fieldName = this.fieldName;
      this.objectData[fieldName] = e.currentSelectedRowKeys[0].PositionName;
      this.$emit("getValue", this.objectData);
    },
    gridBoxDisplayExpr(item) {
      // debugger;
      return item && `${item.PositionName} <${item.Department}>`;
    },
    valueChanged(e){
      // debugger
    }
  },
};
</script>
<style>
.dx-datagrid-rowsview .dx-selection.dx-row:not(.dx-row-focused) > td,
.dx-datagrid-rowsview .dx-selection.dx-row:not(.dx-row-focused) > tr > td,
.dx-datagrid-rowsview .dx-selection.dx-row:not(.dx-row-focused):hover > td,
.dx-datagrid-rowsview .dx-selection.dx-row:not(.dx-row-focused):hover > tr > td {
  background-color: #cfe9ff !important;
}
.dx-datagrid-table
  .dx-data-row.dx-state-hover:not(.dx-selection):not(.dx-row-inserted):not(.dx-row-removed):not(.dx-edit-row):not(.dx-row-focused)
  > td:not(.dx-focused) {
  background-color: #e7f4ff !important;
}
</style>
