import Vue from "vue"
import Vuex from "vuex"
import office from "./modules/office"

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        office
    }
})
