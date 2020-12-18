<template>
  <div class="info-general" id="style-scollbar">
    <div class="img-info-detail">
      <div class="img"></div>
    </div>
    <div class="info-detail-left m-flex2">
      <div class="m-row" style="margin-top: 8px">
        <div class="m-flex1 m-label">Mã nhân viên</div>
        <div class="m-flex2 m-info">NV_0001</div>
      </div>
      <div class="m-row">
        <div class="m-flex1 m-label">Họ và Tên</div>
        <div class="m-flex2 m-info">Hồ Nam Anh</div>
      </div>
      <div class="m-row">
        <div class="m-flex1 m-label">Giới tính</div>
        <div class="m-flex2 m-info">Nam</div>
      </div>
      <div class="m-row">
        <div class="m-flex1 m-label">Ngày sinh</div>
        <div class="m-flex2 m-info">22/09/1998</div>
      </div>
      <div class="m-row">
        <div class="m-flex1 m-label">Số CMTND/thẻ căn cước</div>
        <div class="m-flex2 m-info">0987654321</div>
      </div>
      <div class="m-row">
        <div class="m-flex1 m-label">Ngày cấp</div>
        <div class="m-flex2 m-info">01/02/2013</div>
      </div>
    </div>
    <div class="info-detail-right m-flex2">
      <div class="m-row">
        <div class="m-flex1 m-label" style="margin-top: 8px">Nơi cấp</div>
        <div class="m-flex2 m-info">Hà Nội</div>
      </div>
      <div class="m-row">
        <div class="m-flex1 m-label">Hộ chiếu</div>
        <div class="m-flex2 m-info">0999888777</div>
      </div>
      <div class="m-row">
        <div class="m-flex1 m-label">Vị trí công việc</div>
        <div class="m-flex2 m-info">Fresher</div>
      </div>
      <div class="m-row">
        <div class="m-flex1 m-label">Đơn vị công tác</div>
        <div class="m-flex2 m-info">Phòng Đào Tạo</div>
      </div>
      <div class="m-row">
        <div class="m-flex1 m-label">Ngày thử việc</div>
        <div class="m-flex2 m-info">03/12/2020</div>
      </div>
      <div class="m-row">
        <div class="m-flex1 m-label">Ngày chính thức</div>
        <div class="m-flex2 m-info">10/01/2002l21</div>
      </div>
      <div class="m-row">
        <div class="m-flex1 m-label">Mã nhân viên</div>
        <div class="m-flex2 m-info">NV_0001</div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.m-flex1 {
  flex: 1;
}
.m-flex2 {
  flex: 2;
}

.m-row {
  display: flex;
  margin-bottom: 8px;
  align-items: center;
  justify-content: center;
}
.m-label {
  margin-right: 8px;
  font-size: 13px
}
.m-info {
  font-weight: bold;
    font-size: 13px
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
  background-image: url("~@/assets/img/AvatarDefault.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 120px 150px;
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
