<template>
  <div class="">
    <!-- <div class="header"></div> -->
    <Header></Header>
    <div class="block-body">
      <!-- <div class="nav-bar"></div> -->
      <NavBar></NavBar>
      <div v-if="statePage" class="content-body">
        <!-- <div class="header-table">
          <div class="title-table">Hồ Sơ</div> -->
          <!-- <div class="filter-table"></div> -->
          <TitleTable>Hồ Sơ</TitleTable>
        <!-- </div> -->
        <div class="button-table">
          <button
            class="btn-add m-button"
            style="padding-left: 12px"
            @click="addEmployee"
          >
            <div class="icon-add m-icon-button"></div>
            <div class="m-title-button">Thêm</div>
          </button>
          <button class="btn-edit m-button" @click="editEmployee">
            <div class="icon-edit m-icon-button"></div>
            <div class="m-title-button">Xem và sửa</div>
          </button>
          <button class="btn-delete m-button" @click="deleteEmployee">
            <div class="icon-delete m-icon-button"></div>
            <div class="m-title-button">Xóa</div>
          </button>
        </div>
        <div class="block-table">
          <!-- <vueCustomScrollbar class="content-table"  :settings="settings" @ps-scroll-y="scrollHanle"> -->
          <div class="content-table style-scollbar" v-on:scroll.passive="onScroll">
            <table class="employee-table">
              <thead>
                <tr>
                  <th
                    class="m-column-small align-left"
                    style="padding-left: 16px"
                    fieldName="EmployeeCode"
                  >
                    Mã nhân viên
                  </th>
                  <!-- <th class="m-column-medium align-left" fieldName="FirstName">
                    Họ và đệm
                  </th>
                  <th class="m-column-medium align-left" fieldName="LastName">Tên</th> -->
                  <th class="m-column-medium align-left" fieldName="FullName">
                    Họ và Tên
                  </th>
                  <th class="m-column-xsmall align-left" fieldName="GenderName">
                    Giới tính
                  </th>
                  <th class="m-column-small align-center" fieldName="DateOfBirth">
                    Ngày sinh
                  </th>
                  <th class="m-column-large align-left" fieldName="PositionName">
                    Vị trí công việc
                  </th>
                  <th class="m-column-large align-left" fieldName="DepartmentName">
                    Đơn vị công tác
                  </th>
                  <th class="m-column-small align-left" fieldName="PhoneNumber">
                    Số điện thoại
                  </th>
                  <th class="m-column-large align-left" fieldName="Email">Email</th>
                  <th class="m-column-large align-left" fieldName="AddressCurrent">
                    Địa chỉ
                  </th>
                  <th class="m-column-large align-left" fieldName="School">
                    Nơi đào tạo
                  </th>
                  <th class="m-column-large align-left" fieldName="Majors">
                    Chuyên ngành
                  </th>
                  <th class="m-column-large align-left" fieldName="Zalo">Zalo ID</th>
                  <th
                    class="m-column-large align-left"
                    style="border-right: none"
                    fieldName="TimekeepingCode"
                  >
                    Mã chấm cống
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(employee, index) in employees"
                  :key="index"
                  :recordId="employee['EmployeeId']"
                  @click="
                    RowSelect(employee['EmployeeId']);
                    sendToFormDetail();
                  "
                  @dblclick="editEmployee"
                  :class="{ row_select: rowSelect == employee['EmployeeId'] }"
                >
                  <template v-for="(value, index) in fieldName">
                    <template v-if="value != 'EmployeeId'">
                      <td
                        v-if="value == 'EmployeeCode'"
                        :key="index"
                        style="padding-left: 16px"
                      >
                        {{ employee[value] }}
                      </td>
                      <td
                        v-else-if="value == 'DateOfBirth'"
                        :key="index"
                        class="align-center"
                      >
                        {{ formatDate(employee[value]) }}
                      </td>
                      <td
                        v-else
                        :key="index"
                        class="fix-width-table"
                        :title="employee[value]"
                      >
                        {{ employee[value] }}
                      </td>
                    </template>
                  </template>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="number-record-table" style="display: flex; position: relative;">
            <div class="number-record">
              Tổng số: <span style="font-weight: bold">{{ limit + offset }}</span> bản ghi
            </div>
            <button class="control-show-info-detail" :class="(showInfoDetail)? 'icon-hidden-info-detail': 'icon-show-info-detail'" type="button" @click="showInfoDetail = !showInfoDetail"></button>
          </div>
          <vue-resizable
            class="detail-info"
            :active="['t']"
            :height="200"
            :min-height="100"
            :max-height="250"
            v-if="showInfoDetail"
          >
            <DetailEmployee :employeeSelected="employeeSelected"></DetailEmployee>
          </vue-resizable>
        </div>
      </div>
      <AddEmployee
        v-if="!statePage"
        v-on:backPage="backPage"
        :employeeObject="employee"
        :stateShowForm="stateShowForm"
      ></AddEmployee>
    </div>
    <Loading v-if="showLoading"></Loading>
    <PopUpWarning
      v-if="showPopUpWaring"
      :infoMessage="infoMessage"
      v-on:onClickNo="onClickNo"
      v-on:onClickYes="onClickYes"
      v-on:onClickClose="onClickClose"
    ></PopUpWarning>
  </div>
</template>
<script>
import VueResizable from "vue-resizable";
import Header from "@/layout/Header.vue";
import NavBar from "@/layout/NavBar.vue";
import AddEmployee from "@/views/AddEmployee.vue";
import TitleTable from "@/layout/TitleTable.vue";
import MSButton from "@/components/Common/MSButton.vue";
import DetailEmployee from "@/views/EmployeeDetail/DetailEmployee.vue";
import Loading from "@/components/Common/Loading.vue";
import EventBus from "@/bus/EventBus";
import { employeeData } from "@/models/Employee.js";
import EmployeesAPI from "@/api/components/employees/EmployeesAPI.js";
import PopUpWarning from "@/components/Common/PopUpWarning.vue";
export default {
  data() {
    return {
      employees: [],
      rowSelect: null,
      fieldName: [],
      statePage: true,
      employee: {},
      // employeeDefault: { ...employeeData },
      employeeSelected: {},
      showLoading: false,
      showPopUpWaring: false,
      infoMessage: {
        ContentMessage: null,
        typeMessage: null,
      },
      limit: 20,
      offset: 0,
      stateShowForm: null,
      stateConfirm: null,
      statusExecution: null,
      showInfoDetail: true,
    };
  },
  watch: {
    showInfoDetail: function () {
      debugger
    }
  },
  components: {
    Header,
    NavBar,
    TitleTable,
    MSButton,
    DetailEmployee,
    VueResizable,
    AddEmployee,
    Loading,
    PopUpWarning,
  },
  async created() {
    // gán thông tin số bản ghi lấy và số bản ghi đã được lấy để tiến hành lấy dữ liệu phân trang
    var queryString = {
      limit: this.limit,
      offset: this.offset,
    };
    // lấy dữ liệu phân trang
    await this.getDataEmployee(queryString);
    //gán cho nhân viên đầu tiên được chọn
    this.employeeSelected = this.employees.length > 0 ? this.employees[0] : {};
  },
  mounted() {
    //Thực hiện lấy ra tất cả các fieldName trên thẻ th để tiến hành map tương ứng với các cột
    //+Lấy ra tất cả các thành phần th
    var ths = this.$el.querySelectorAll("th");
    var arr = [];
    //+ với mỗi th cần lấy ra giá trị fieldName
    ths.forEach(function (value, index) {
      arr.push(value.getAttribute("fieldName"));
    });
    //+ thu được danh sách fieldName, từ đây dùng v-for để tiến hành binding td tương ứng với th
    this.fieldName = arr;
  },
  methods: {
    /**
     * Hàm lấy dữ liệu hồ sơ nhân Viên
     * CreatedBy: HNANH(25/12/2020)
     */
    async getDataEmployee(queryString) {
      var a = this;
      //hiện biểu tượng đang loading dữ liệu
      this.showLoading = true;
      var employees = [];
      // await EmployeesAPI.getAll()
      //   .then(function (res) {
      //       console.log(res.data);
      //       employees = res.data;
      //     }
      //   )
      //   .catch(function (err) {
      //     console.log(err);
      //   });
      await EmployeesAPI.paging(queryString)
        .then(function (res) {
          // console.log(res.data);
          employees = res.data;
        })
        .catch(function (err) {
          console.log(err);
        });
      employees.forEach((element) => {
        a.employees.push(element);
      });
      //ẩn biểu tượng đang loading dữ liệu
      this.showLoading = false;
    },
    //Hàm gán hàng được chọn bằng id của nhân viên
    RowSelect(employeeId) {
      this.rowSelect = employeeId;
    },
    /**
     * Hàm xử lý khi ấn nút thêm
     * CreatedBy: HNANH(24/12/2020)
     */
    addEmployee(){
      //Thay đổi trạng thái trang để thay đổi component
      this.statePage = !this.statePage; 
      //gán trạng thái xem là thêm mới
      this.stateShowForm = 'addForm'; 
      //gán giá trị emplouee về trống để làm trống các ô input
      this.employee= {};
    },
    /**
     * Hàm xử lý khi ấn nút xem và sửa
     * CreatedBy: HNANH(26/12/2020)
     */
    editEmployee() {
      var me = this;
      if (this.rowSelect) {
        debugger
        //Khai báo trạng thái mặc định là xem form
        this.stateShowForm = "reviewForm";
        //Đổi trạng thái trang để tiến hành thay thế component
        this.statePage = !this.statePage;
        //Lấy thông tin mã nhân viên đã được chọn
        var employeeId = this.rowSelect;

        // Gọi api để lấy dữ liệu
        EmployeesAPI.getById(employeeId)
          .then(function (res) {
            debugger;
            me.employee = res.data;
          })
          .catch(function (err) {
            console.log(err);
          });

        // var employeeSelected = this.employees.find(function (employee) {
        //   return employee.EmployeeId == employeeId;
        // });
        // this.employee = employeeSelected;
      } else {
        this.infoMessage.ContentMessage = this.$t("messEditNotChooseRecord");
        this.infoMessage.typeMessage = "Message";
        this.showPopUpWaring = true;
      }
    },
    /**
     * Hàm xử lý khi ấn nút Xóa
     * CreatedBy: HNANH(25/12/2020)
     */
    deleteEmployee() {
      //Kiểm tra xem đã có bản ghi nào được chọn hay chưa

      //+ nếu đã có bản ghi được chọn
      if (this.rowSelect) {
        this.statusExecution = "Delete";
        //Hiện cảnh báo xác nhân xóa
        this.infoMessage.ContentMessage = this.$t("confirmDelete");
        this.infoMessage.typeMessage = "Warning";
        this.showPopUpWaring = true;
        //+ nếu chưa có bản ghi nào được chọn
      } else {
        this.statusExecution = null;
        //Đưa ra thông báo yêu cầu chọn bản ghi trước khi xóa
        this.infoMessage.ContentMessage = this.$t("messDeleteNotChooseRecord");
        this.infoMessage.typeMessage = "Message";
        this.showPopUpWaring = true;
      }
    },
    /**
     * Hàm xử lý khi người dùng nhấn nút không từ form cảnh Báo
     * CreatedBy: HNANH(26/12/2020)
     */
    onClickNo() {
      this.showPopUpWaring = false;
      this.stateConfirm = "No";
    },
    /**
     * Hàm xử lý khi người dùng nhấn nút đóng từ form cảnh Báo
     * CreatedBy: HNANH(26/12/2020)
     */
    onClickClose() {
      this.showPopUpWaring = false;
      this.stateConfirm = "Cancel";
    },
    /**
     * Hàm xử lý khi người dùng nhấn nút có từ form cảnh Báo
     * CreatedBy: HNANH(26/12/2020)
     */
    async onClickYes() {
      this.stateConfirm = "Yes";
      if (this.statusExecution == "Delete") {
        var employeeId = this.rowSelect;
        await EmployeesAPI.delete(employeeId)
          .then(function (res) {
            debugger;
            console.log(res);
          })
          .catch(function (err) {
            debugger;
            console.log(err);
          });
        this.$nextTick(function () {
          document.location.reload();
        });
      }
    },
    /**
     * Hàm lấy thông tin chi tiết của nhân viên đã được chọn để hiển thi ở form chi tiết
     * CreatedBy: HNANH(23/12/2020)
     */
    sendToFormDetail() {
      var employeeId = this.rowSelect;
      var employee = this.employees.find(function (employee) {
        return employee.EmployeeId == employeeId;
      });
      this.employeeSelected = employee;
    },

    /**
     * Hàm xử lý khi người dùng back lại trang
     * CreatedBy: HNANH(23/12/2020)
     * */
    backPage() {
      this.statePage = !this.statePage;
      this.stateShowForm = null;
      // this.employee = {};
    },
    /**
     * Hàm để format định dạng ngày sinh
     * CreatedBy: HNANH(23/12/2020)
     */
    formatDate(date) {
      var date = new Date(date);
      var day = date.getDate(),
        month = date.getMonth() + 1,
        year = date.getFullYear();
      day = day < 10 ? "0" + day : day;
      month = month < 10 ? "0" + month : month;
      return day + "/" + month + "/" + year;
    },
    /**
     * Hàm xử lý sự liện scroll
     * CreatedBy: HNANH(26/12/2020)
     */
    onScroll(event) {
      //Lấy ra thành phần được target
      var element = event.target;
      //Kiểm tra xem đã scroll xuống dưới cùng chưa
      if (element.scrollHeight - element.scrollTop === element.clientHeight) {
        //Tính số bản ghi sẽ lấy về ở lần lấy dữ liệu phân trang tiếp
        var newLimit = Math.floor(event.currentTarget.offsetHeight / 35);
        //Số bản ghi đã lấy trước đó
        var newOffset = this.offset + this.limit;
        var queryString = {
          limit: newLimit,
          offset: newOffset,
        };
        this.limit = newLimit;
        this.offset = newOffset;
        this.getDataEmployee(queryString);
      }
      // e.currentTarget.scrollTop
      // e.path[9].screen.height
      // e.path[9].innerHeight
      // e.currentTarget.offsetHeight
    },
  },
};
</script>
<style scoped>
.block-body {
  width: 100%;
  height: calc(100vh - 44px);
  display: flex;
}
/* .block-body .nav-bar {
} */
.block-body .content-body {
  width: calc(100% - 85px);
  height: 100%;
}
/* css cho phần tiêu đề bảng */
/* .content-body .header-table {
  height: 38px;
  width: 100%;
  display: flex;
  border-bottom: 1px solid #bbbbbb;
}
.header-table .title-table {
  font-size: 16px;
  font-weight: bold;
  padding-left: 16px;
  height: 100%;
  width: 50%;
  line-height: 38px;
  text-align: left;
  border-right: 1px solid #bbbbbb;
} */
/* .header-table .filter-table {

} */

/* css cho phần nút bấn phía trên bảng */
.content-body .button-table {
  height: 33px;
  width: 100%;
  border-bottom: 1px solid #bbbbbb;
  display: flex;
}
.m-button {
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
  padding-left: 4px;
  margin-right: 8px;
  height: 16px;
  width: 16px;
}
.icon-add {
  background-image: url("~@/assets/icons/icon-add.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 16px 16px;
  padding-left: 4px;
  margin-right: 8px;
  height: 16px;
  width: 16px;
}
.button-table .icon-edit {
  background-image: url("~@/assets/icons/icon-review.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 16px 16px;
}
.button-table .icon-delete {
  background-image: url("~@/assets/icons/icon-delete.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 16px 16px;
}
.m-title-button {
  font-size: 13px;
  line-height: 33px;
  padding-right: 4px;
}
/**
Css cho phần bảng table
 */
.content-body .block-table {
  height: calc(100% - 73px);
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
}
.block-table .content-table {
  width: 100%;
  height: 100%;
  overflow: auto;
}
.align-left {
  text-align: left;
}
.align-right {
  text-align: right;
}
.align-center {
  text-align: center;
}
.m-column-xsmall {
  width: 80px;
}
.m-column-small {
  width: 120px;
}
.m-column-medium {
  width: 160px;
}
.m-column-large {
  width: 220px;
}
.fix-width-table {
  max-width: 150px;
  white-space: nowrap;
  overflow: hidden !important;
  text-overflow: ellipsis;
}
table {
  border-collapse: collapse;
  width: 100%;
  table-layout: fixed;
}

tr th,
td {
  border-right: 1px solid #bbbbbb;
  cursor: pointer;
  height: 32px;
  border-bottom: 1px solid #bbbbbb;
  padding-left: 5px;
  font-size: 13px;
}
tr th {
  background-color: #f6f6f6;
  position: sticky;
  top: 0;
}
tr:nth-child(even) {
  background-color: #f6f6f6;
}
tr:hover {
  background-color: #e7f4ff;
}
tr:focus {
  background-color: #4664ca;
}
.block-table .number-record-table {
  height: 26px;
  width: 100%;
  border-bottom: 1px solid #bbbbbb;
}
.number-record-table .number-record {
  font-size: 14px;
  line-height: 26px;
  padding-left: 16px;
}
.control-show-info-detail{
  width: 60px;
  height: 9px;
  position: absolute;
  bottom: 0px;
  left: calc(50% - 60px);
  border: 1px solid #bbbbbb;
  border-bottom: none;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 16px 16px;
  outline: none;
  cursor: pointer;
  background-color: #ffffff;
}
.icon-show-info-detail{
  background-image: url("~@/assets/icons/icon-show-info-detail.png");
}
.icon-hidden-info-detail{
   background-image: url("~@/assets/icons/icon-hidden-info-detail.png");
}
.block-table .detail-info {
  width: 100% !important;
  height: 100%;
  position: relative;
  bottom: 0 !important;
  top: auto !important;
  left: 0 !important;
}
</style>
