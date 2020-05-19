<template>
  <div id="header">
    <div class="logo">
      <a href="javascript:void(0);">
        <router-link to="/">
          <img :src="logo" />
        </router-link>
      </a>
    </div>
    <div class="menu">
      <span>
        <a href="javascript:void(0);" :class="path.search('/poetry/list') != -1 ? 'active':''">
          <router-link to="/poetry/list">古诗</router-link>
        </a>
      </span>
      <span>
        <a href="javascript:void(0);" :class="path.search('/idiom/list') != -1 ?  'active':''">
          <router-link to="/idiom/list">成语</router-link>
        </a>
      </span>
      <span>
        <a href="javascript:void(0);" :class="path.search('/xiehouyu/list') != -1 ? 'active':''">
          <router-link to="/xiehouyu/list">歇后语</router-link>
        </a>
      </span>
      <span>
        <a href="javascript:void(0);" :class="path.search('/ci/list') != -1 ? 'active':''">
          <router-link to="/ci/list">词语</router-link>
        </a>
      </span>
    </div>
  </div>
</template>

<script>
import Logo from "../../assets/logo.jpg";
export default {
  name: "vheader",
  data() {
    return {
      logo: Logo,
      path: ""
    };
  },
  watch: {
    $route(to, from) {
      this.path = to.path;
    }
  }
};
</script>

<style scoped>
#header {
  max-width: 1000px;
  margin: 1rem auto 0 auto;
  font-size: 1.3rem;
  height: 3rem;
  overflow: hidden;
}
.logo {
  height: 100%;
  float: left;
}
.logo img {
  height: 100%;
}
.menu {
  float: right;
  text-align: right;
}
.menu > span {
  margin: 0 0.5rem;
  line-height: 3rem;
}
.active > a {
  color: #000;
}
</style>
