import * as types from './mutationType';

export default {
  [types.editUser](state, payload){
    state.name = payload
  },
  [types.createUser] (state, payload) {
    state.data.push(payload);
  }
}
