import 'leaflet/dist/leaflet.css';
import * as L from 'leaflet';
import 'leaflet.pm';
import 'leaflet.pm/dist/leaflet.pm.css';
const { createApp } = require('vue');
import App from './App.vue';
Vue.config.productionTip = false;
Vue.L = Vue.prototype.$L = L;

/* leaflet icon */
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

createApp(App).mount('#app');
