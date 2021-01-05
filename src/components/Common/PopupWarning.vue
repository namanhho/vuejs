<template>
  <div style="position: absolute; width: 100%; height: 100%; top: 0; left: 0">
    <div class="pop-up-modal"></div>
    <vue-resizable
      :dragSelector="dragSelector"
      :active="['t']"
      :height="151"
      :width="500"
      :fit-parent="true"
      :top="top"
      :left="left"
      style="z-index: 1000"
    >
      <div class="pop-up">
        <div class="title-pop-up">AMIS.VN-Nhân Sự</div>
        <div class="content-pop-up">
          <div
            class="icon-pop-up icon-warning"
            v-if="infoMessage.typeMessage == 'Warning'"
          ></div>
          <div class="icon-pop-up icon-message" v-else></div>
          <div class="content-main-pop-up">{{ infoMessage.ContentMessage }}</div>
        </div>
        <div class="btn-pop-up">
          <MSButton
            class="m-btn"
            v-if="infoMessage.typeMessage == 'Warning'"
            v-on:btn-click="onClickNo"
            >Không</MSButton
          >
          <MSButton
            class="m-btn"
            v-if="infoMessage.typeMessage == 'Warning'"
            v-on:btn-click="onClickYes"
            >Có</MSButton
          >
          <MSButton
            class="m-btn"
            v-if="infoMessage.typeMessage == 'Message'"
            v-on:btn-click="onClickClose"
            >Đóng</MSButton
          >
        </div>
      </div>
    </vue-resizable>
  </div>
</template>
<script>
import VueResizable from "vue-resizable";
import MSButton from "@/components/Common/MSButton";
export default {
  data() {
    return {
      dragSelector: ".title-pop-up, .btn-pop-up",
      left: `calc(50% - 250px)`,
      top: `calc(50% - 75px)`,
    };
  },
  components: {
    VueResizable,
    MSButton,
  },
  props: {
    infoMessage: {
      type: Object,
      default: null,
    },
  },
  methods: {
    onClickNo() {
      this.$emit("onClickNo");
    },
    onClickYes() {
      this.$emit("onClickYes");
    },
    onClickClose() {
      this.$emit("onClickClose");
    },
  },
};
</script>
<style scoped>
.resizable-component {
  position: absolute !important;
}
.pop-up-modal {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: #000000;
  opacity: 0.5;
  /* z-index: 999; */
}
.pop-up {
  width: 500px;
  height: auto;
  border-radius: 4px;
  /* position: absolute !important;
  left: auto !important;
  top: auto !important; */
}
.pop-up .title-pop-up {
  width: auto;
  height: 32px;
  color: #ffffff;
  line-height: 32px;
  padding-left: 16px;
  background-color: #238de6;
  font-size: 13px;
}
.pop-up .content-pop-up {
  width: auto;
  height: 68px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  background-color: #ffffff;
}
.content-pop-up .icon-pop-up {
  height: 42px;
  width: 42px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 30px 30px;
  flex-shrink: 0;
}
.icon-warning {
  background-image: url("~@/assets/icons/icon-pop-up-warning.png");
}
.icon-message {
  background-image: url("~@/assets/icons/icon-pop-up-message.png");
}
.content-pop-up .content-main-pop-up {
  width: auto;
  height: auto;
  color: #000000;
  font-size: 13px;
  margin-left: 10px;
}
.pop-up .btn-pop-up {
  width: auto;
  height: 50px;
  padding: 0 10px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  background-color: #f0f0f0;
  border-top: 1px solid #bbbbbb;
}
.m-btn {
  margin-left: 10px;
  background-color: #f0f0f0 !important;
  width: 75px;
  height: 30px;
  border: 1px solid #bbbbbb !important;
  border-radius: 4px;
}
.m-btn:hover {
  background-color: #e7f4ff !important;
  border: 1px solid #238de6 !important;
}
.m-btn:active {
  background-color: #cfe9ff !important;
  border: 1px solid #238de6 !important;
}
</style>
