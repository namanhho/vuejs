<template>
  <div class="info-contact style-scollbar">
    <div class="info-left m-flex1">
      <div class="m-flex1" style="margin: 16px 0; color: #559edf; magin: 16px 0">
        Thông tin liên hệ
      </div>
      <div class="m-row">
        <div class="m-flex1 m-label">ĐT di động</div>
        <div class="m-flex5 m-info">{{ employee.PhoneNumber }}</div>
      </div>
      <div class="m-row">
        <div class="m-flex1 m-label">ĐT cơ quan</div>
        <div class="m-flex5 m-info">{{ employee.CompanyPhoneNumber }}</div>
      </div>
      <div class="m-row">
        <div class="m-flex1 m-label">Email cơ quan</div>
        <div class="m-flex5 m-info">{{ employee.EmailCompany }}</div>
      </div>
      <div class="m-row">
        <div class="m-flex1 m-label">Email cá nhân</div>
        <div class="m-flex5 m-info">{{ employee.Email }}</div>
      </div>
      <div class="m-row">
        <div class="m-flex1 m-label">Chỗ ở hiện nay</div>
        <div class="m-flex5 m-info">{{ employee.AddressCurrent }}</div>
      </div>
      <div class="m-row">
        <div class="m-flex1 m-label">Skype</div>
        <div class="m-flex5 m-info">{{ employee.Skype }}</div>
      </div>
      <div class="m-row">
        <div class="m-flex1 m-label">Facebook</div>
        <div class="m-flex5 m-info">{{ employee.Facebook }}</div>
      </div>
      <div class="m-row">
        <div class="m-flex1 m-label">Zalo</div>
        <div class="m-flex5 m-info">{{ employee.Zalo }}</div>
      </div>
    </div>
    <div class="info-right m-flex1">
      <div class="m-flex1" style="margin: 16px 0; color: #559edf; margin: 16px 0">
        Thông tin liên hệ khẩn cấp
      </div>
      <div class="m-row">
        <div class="m-flex1 m-label">Họ và Tên</div>
        <div class="m-flex5 m-info">{{ employee.UrgencyFullName }}</div>
      </div>
      <div class="m-row">
        <div class="m-flex1 m-label">Quan hệ</div>
        <div class="m-flex5 m-info">{{ employee.UrgencyRelationship }}</div>
      </div>
      <div class="m-row">
        <div class="m-flex1 m-label">Điện thoại</div>
        <div class="m-flex5 m-info">{{ employee.UrgencyPhoneNumber }}</div>
      </div>
      <div class="m-row">
        <div class="m-flex1 m-label">Email</div>
        <div class="m-flex5 m-info">{{ employee.UrgencyEmail }}</div>
      </div>
      <div class="m-row">
        <div class="m-flex1 m-label">Địa chỉ</div>
        <div class="m-flex5 m-info">{{ employee.UrgencyAddress }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from "@/bus/EventBus";
export default {
  data() {
    return {
      employee: this.employeeSelected,
    };
  },
  created() {
    this.employee= this.employeeSelected;
  },
  watch: {
    /**Hàm kiểm tra sự thay đổi của đối tượng objectSelected được gửi từ cha */
    employeeSelected: function(){
      debugger
      this.employee= this.employeeSelected;
    }
  },
  methods: {
  },
  props: {
    employeeSelected:{
      type: Object,
      default: null,
    }
  }
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
.info-contact {
  width: 100%;
  height: calc(100% - 36px);
  display: flex;
  justify-content: center;
  overflow: auto;
}
.info-contact .info-left {
  padding-left: 16px;
}
.info-contact .info-right {
  margin-left: 8px;
}
</style>
