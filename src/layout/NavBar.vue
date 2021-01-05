<template>
    <div class="nav-bar">
      <a href="" class="item-menu">
        <div class="block-item-menu">
          <div class="icon-item-menu icon-overview"></div>
          <div class="title-item-menu">Tổng quan</div>
        </div>
      </a>
      <a href="./employee" class="item-menu">
        <div class="block-item-menu">
          <div class="icon-item-menu icon-record"></div>
          <div class="title-item-menu">Hồ sơ</div>
        </div>
      </a>
      <a href="./ListTimeSheet" class="item-menu">
        <div class="block-item-menu">
          <div class="icon-item-menu icon-timekeeping"></div>
          <div class="title-item-menu">Chấm công</div>
        </div>
      </a>
      <a href="" class="item-menu">
        <div class="block-item-menu">
          <div class="icon-item-menu icon-salary"></div>
          <div class="title-item-menu">Lương</div>
        </div>
      </a>
      <a href="" class="item-menu">
        <div class="block-item-menu">
          <div class="icon-item-menu icon-recruitment"></div>
          <div class="title-item-menu">Tuyển dụng</div>
        </div>
      </a>
      <a href="" class="item-menu">
        <div class="block-item-menu">
          <div class="icon-item-menu icon-procedure"></div>
          <div class="title-item-menu">Thử tục</div>
        </div>
      </a>
      <a href="" class="item-menu">
        <div class="block-item-menu">
          <div class="icon-item-menu icon-training"></div>
          <div class="title-item-menu">Đào tạo</div>
        </div>
      </a>
      <a href="" class="item-menu">
        <div class="block-item-menu">
          <div class="icon-item-menu icon-rate"></div>
          <div class="title-item-menu">Đánh giá</div>
        </div>
      </a>
      <a href="" class="item-menu">
        <div class="block-item-menu">
          <div class="icon-item-menu icon-report"></div>
          <div class="title-item-menu">Báo cáo</div>
        </div>
      </a>
      <a href="" class="item-menu">
        <div class="block-item-menu">
          <div class="icon-item-menu icon-option-other"></div>
          <div class="title-item-menu">Khác</div>
        </div>
      </a>
      <a href="" class="item-menu" style=" position: absolute; bottom: 0;">
        <div class="block-item-menu">
          <div class="icon-item-menu icon-settings"></div>
          <div class="title-item-menu">Thiết lập</div>
        </div>
      </a>
    </div>
</template>

<script></script>
<style scoped>
.nav-bar {
  width: 84px;
  border-right: 1px solid #bbbbbb;
  height: 100%;
  background-color: #0C68B4;
  position: relative;
}
.item-menu{
  text-decoration: none;
}
.block-item-menu:hover{
  background-color: #1D7ECE;
}
.block-item-menu{
  width: 84px;
  height: 56px;
  /* display: flex;
  flex-direction: column; */
}
.block-item-menu .icon-item-menu{
  width:100%;
  height:16px;
  padding: 10px 0;
  background-position:center;
  background-repeat: no-repeat;
  background-size: 16px 16px;
}
.icon-overview{
  background-image: url("~@/assets/icons/icon-overview.svg");
}
.icon-record{
  background-image: url("~@/assets/icons/icon-record.svg");
}
.icon-timekeeping{
  background-image: url("~@/assets/icons/icon-timekeeping.svg");
}
.icon-salary{
  background-image: url("~@/assets/icons/icon-salary.svg");
}
.icon-recruitment{
  background-image: url("~@/assets/icons/icon-recruitment.svg");
}
.icon-procedure{
  background-image: url("~@/assets/icons/icon-procedure.svg");
}
.icon-training{
  background-image: url("~@/assets/icons/icon-training.svg");
}
.icon-rate{
  background-image: url("~@/assets/icons/icon-rate.svg");
}
.icon-report{
  background-image: url("~@/assets/icons/icon-report.svg");
}
.icon-option-other{
  background-image: url("~@/assets/icons/icon-option-other.svg");
}
.icon-settings{
  background-image: url("~@/assets/icons/icon-settings.svg");
}
.block-item-menu .title-item-menu{
  width: auto;
  height:10px;
  font-size: 13px;
  text-align: center;
  line-height:10px;
  margin-bottom: 10px;
  color: #ffffff;
}
</style>