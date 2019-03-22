<template>
  <div class="modal-root" v-if="open">
    <div class="modal-overlay" @click="onClose" />
    <div class="modal-wrapper" :style="wrapperStyle">
      <div class="modal-close-button" @click="onClose">
        <i class="material-icons modal-close-button-icon">close</i>
      </div>
      <div class="modal-content">
        <div class="modal-title" v-html="title"></div>
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: () => ''
    },
    open: {
      type: Boolean,
      default: () => false
    },
    onClose: {
      type: Function,
      default: () => {}
    },
    wrapperStyle: {
      type: String,
      default: () => ''
    }
  }
}
</script>

<style scoped>
.modal-root {
  display: flex;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  z-index: 101;
}
.modal-overlay {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 100;
}
.modal-wrapper {
  width: 280px;
  height: 210px;
  min-width: 280px;
  min-height: 210px;
  background-color: rgb(250, 250, 250);
  color: #000;
  border-radius: 5px;
  z-index: 101;
}
.modal-close-button {
  float: right;
  margin: 8px;
  cursor: pointer;
}
.modal-title {
  margin: 16px;
  font-size: 20px;
}
.modal-close-button-icon {
  font-size: 32px;
  color: rgb(117, 117, 117);
}
.modal-content {
  margin: 16px;
}
</style>