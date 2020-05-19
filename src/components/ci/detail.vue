<template>
  <div id="ci_detail">
    <div class="ci">
      <h1>
        <span class="word" v-for="(item, i) in detail.ci" :key="i" v-on:click="word">{{ item }}</span>
      </h1>
      <div class="remark">
        <div class="float">
          <div class="left">
            <span class="label">注释</span>
          </div>
          <div class="right">
            <span
              class="word"
              v-for="(item, i) in detail.explanation"
              :key="i"
              v-on:click="word"
              style="white-space: pre-wrap;"
            >{{ item }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Axios from "axios";

  export default {
    name: "ciDetail",
    data() {
      return {
        api: process.env.VUE_APP_BASE_API + "/ci/detail/",
        detail: []
      };
    },
    created: function () {
      var api = this.api + this.$route.params.id;
      Axios.get(api)
        .then(res => {
          var r = res.data;
          if (r.code == 100000) {
            this.detail = r.data.detail;
          } else {
            alert(res.data.message);
          }
        })
        .catch(error => {
          console.log("Error", error.message);
        });
    },
    methods: {
      word(e) {
        this.$router.push({path: "/word/detail/" + e.currentTarget.innerText});
      }
    }
  };
</script>

<style scoped>
  .ci {
    margin-top: 10rem;
  }

  .remark {
    margin-top: 4rem;
    font-size: 1rem;
  }

  .word:hover {
    color: #8a63ad;
  }
</style>
