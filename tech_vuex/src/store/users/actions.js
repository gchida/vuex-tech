import * as types from './mutationType';

export default {
  editUser({ commit }, value){
    commit(types.editUser, value.name)
  },
  addUser({ commit }, value) {
    commit(types.createUser, value);
  }
}
