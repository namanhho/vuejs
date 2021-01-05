<template>
  <div class="detail-info">
    <div class="menu-info-detail">
      <button ref="autoTab" class="btn-nav-info-detail" :class="(currentTab == 'GeneralInfo')? 'btn-focus' : null" @click="currentTab = 'GeneralInfo'">1. Thông tin chung</button>
      <button class="btn-nav-info-detail" :class="(currentTab == 'ContactInfo')? 'btn-focus' : null" @click="currentTab = 'ContactInfo'">2. Thông tin liên hệ</button>
    </div>

    <!-- Inactive components will be cached! -->
    <keep-alive>
      <component :is="currentTabComponent" :employeeSelected="employee"> </component>
    </keep-alive>
  </div>
</template>
<script>
import GeneralInfo from "@/views/EmployeeDetail/GeneralInfo";
import ContactInfo from "@/views/EmployeeDetail/ContactInfo";
export default {
  data() {
    return {
      currentTab: "GeneralInfo",
      employee: this.employeeSelected,
    };
  },
  mounted() {
    this.$refs.autoTab.focus();
  },
  components: {
    GeneralInfo,
    ContactInfo,
  },
  methods: {},
  computed: {
    currentTabComponent() {
      return this.currentTab;
    },
  },
  props: {
    employeeSelected: {
      type: Object,
      default: null,
    }
  },
  watch: {
    employeeSelected: function(){
      // debugger
      this.employee= this.employeeSelected;
    }
  }
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
.btn-focus{
  color:#559EDF;
  border-bottom: 4px solid #559EDF;
}
</style>
