<template>
  <header class="header-fake">
    <div class="header-content">
      <span class="icon-wrapper" @click="handleClick('/')">
        HOME
      </span>
      <span class="icon-wrapper" @click="handleClick('/about')">
        ABOUT
      </span>
      <span class="icon-wrapper" @click="handleClick('/works')">
        WORKS
      </span>
      <span class="icon-wrapper" @click="handleClick('/skills')">
        SKILLS
      </span>
      <span class="icon-wrapper2" @click="togleMenu">
        <i class="material-icons icon">menu</i>
        <span class="icon-label">MENU</span>
      </span>
    </div>
    <app-menu :open="menuOpen" :items="menuItems" :on-close="handleClose" />
  </header>
</template>

<script>
import AppMenu from '../AppMenu'
export default {
  data: () => {
    return {
      menuItems: [
        {
          id: 1,
          text: 'Home',
          to: '/',
          selected: false
        },
        {
          id: 2,
          text: 'About',
          to: '/about',
          selected: false
        },
        {
          id: 3,
          text: 'Works',
          to: '/works',
          selected: false
        },
        {
          id: 4,
          text: 'Skills',
          to: '/skills',
          selected: false
        }
      ],
      menuOpen: false
    }
  },
  methods: {
    handleClick(path) {
      this.$router.push(path)
    },
    togleMenu() {
      this.menuOpen = !this.menuOpen
    },
    handleClose() {
      this.menuOpen = false
    }
  },
  watch: {
    $route() {
      this.menuOpen = false
    }
  },
  components: {
    AppMenu
  }
}
</script>

<style scoped>
.header-fake {
  width: 100%;
  height: 88px;
}
.header-content {
  display: flex;
  position: fixed;
  top: 0;
  left: auto;
  right: 0;
  background-color: #FFF;
  width: 100%;
  height: 88px;
  justify-content: center;
  z-index: 100;
}
.icon-wrapper {
  display: flex;
  margin: 24px;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  z-index: 100;
}
.icon-wrapper2 {
  display: none;
  margin: 24px;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  z-index: 100;
}
.icon {
  font-size: 32px;
  color: rgb(117, 117, 117);
}
.icon-label {
  font-size: 8px;
  color: rgb(117, 117, 117);
}
@media screen and (max-width: 480px) {
  .header-fake {
    height: 72px;
  }
  .header-content {
    height: 72px;
  }
  .icon {
    font-size: 24px;
  }
  .icon-wrapper {
    margin: 16px;
  }
}
</style>