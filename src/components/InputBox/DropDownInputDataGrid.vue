<template>
  <div class="dx-field">
    <div class="dx-field-label">
      {{ label }}<span v-if="required" style="color: red">(*)</span>
    </div>
    <div class="dx-field-value">
      <DxDropDownBox
        v-model="gridBoxValueUpdate"
        :defer-rendering="false"
        :display-expr="gridBoxDisplayExpr"
        :show-clear-button="true"
        :data-source="gridDataSource"
        value-expr="PositionId"
        :placeholder="placeholder"
        :onFocusOut="onBlur"
        @value-changed="valueChanged($event)"
        :read-only="stateShowForm == 'reviewForm' ? true : false"
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
import { locale } from "devextreme/localization";
export default {
  data() {
    return {
      gridDataSource: null,
      gridBoxValue: "",
      gridColumns: ["PositionCode", "PositionName"],
      inputDatas: [],
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
    stateShowForm: {
      type: String,
      default: null,
    },
  },
  created() {
    locale("vi");
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
    /**Cập nhật giá trị người dùng chọn */
    gridBoxValueUpdate: {
      get: function () {
        return this.gridBoxValue;
      },
      set: function (value) {
        this.gridBoxValue = value || [];
      },
    },
  },
  watch: {
    /**
     * Kiểm tra sự thay đổi của dữ liệu khởi tạo ban đầu nhận được từ cha, con hứng ở prop
     * Khi người dùng nhấn cất và thêm objectData ở cha bị khởi tạo về null, ở con phải kiểm tra
     * thay đổi và gán lại giá trị ban đầu cho mình
     */
    objectData: async function () {
      await this.getDataPosition();
      this.gridDataSource = await this.makeDataSource();
      await this.selectPosition();
    },
    //Xử lý khi dữ liệu datas hứng được ở prop được chuyền từ cha xuống con có sự thay đổi
    datas: async function () {
      await this.getDataPosition();
      this.gridDataSource = await this.makeDataSource();
      await this.selectPosition();
    },
  },
  methods: {
    /**
     * Hàm chọn đúng position tương ứng trong đối tượng objectData nhận được từ cha
     * CreatedBy: HNANH(24/12/2020)
     */
    selectPosition() {
      // var positionName = this.objectData[this.fieldName];
      // var position = this.inputDatas.find(function (data, index) {
      //   return data.PositionName == positionName;
      // });
      // if (position) this.gridBoxValue = position.PositionId;
      // else this.gridBoxValue = "";

      var me= this;
      var positionId = this.objectData[this.fieldName];
      var position = this.inputDatas.find(function (data, index) {
        return data[me.fieldName] == positionId;
      });
      if (position) this.gridBoxValue = position[me.fieldName];
      else this.gridBoxValue = "";
    },
    /**
     * Hàm của thư viện để thực hiện đổ dữ liệu vào hộp input
     */
    makeDataSource() {
      return new DataSource({
        store: this.inputDatas,
        map: function (item) {
          item.key = item["PositionId"];
          return item;
        },
      });
    },
    /**
     * Hàm để cập nhật item được chọn mới và gửi emit objectData chưa nội dung thay đổi cho cha
     */
    itemSelectionChanged(e) {
      debugger;
      this.gridBoxValue = [e.selectedRowKeys[0][this.fieldName]];
      // this.$emit("getValue", e.currentSelectedRowKeys[0].PositionName);
      // var fieldName = this.fieldName;
      // this.objectData[fieldName] = e.currentSelectedRowKeys[0].PositionName;
      this.objectData["PositionId"] = e.currentSelectedRowKeys[0].PositionId;
      this.$emit("getValue", this.objectData);
    },
    /**
     * Hàm xử lý khi có thay đổi giá trị nội dung, và tiến hành gửi emit objectData cho cha
     * CreatedBy: HNANH(24/12/2020)
     */
    valueChanged(e){
      debugger
      // var fieldName = this.fieldName;
      // this.objectData[fieldName] = e.value[0];
      // // this.objectData["PositionId"] = e.currentSelectedRowKeys[0].PositionId;
      // this.$emit("getValue", this.objectData);
    },
    /**Hàm để trưng bày giá trị được chọn */
    gridBoxDisplayExpr(item) {
      return item && `${item.PositionName}`;
    },
    /**Hàm để gán dữ liệu nhận được từ cha  */
    async getDataPosition() {
      this.inputDatas = this.datas;
    },
    /**Hàm xử lý sự kiện blur, chuẩn bị cho quá trình validate dữ liệu bắt buộc nhập */
    onBlur() {
      if (this.gridBoxValue == "") {
        this.gridBoxValue = null;
      }
    },
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
