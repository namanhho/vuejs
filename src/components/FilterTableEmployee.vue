<template>
  <div class="filter-table">
    <div class="branch-search">
      <input
        type="text"
        class="branch-search-input"
        placeholder="Tìm kiếm theo phòng ban"
      />
      <div class="search-input-dropdown"></div>
    </div>
    <div class="work-status-search">
      <input
        type="text"
        class="work-status-search-input"
        placeholder="Tìm kiếm theo vị trí"
      />
      <div class="search-input-dropdown"></div>
    </div>
    <div class="btn-sort">
      <button class="btn-sort-list"></button>
      <button class="btn-sort-tag"></button>
    </div>
  </div>
</template>
<script></script>
<style>
.filter-table {
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.filter-table .branch-search {
  height: 100%;
  width: 50%;
  display: flex;
}
.branch-search .branch-search-input {
  padding: 0 0 0 34px;
  border: none;
  /* background-image: url("https://cdntestv2.amis.vn/AMISHRM2/Content/Master/image/tree.png?v=GEqs3lOJ14 k9N6szUVm4CpMPlI="); */
  background-image: url("../imgs/tree.png");
  background-position: 8px center;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  outline: none;
}
.search-input-dropdown {
  height: 100%;
  width: 30px;
  background-position: 8px center;
  background-repeat: no-repeat;
  background-image: url("../imgs/dropdown.svg");
  background-size: 20px 20px;
  flex-shrink: 0;
  border-right: 1px solid #bbbbbb;
}
.filter-table .work-status-search {
  height: 100%;
  width: 40%;
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
  width: 80px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn-sort .btn-sort-list {
  height: 100%;
  width: 32px;
  background-image: url("~@/assets/icons/icon-sort-list.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 16px 16px;
  border: none;
  outline: none;
  padding: 0;
  background-color: #ffffff;
}
.btn-sort .btn-sort-tag {
  height: 100%;
  width: 32px;
  background-image: url("~@/assets/icons/icon-sort-tag.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 16px 16px;
  border: none;
  outline: none;
  padding: 0;
  background-color: #ffffff;
}
</style>
