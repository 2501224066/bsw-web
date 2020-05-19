<template>
  <div id="idiom_detail">
    <div class="idiom">
      <h1>
        <span class="word" v-for="(item, i) in detail.idiom" :key="i" v-on:click="word">{{ item }}</span>
      </h1>
      <h4>
        <span class="word" v-for="(item, i) in detail.pinyin" :key="i" v-on:click="word">{{ item }}</span>
      </h4>
      <p>
        <span class="word" v-for="(item, i) in detail.content" :key="i" v-on:click="word">
          <span v-if="item == '。'">
            {{ item }}
            <br/>
          </span>
          <span v-else>{{ item }}</span>
        </span>
      </p>
      <div class="remark">
        <div class="float">
          <div class="left">
            <span class="label">出处</span>
          </div>
          <div class="right">
            <span
              class="word"
              v-for="(item, i) in detail.derivation"
              :key="i"
              v-on:click="word"
              style="white-space: pre-wrap;"
            >{{ item }}</span>
          </div>
        </div>
        <br/>
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
        <br/>
        <div class="float">
          <div class="left">
            <span class="label">补充</span>
          </div>
          <div class="right">
            <span
              class="word"
              v-for="(item, i) in detail.example"
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
    name: "idiomDetail",
    data() {
      return {
        api: process.env.VUE_APP_BASE_API + '/idiom/detail/',
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
  .idiom {
    margin-top: 10rem;
  }

  .remark {
    margin-top: 10rem;
    font-size: 1rem;
  }

  .word:hover {
    color: #8a63ad;
  }
</style>
