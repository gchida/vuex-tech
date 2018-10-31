<template>
  <div id="app">

    <div v-for="(user, index) in users.data"
       :key="index">
      <div class="user_list">
        <p>{{ user.id }}</p>
        <p>{{ user.name }}</p>
        <p>{{ user.gender }}</p>
      </div>
    </div>
    <form @submit.prevent="handleSubmit" class="form">
      <div class="name_change">1番目の名前を変更</div>
      <input class="inputform" v-model.trim="users.data[0].name" />
      <input type="submit">
    </form>

    <div>ユーザを追加</div>
    <form @submit.prevent="addUser(form)">
      ID: <input type="text" v-model="form.id">
      名前: <input type="text" v-model="form.name">
      性別: <input type="text" v-model="form.gender">
      <input type="submit">
    </form>
  </div>
</template>

<script>
import User from './components/Users.vue'
import { mapActions, mapState, mapGetters } from 'vuex';
import cloneDeep from "lodash/cloneDeep";

export default {
  name: 'app',
  components: {
    User
  },
  data () {
    return {
      users: [],
      form: {
        id: '',
        name: '',
        gender: ''
      },
      data: [],
    };
  },
  computed: {
     ...mapGetters("users", ["getUsers"])
  },
  created () {
    this.users = cloneDeep(this.getUsers);
  },
  updated () {
    this.$nextTick(function () {
      this.users = this.getUsers;
    })
  },
  methods: {
    ...mapActions("users", ["editUser"]),
    ...mapActions("users", ["addUser"]),
    handleSubmit() {
      this.editUser(this.users);
    },
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#app .form {
  padding: 64px 0 100px;
}

#app .inputform {
  width: 300px;
}

#app .user_list p {
  display: inline-block;
  padding: 0 16px;
}

</style>
