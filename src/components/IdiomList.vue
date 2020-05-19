<template>
  <div id="idiom_list">
    <ul>
      <li v-for="(item,i) in list" :key="i">
        <a href="javascript:void(0);" v-on:click="idiom" :data-id="item.id">{{ item.idiom }}</a>
      </li>
    </ul>
    <page v-bind:pageData="pageData" @brush="brush"></page>
  </div>
</template>

<script>
import Axios from "axios";
import Page from "./layout/page";
export default {
  name: "idiomList",
  data() {
    return {
      api: "http://127.0.0.1:9093/api/idiom/list?page=",
      list: [],
      page: Page,
      pageData: {}
    };
  },
  components: { Page },
  created() {
    this.getData(this.api + 1);
  },
  methods: {
    getData(api) {
      Axios.get(api)
        .then(res => {
          var r = res.data;
          if (r.code == 100000) {
            this.list = r.data.list.data;
            this.pageData = {
              current_page: r.data.list.current_page,
              last_page: r.data.list.last_page
            };
          } else {
            alert(res.data.message);
          }
        })
        .catch(error => {
          console.log("Error", error.message);
        });
    },
    idiom(e) {
      this.$router.push({
        path: "/idiom/detail/" + e.srcElement.dataset.id
      });
    },
    brush(page) {
      this.getData(this.api + page);
    }
  }
};
</script>

<style scoped>
#ci_list {
  margin-top: 4rem;
}
li {
  margin-top: 1rem;
}
</style>
