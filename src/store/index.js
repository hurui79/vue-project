/**
 * Created by Thierry on 2017/5/16.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import alert from './modules/alert'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  modules: {
    alert
  }
})
