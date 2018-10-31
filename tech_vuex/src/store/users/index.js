import getters from './getters';
import mutations from './mutations';
import actions from './actions';

export default {
  namespaced: true,

  state: {
    data: [
      {
        'id': 1,
        'name': "樋高 菜未",
        'gender': "女性",
      },
      {
        'id': 2,
        'name': "ひだか なみ",
        'gender': "女",
      },
    ]
 },
  getters,
  mutations,
  actions
}
