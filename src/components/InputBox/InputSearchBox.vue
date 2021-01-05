<template>
  <div class="input-box">
    <div class="block-filter">
      <button class="btn-filter" @click="openListItemFilter">
        {{ iconButtonChoosed }}
      </button>
    </div>
    <div class="block-select-filter">
      <div class="input-and-dropdown">
        <input type="text" class="input-filter" :value="inputItemSelected" />
        <button
        v-if="dataFilter"
          type="button"
          class="btn-dropdown-filter"
          @click="openListItemSelected"
        ></button>
      </div>
    </div>
  </div>
</template>
<script>
import { DataButtonFilterTable } from "@/data/DataFilterTable.js";
export default {
  data() {
    return {
      DataButtonFilterTable,
      iconButtonChoosed: null,
      itemChoosed: null,
      showListItemFilter: false,
      inputItemSelected: null,
      showListItemSelected: false,
      nameDataSelectFilter: this.dataFilter,
    };
  },
  created() {
    this.iconButtonChoosed = this.DataButtonFilterTable[2].icon;
    this.itemChoosed = this.DataButtonFilterTable[2].name;
  },
  methods: {
    /**
     * Hàm xử lý mở đóng danh sách lọc filter
     */
    openListItemFilter(e){
      this.$emit('openListItemFilter', e);
    },
   /**
     * Hàm xử lý mở đóng danh sách dữ liệu để chọn lọc filter
     */
    openListItemSelected(e){
      this.$emit('openListItemSelected', e);
      this.$emit('dataFilter', this.nameDataSelectFilter);
    },
  },
  props: {
    //dữ liệu để lọc, nếu có thì mới hiện biểu tượng drop down đê người dùng chọn
    dataFilter: {
      default: Array,
      default: null,
    },
  },
  watch: {
    dataFilter: function () {
      this.nameDataSelectFilter= this.dataFilter;
    },
  },
};
</script>
<style scoped>
/* css cho phần dòng khi được chọn */
.item-selected {
  background-color: #cfe9ff;
}
/* CSS cho phần input filter của bảng */
.input-box {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
}
.input-box .block-filter {
  width: 25px;
  height: 100%;
  position: relative;
}
/* Css cho phần nút lọc, chọn trạng thái lọc */
.block-filter .btn-filter {
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  background-color: #ffffff;
  border-right: 1px solid #bbbbbb;
  cursor: pointer;
}
.icon-equal {
  background-image: url("~@/assets/icons/icon-equal.png");
}
.icon-not-equal {
  background-image: url("~@/assets/icons/icon-not-equal.png");
}
.icon-more-than {
  background-image: url("~@/assets/icons/icon-more-than.png");
}
.icon-more-or-equal {
  background-image: url("~@/assets/icons/icon-more-or-equal.png");
}
.icon-less-than {
  background-image: url("~@/assets/icons/icon-less-than.png");
}
.icon-less-or-equal {
  background-image: url("~@/assets/icons/icon-less-or-equal.png");
}
.icon-option {
  background-image: url("~@/assets/icons/icon-option.svg");
}
/* .block-filter .content-filter {
  min-width: 160px;
  max-height: 250px;
  position: absolute;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  background-color: #ffffff;
  overflow: auto;
}
.content-filter .item-filter {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}
.item-filter:hover {
  background-color: #e7f4ff;
}
.item-filter:active {
  background-color: #cfe9ff;
}
.item-filter .block-icon-choosed {
  width: 16px;
  height: 16px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 16px 16px;
  padding: 0 8px;
}
.icon-choosed {
  background-image: url("~@/assets/icons/icon-choosed.svg");
}
.item-filter .title-item-filter {
  font-size: 13px;
  line-height: 30px;
  font-weight: normal !important;
} */
.input-box .block-select-filter {
  height: 100%;
  width: 100%;
  position: relative;
}
.block-select-filter .input-and-dropdown {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
}
.input-and-dropdown .input-filter {
  height: 100%;
  width: 100%;
  outline: none;
  border: none;
  padding: 0px;
  padding-left: 5px;
}
.input-and-dropdown .btn-dropdown-filter {
  height: 100%;
  width: 30px;
  border: none;
  outline: none;
  background-image: url("~@/assets/icons/icon-drop-down-input-search.png");
  background-position: center;
  background-repeat: no-repeat;
  background-color: #ffffff;
  cursor: pointer;
}
/* .block-select-filter .content-select-filter {
  position: absolute;
  background-color: #ffffff;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-height: 250px;
  overflow: auto;
}
.content-select-filter .item-select-filter {
  width: auto;
  height: 30px;
  text-align: left;
  font-size: 13px;
  font-weight: normal !important;
  padding: 0 5px;
  line-height: 30px;
  white-space: nowrap;
  overflow: hidden !important;
  text-overflow: ellipsis;
}
.item-select-filter:hover {
  background-color: #e7f4ff;
}
.item-select-filter:active {
  background-color: #cfe9ff;
} */
</style>
