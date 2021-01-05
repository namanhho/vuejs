<template>
  <div class="header-table">
    <div class="title-table"><slot></slot></div>
    <div class="filter-table">
      <div class="branch-search" v-if="showSearchBranch">
        <input
          type="text"
          class="branch-search-input"
          placeholder="Tìm kiếm theo phòng ban"
        />
        <div class="search-input-dropdown"></div>
      </div>
      <div class="work-status-search" v-if="showSearchStatusWork">
        <input
          type="text"
          class="work-status-search-input"
          placeholder="Tìm kiếm theo vị trí"
        />
        <div class="search-input-dropdown"></div>
      </div>
      <div class="btn-sort" v-if="showButtonSort">
        <button class="btn-sort-list"></button>
        <button class="btn-sort-tag"></button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    showSearchBranch: {
      type: Boolean,
      default: false,
    },
    showSearchStatusWork: {
      type: Boolean,
      default: false,
    },
    showButtonSort: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style scoped>
.header-table {
  height: 36px;
  width: 100%;
  display: flex;
  border-bottom: 1px solid #bbbbbb;
}
.header-table .title-table {
  font-size: 16px;
  font-weight: bold;
  padding-left: 16px;
  height: 100%;
  width: 30%;
  line-height: 38px;
  text-align: left;
  /* width: calc(100% - 331px - 185px - 90px); */
}
.header-table .filter-table {
  height: 100%;
  width: calc(100% - 300px);
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.filter-table .branch-search {
  height: 100%;
  width: 330px;
  display: flex;
  align-items: center;
  border-left: 1px solid #bbbbbb;
}
.branch-search .branch-search-input {
  padding: 0 0 0 34px;
  border: none;
  background-image: url("~@/assets/img/tree.png");
  background-position: 8px center;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  outline: none;
}
.search-input-dropdown {
  height: 100%;
  width: 30px;
  border: none;
  outline: none;
  background-image: url("~@/assets/icons/icon-drop-down-input-search.png");
  background-position: center;
  background-repeat: no-repeat;
  background-color: #ffffff;
  flex-shrink: 0;
  border-right: 1px solid #bbbbbb;
  cursor: pointer;
}
.filter-table .work-status-search {
  height: 100%;
  width: 185px;
  display: flex;
}
.work-status-search .work-status-search-input {
  height: 100%;
  width: 100%;
  padding: 0;
  outline: none;
  border: none;
  padding-left: 10px;
}
.filter-table .btn-sort {
  height: 100%;
  width: 90px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn-sort .btn-sort-list {
  height: 100%;
  width: 45px;
  background-image: url("~@/assets/icons/icon-sort-list.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 16px 16px;
  border: none;
  outline: none;
  padding: 0;
  background-color: #ffffff;
  cursor: pointer;
}
.btn-sort .btn-sort-tag {
  height: 100%;
  width: 45px;
  background-image: url("~@/assets/icons/icon-sort-tag.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 16px 16px;
  border: none;
  outline: none;
  padding: 0;
  background-color: #ffffff;
  cursor: pointer;
}
</style>
