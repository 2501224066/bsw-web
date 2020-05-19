<template>
  <div id="app">
    <v-header></v-header>
    <div id="center">
      <router-view />
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import vheader from "./components/layout/header";
import vfooter from "./components/layout/footer";
export default {
  name: "App",
  components: {
    "v-header": vheader,
    "v-footer": vfooter
  }
};
</script>

<style>
@import "./assets/font/font.css";
body {
  margin: 0;
  padding: 0;
  background: #ebebeb;
  color: #575757;
}
#app {
  font-family: fzjlx, kr, fzjlc;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#center {
  max-width: 1000px;
  margin: auto;
}
p {
  font-size: 1.5rem;
}
a {
  text-decoration: none;
  color: #8a63ad;
}
a:hover {
  color: #000;
  text-decoration: underline;
}
br {
  margin-top: 0.4rem;
}
/** 标签 */
.label {
  background: #000;
  color: #fff;
  padding: 0 0.2rem;
  margin-right: 1rem;
}
/** 浮动 */
.float {
  overflow: hidden;
}
.left {
  float: left;
  max-width: 20%;
}
.right {
  float: left;
  max-width: 80%;
}
</style>
