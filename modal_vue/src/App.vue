<template>
  <div id="app">
    <button class="modal_open_btn" name="button" @click="modal_toggle">ボタン</button>
    <Modal v-if="showModal" @close="modal_toggle"></Modal>
  </div>
</template>

<script>
  import Modal from './components/Modal.vue'

  export default {
    name: 'app',
    data() {
      return {
        showModal: false
      }
    },
    methods: {
      modal_toggle: function () {
        this.showModal = !this.showModal
      }
    },
    components: {
      Modal
    }
  }
</script>

<style>
#app {
  text-align: center;
  padding-top: 32px;
}

.modal_open_btn{
  width: 200px;
  height: 32px;
  background-color: #fff;
  border: 1px solid #555;
  border-radius: 3px;
}
</style>
