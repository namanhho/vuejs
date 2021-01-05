<template>
  <div class="loading">
    <div class="loading-modal"></div>
    <div class="loading-icon"></div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
/**
    Css cho phần loading khi tải dữ liệu
*/
/* .loading {
  display: none;
} */

.loading .loading-modal {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: #000000;
  opacity: 0.5;
  z-index: 999;
}

.loading .loading-icon {
  border: 5px solid #f3f3f3;
  border-radius: 50%;
  border-top: 5px solid #0C68B4;
  width: 30px;
  height: 30px;
  animation: spin 2s linear infinite;
  position: fixed;
  top: calc(50% - 15px);
  left: calc(50% - 15px);
  z-index: 1000;
}
@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>
