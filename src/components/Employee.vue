<template>
  <div class="">
    <!-- <div class="header"></div> -->
    <Header></Header>
    <div class="block-body">
      <!-- <div class="nav-bar"></div> -->
      <NavBar></NavBar>
      <div class="content-body">
        <div class="header-table">
          <div class="title-table">Hồ Sơ</div>
          <!-- <div class="filter-table"></div> -->
          <FilterTableEmployee></FilterTableEmployee>
        </div>
        <div class="button-table">
          <button class="btn-add m-button" style="padding-left: 12px">
            <div class="icon-add m-icon-button"></div>
            <div class="m-title-button">Thêm</div>
          </button>
          <button class="btn-edit m-button">
            <div class="icon-edit m-icon-button"></div>
            <div class="m-title-button">Xem và sửa</div>
          </button>
          <button class="btn-delete m-button">
            <div class="icon-delete m-icon-button"></div>
            <div class="m-title-button">Xóa</div>
          </button>
        </div>
        <div class="block-table">
          <!-- <vueCustomScrollbar class="content-table"  :settings="settings" @ps-scroll-y="scrollHanle"> -->
          <div class="content-table style-scollbar">
            <table class="employee-table">
              <thead>
                <tr>
                  <th class="m-column-small align-left" style="padding-left: 16px">
                    Mã nhân viên
                  </th>
                  <th class="m-column-medium align-left">Họ và tên</th>
                  <th class="m-column-xsmall align-left">Giới tính</th>
                  <th class="m-column-small align-center">Ngày sinh</th>
                  <th class="m-column-large align-left">Vị trí công việc</th>
                  <th class="m-column-large align-left">Đơn vị công tác</th>
                  <th class="m-column-small align-left">Trạng thái</th>
                  <th class="m-column-small align-left">Trình độ đào tạo</th>
                  <th class="m-column-large align-left">Nơi đào tạo</th>
                  <th class="m-column-large align-left">Chuyên ngành</th>
                  <th class="m-column-large align-left">Email cơ quan</th>
                  <th class="m-column-large align-left">Zalo ID</th>
                  <th class="m-column-large align-left">Ngày thử việc</th>
                  <th class="m-column-large align-left">Ngày chính thức</th>
                  <th class="m-column-large align-left">Loại hợp đồng</th>
                  <th class="m-column-large align-left" style="border-right: none">
                    Mã chấm cống
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="n in 30">
                  <td>
                    <div class="m-column-small align-left" style="padding-left: 16px">
                      {{ employee.EmployeeCode }}
                    </div>
                  </td>
                  <td>
                    <div class="m-column-medium align-left">{{ employee.FullName }}</div>
                  </td>
                  <td>
                    <div class="m-column-xsmall align-left">{{ employee.Gender }}</div>
                  </td>
                  <td>
                    <div class="m-column-small align-center">
                      {{ employee.DateOfBirth }}
                    </div>
                  </td>
                  <td>
                    <div class="m-column-large align-left">{{ employee.Position }}</div>
                  </td>
                  <td>
                    <div class="m-column-large align-left">{{ employee.Department }}</div>
                  </td>
                  <td>
                    <div class="m-column-small align-left">{{ employee.WorkStatus }}</div>
                  </td>
                  <td>
                    <div class="m-column-small align-left">
                      {{ employee.Qualification }}
                    </div>
                  </td>
                  <td>
                    <div
                      class="m-column-large align-left fix-width-table"
                      v-bind:title="employee.School"
                    >
                      {{ employee.School }}
                    </div>
                  </td>
                  <td>
                    <div class="m-column-large align-left">{{ employee.Majors }}</div>
                  </td>
                  <td>
                    <div class="m-column-large align-left">{{ employee.Email }}</div>
                  </td>
                  <td><div class="m-column-small align-left"></div></td>
                  <td><div class="m-column-small align-left"></div></td>
                  <td><div class="m-column-small align-left"></div></td>
                  <td><div class="m-column-small align-left"></div></td>
                  <td>
                    <div
                      class="m-column-small align-left"
                      style="border-right: none"
                    ></div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="number-record-table">
            <div class="number-record">Tổng số: <span style="font-weight: bold;">585</span> bản ghi</div>
          </div>
          <vue-resizable class="detail-info" :active="['t']" :height="200" :min-height="100" :max-height="250">
            <DetailEmployee></DetailEmployee>
            
          </vue-resizable>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VueResizable from 'vue-resizable'
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import FilterTableEmployee from "@/components/FilterTableEmployee";
import MSButton from "@/components/MSButton";
import DetailEmployee from "@/components/DetailEmployee";
export default {
  data() {
    return {
      employee: {
        EmployeeCode: "NV-0001",
        FullName: "Hồ Nam Anh",
        Gender: "Nam",
        DateOfBirth: "22-09-1998",
        Position: "Fresher",
        Department: "Phòng Đào Tạo",
        WorkStatus: "Đang thử việc",
        Qualification: "Đại học",
        School: "Học viện công nghệ bưu chính viễn thông",
        Majors: "An toàn thông tin",
        Email: "namanh22091998@gmail.com",
      },
      newHeight: 40,
    };
  },
  components: {
    Header,
    NavBar,
    FilterTableEmployee,
    MSButton,
    DetailEmployee,
    VueResizable,
  },
  methods: {
    resize(newRect) {
      this.newHeight = newRect.newHeight;
    },
  },
};
</script>
<style scoped>
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
.block-body {
  width: 100%;
  height: calc(100vh - 44px);
  display: flex;
}
.block-body .nav-bar {
}
.block-body .content-body {
  width: calc(100% - 85px);
  height: 100%;
}
/* css cho phần tiêu đề bảng */
.content-body .header-table {
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
}
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
  background-color: #E7F4FF;
}
.m-button:focus {
  background-color: #CFE9FF;
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
  background-image: url("~@/assets/icons/icon-edit.png");
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
  font-size: 12px;
  line-height: 33px;
  padding-right: 4px;
}
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
table {
  border-collapse: collapse;
  width: calc(100% - 32px - 27px);
}

tr th,
td {
  border-right: 1px solid #bbbbbb;
  cursor: pointer;
}
tr th {
  background-color: #e5e5e5;
  position: sticky;
  top: 0;
}
th,
td {
  border-bottom: 1px solid #bbbbbb;
  padding: 5px 0 4px 5px;
}
tr:nth-child(even) {
  background-color: #e5e5e5;
}
tr:hover {
  background-color: #E7F4FF;
}
tr:focus {
  background-color: #4664ca;
}
.block-table .number-record-table {
  height: 26px;
  width: 100%;
  border-bottom: 1px solid #bbbbbb;
}
.number-record-table .number-record{
  font-size: 14px;
  line-height: 26px;
  padding-left: 16px;
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
