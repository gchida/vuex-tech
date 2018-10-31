import Vue from 'vue';
import Vuex from 'vuex';
import users from './users';

Vue.use(Vuex);

// ストアを作成する
const store = new Vuex.Store({

  // モジュールを分割することによって管理しやすくします。
  modules: {
    users,
  }
});

export default store;
