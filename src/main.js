import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import { library } from "@fortawesome/fontawesome-svg-core";
import { faBriefcaseMedical, faHeadSideMask, faSpinner, faHeadSideVirus, faMedkit, faFileMedical, faProcedures } from "@fortawesome/free-solid-svg-icons";

library.add(faBriefcaseMedical, faHeadSideMask, faSpinner, faHeadSideVirus, faMedkit, faFileMedical, faProcedures);

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const app = createApp(App)
app.use(VueAxios, axios)
app.component("font-awesome-icon", FontAwesomeIcon)
app.mount('#app')
