<template>
  <div class="list-time-sheet" @click="documentClick">
    <Header></Header>
    <div class="block-body">
      <NavBar></NavBar>
      <div class="content-body">
        <TitleTable :showSearchBranch="true"
          >Chấm công chi tiết theo thời gian</TitleTable
        >
        <div class="button-table">
          <button class="btn-add m-button" style="padding-left: 12px">
            <div class="icon-add m-icon-button"></div>
            <div class="m-title-button">Thêm</div>
          </button>
          <button class="btn-review m-button">
            <div class="icon-review m-icon-button"></div>
            <div class="m-title-button">Xem</div>
          </button>
          <button class="btn-edit m-button">
            <div class="icon-edit m-icon-button"></div>
            <div class="m-title-button">Sửa</div>
          </button>
          <button class="btn-delete m-button">
            <div class="icon-delete m-icon-button"></div>
            <div class="m-title-button">Xóa</div>
          </button>
          <button class="btn-report m-button" style="flex-shrink: 0">
            <div class="icon-report m-icon-button"></div>
            <div class="m-title-button">Báo Cáo</div>
          </button>
          <button class="btn-refresh m-button">
            <div class="icon-refresh m-icon-button"></div>
            <div class="m-title-button">Nạp</div>
            <div class="icon-split-button-arrow m-icon-button" style="margin: 0"></div>
          </button>
          <button class="btn-quick-link m-button" style="flex-shrink: 0">
            <div class="icon-quick-link m-icon-button"></div>
            <div class="m-title-button">Liên kết nhanh</div>
            <div class="icon-split-button-arrow m-icon-button" style="margin: 0"></div>
          </button>
          <div class="line-divide"></div>
          <button class="btn-feedback m-button" style="flex-shrink: 0">
            <div class="icon-feedback m-icon-button"></div>
            <div class="m-title-button">Phản hồi</div>
          </button>
          <button class="btn-help m-button">
            <div class="icon-help m-icon-button"></div>
            <div class="m-title-button">Giúp</div>
          </button>
        </div>
        <div class="block-content-table">
          <div class="content-main style-scollbar">
            <table ref="tableMain">
              <thead>
                <tr class="block-name-column-table" v-if="reRender">
                  <th style="width: 80px" fieldName="Month" @click="changeSort">
                    <button type="button"
                      class="block-name-column"
                      :class="{'block-name-column-focus': (statusSort['Month'] && nameColumnSelected == 'Month')}"
                    >
                      <button type="button" class="icon-pin"></button>
                      <div class="name-column">
                        <div
                          class="name"
                        >
                          Tháng
                        </div>
                         <div
                          v-if="statusSort['Month'] && statusCurrentSort"
                          class="icon-sort icon-sort-asc"
                        ></div>
                        <div
                          v-if="statusSort['Month'] && !statusCurrentSort"
                          class="icon-sort icon-sort-desc"
                        ></div>
                         <div
                          v-if="!statusSort['Month'] "
                          class="icon-sort"
                        ></div>
                      </div>
                    </button>
                  </th>
                  <th style="width: 80px" fieldName="Year" @click="changeSort">
                    <button type="button"
                      class="block-name-column"
                      :class="{'block-name-column-focus': (statusSort['Year'] && nameColumnSelected == 'Year')}"
                    >
                      <button type="button" class="icon-pin"></button>
                      <div class="name-column">
                        <div
                          class="name"
                        >
                          Năm
                        </div>
                        <div
                          v-if="statusSort['Year'] && statusCurrentSort"
                          class="icon-sort icon-sort-asc"
                        ></div>
                        <div
                          v-if="statusSort['Year'] && !statusCurrentSort"
                          class="icon-sort icon-sort-desc"
                        ></div>
                         <div
                          v-if="!statusSort['Year'] "
                          class="icon-sort"
                        ></div>
                      </div>
                    </button>
                  </th>
                  <th
                    style="width: 450px"
                    fieldName="TimeSheetTableName"
                    @click="changeSort"
                  >
                    <button type="button"
                      class="block-name-column"
                      :class="{'block-name-column-focus': (statusSort['TimeSheetTableName'] && nameColumnSelected == 'TimeSheetTableName')}"
                    >
                      <button type="button" class="icon-pin"></button>
                      <div class="name-column">
                        <div
                          class="name"
                        >
                          Tên bảng chấm công
                        </div>
                        <div
                          v-if="statusSort['TimeSheetTableName'] && statusCurrentSort"
                          class="icon-sort icon-sort-asc"
                        ></div>
                        <div
                          v-if="statusSort['TimeSheetTableName'] && !statusCurrentSort"
                          class="icon-sort icon-sort-desc"
                        ></div>
                         <div
                          v-if="!statusSort['TimeSheetTableName'] "
                          class="icon-sort"
                        ></div>
                      </div>
                    </button>
                  </th>
                  <th style="width: 180px" fieldName="TimeManagement" @click="changeSort">
                    <button type="button"
                      class="block-name-column"
                      :class="{'block-name-column-focus': (statusSort['TimeManagement'] && nameColumnSelected == 'TimeManagement')}"
                    >
                      <button type="button" class="icon-pin"></button>
                      <div class="name-column">
                        <div
                          class="name"
                        >
                          Quản lý thời gian theo
                        </div>
                        <div
                          v-if="statusSort['TimeManagement'] && statusCurrentSort"
                          class="icon-sort icon-sort-asc"
                        ></div>
                        <div
                          v-if="statusSort['TimeManagement'] && !statusCurrentSort"
                          class="icon-sort icon-sort-desc"
                        ></div>
                         <div
                          v-if="!statusSort['TimeManagement'] "
                          class="icon-sort"
                        ></div>
                      </div>
                    </button>
                  </th>
                  <th style="width: 200px" fieldName="DepartmentName" @click="changeSort">
                    <button type="button"
                      class="block-name-column"
                      :class="{'block-name-column-focus': (statusSort['DepartmentName'] && nameColumnSelected == 'DepartmentName')}"
                    >
                      <button type="button" class="icon-pin"></button>
                      <div class="name-column">
                        <div
                          class="name"
                        >
                          Đơn vị công tác
                        </div>
                        <div
                          v-if="statusSort['DepartmentName'] && statusCurrentSort"
                          class="icon-sort icon-sort-asc"
                        ></div>
                        <div
                          v-if="statusSort['DepartmentName'] && !statusCurrentSort"
                          class="icon-sort icon-sort-desc"
                        ></div>
                         <div
                          v-if="!statusSort['DepartmentName'] "
                          class="icon-sort"
                        ></div>
                      </div>
                    </button>
                  </th>
                </tr>
                <tr class="block-filter-table">
                  <th style="width: 80px"><InputSearchBox  @openListItemFilter="openListItemFilter" @openListItemSelected="openListItemSelected"></InputSearchBox></th>
                  <th style="width: 80px"><InputSearchBox @openListItemFilter="openListItemFilter"></InputSearchBox></th>
                  <th style="width: 450px">
                    <InputSearchBox dataFilter="TimeSheetTableName" @dataFilter="setDataFilter"  @openListItemFilter="openListItemFilter" @openListItemSelected="openListItemSelected"></InputSearchBox>
                  </th>
                  <th style="width: 180px">
                    <InputSearchBox dataFilter="TimeManagement" @dataFilter="setDataFilter"  @openListItemFilter="openListItemFilter" @openListItemSelected="openListItemSelected"></InputSearchBox>
                  </th>
                  <th style="width: 200px">
                    <InputSearchBox dataFilter="Departments" @dataFilter="setDataFilter"  @openListItemFilter="openListItemFilter" @openListItemSelected="openListItemSelected"></InputSearchBox>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(dataTableTimeSheet, index) in DataTableTimeSheet" :key="index" :fieldName="index" :class="(rowSelected == index)? 'row-selected': ''" @click="changeRowSelected">
                  <td
                    v-for="(fieldName, index) in fieldNames"
                    :key="index"
                    :style="
                      fieldName == 'Month' || fieldName == 'Year'
                        ? 'text-align: right;'
                        : null
                    "
                  >
                    {{ dataTableTimeSheet[fieldName] }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="footer-table">
            <div class="number-record-table">
              Tổng số: <span style="font-weight: bold">{{DataTableTimeSheet.length}}</span> bản ghi
            </div>
            <button
              type="button"
              class="btn-resize"
              :class="
                showTableDetail ? 'icon-hidden-info-detail' : 'icon-show-info-detail'
              "
              @click="showTableDetail = !showTableDetail"
            ></button>
          </div>
          <vue-resizable
            :active="['t']"
            :height="200"
            :min-height="100"
            class="block-info-detail"
            v-if="showTableDetail"
          >
            <ListTableDetail></ListTableDetail>
          </vue-resizable>
        </div>
      </div>
    </div>
    <div v-if="showListItemFilter" class="content-filter style-scollbar" :style="setPositionShow">
        <div
          class="item-filter"
          v-for="(data, index) in DataButtonFilterTable"
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
      </div>
      <div v-if="showListItemSelected" class="content-select-filter style-scollbar" :style="setPositionShowListItemSelectedFilter"> 
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
import Header from "@/layout/Header.vue";
import NavBar from "@/layout/NavBar.vue";
import TitleTable from "@/layout/TitleTable.vue";
import InputSearchBox from "@/components/InputBox/InputSearchBox.vue";
import { DataTableTimeSheet } from "@/data/DataTableTimeSheet.js";
import {
  TimeSheetTableName,
  Departments,
  TimeManagement,
} from "@/data/DataFilterTable.js";
import VueResizable from "vue-resizable";
import ListTableDetail from "@/views/ListTimeSheet/ListTableDetail.vue";
import { DataButtonFilterTable } from "@/data/DataFilterTable.js";
import EventBus from "@/bus/EventBus";
export default {
  data() {
    return {
      TimeSheetTableName,
      Departments,
      TimeManagement,
      DataTableTimeSheet,
      fieldNames: null,
      showTableDetail: true,
      // statusSort: true,
      rowSelected: null,
      DataButtonFilterTable,
      itemChoosed: null,
      setPositionShow: {
        'left': 0,
        'top': 0,
      },
      showListItemFilter: false,
      elementCurrentTargetOnClick: null,
      elementPreTargetOnClick: null,
      elementTarget: null,

      showListItemSelected: false,
      dataFilter: Departments,
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
  components: {
    Header,
    NavBar,
    TitleTable,
    InputSearchBox,
    VueResizable,
    ListTableDetail,
  },
  mounted() {
    debugger;
    var me= this;
    //Tiến hành đổ dữ liệu tương ứng với các trường trong th

    //+ Lấy ra tất cả các fieldName trong thẻ th trong trang hiện tại, có thể lấy cả các thẻ th trong bảng khác =>Sai
    // var ths = this.$el.querySelectorAll("th");
    var ths = this.$refs["tableMain"].querySelectorAll("th");
    var fieldNames = [];
    ths.forEach(function (th, index) {
      var fieldName = th.getAttribute("fieldName");
      if (fieldName) {
        fieldNames.push(fieldName);

        //khởi tạo trạng thái sort cho các cột trong
        me.statusSort[fieldName] = false;
      }
    });
    this.fieldNames = fieldNames;
    // this.fieldNames= this.$refs.tableMain.getAttribute("fieldName");
  },
  methods: {
    /** 
     * Hàm xử lý thay đổi loại sắp xếp
     * HNANH (01/01/2021)
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
     * Hàm xử lý thay đổi màu khi chọn dòng trong bảng
     * CreatedBy: HNANH(01/01/2021)
     */
    changeRowSelected(event){
      var fieldName = event.currentTarget.getAttribute("fieldName");
      this.rowSelected= fieldName;
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
     * Hàm xử lý để set dữ liệu cho là danh sách lọc
     * * * CreatedBy: HNANH(02/01/2021)
     */
    setDataFilter(value){
      debugger
      if(value == 'TimeSheetTableName'){
        this.dataFilter = this.TimeSheetTableName;
      }
      else if(value == 'Departments'){
        this.dataFilter = this.Departments;
      }
      else if(value == 'TimeManagement'){
        this.dataFilter = this.TimeManagement;
      }
    },
    /**Hàm
     * Hàm xử lý khi nhận được emit open từ inputSearchBox con
     * * CreatedBy: HNANH(02/01/2021)
     */
    openListItemFilter(e){
      debugger
      this.elementTarget = e;
      this.setPositionShow.left= e.currentTarget.getBoundingClientRect().x+'px';
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
      EventBus.$emit('onClickDocument', event);
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
};
</script>
<style scoped>
/* css cho phần dòng khi được chọn */
.item-selected {
  background-color: #cfe9ff;
}
.list-time-sheet {
  width: 100%;
  height: 100vh;
}
.list-time-sheet .block-body {
  width: 100%;
  height: calc(100vh - 44px);
  display: flex;
}
/* css cho phần khối body chính */
.block-body .content-body {
  width: calc(100% - 85px);
  height: 100%;
}
/* css cho phần nút bấn phía trên bảng */
.content-body .button-table {
  height: 33px;
  width: 100%;
  border-bottom: 1px solid #bbbbbb;
  display: flex;
  align-items: center;
}
.m-button {
  height: 100%;
  padding: 0 6px 0 4px;
  border: none;
  outline: none;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.m-button:hover {
  background-color: #e7f4ff;
}
.m-button:focus {
  background-color: #cfe9ff;
}
.m-icon-button {
  height: 16px;
  width: 24px;
  background-repeat: no-repeat;
  background-position: center;
  /* background-size: 16px 16px; */
}
.icon-add {
  background-image: url("~@/assets/icons/icon-add.png");
}
.icon-review {
  background-image: url("~@/assets/icons/icon-review.png");
}
.icon-edit {
  background-image: url("~@/assets/icons/icon-edit.png");
}
.icon-delete {
  background-image: url("~@/assets/icons/icon-delete.png");
}
.icon-report {
  background-image: url("~@/assets/icons/icon-report.png");
}
.icon-refresh {
  background-image: url("~@/assets/icons/icon-refresh.png");
}
.icon-quick-link {
  background-image: url("~@/assets/icons/icon-quick-link.png");
}
.icon-split-button-arrow {
  background-image: url("~@/assets/icons/icon-split-button-arrow.png");
}
.icon-feedback {
  background-image: url("~@/assets/icons/icon-feedback.png");
}
.line-divide {
  margin: 0 3px;
  height: 22px;
  border-left: 1px solid #bbbbbb;
}
.icon-help {
  background-image: url("~@/assets/icons/icon-help.png");
}
.icon-more {
  background-image: url("~@/assets/icons/icon-more.png");
}
.m-title-button {
  font-size: 13px;
  line-height: 33px;
  padding: 0 6px;
}

/* css phần nội dung bảng */
.content-body .block-content-table {
  height: calc(100% - 34px - 37px);
  width: 100%;
  display: flex;
  flex-direction: column;
}
.block-content-table .content-main {
  width: 100%;
  height: 100%;
  overflow: auto;
  border-bottom: 1px solid #bbbbbb;
}
/* css phần độ rộng của cột trong bảng */
.m-column-xsmall {
  width: 80px;
}
.m-column-small {
  width: 180px;
}
.m-column-medium {
  widows: 200px;
}
 table {
  width: 100%;
  overflow: auto;
  table-layout: fixed;
  /* border-collapse: collapse; 
   Don't collapse */
  border-collapse: separate; 
  border-spacing: 0; 
} 

tbody tr:hover {
    background-color: #e7f4ff;
}
tr:nth-child(even) {
    background-color: #f6f6f6;
}
.block-name-column-table th {
  position: sticky;
  top: 0;
}
.block-filter-table th {
  position: sticky;
  top: 35px;
}

/* body {
  margin: 0;
}
th, td {
    text-align: center;
    background-color: white
}
table {
  table-layout: fixed;
  position: relative;
  width: 400px;
  overflow: hidden;
}
thead {
  position: relative;
  display: block;
  width: 400px;
  overflow: visible;
}
thead th {
  min-width: 80px;
  height: 40px;
}
thead th:nth-child(1) {
  position: relative;
  display: block;
  height: 40px;
  padding-top: 20px;
}
tbody {
  position: relative;
  display: block;
  width: 400px;
  height: 90px;
  overflow: scroll;
}
tbody td {
  min-width: 80px;
}
tbody tr td:nth-child(1) {
  position: relative;
  display: block;
} */

/* CSS cho phần tên của cột trong bảng */
.block-name-column {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  outline: none;
  border: none;
}
.block-name-column .icon-pin {
  visibility: hidden;
  width: 18px;
  height: 32px;
  background-image: url("~@/assets/icons/icon-push-pin.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 16px 16px;
  padding-left: 4px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  opacity: 0.5;
}
.icon-pin:hover {
  opacity: 1;
}
.icon-pin:focus {
  visibility: visible;
}
.block-name-column .name-column {
  width: 100%;
  /* để căn giữa vì có icon pin ở phía trước */
  padding-right: 22px;
}
/* css khi khối tên cột được chọn */
.name-column .name {
  text-align: center;
  font-weight: bold;
}
.name-column .icon-sort {
  width: 100%;
  height: 8px;
  background-position: bottom center;
  background-repeat: no-repeat;
}
/* .block-name-column:focus .icon-sort{
  visibility: visible;
} */
.block-name-column-focus{
  background-color: #cde8fd;
  color: #4a68b4;
}
.icon-sort-asc {
  background-image: url("~@/assets/icons/icon-sort-asc.png");
}
.icon-sort-desc {
  background-image: url("~@/assets/icons/icon-sort-desc.png");
}
.block-name-column:hover .icon-pin {
  visibility: visible;
}
/* Css cho phần chân bảng */
.block-content-table .footer-table {
  height: 26px;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #bbbbbb;
}
.footer-table .number-record-table {
  height: 100%;
  line-height: 26px;
  padding-left: 16px;
}
.footer-table .btn-resize {
  width: 60px;
  height: 9px;
  position: absolute;
  bottom: 0;
  left: calc(50% - 30px);
  border: 1px solid #bbbbbb;
  border-bottom: none;
  outline: none;
  background-color: #ffffff;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 16px 16px;
  cursor: pointer;
}
.icon-show-info-detail {
  background-image: url("~@/assets/icons/icon-show-info-detail.png");
}
.icon-hidden-info-detail {
  background-image: url("~@/assets/icons/icon-hidden-info-detail.png");
}
/* CSS cho phần bảng chi tiết */
.block-content-table .block-info-detail {
  width: 100% !important;
  height: 100%;
  position: relative;
  bottom: 0 !important;
  top: 0 !important;
  left: 0 !important;
  max-height: 400px;
}

/* css phần khối dữ liệu lọc filter */
.content-filter {
  min-width: 160px;
  max-height: 250px;
  position: fixed;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  background-color: #ffffff;
  overflow: auto;
}
.content-filter .item-filter {
  width: 100%;
  height: 100%;
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
