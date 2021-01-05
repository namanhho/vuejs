// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import UUID from "vue-uuid";
import i18n from '@/plugins/i18n';

Vue.use(UUID);

// scss
import '@/assets/scss/MSCommon.scss';
import '@/assets/scss/MSCssTable.scss';
import '@/assets/scss/MSIcon.scss';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
