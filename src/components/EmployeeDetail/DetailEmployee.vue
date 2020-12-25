<template>
  <div class="detail-info">
    <div class="resize">
      <div class="block-resize"></div>
    </div>
    <div class="menu-info-detail">
      <button class="btn-nav-info-detail" @click="currentTab = 'GeneralInfo'">1. Thông tin chung</button>
      <button class="btn-nav-info-detail" @click="currentTab = 'ContactInfo'">2. Thông tin liên hệ</button>
    </div>

    <!-- Inactive components will be cached! -->
    <keep-alive>
      <component :is="currentTabComponent"> </component>
    </keep-alive>
  </div>
</template>
<script>
import GeneralInfo from "@/components/EmployeeDetail/GeneralInfo";
import ContactInfo from "@/components/EmployeeDetail/ContactInfo";
export default {
  data() {
    return {
      currentTab: "GeneralInfo",
    };
  },
  components: {
    GeneralInfo,
    ContactInfo,
  },
  methods: {},
  computed: {
    currentTabComponent() {
      // debugger;
      return this.currentTab;
    },
  },
};
</script>
<style scoped>
.detail-info {
  width: 100% !important;
  height: 100%;
  position: relative;
  bottom: 0 !important;
  top: auto !important;
  left: 0 !important;
}
.detail-info .resize {
  width: 100%;
  border-bottom: 1px solid #bbbbbb;
  position: absolute;
  display: flex;
  justify-content: center;
}
.resize .block-resize {
  width: 60px;
  height: 9px;
  position: absolute;
  top: -9px;
  border: 1px solid #bbbbbb;
  border-bottom: none;
  background-image: url("~@/assets/icons/icon-resize.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 16px 16px;
}
.detail-info .menu-info-detail{
  height:35px;
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #bbbbbb;
}
.btn-nav-info-detail{
  padding: 6px 8px;
  border: none;
  outline: none;
  background: #ffffff;
  text-transform: uppercase;
}
.btn-nav-info-detail:hover{
  color:#559EDF;
}
.btn-nav-info-detail:focus{
  color:#559EDF;
  border-bottom: 4px solid #559EDF;
}
</style>
