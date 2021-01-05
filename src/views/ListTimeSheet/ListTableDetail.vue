<template>
  <div class="list-table-detail" ref="blockTableDetail">
    <div class="content-table-detail style-scollbar">
      <table>
        <thead>
          <tr class="name-column" ref="rowNameColumn" v-if="reRender">
            <th style="width: 150px" fieldName="TimeSheetCode" @click="changeSort">
              <button type="button" 
              class="block-name-column-table"
              :class="{'block-name-column-focus': (statusSort['TimeSheetCode'] && nameColumnSelected == 'TimeSheetCode')}">
                <button class="btn-push-pin"></button>
                <div class="name-column-table">
                  <div class="name">Mã chấm công</div>
                  <div
                    v-if="statusSort['TimeSheetCode'] && statusCurrentSort"
                    class="icon-sort icon-sort-asc"
                  ></div>
                  <div
                    v-if="statusSort['TimeSheetCode'] && !statusCurrentSort"
                    class="icon-sort icon-sort-desc"
                  ></div>
                    <div
                    v-if="!statusSort['TimeSheetCode'] "
                    class="icon-sort"
                  ></div>
                </div>
              </button>
            </th>
            <th style="width: 150px" fieldName="EmployeeCode" @click="changeSort">
              <button type="button" 
              class="block-name-column-table"
              :class="{'block-name-column-focus': (statusSort['EmployeeCode'] && nameColumnSelected == 'EmployeeCode')}">
                <button class="btn-push-pin"></button>
                <div class="name-column-table">
                  <div class="name">Mã nhân viên</div>
                  <div
                    v-if="statusSort['EmployeeCode'] && statusCurrentSort"
                    class="icon-sort icon-sort-asc"
                  ></div>
                  <div
                    v-if="statusSort['EmployeeCode'] && !statusCurrentSort"
                    class="icon-sort icon-sort-desc"
                  ></div>
                    <div
                    v-if="!statusSort['EmployeeCode'] "
                    class="icon-sort"
                  ></div>
                </div>
              </button>
            </th>
            <th style="width: 200px" fieldName="FullName" @click="changeSort">
              <button type="button" 
              class="block-name-column-table"
              :class="{'block-name-column-focus': (statusSort['FullName'] && nameColumnSelected == 'FullName')}">
                <button class="btn-push-pin"></button>
                <div class="name-column-table">
                  <div class="name">Họ và tên</div>
                  <div
                    v-if="statusSort['FullName'] && statusCurrentSort"
                    class="icon-sort icon-sort-asc"
                  ></div>
                  <div
                    v-if="statusSort['FullName'] && !statusCurrentSort"
                    class="icon-sort icon-sort-desc"
                  ></div>
                    <div
                    v-if="!statusSort['FullName'] "
                    class="icon-sort"
                  ></div>
                </div>
              </button>
            </th>
            <th style="width: 200px" fieldName="PositionName" @click="changeSort">
              <button type="button" 
              class="block-name-column-table"
              :class="{'block-name-column-focus': (statusSort['PositionName'] && nameColumnSelected == 'PositionName')}">
                <button class="btn-push-pin"></button>
                <div class="name-column-table">
                  <div class="name">Vị trí công việc</div>
                  <div
                    v-if="statusSort['PositionName'] && statusCurrentSort"
                    class="icon-sort icon-sort-asc"
                  ></div>
                  <div
                    v-if="statusSort['PositionName'] && !statusCurrentSort"
                    class="icon-sort icon-sort-desc"
                  ></div>
                    <div
                    v-if="!statusSort['PositionName'] "
                    class="icon-sort"
                  ></div>
                </div>
              </button>
            </th>
            <th
              style="width: 200px; text-align: center"
              v-for="date in dateTimeSheet"
              :key="date.toLocaleDateString()"
              fieldName="NumberTimeSheet"
              @click="changeSort"
            >
              <button type="button" 
              class="block-name-column-table" 
              :class="{'block-name-column-focus': (statusSort[date.toLocaleDateString()] && nameColumnSelected == (date.toLocaleDateString()))}">
                <button class="btn-push-pin"></button>
                <div class="name-column-table">
                  <div class="name">
                    {{
                      date.getDate() +
                      "/" +
                      (date.getMonth() + 1) +
                      " - " +
                      (date.getDay() == 0 ? "CN" : "T" + (date.getDay() + 1))
                    }}
                  </div>
                  <div
                    v-if="statusSort[date.toLocaleDateString()] && statusCurrentSort"
                    class="icon-sort icon-sort-asc"
                  ></div>
                  <div
                    v-if="statusSort[date.toLocaleDateString()] && !statusCurrentSort"
                    class="icon-sort icon-sort-desc"
                  ></div>
                    <div
                    v-if="!statusSort[date.toLocaleDateString()] "
                    class="icon-sort"
                  ></div>
                </div>
              </button>
            </th>
          </tr>
          <tr class="filter-column">
            <th style="width: 150px">
              <InputSearchBox  dataFilter="TimeSheetCode" @dataFilter="setDataFilter"  @openListItemFilter="openListItemFilter" @openListItemSelected="openListItemSelected"></InputSearchBox>
            </th>
            <th style="width: 150px">
              <InputSearchBox  dataFilter="EmployeeCode" @dataFilter="setDataFilter"  @openListItemFilter="openListItemFilter" @openListItemSelected="openListItemSelected"></InputSearchBox>
            </th>
            <th style="width: 200px">
              <InputSearchBox  dataFilter="FullName" @dataFilter="setDataFilter"  @openListItemFilter="openListItemFilter" @openListItemSelected="openListItemSelected"></InputSearchBox>
            </th>
            <th style="width: 200px">
              <InputSearchBox  dataFilter="PositionName" @dataFilter="setDataFilter"  @openListItemFilter="openListItemFilter" @openListItemSelected="openListItemSelected"></InputSearchBox>
            </th>
            <th style="width: 200px" v-for="n in dateTimeSheet.length" :key="n">
              <InputSearchBox  dataFilter="NumberTimeSheet" @dataFilter="setDataFilter"  @openListItemFilter="openListItemFilter" @openListItemSelected="openListItemSelected"></InputSearchBox>
            </th>
          </tr>
        </thead>
        <tbody>
          <template v-for="(groupDepartment, index) in listGroupDepartment">
            <tr
              style="border-bottom: 1px solid #ccc"
              :key="groupDepartment[0].DepartmentId"
              :indexGroupDepartment="index"
              :groupDepartment="groupDepartment[0].DepartmentId"
              @click="changeShowTableDetail"
            >
              <td style="width: 100%; height: 32px" :colspan="dateTimeSheet.length + 4">
                <div class="block-collapse-table">
                  <!-- Chỉ cho phép các nút có mã nhóm phòng ban bằng với nhóm phòng ban được chọn mở rộng hay đóng mới được thay đổi trạng thái -->
                  <!-- cần reRender lại mới nhận thay đổi của mảng -->
                  <div v-if="onReRender">
                    <button
                      v-if="status[index]"
                      :indexGroupDepartment="index"
                      type="button"
                      :groupDepartment="groupDepartment[0].DepartmentId"
                      class="icon-collapse-table icon-close-collapse"
                    ></button>
                    <button
                      v-if="!status[index]"
                      :indexGroupDepartment="index"
                      type="button"
                      :groupDepartment="groupDepartment[0].DepartmentId"
                      class="icon-collapse-table icon-open-collapse"
                    ></button>
                  </div>
                  <div class="name-collapse-table">
                    {{ groupDepartment[0].DepartmentName }}
                  </div>
                </div>
              </td>
            </tr>
            <!-- cần reRender lại mới nhận thay đổi của mảng -->
            <template v-if="onReRender">
              <template
                v-if="status[index]"
                class="row-content"
                :groupDepartment="groupDepartment[0].DepartmentId"
              >
                <tr
                  v-for="employee in groupDepartment"
                  :key="employee.EmployeeCode"
                  class="row-content-detail"
                  :fieldName="employee.EmployeeCode"
                  :class="rowSelected == employee.EmployeeCode ? 'row-selected' : ''"
                  @click="changeRowSelected"
                >
                  <td v-for="fieldName in fieldNames" :key="fieldName">
                    {{ employee[fieldName] }}
                  </td>
                </tr>
              </template></template
            >
          </template>
        </tbody>
      </table>
    </div>
    <div class="footer-table-detail">
      Tổng số: <span style="font-weight: bold">{{ employees.length }}</span> bản ghi
    </div>
    <div ref="blockListItemFilter" v-if="showListItemFilter" class="content-filter style-scollbar" :style="setPositionShow">
        <template v-if="reRender">
        <div
          class="item-filter"
          v-for="(data, index) in dataTypeFilter"
          :key="data.name"
          :fieldName="data.name"
          :indexItem="index"
          :class="{ 'item-selected': data.name === itemChoosed }"
          @click="changeItemFilter"
        >
          <div
            class="block-icon-choosed"
            :class="{ 'icon-choosed': data.name === itemChoosed }"
          ></div>
          <div class="title-item-filter">{{ data.text }}</div>
        </div>
        </template>
      </div>
      <div v-if="showListItemSelected" ref="blockListItemSelected" class="content-select-filter style-scollbar" :style="setPositionShowListItemSelectedFilter">
        <div
          class="item-select-filter"
          v-for="(data, index) in dataFilter"
          :key="index"
          :title="data"
          :indexItemSelected="index"
          :class="{ 'item-selected': data == inputItemSelected }"
          @click="changeItemSelected"
        >
          {{ data }}
        </div>
      </div>
  </div>
</template>
<script>
import InputSearchBox from "@/components/InputBox/InputSearchBox.vue";
import { numberTimeSheet } from "@/data/DataFilterTable.js";
// import Table from "@/components/Table/Table"
import { employees } from "@/data/DataTableTimeSheet.js";
import { locale } from "devextreme/localization";
import { DataButtonFilterTable } from "@/data/DataFilterTable.js";
import EventBus from "@/bus/EventBus";
export default {
  data() {
    return {
      locale: "vi",
      dateTimeSheet: [],
      startDateTimeSheet: new Date("12/1/2020"),
      endDateTimeSheet: new Date("12/31/2020"),
      numberTimeSheet,
      employees: employees,
      dataFilterTimeSheetCode: [],
      dataFilterEmployeeCode: [],
      dataFilterFullName: [],
      dataFilterPositionName: [],
      listGroupDepartment: [],
      fieldNames: [],
      showTableDetail: false,
      departmentGroupIdShowed: null,
      statusShow: false,
      status: [], // mảng danh sách trạng thái
      statusSort: true,
      rowSelected: null,
      onReRender: true,

      DataButtonFilterTable,
      dataTypeFilter: null,
      itemChoosed: null,
      setPositionShow: {
        'left': 0,
        'top': 0,
      },
      topPositionListItemFilter: null,
      leftPositionListItemFilter: null,
      showListItemFilter: false,
      elementCurrentTargetOnClick: null,
      elementPreTargetOnClick: null,
      elementTarget: null,

      showListItemSelected: false,
      dataFilter: null,
      inputItemSelected: null,
      setPositionShowListItemSelectedFilter: {
        "left": 0,
        "top": 0
      },
      dropdownSelectedFilterCurrentTarget: null,
      reRender: true,
      statusSort: {},
      statusCurrentSort: false,
      fieldNameCurrentSort: null,
      nameColumnSelected: null,
    };
  },
  async created() {
    //Set locale để chuyển về tiếng việt
    locale(this.locale);

    //Chuẩn bị lấy ra danh sách các trường để các thể tạo ra các cột tương ứng trong bảng

    //+ Lấy ra thời gian chấm công
    this.startDateTimeSheet = new Date(this.employees[0]["StartDateTimeSheet"]);
    this.endDateTimeSheet = new Date(this.employees[0]["EndDateTimeSheet"]);
    for (
      var date = this.startDateTimeSheet;
      date <= this.endDateTimeSheet;
      date.setDate(date.getDate() + 1)
    ) {
      this.dateTimeSheet.push(new Date(date));
    }
    //Thực hiện chia nhóm phòng ban từ danh sách sinh viên nhận được
    await this.getGroupDepartment();

    //+ Lấy dữ liệu mã chấm công để cho vào filter lọc

    //Lấy danh sách mã chấm công khác nhau để cho vào filter lọc
    this.getDataFilterTimeSheetCode();
    //Lấy danh sách mã viên khác nhau để cho vào filter lọc
    this.getDataFilterEmployeeCode();

    //Lấy danh sách tên nhân viên khác nhau
    this.getDataFilterFullName();

    //Lấy danh sách tên vị trí chức vụ khác nhau để cho vào filter lọc
    this.getDataFilterPositionName();

    // Khởi tạo mảng trạng Thái
    for (var i = 0; i < this.listGroupDepartment.length; i++) {
      this.status.push(false);

      
    }
  },
  mounted() {
    EventBus.$on('onClickDocument', this.documentClick);
    this.resizeColumn();
    var me = this;
    // debugger;

    var ths = me.$refs["rowNameColumn"].querySelectorAll("th");
    ths.forEach(function (th, index) {
      var fieldName = th.getAttribute("fieldName");
      me.fieldNames.push(fieldName);

      //khởi tạo trạng thái sort cho các cột trong
        me.statusSort[fieldName] = false;
    });
    // debugger;
  },
  updated(){
    if(this.showListItemFilter){
      var heightBlockTable = this.$refs['blockTableDetail'].offsetHeight;
      var heightBlockListItemFilter= this.$refs['blockListItemFilter'].offsetHeight;
      if(heightBlockListItemFilter > heightBlockTable || heightBlockListItemFilter == 0){
        // debugger
        this.setPositionShow.top= null;
        this.setPositionShow.bottom= (heightBlockTable - 35) + 'px';
      }
      else{
        this.setPositionShow.bottom= null;
      //  this.setPositionShow.top=this.elementTarget.currentTarget.getBoundingClientRect().y+33+'px';
      }
    }
    if(this.showListItemSelected){
      var heightBlockTable = this.$refs['blockTableDetail'].offsetHeight;
      var heightBlockListItemSelected= this.$refs['blockListItemSelected'].offsetHeight;
      if(heightBlockListItemSelected > heightBlockTable || heightBlockListItemSelected == 0){
        // debugger
        this.setPositionShowListItemSelectedFilter.top= null;
        this.setPositionShowListItemSelectedFilter.bottom= (heightBlockTable - 35) + 'px';
      }
      else{
        this.setPositionShowListItemSelectedFilter.bottom= null;
      //  this.setPositionShowListItemSelectedFilter.top=this.elementTarget.currentTarget.getBoundingClientRect().y+33+'px';
      }
    }
  },

  components: {
    InputSearchBox,
  },
  watch: {
    showListItemFilter: function () {
      // debugger
      this.dataTypeFilter= this.DataButtonFilterTable;
      // if(this.showListItemFilter){
      //   var heightBlockTable = this.$refs['blockTableDetail'].offsetHeight;
      //   var heightBlockListItemFilter= this.$refs['blockListItemFilter'].offsetHeight;
      //   if(heightBlockListItemFilter > heightBlockTable){
      //     debugger
      //     this.setPositionShow.top= heightBlockListItemFilter * (-1) + 'px';
      //   }
      // }
    }
  },
  methods: {
    /** 
     * Hàm xử lý thay đổi loại sắp xếp
     * HNANH (1/1/2021)
     */
    changeSort(event) {
      this.reRender = false;
      var fieldName = event.currentTarget.getAttribute("fieldName");
      if(fieldName != this.nameColumnSelected){
        this.statusCurrentSort = false;
        this.statusSort[this.nameColumnSelected] = false;
      }
      this.nameColumnSelected = fieldName;
      // this.statusSort = !this.statusSort;
      if(this.statusSort[fieldName]){
        if(this.statusCurrentSort){
          this.statusCurrentSort = false;
        }
        else{
          this.statusCurrentSort = true;
          this.statusSort[fieldName] = false;
        }
      }
      else{
          this.statusCurrentSort = true;
          this.statusSort[fieldName] = true;
      }
      this.reRender= true;
    },
    /**
     * Hàm xử lý resize cột trong Bảng
     */
    resizeColumn() {
      //var tables = document.getElementsByClassName('flexiCol');
      var tables = document.getElementsByTagName("table");
      for (var i = 0; i < tables.length; i++) {
        resizableGrid(tables[i]);
      }

      function resizableGrid(table) {
        var row = table.getElementsByTagName("tr")[0],
          cols = row ? row.children : undefined;
        if (!cols) return;

        table.style.overflow = "auto";

        var tableHeight = table.offsetHeight;

        for (var i = 0; i < cols.length; i++) {
          var div = createDiv(tableHeight);
          cols[i].appendChild(div);
          setListeners(div);
        }

        function setListeners(div) {
          var pageX, curCol, nxtCol, curColWidth, nxtColWidth;

          div.addEventListener("mousedown", function (e) {
            curCol = e.target.parentElement;
            nxtCol = curCol.nextElementSibling;
            pageX = e.pageX;

            var padding = paddingDiff(curCol);

            curColWidth = curCol.offsetWidth - padding;
            if (nxtCol) nxtColWidth = nxtCol.offsetWidth - padding;
          });

          div.addEventListener("mouseover", function (e) {
            // e.target.style.borderRight = '2px solid #000000';
          });

          div.addEventListener("mouseout", function (e) {
            e.target.style.borderRight = "";
          });

          document.addEventListener("mousemove", function (e) {
            if (curCol) {
              var diffX = e.pageX - pageX;

              if (nxtCol) nxtCol.style.width = nxtColWidth - diffX + "px";

              curCol.style.width = curColWidth + diffX + "px";
            }
          });

          document.addEventListener("mouseup", function (e) {
            curCol = undefined;
            nxtCol = undefined;
            pageX = undefined;
            nxtColWidth = undefined;
            curColWidth = undefined;
          });
        }

        function createDiv(height) {
          var div = document.createElement("div");
          div.style.top = 0;
          div.style.right = 0;
          div.style.width = "5px";
          div.style.position = "absolute";
          div.style.cursor = "col-resize";
          div.style.userSelect = "none";
          div.style.height = height + "px";
          return div;
        }

        function paddingDiff(col) {
          if (getStyleVal(col, "box-sizing") == "border-box") {
            return 0;
          }

          var padLeft = getStyleVal(col, "padding-left");
          var padRight = getStyleVal(col, "padding-right");
          return parseInt(padLeft) + parseInt(padRight);
        }

        function getStyleVal(elm, css) {
          return window.getComputedStyle(elm, null).getPropertyValue(css);
        }
      }
    },
    /**
     * Hàm xử lý thay đổi màu dòng khi được Chọn
     */
    changeRowSelected(event) {
      var fieldName = event.currentTarget.getAttribute("fieldName");
      this.rowSelected = fieldName;
    },
    /** Lấy ra danh sách các phòng ban khác nhau */
    async getGroupDepartment() {
      var employeesSorted = this.employees.sort(function (a, b) {
        return a.DepartmentId - b.DepartmentId;
      });
      this.listGroupDepartment = await employeesSorted.reduce(
        (curentArrNew, curentValue, curentIndex, arr) => {
          if (
            curentIndex > 0 &&
            curentValue.DepartmentId === arr[curentIndex - 1].DepartmentId
          ) {
            curentArrNew[curentArrNew.length - 1].push(curentValue);
          } else {
            curentArrNew.push(
              curentValue.DepartmentId === arr[curentIndex + 1].DepartmentId
                ? [curentValue]
                : curentValue
            );
          }
          return curentArrNew;
        },
        []
      );
      // console.log(this.listGroupDepartment);
    },
    /**
     * Hàm để lấy dữ liệu mã chấm công để cho vào filter lọc
     * CreatedBy: HNANH(01/01/2021)
     */
    getDataFilterTimeSheetCode() {
      var timeSheetCodeNotEqual = [];
      var me = this;
      this.employees.forEach(function (employee, index) {
        var timeSheetCodeEqual = timeSheetCodeNotEqual.find(function (obj) {
          return obj == employee.TimeSheetCode;
        });
        if (!timeSheetCodeEqual) {
          timeSheetCodeNotEqual.push(employee.TimeSheetCode);
          me.dataFilterTimeSheetCode.push(employee.TimeSheetCode);
        }
      });
      me.dataFilterTimeSheetCode.sort();
    },
    /**
     * Hàm để lấy dữ liệu mã nhân viên để cho vào filter lọc
     * CreatedBy: HNANH(01/01/2021)
     */
    getDataFilterEmployeeCode() {
      var employeeCodeNotEqual = [];
      var me = this;
      this.employees.forEach(function (employee, index) {
        var employeeCodeEqual = employeeCodeNotEqual.find(function (obj) {
          return obj == employee.EmployeeCode;
        });
        if (!employeeCodeEqual) {
          employeeCodeNotEqual.push(employee.EmployeeCode);
          me.dataFilterEmployeeCode.push(employee.EmployeeCode);
        }
      });
       me.dataFilterEmployeeCode.sort();
    },

    /**
     * Hàm để lấy dữ liệu tên nhân viên để cho vào filter lọc
     * CreatedBy: HNANH(01/01/2021)
     */
    getDataFilterFullName() {
      var fullNameNotEqual = [];
      var me = this;
      this.employees.forEach(function (employee, index) {
        debugger
        var fullNameEqual = fullNameNotEqual.find(function (obj) {
          return obj == employee.FullName;
        });
        if (!fullNameEqual) {
          fullNameNotEqual.push(employee.FullName);
          me.dataFilterFullName.push(employee.FullName);
        }
      });
      me.dataFilterFullName.sort();
    },
    /**
     * Hàm để lấy dữ liệu tên vị trí chức vụ để cho vào filter lọc
     * CreatedBy: HNANH(01/01/2021)
     */
    getDataFilterPositionName() {
      var positionNameNotEqual = [];
      var me = this;
      this.employees.forEach(function (employee, index) {
        var positionNameEqual = positionNameNotEqual.find(function (obj) {
          return obj == employee.PositionName;
        });
        if (!positionNameEqual) {
          positionNameNotEqual.push(employee.PositionName);
          me.dataFilterPositionName.push(employee.PositionName);
        }
      });
      me.dataFilterPositionName.sort();
    },
    /**Hàm
     * Hàm xử lý thay đổi hiện thi đóng mở bảng chi tiết
     * CreatedBy: HNANH(01/01/2021)
     */
    changeShowTableDetail(event) {
      this.onReRender = false;
      debugger;
      this.departmentGroupIdShowed = event.currentTarget.getAttribute("groupDepartment");

      var indexGroupDepartment = event.currentTarget.getAttribute("indexGroupDepartment");
      this.showTableDetail = this.status[indexGroupDepartment];
      this.status[indexGroupDepartment] = !this.status[indexGroupDepartment];
      this.onReRender = true;
    },
    /**
     * Hàm để chọn trạng thái lọc filter
     * CreatedBy: HNANH(01/01/2021)
     */
    changeItemFilter(e) {
      this.itemChoosed = e.currentTarget.getAttribute("fieldName");
      var indexItemChoosed = e.currentTarget.getAttribute("indexItem");
      var iconButtonChoosed = this.DataButtonFilterTable[indexItemChoosed].icon;
      this.elementTarget.target.textContent = iconButtonChoosed;

    // Ẩn danh sách item đi khi người dùng đã chọn
      // this.showListItemFilter = !this.showListItemFilter;
      debugger;
    },
    /**Hàm
     * Hàm xử lý khi nhận được emit open từ inputSearchBox con
     * * CreatedBy: HNANH(02/01/2021)
     */
    openListItemFilter(e){
      debugger
      //gán element đang được target để khi chọn item filter sẽ tham chiếu và gán ngược lại icon tương với item chọn
      this.elementTarget = e;
      //Lấy ra vị trí element được target
       this.setPositionShow.left= e.currentTarget.getBoundingClientRect().x+'px';

      // // Cần xử lý khi chiều cao danh sách item filter dài quá chiều dài của khối chứa
      // var heightBlockTable = this.$refs['blockTableDetail'].offsetHeight;
      // var heightBlockListItemFilter= this.$refs['blockListItemFilter'].offsetHeight;
       this.setPositionShow.top=e.currentTarget.getBoundingClientRect().y+33+'px';
      this.elementCurrentTargetOnClick= e.currentTarget;
      var iconItemChoosed= e.currentTarget.outerText;
      var objItemChoosed= this.DataButtonFilterTable.find(function(objItem){
        return objItem.icon == iconItemChoosed;
      });
      this.itemChoosed= objItemChoosed.name;

      if(this.elementCurrentTargetOnClick == this.elementPreTargetOnClick){
        this.showListItemFilter = !this.showListItemFilter;
      }
      else{
        this.showListItemFilter= true;
        this.elementPreTargetOnClick= this.elementCurrentTargetOnClick;
      }
    },
    /**Hàm
     * Hàm xử lý để set dữ liệu cho là danh sách lọc
     * * * CreatedBy: HNANH(02/01/2021)
     */
    setDataFilter(value){
      debugger
      if(value == 'TimeSheetCode'){
        this.dataFilter = this.dataFilterTimeSheetCode;
      }
      else if(value == 'EmployeeCode'){
        this.dataFilter = this.dataFilterEmployeeCode;
      }
      else if(value == 'FullName'){
        this.dataFilter = this.dataFilterFullName;
      }
      else if(value == 'PositionName'){
        this.dataFilter = this.dataFilterPositionName;
      }
      else if(value == 'NumberTimeSheet'){
        this.dataFilter = this.numberTimeSheet;
      }
    },
    /**Hàm
     * Hàm xử lý khi nhận được emit open từ inputSearchBox con
     * * CreatedBy: HNANH(02/01/2021)
     */
    openListItemSelected(e){
      debugger
      this.elementTarget= e;
      var positionLeftElementClick= e.currentTarget.getBoundingClientRect().x;
      var widthElementClick= e.currentTarget.offsetWidth;
      this.setPositionShowListItemSelectedFilter.top=e.currentTarget.getBoundingClientRect().y+33+'px';
      this.dropdownSelectedFilterCurrentTarget= e.currentTarget;

      // Lấy ra chiều rộng của khối cha để set width cho khối danh sách item để chọn lọc
      var widthParent= e.currentTarget.parentElement.offsetWidth;
      this.setPositionShowListItemSelectedFilter.width= widthParent + 'px';

      // căn chỉ vị trí hiện thị cho khối dánh sách item để lọc filter
      this.setPositionShowListItemSelectedFilter.left= positionLeftElementClick - widthParent + widthElementClick + 'px';
      if(this.dropdownSelectedFilterCurrentTarget == this.elementPreTargetOnClick){
        this.showListItemSelected = !this.showListItemSelected;
      }
      else{
        this.showListItemSelected= true;
        this.elementPreTargetOnClick= this.dropdownSelectedFilterCurrentTarget;
      }
    },
     /**
     * Hàm để chọn nội dung item để lọc
      * CreatedBy: HNANH(02/01/2021)
     */
    changeItemSelected(e) {
      var indexItemSelected = e.currentTarget.getAttribute("indexItemSelected");
      this.inputItemSelected = this.dataFilter[indexItemSelected];
    // Ẩn danh sách item đi khi người dùng đã chọn
      this.showListItemSelected = !this.showListItemSelected;
      this.elementTarget.target.parentElement.children[0].value = this.inputItemSelected;
    },
    /**Hàm
     * Hàm xử lý khi click vào documnent sẽ ẩn filter lọc filter
     * CreatedBy: HNANH(02/01/2021)
     */
    documentClick(event){
      // debugger
      
      if(event.currentTarget.contains(this.elementCurrentTargetOnClick)){
        this.elementCurrentTargetOnClick = null;
      }
      else{
        this.showListItemFilter= false;
      }
      if(event.currentTarget.contains(this.dropdownSelectedFilterCurrentTarget)){
        this.dropdownSelectedFilterCurrentTarget = null;
      }
      else{
        this.showListItemSelected= false;
      } 
    }
  },
  destroyed() {
    EventBus.$off('onClickDocument', this.documentClick);
  }
};
</script>
<style scoped>
/* Css cho phần khối bảng chi tiết */
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
table {
  width: 100%;
  overflow: auto;
  table-layout: fixed;
  /* border-collapse: collapse; */
  /* ko collapse để tránh mất border khi set sticky*/
  border-collapse: separate;
  border-spacing: 0;
}
tr.row-content-detail:nth-child(even) {
  background-color: #f6f6f6;
}
tbody tr.row-content-detail:hover {
  background-color: #e7f4ff !important;
} 

/* td,th{
  z-index: -1000000000;
}
td:first-child, th:first-child {
  position:sticky;
  left:0;
  background: #ffffff;
  z-index:10000000000000000;
}
td:last-child, th:last-child {
  position:sticky;
  right:0;
  z-index:1;
}
thead tr th {
  position:sticky;
  top:0;
}
th:first-child, th:last-child {z-index:2000000000000000000;} */

/* Css phần ô của tên bảng */
.block-name-column-table {
  width: 100%;
  display: flex;
  align-items: center;
  outline: none;
  border: none;
}
.block-name-column-table .btn-push-pin {
  visibility: hidden;
  width: 18px;
  height: 32px;
  background-color: transparent;
  background-image: url("~@/assets/icons/icon-push-pin.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 16px 16px;
  border: 0;
  outline: none;
  padding: 0 6px;
  opacity: 0.5;
  cursor: pointer;
}
.btn-push-pin:hover {
  opacity: 1;
}
.btn-push-pin:focus {
  visibility: visible;
}
.block-name-column-table .name-column-table {
  width: 100%;
  padding-right: 24px;
}
.name-column-table .name {
  width: 100%;
  text-align: center;
  font-weight: bold;
}
.name-column-table .icon-sort {
  width: 100%;
  height: 8px;
  background-position: bottom center;
  background-repeat: no-repeat;
}
.block-name-column-focus {
  background-color: #cde8fd;
  color: #4a68b4;
}
/* .block-name-column-table:focus .icon-sort {
  visibility: visible;
} */
.icon-sort-asc {
  background-image: url("~@/assets/icons/icon-sort-asc.png");
}
.icon-sort-desc {
  background-image: url("~@/assets/icons/icon-sort-desc.png");
}
.block-name-column-table:hover .btn-push-pin {
  visibility: visible;
}
/* cố định tên bảng */
.name-column th {
  position: sticky;
  top: 0;
}
/* cố định phần lọc bảng */
.filter-column th {
  position: sticky;
  top: 35px;
}
/* Css phần dòng cho phép collapse */
.block-collapse-table {
  width: 100%;
  height: 32px;
  display: flex;
  align-items: center;
}
.block-collapse-table .icon-collapse-table {
  width: 22px;
  height: 32px;
  background-color: transparent;
  background-repeat: no-repeat;
  background-image: url("~@/assets/icons/icon-collapsible.png") !important;
  border: none;
  outline: none;
}
.icon-open-collapse {
  background-image: url("~@/assets/icons/icon-collapsible.png");
  background-position: -54px center;
}
.icon-close-collapse {
  background-image: url("~@/assets/icons/icon-collapsible.png");
  background-position: -77px center;
}
.block-collapse-table .name-collapse-table {
  font-size: 13px;
  font-weight: bold;
  line-height: 32px;
}
.list-table-detail .footer-table-detail {
  width: auto;
  height: 26px;
  border-bottom: 1px solid #bbbbbb;
  line-height: 26px;
  padding-left: 16px;
}

/* css phần khối dữ liệu lọc filter */
/* css cho phần dòng khi được chọn */
.item-selected {
  background-color: #cfe9ff;
}
.content-filter {
  /* height: 250px; */
  position: fixed;
  background-color: #ffffff;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  /* z-index: 1; */
  min-width: 160px;
  max-height: 250px;
  overflow: auto;
}
.content-filter .item-filter {
  width: 100%;
  height: 32px;
  display: flex;
  align-items: center;
}
.item-filter:hover {
  background-color: #e7f4ff;
}
.item-filter:active {
  background-color: #cfe9ff;
}
.item-filter .block-icon-choosed {
  width: 16px;
  height: 16px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 16px 16px;
  padding: 0 8px;
}
.icon-choosed {
  background-image: url("~@/assets/icons/icon-choosed.svg");
}
.item-filter .title-item-filter {
  font-size: 13px;
  line-height: 30px;
  font-weight: normal !important;
}

/* CSS phần danh sách dữ liệu để chọn lọc filter */
.content-select-filter {
  position: fixed;
  background-color: #ffffff;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  /* width: 100%; */
  max-height: 250px;
  overflow: auto;
}

.content-select-filter .item-select-filter {
  width: auto;
  height: 30px;
  text-align: left;
  font-size: 13px;
  font-weight: normal !important;
  padding: 0 5px;
  line-height: 30px;
  white-space: nowrap;
  overflow: hidden !important;
  text-overflow: ellipsis;
}
.item-select-filter:hover {
  background-color: #e7f4ff;
}
.item-select-filter:active {
  background-color: #cfe9ff;
}
</style>
