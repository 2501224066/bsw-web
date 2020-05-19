<template>
  <div id="page">
    <a href="javascript:void(0);" v-on:click="first">始</a>
    <a href="javascript:void(0);" v-on:click="up">前</a>
    <span class="current">{{ pageData.current_page }}</span>
    <a href="javascript:void(0);" v-on:click="down">后</a>
    <a href="javascript:void(0);" v-on:click="last">末</a>
  </div>
</template>

<script>
export default {
  name: "page",
  props: ["pageData"],
  methods: {
    first: function() {
      if (this.pageData.current_page != 1) {
        this.$emit("brush", 1);
      }
    },
    up: function() {
      if (this.pageData.current_page > 1) {
        this.$emit("brush", this.pageData.current_page - 1);
      }
    },
    down: function() {
      if (this.pageData.current_page < this.pageData.last_page) {
        this.$emit("brush", this.pageData.current_page + 1);
      }
    },
    last: function() {
      if (this.pageData.current_page != this.pageData.last_page) {
        this.$emit("brush", this.pageData.last_page);
      }
    }
  }
};
</script>

<style scoped>
#page {
  text-align: center;
  margin-top: 4rem;
  font-size: 1rem;
}
#page a {
  margin: 0 0.4rem;
  color: #666;
}
#page a:hover {
  color: #000;
}
.current {
  display: inline-block;
  color: #000;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0 0.5rem;
}
</style>
