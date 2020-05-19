<template>
  <div id="word_detail">
    <div>
      <div class="box float">
        <div class="left">
          <div class="word">
            <div class="zi">{{ word.word }}</div>
          </div>
        </div>
        <div class="right">
          <div class="py">{{ word.pinyin }}</div>
        </div>
      </div>

      <div>
        <span class="label">旧体</span>
        {{ word.oldword }}
      </div>
      <br/>
      <div>
        <span class="label">偏旁</span>
        {{ word.radicals }}
      </div>
      <br/>
      <div>
        <span class="label">笔画</span>
        {{ word.strokes }}
      </div>
      <br/>
      <div class="link">
        <span class="label">相关</span>
        <a href="javascript:void(0);">古诗</a>
        <a href="javascript:void(0);">词语</a>
        <a href="javascript:void(0);">成语</a>
        <a href="javascript:void(0);">歇后语</a>
      </div>
      <br/>
      <div class="float">
        <div class="left">
          <span class="label">释义</span>
        </div>
        <div class="right" v-html="word.explanation" style="white-space: pre-wrap;"></div>
      </div>
      <br/>
      <div class="float">
        <div class="left">
          <span class="label">更多</span>
        </div>
        <div class="right" v-html="word.more" style="white-space: pre-wrap;"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import Axios from "axios";

  export default {
    name: "wordDetail",
    data() {
      return {
        api: process.env.VUE_APP_BASE_API + '/word/detail?word=',
        word: []
      };
    },
    created: function () {
      var api = this.api + this.$route.params.word;
      Axios.get(api)
        .then(res => {
          var r = res.data;
          if (r.code == 100000) {
            this.word = r.data;
          } else {
            alert(res.data.message);
          }
        })
        .catch(error => {
          console.log("Error", error.message);
        });
    }
  };
</script>

<style scoped>
  .word_detail {
    margin-top: 10rem;
  }

  .box {
    margin-top: 10rem;
    min-height: 15rem;
  }

  .word {
    width: 10rem;
    text-align: center;
    color: #000;
  }

  .zi {
    font-size: 10rem;
    border: 1px solid #999;
    border-radius: 4%;
  }

  .py {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 10rem;
    color: #fff;
    margin: 0 10rem;
    background: linear-gradient(to right, #000, #999);
    -webkit-background-clip: text;
    color: transparent;
  }

  .link a {
    margin-right: 2rem;
  }
</style>
