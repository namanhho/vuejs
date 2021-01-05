<template>
  <div class="dx-field">
    <div class="dx-field-label">
      {{ label }}<span v-if="required" style="color: red">(*)</span>
    </div>
    <div class="dx-field-value">
      <DxDropDownBox
        v-model="treeBoxValue"
        :show-clear-button="true"
        :data-source="treeDataSource"
        value-expr="DepartmentId"
        display-expr="DepartmentName"
        :placeholder="placeholder"
        @value-changed="syncTreeViewSelection($event)"
        :onFocusOut="onBlur"
        :read-only="(stateShowForm == 'reviewForm')? true: false"
      >
        <DxValidator v-if="validate">
          <DxRequiredRule v-if="required" message="Trường này không được phép để trống" />
        </DxValidator>
        <template #content="{ data }">
          <DxTreeView
            :ref="treeViewRefName"
            :data-source="treeDataSource"
            :select-by-click="true"
            data-structure="plain"
            key-expr="DepartmentId"
            parent-id-expr="CategoryId"
            selection-mode="single"
            display-expr="DepartmentName"
            @content-ready="$event.component.selectItem(treeBoxValue)"
            @item-selection-changed="treeView_itemSelectionChanged($event)"
          />
        </template>
      </DxDropDownBox>
    </div>
  </div>
</template>
<script>
import DxDropDownBox from "devextreme-vue/drop-down-box";
import DxTreeView from "devextreme-vue/tree-view";
import DataSource from "devextreme/data/data_source";
import DxValidationSummary from "devextreme-vue/validation-summary";
import { DxValidator, DxRequiredRule } from "devextreme-vue/validator";
export default {
  data() {
    return {
      treeDataSource: null,
      treeBoxValue: '',
      treeViewRefName: "tree-view",
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
    }
  },
  watch: {
    /**
     * Kiểm tra sự thay đổi của dữ liệu khởi tạo ban đầu nhận được từ cha, con hứng ở prop
     * Khi người dùng nhấn cất và thêm objectData ở cha bị khởi tạo về null, ở con phải kiểm tra
     * thay đổi và gán lại giá trị ban đầu cho mình
     */
    objectData: async function(){
      await this.getDataDepartment();
      this.treeDataSource =  await this.makeDataSource();
      this.selectDepartment();
    },
    /**
     * Kiểm tra sự thay đổi của dữ liệu nhận được từ cha, con hứng ở prop
     */
    datas:async function(){
      await this.getDataDepartment();
      this.treeDataSource =  await this.makeDataSource();
      await this.selectDepartment();
    }
  },
  components: {
    DxDropDownBox,
    DxTreeView,
    DxValidator,
    DxRequiredRule,
  },
  methods: {
    /**
     * Hàm chọn đúng phòng ban tương ứng với phòng ban của đối tượng objectData nhận được từ cha
     * CrearedBy: HNANH(20/12/2020)
     */
    selectDepartment() {
      debugger
      var inputValue = this.objectData[this.fieldName];
      var inputData = this.inputDatas.find(function (data, index) {
        return (data["DepartmentName"] == inputValue);
      });
      if (inputData) {
        this.treeBoxValue = inputData["DepartmentId"]
      } else {
        this.treeBoxValue = '';
      }
    },
    /**
     * Hàm lấy data các dữ liệu mà người dùng có thể chọn
     * CrearedBy: HNANH(20/12/2020)
     */
    makeDataSource() {
      return new DataSource({
        store: this.datas,
        map: function (item) {
          item.key = item["DepartmentId"];
          return item;
        },
      });
    },
    /**
     * Hàm xử lý sự kiện khi người dùng chọn và sẽ hiện thi ra đúng tên dữ liệu đó
     * CrearedBy: HNANH(20/12/2020)
     */
    syncTreeViewSelection() {
      // debugger
      if (!this.$refs[this.textBoxRefName]) return;
      if (!this.treeBoxValue) {
        this.$refs[this.textBoxRefName].instance.unselectAll();
      } else {
        this.$refs[this.textBoxRefName].instance.selectItem(this.treeBoxValue);
      }
    },
    /**
     * Hàm xử lý sự kiện  khi có thay đổi và tiến hành gửi trả lại đối tượng sau khi đã được cập nhật thêm dữ liệu
     * CrearedBy: HNANH(20/12/2020)
     */
    treeView_itemSelectionChanged(e) {
      this.treeBoxValue = e.component.getSelectedNodeKeys();
      var fieldName = this.fieldName;
      this.objectData[fieldName] = e.itemData.DepartmentName;
      this.objectData['DepartmentId'] = e.itemData.DepartmentId;
      this.$emit("getValue", this.objectData);
    },
    getDataDepartment(){
      this.inputDatas= this.datas;
    },
    /**
     * Xử lý sự kiện blur, chuẩn bị cho việc validate bắt buộc nhập
     */
    onBlur(){
      if (this.treeBoxValue == ''){
        this.treeBoxValue = null;
      }
    }
  },
};
</script>
<style>
/* Css ghi đè lên css của thư viện */
.dx-treeview-item.dx-state-hover {
  background-color: #e7f4ff !important;
}
.dx-treeview-item-without-checkbox.dx-state-focused > .dx-treeview-item {
  background-color: #cfe9ff !important;
}
.dx-treeview-item-without-checkbox.dx-state-selected > .dx-treeview-item {
  background-color: #cfe9ff !important;
}
.dx-dropdowneditor-button.dx-state-active .dx-dropdowneditor-icon,
.dx-dropdowneditor.dx-dropdowneditor-active .dx-dropdowneditor-icon {
  background-color: #ffffff;
}
.dx-placeholder::before {
  padding: 0;
  padding-left: 9px;
  line-height: 30px;
}
.dx-show-clear-button .dx-icon-clear {
  color: #ffffff !important;
}
</style>
