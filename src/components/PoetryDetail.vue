<template>
  <div id="poetry_detail">
    <div class="peotry">
      <h1>
        <span class="word" v-for="(item, i) in detail.title" :key="i" v-on:click="word">{{ item }}</span>
      </h1>
      <h4>
        【
        <span
          class="word"
          v-for="(item, i) in detail.dynasty"
          :key="i"
          v-on:click="word"
        >{{ item }}</span>
        】
        <span
          class="word"
          v-for="(item, i) in detail.author"
          :key="i"
          v-on:click="word"
        >{{ item }}</span>
      </h4>
      <p>
        <span class="word" v-for="(item, i) in detail.content" :key="i" v-on:click="word">
          <span v-if="item == '。'">
            {{ item }}
            <br />
          </span>
          <span v-else>{{ item }}</span>
        </span>
      </p>
      <div class="remark">
        <div class="float">
          <div class="left">
            <span class="label">译文</span>
          </div>
          <div class="right">
            <span
              class="word"
              v-for="(item, i) in detail.translate"
              :key="i"
              v-on:click="word"
              style="white-space: pre-wrap;"
            >{{ item }}</span>
          </div>
        </div>
        <br />
        <div class="float">
          <div class="left">
            <span class="label">注释</span>
          </div>
          <div class="right">
            <span
              class="word"
              v-for="(item, i) in detail.notes"
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
  name: "poetryDetail",
  data() {
    return {
      detail: []
    };
  },
  created: function() {
    var api =
      "http://127.0.0.1:9093/api/poetry/detail/" + this.$route.params.id;
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
      this.$router.push({ path: "/word/detail/" + e.currentTarget.innerText });
    }
  }
};
</script>

<style scoped>
.peotry {
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
