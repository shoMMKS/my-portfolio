<template>
  <transition name="fade">
    <div class="menu" v-if="open" @click="onClose">
      <span class="icon-wrapper" @click="onClose">
        <i class="material-icons icon">close</i>
        <span class="icon-label">CLOSE</span>
      </span>
      <div class="menu-item-wrapper">
        <div class="menu-item" v-for="item in items" @click="goTo(item.to)" :key="item.id">
          <span>{{ item.text }}</span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [
        {
          id: 0,
          text: 'item',
          to: '',
          selected: false
        }
      ]
    },
    open: {
      type: Boolean,
      default: () => false
    },
    onClose: {
      type: Function,
      default: () => {}
    }
  },
  methods: {
    goTo(to) {
      this.$router.push(to)
    }
  }
}
</script>

<style scoped>
.menu {
  position: fixed;
  top: 0px;
  bottom: 0px;
  right: 0px;
  left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: rgb(250, 250, 250);
  z-index: 101;
}
.icon-wrapper {
  position: fixed;
  top: 24px;
  right: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.icon {
  font-size: 32px;
  color: rgb(117, 117, 117);
}
.icon-label {
  font-size: 8px;
  color: rgb(117, 117, 117);
}
.menu-item-wrapper {
  width: 100%;
  justify-content: center;
  align-items: center;
}
.menu-item {
  display: flex;
  height: 48px;
  font-size: 24px;
  justify-content: center;
  align-items: center;
  color: rgb(117, 117, 117);
  cursor: pointer;
}
.menu-item span:after {
  width: 0;
  height: 2px;
  display: block;
  content: '';
  background: rgb(117, 117, 117);
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
@media screen and (max-width: 480px) {
  .icon {
    font-size: 24px;
  }
  .icon-wrapper {
    top: 16px;
    right: 16px;
  }
}
@media screen and (min-width: 1024px) {
  .menu-item:hover span:after {
    width: 100%;
  }
}
</style>