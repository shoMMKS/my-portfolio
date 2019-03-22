<template>
  <div class="base-style">
    <app-bar />
    <router-view class="content" />
    <app-footer />
  </div>
</template>

<script>
import AppBar from '../components/AppBar'
import AppFooter from '../components/AppFooter'

export default {
  components: {
    AppBar,
    AppFooter
  }
}
</script>

  <style scoped>
    .base-style {
      position: relative;
    font-family: 'Noto Sans JP', sans-serif;
    width: 100%;
    min-width: 300px;
    /* footerを常に最下部に表示するためfooterのheight分細工する */
    min-height: calc(100vh - 32px);
    padding-bottom: 32px;
  }
</style>