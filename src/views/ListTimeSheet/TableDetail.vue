<template>
  <div class="list-table-detail">
    <div class="content-table-detail style-scollbar">
      <!-- :remote-operations="{ groupPaging: true }"
    :word-wrap-enabled="true" -->
      <DxDataGrid
        :column-auto-width="true"
        :show-row-lines="true"
        :show-borders="true"
        :allow-column-reordering="true"
        :allow-column-resizing="true"
        :data-source="employees"
        column-resizing-mode="nextColumn"
        :column-min-width="50"
      >
        <DxColumn :group-index="0" data-field="DepartmentName" caption="Tên phòng ban" />
        <template #dataRowTemplate="{ data: rowInfo }">
          <div>
            <div style="width: 100%;">Tên phòng ban</div>
            <div style="width: 100%; background-color:#ffffff !important;"><InputSearchBox style="width: 100%;"></InputSearchBox></div>
          </div>
        </template>
        <!-- <DxFilterRow :visible="true"  @value-changed="valueChanged" :editor-options="{ format: 'currency', showClearButton: true }" alignment="right"
        format="currency"> </DxFilterRow> -->
        <!-- <DxLookup
          :data-source="employees"
          value-expr="DepartmentId"
          display-expr="DepartmentName"
        /> -->
        <!-- <DxFilterRow :visible="true" /> -->
        <DxColumn
          :allow-reordering="false"
          data-field="TimeSheetCode"
          caption="Mã chấm công"
          :fixed="true"
          sort-order="asc"
          alignment="left"
          header-cell-template="dataRowTemplate"
        >
          <DxFilterRow
            :visible="true"
            @value-changed="valueChanged"
            :editor-options="{ format: 'currency', showClearButton: true }"
            alignment="right"
            format="currency"
          >
          </DxFilterRow>
        </DxColumn>

        <!-- <DxDataGrid
          :show-borders="true"
          row-template="dataRowTemplate"
        >
          <DxColumn
            data-field="EmployeeCode"
            caption="Mã nhân viên"
            :fixed="true"
            alignment="left"
          >
            
          </DxColumn>
        </DxDataGrid> -->
        <DxColumn
            data-field="EmployeeCode"
            caption="Mã nhân viên"
            :fixed="true"
            alignment="left"
          >
              <!-- <InputSearchBox style="width: 100px; height:30px;"></InputSearchBox> -->
          </DxColumn>
        <DxColumn
          data-field="FullName"
          caption="Họ và tên"
          :fixed="true"
          alignment="left"
        />
        <DxColumn data-field="PositionName" caption="Vị trí công việc" alignment="left">
          <!-- <DxLookup
            :data-source="employees"
            value-expr="DepartmentId"
            display-expr="DepartmentName"
          /> -->
        </DxColumn>
        <DxColumn
          data-field="NumberTimeSheet"
          v-for="date in dateTimeSheet"
          :key="date.toLocaleDateString()"
          :fieldName="date.toLocaleDateString()"
          alignment="center"
          :caption="
            date.getDate() +
            '/' +
            (date.getMonth() + 1) +
            ' - ' +
            (date.getDay() == 0 ? 'CN' : 'T' + (date.getDay() + 1))
          "
        />
        <DxGrouping :auto-expand-all="false" />
        <DxPaging :enabled="false" />
        <DxScrolling mode="virtual" row-rendering-mode="virtual" />

        <!-- <DxColumn
        data-field="Hire_Date"
        data-type="date"
      /> -->
      </DxDataGrid>
      <!-- <table>
        <thead>
          <tr>
            <th style="width: 150px;">
              <div class="block-name-column-table">
                <button class="btn-push-pin"></button>
                <div class="name-column-table">Mã chấm công</div>
              </div>
            </th>
            <th style="width: 150px;">
              <div class="block-name-column-table">
                <button class="btn-push-pin"></button>
                <div class="name-column-table">Mã nhân viên</div>
              </div>
            </th>
            <th style="width: 200px;">
              <div class="block-name-column-table">
                <button class="btn-push-pin"></button>
                <div class="name-column-table">Họ và tên</div>
              </div>
            </th>
            <th style="width: 200px;">
              <div class="block-name-column-table">
                <button class="btn-push-pin"></button>
                <div class="name-column-table">Vị trí công việc</div>
              </div>
            </th>
            <th style="width: 200px; text-align: center;" v-for="date in dateTimeSheet" 
            :key="date.toLocaleDateString()"
            :fieldName="date.toLocaleDateString()">{{date.getDate()+"/"+ (date.getMonth()+1)+" - "+ ((date.getDay() == 0)? 'CN': "T"+ (date.getDay()+1))}}</th>
          </tr>
          <tr>
              <th style="width: 150px;"><InputSearchBox></InputSearchBox></th>
              <th style="width: 150px;"><InputSearchBox></InputSearchBox></th>
              <th style="width: 200px;"><InputSearchBox></InputSearchBox></th>
              <th style="width: 200px;"><InputSearchBox></InputSearchBox></th>
              <th style="width: 200px;" v-for="n in dateTimeSheet.length" :key="n"><InputSearchBox :dataFilter="numberTimeSheet"></InputSearchBox></th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid #ccc;">
            <td style="width: 100%;">Test</td>
          </tr>
          <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
          </tr>
        </tbody>
      </table> -->
    </div>
    <div class="footer-table-detail">
      Tổng số: <span style="font-weight: bold">9</span> bản ghi
    </div>
  </div>
</template>
<script>
import InputSearchBox from "@/components/InputBox/InputSearchBox";
import { numberTimeSheet } from "@/data/DataFilterTable.js";
// import Table from "@/components/Table/Table"
import { employees } from "@/data/DataTableTimeSheet.js";
import {
  DxDataGrid,
  DxColumn,
  DxGrouping,
  DxGroupPanel,
  DxPaging,
  DxFilterRow,
  DxScrolling,
  DxLookup,
} from "devextreme-vue/data-grid";
import { locale } from "devextreme/localization";
export default {
  data() {
    return {
      locale: "vi",
      dateTimeSheet: [],
      startDateTimeSheet: new Date("12/1/2020"),
      endDateTimeSheer: new Date("12/31/2020"),
      numberTimeSheet,
      employees: employees,
    };
  },
  created() {
    //Set locale để chuyển về tiếng việt
    locale(this.locale);

    for (
      var d = this.startDateTimeSheet;
      d <= this.endDateTimeSheer;
      d.setDate(d.getDate() + 1)
    ) {
      this.dateTimeSheet.push(new Date(d));
    }
    debugger;
  },
  components: {
    InputSearchBox,
    DxDataGrid,
    DxColumn,
    DxGroupPanel,
    DxGrouping,
    DxPaging,
    DxFilterRow,
    DxScrolling,
    DxLookup,
    // DxLookup,
  },
  methods: {
    valueChanged(e) {
      debugger;
    },
  },
};
</script>
<style>
.list-table-detail {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
}
.list-table-detail .content-table-detail {
  width: 100%;
  height: calc(100% - 27px);
  border-bottom: 1px solid #bbbbbb;
  overflow: auto;
  position: relative;
}
/* table {
  table-layout: fixed;
  width: 100%;
  overflow: auto;
  border-collapse: separate;
  border-spacing: 0;
}
th,
td {
  height: 32px;
  border-right: 1px solid #bfbfbf;
  border-bottom: 1px solid #d9d9d9;
}
th {
  background-color: #f0f0f0;
}
.block-name-column-table {
  width: 100%;
  display: flex;
  align-items: center;
}
.block-name-column-table .btn-push-pin {
  visibility: hidden;
  width: 18px;
  height: 32px;
  background-color: #f0f0f0;
  background-image: url("~@/assets/icons/icon-push-pin.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 16px 16px;
  border: 0;
  outline: none;
  padding: 0 6px;
}
.block-name-column-table .name-column-table {
  width: 100%;
  padding-right: 24px;
  text-align: center;
}
.block-name-column-table:hover .btn-push-pin {
  visibility: visible;
} */
.list-table-detail .footer-table-detail {
  width: auto;
  height: 26px;
  border-bottom: 1px solid #bbbbbb;
  line-height: 26px;
  padding-left: 16px;
}

/* CSS custom lại thư Viện */
.dx-group-cell {
  background-color: #ffffff !important;
}
.dx-selection-disabled {
  background-color: #ffffff !important;
}
.dx-datagrid-rowsview .dx-row {
  border-bottom: 1px solid #d9d9d9 !important;
}
.dx-row:last-child {
  border-bottom: 0 !important;
}
.dx-datagrid-rowsview .dx-row:nth-child(even) {
  background-color: #f6f6f6 !important;
}
/* .dx-datagrid-filter-row:hover {
  background-color: #e7f4ff !important;
} */
.dx-datagrid-rowsview .dx-row-lines:hover {
  background-color: #e7f4ff !important;
}
.dx-datagrid .dx-datagrid-content-fixed {
  text-align: center !important;
}
.dx-header-row {
  /* position: fixed !important;
  top: 0 !important;
  background: #ffffff;
  z-index: 1000000;
  top: 0; */

  /* position: absolute;  
  top: 0;  
  left: 0;  
  bottom: 0;  
  right: 0;  
  z-index: 2;  
  pointer-events: none;  
  overflow: hidden;   */
  background-color: #f0f0f0;
}
.dx-datagrid-headers {
  font-size: 13px;
  font-family: Helvetica, Tahoma, Arial, sans-serif !important;
  color: #1d2129;
  background-color: #ffffff;
  font-weight: bold !important;
}
.dx-datagrid-rowsview .dx-row.dx-group-row:not(.dx-row-focused) {
  font-size: 13px;
  font-family: Helvetica, Tahoma, Arial, sans-serif !important;
  color: #1d2129;
  background-color: #ffffff;
  font-weight: bold !important;
}
</style>
