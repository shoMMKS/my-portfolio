<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  watch: {
    $route() {
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style>
body {
  width: 100%;
  min-width: 320px;
  min-height: 100vh;
  line-height: 1.5;
  color: rgb(33, 33, 33);
  background-color: rgb(250, 250, 250);
}
a {
  color: rgb(117, 117, 117);
  cursor: pointer;
  text-decoration: underline;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}
a:hover {
  color: rgba(107, 107, 107, 0.7);
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}
.link {
  color: rgb(117, 117, 117);
  cursor: pointer;
  text-decoration: underline;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}
.link:hover {
  color: rgba(107, 107, 107, 0.7);
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  opacity: 0.8;
  background: url('assets/background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: right top;
  color: #FFA500;
  position: relative;
  z-index: 0;
}
#app::before{
	content: '';
  opacity: 0.8;
  background: inherit;
	-webkit-filter: blur(5px);
	-moz-filter: blur(5px);
	-o-filter: blur(5px);
	-ms-filter: blur(5px);
	filter: blur(5px);
	position: absolute;
  height: 100%;
	top: -5px;
	left: -5px;
	right: -5px;
	bottom: -5px;
	z-index: -1;
}
</style>
