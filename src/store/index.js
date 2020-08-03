import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import common from './modules/common'
import page from './modules/page'

import getters from './getters'

Vue.use(Vuex)

const index = new Vuex.Store({
  modules: {
    user,
    common,
    page
  },
  getters
})

export default index
