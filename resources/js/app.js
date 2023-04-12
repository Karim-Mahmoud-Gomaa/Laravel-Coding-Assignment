import { createApp,h } from 'vue'
import { createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'

import createRouter from './pages/routes.js'
import App from './App.vue'
import axios from "axios";
import vSelect from "vue-select";
import moment from "moment";
import Swal from 'sweetalert2'
import DisableAutocomplete from '@aacassandra/vue-disable-autocomplete';
import "vue-select/dist/vue-select.css";
import BeatLoader from 'vue-spinner/src/BeatLoader.vue'

const store = createPinia()
const router = createRouter(createWebHistory())
const app = createApp(App)

/////////////////////////////////////////////vSelect
vSelect.props.components.default = () => ({
    Deselect: {
        render: () => h('i', { class: 'fa-solid fa-xmark m-1 text-danger' }),
    },
    OpenIndicator: {
        render: () => h('i', { class: 'fa-solid fa-chevron-down' }),
    },
});
app.component('vSelect', vSelect);
/////////////////////////////////////////////vSelect
app.use(DisableAutocomplete);
app.component('BeatLoader', BeatLoader);

// app.use(import('vue-moment'));



app.use(router).use(store).mount('#app')

app.config.globalProperties.$swal = Swal
app.config.globalProperties.$axios = axios
app.config.globalProperties.moment = moment

app.config.globalProperties.moneyFormat = function (num,fixed=2) { 
    num=num/1;
    fixed=((num%1)>0)?fixed:0;
    let val = (num).toFixed(fixed).replace('.', '.')
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

app.config.globalProperties.$routeQuery = function (q) { 
    let query = q
    if (query.page==1) { delete query.page; }
    return Object.fromEntries(Object.entries(query).filter(([_, v]) => (v != null&&v != '')));
}


// axios.interceptors.response.use(
//     function(response) { 
//         if (response.data.message) {
//             Swal.fire({icon: 'error',title: 'Error..',text: response.data.message,}); 
//         }
//         return response;
//     }, 
//     function(error) {
//         if (error.response.status==401) {
//             this.$router.push({name:'login'})
//         }
//         return error;
//     });