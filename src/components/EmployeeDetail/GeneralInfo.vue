<template>
  <div class="info-general style-scollbar">
    <div class="img-info-detail">
      <div class="img">
        <img
          v-if="employee.EmployeeImage"
          :src="employee.EmployeeImage"
          alt="fail"
          style="width: 120px; height: 160px"
        />
        <img
          v-else
          src="@/assets/img/AvatarDefault.png"
          alt="fail"
          style="width: 120px; height: 160px"
        />
      </div>
    </div>
    <div class="info-detail-left m-flex2">
      <div class="m-row" style="margin-top: 8px">
        <div class="m-flex1 m-label">Mã nhân viên</div>
        <div class="m-flex5 m-info" fieldName="EmployeeCode">
          {{ employee.EmployeeCode }}
        </div>
      </div>
      <div class="m-row">
        <div class="m-flex1 m-label">Họ và Tên</div>
        <div class="m-flex5 m-info" fieldName="FullName">{{ employee.FullName }}</div>
      </div>
      <div class="m-row">
        <div class="m-flex1 m-label">Giới tính</div>
        <div class="m-flex5 m-info" fieldName="GenderName">{{ employee.GenderName }}</div>
      </div>
      <div class="m-row">
        <div class="m-flex1 m-label">Ngày sinh</div>
        <div class="m-flex5 m-info" fieldName="DateOfBirth">
          {{
            employee.DateOfBirth ? formatDate(employee.DateOfBirth) : employee.DateOfBirth
          }}
        </div>
      </div>
      <div class="m-row">
        <div class="m-flex1 m-label">Số CMTND/thẻ căn cước</div>
        <div class="m-flex5 m-info" fieldName="IdentityNumber">
          {{ employee.IdentityNumber }}
        </div>
      </div>
      <div class="m-row">
        <div class="m-flex1 m-label">Ngày cấp</div>
        <div class="m-flex5 m-info" fieldName="IdentityDate">
          {{
            employee.IdentityDate
              ? formatDate(employee.IdentityDate)
              : employee.IdentityDate
          }}
        </div>
      </div>
    </div>
    <div class="info-detail-right m-flex2">
      <div class="m-row">
        <div class="m-flex1 m-label" style="margin-top: 8px">Nơi cấp</div>
        <div class="m-flex5 m-info" fieldName="IdentityPlace">
          {{ employee.IdentityPlace }}
        </div>
      </div>
      <div class="m-row">
        <div class="m-flex1 m-label">Hộ chiếu</div>
        <div class="m-flex5 m-info" fieldName="Passport">
          {{ employee.PassportNumber }}
        </div>
      </div>
      <div class="m-row">
        <div class="m-flex1 m-label">Vị trí công việc</div>
        <div class="m-flex5 m-info" fieldName="PositionName">
          {{ employee.PositionName }}
        </div>
      </div>
      <div class="m-row">
        <div class="m-flex1 m-label">Đơn vị công tác</div>
        <div class="m-flex5 m-info" fieldName="DepartmentName">
          {{ employee.DepartmentName }}
        </div>
      </div>
      <!-- <div class="m-row">
        <div class="m-flex1 m-label">Ngày thử việc</div>
        <div class="m-flex5 m-info" fieldName= "ProbationDay">{{formatDate(employee.ProbationDay)}}</div>
      </div>
      <div class="m-row">
        <div class="m-flex1 m-label">Ngày chính thức</div>
        <div class="m-flex5 m-info" fieldName= "MainDay">{{formatDate(employee.MainDay)}}</div>
      </div> -->
    </div>
  </div>
</template>
<script>
import EventBus from "@/EventBus";
export default {
  data() {
    return {
      employee: {},
    };
  },
  created() {
    debugger;
    EventBus.$on("showDetail", this.handler);
    // this.setInfoToForm();
  },
  methods: {
    handler(e) {
      console.log("recieved: " + e);
      this.employee = e;
      // debugger
      // var divs= this.$el.querySelectorAll('div[fieldName]');
      // var employee= this.employee;
      // divs.forEach(function(div, index){
      //   var fieldName= div.getAttribute('fieldName');
      //   var value= employee[fieldName];
      //   debugger
      // })
    },
    /**
     * Hàm để format định dạng ngày sinh
     */
    formatDate(date) {
      var date = new Date(date);
      var day = date.getDate(),
        month = date.getMonth() + 1,
        year = date.getFullYear();
      day = day < 10 ? "0" + day : day;
      month = month < 10 ? "0" + month : month;
      return day + "-" + month + "-" + year;
      //  return year + '-' + month + '-' + day;
    },
  },
};
</script>
<style scoped>
.m-row {
  display: flex;
  margin-bottom: 8px;
  align-items: center;
  justify-content: center;
}
.m-label {
  margin-right: 8px;
  font-size: 13px;
}
.m-info {
  font-weight: bold;
  font-size: 13px;
}
.info-general {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100% - 36px);
  overflow: auto;
}
.info-general .img-info-detail {
  height: 100%;
  display: flex;
  justify-content: center;
}
.img-info-detail .img {
  width: 120px;
  height: 150px;
  padding: 16px;
  /* background-image: url("~@/assets/img/AvatarDefault.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 120px 150px; */
}
.info-general .info-detail-left {
  height: 100%;
  margin-left: 8px;
}
.info-general .info-detail-right {
  height: 100%;
  margin-left: 8px;
}
</style>
