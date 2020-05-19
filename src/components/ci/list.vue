<template>
  <div id="ci_list">
    <ul>
      <li v-for="(item,i) in list" :key="i">
        <a href="javascript:void(0);" v-on:click="ci" :data-id="item.id">{{ item.ci }}</a>
      </li>
    </ul>
    <page v-bind:pageData="pageData" @brush="brush"></page>
  </div>
</template>

<script>
  import Axios from "axios";
  import Page from "../layout/page";

  export default {
    name: "ciList",
    data() {
      return {
        api: process.env.VUE_APP_BASE_API + "/ci/list?page=",
        list: [],
        page: Page,
        pageData: {}
      };
    },
    components: {Page},
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
      ci(e) {
        this.$router.push({
          path: "/ci/detail/" + e.srcElement.dataset.id
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
