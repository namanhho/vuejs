<template>
  <div class="info-contact" id="style-scollbar">
    <div class="info-left m-flex1">
      <div class="m-flex1" style="margin: 16px 0; color: #559edf; magin: 16px 0">
        Thông tin liên hệ
      </div>
      <div class="m-row">
        <div class="m-flex1 m-label">ĐT di động</div>
        <div class="m-flex5 m-info">{{employee.PhoneNumber}}</div>
      </div>
      <div class="m-row">
        <div class="m-flex1 m-label">ĐT cơ quan</div>
        <div class="m-flex5 m-info">{{employee.PhoneNumberCompany}}</div>
      </div>
      <div class="m-row">
        <div class="m-flex1 m-label">Email cơ quan</div>
        <div class="m-flex5 m-info">{{employee.EmailCompany}}</div>
      </div>
      <div class="m-row">
        <div class="m-flex1 m-label">Email cá nhân</div>
        <div class="m-flex5 m-info">{{employee.Email}}</div>
      </div>
      <div class="m-row">
        <div class="m-flex1 m-label">Chỗ ở hiện nay</div>
        <div class="m-flex5 m-info">{{employee.CurrentPlace}}</div>
      </div>
      <div class="m-row">
        <div class="m-flex1 m-label">Skype</div>
        <div class="m-flex5 m-info">{{employee.Skype}}</div>
      </div>
      <div class="m-row">
        <div class="m-flex1 m-label">Facebook</div>
        <div class="m-flex5 m-info">{{employee.Facebook}}</div>
      </div>
      <div class="m-row">
        <div class="m-flex1 m-label">Zalo</div>
        <div class="m-flex5 m-info">{{employee.Zalo}}</div>
      </div>
    </div>
    <div class="info-right m-flex1">
      <div class="m-flex1" style="margin: 16px 0; color: #559edf; margin: 16px 0">
        Thông tin liên hệ khẩn cấp
      </div>
      <div class="m-row">
        <div class="m-flex1 m-label">Họ và Tên</div>
        <div class="m-flex5 m-info">{{employee.EmergencyFullName}}</div>
      </div>
      <div class="m-row">
        <div class="m-flex1 m-label">Quan hệ</div>
        <div class="m-flex5 m-info">{{employee.EmergencyRelationship}}</div>
      </div>
      <div class="m-row">
        <div class="m-flex1 m-label">Điện thoại</div>
        <div class="m-flex5 m-info">{{employee.EmergencyPhone}}</div>
      </div>
      <div class="m-row">
        <div class="m-flex1 m-label">Email</div>
        <div class="m-flex5 m-info">{{employee.EmergencyEmail}}</div>
      </div>
      <div class="m-row">
        <div class="m-flex1 m-label">Địa chỉ</div>
        <div class="m-flex5 m-info">{{employee.EmergencyAddress}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from "@/EventBus"
export default {
  data() {
    return {
      employee: {}
    }
  },
  mounted(){
    EventBus.$on('showDetail', this.handler);
  },
  methods: {
    handler(e){
        this.employee= e;
    }
  }
}
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
#style-scollbar::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #f5f5f5;
}

#style-scollbar::-webkit-scrollbar {
  width: 10px;
  height: 10px;
  background-color: #f5f5f5;
}

#style-scollbar::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #555;
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
