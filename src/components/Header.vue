<template>
  <div class="header">
    <div class="logo-header">
      <a href=""><div class="logo"></div></a>
      <a href=""><div class="menu-header"></div></a>
    </div>
    <div class="search-on-header">
      <div class="block-search-and-setting">
        <input type="text" class="search-input" placeholder="Tìm kiếm nhanh..."/>
        <a class="setting" href=""></a>
      </div>
    </div>
    <div class="left-header">
      <a href=""><div class="icon-misa-support"></div></a>
      <div class="text-header" style="margin-right: 16px;">R57.12</div>
      <a href=""><div class="avatar-user"></div></a>
      <div class="text-header name-user">Hồ Nam Anh</div>
    </div>
  </div>
</template>

<script></script>
<style>
.header {
  width: 100%;
  height: 44px;
  background-color: #0c68b4;
  display: flex;
  align-items: center;
}
.header .logo-header {
  height: 100%;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo-header .logo {
  height: 44px;
  width: 133px;
  background-image: url("~@/assets/icons/logo-amis.png");
  background-position: center;
  background-repeat: no-repeat;
}
.logo-header .menu-header {
  height: 24px;
  width: 24px;
  background-image: url("~@/assets/icons/grid.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 20px 20px;
  margin-left: 16px;
}
.header .search-on-header {
  height: 30px;
  width: 300px;
  padding-left: 34px;
  background-image: url("~@/assets/icons/icon-search.png");
  background-position: 8px center;
  background-repeat: no-repeat;
  background-size: 16px 16px;
  background-color: #0A589A;
  margin-left:16px;
  position: relative;
  border-radius:4px;
}
.search-on-header .block-search-and-setting {
  height: 100%;
  width: auto;
  display: flex;
  align-items: center;
}
.block-search-and-setting .search-input {
  height: 30px;
  width: auto;
  border: none;
  outline: none;
  padding: 0;
  background-color:#0A589A;
  color: #ffffff;
  flex-grow: 1;
}
::placeholder{
  color: #ffffff;
}
.block-search-and-setting .setting {
  height: 24px;
  width: 24px;
  background-image: url("~@/assets/icons/icon-settings.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 16px 16px;
  position: relative;
  right: 0;
}
.header .left-header {
  height: 44px;
  width: auto;
  display: flex;
  align-items: center;
  /* flex-direction: row-reverse; */
  position: absolute;
  right: 16px;
}
.left-header .icon-misa-support{
  height:44px;
  width: 160px;
  background-image: url("~@/assets/icons/icon-misa-support.png");
  background-position: center;
  background-repeat: no-repeat;
  margin-right:16px;
}
.left-header .avatar-user{
  height:27px;
  width: 27px;
  background-image: url("~@/assets/icons/EmployeeImage.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size:27px 27px;
  margin-right:16px;
  border-radius:50%;
}
.text-header{
  color: #ffffff;
  font-size:13px;
}
</style>
