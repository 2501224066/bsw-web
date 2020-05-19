<template>
  <div id="home">
    <div class="bg">
      牙 爻 曰 月 支 止 爪 车 白 甘 瓜
      <span :class="status.c?'bg_color':''">禾</span> 钅 立 龙 矛 皿 母 矢 示 羊 页 衣 羽
      廴 干 艹 屮 彳 巛 川 辶 寸 大 飞 工 弓 廾 广 己 彐 巾 口 马 门 宀 女 犭
      贝 比 灬 长 车 歹 斗 厄 方 风 父 戈 户 火 见 斤 毛 田 玄 疋 业 衤
      山 彡 尸 饣 士 扌 氵 纟 巳 土 囗 言 邑 酉 鱼 豸 走 足 采 齿 非 阜 金 隶
      攵 气 欠 犬
      <span
        :class="status.a?'bg_color':''"
      >日</span> 氏 礻 手 殳 水 瓦 王 韦 文 无 毋 心 穴 用 玉 目 疒 鸟 皮 生 石
      臣 虫 而 耳 缶 艮 虍 臼 老 耒 米 糸 齐 肉 色 舌 糹 行 血 聿 至 舟 竹 自
      辰 赤 豆 谷 龟 角 里 兀 夕 小 忄 幺 弋 尢
      <span
        :class="status.b || status.d?'bg_color':''"
      >夂</span> 子 木 牛 爿 片 攴 卤 麦 身 豕 辛 黾 雨 隹 龠 鹿 麻
    </div>
    <div class="subtitle">
      <div>
        <span @mouseover="enter('a')" @mouseleave="level('a')" v-on:click="word">春</span>
      </div>
      <div>
        <span @mouseover="enter('b')" @mouseleave="level('b')" v-on:click="word">夏</span>
      </div>
      <div>
        <span @mouseover="enter('c')" @mouseleave="level('c')" v-on:click="word">秋</span>
      </div>
      <div>
        <span @mouseover="enter('d')" @mouseleave="level('d')" v-on:click="word">冬</span>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  name: "home",
  data() {
    return {
      status: {
        a: false,
        b: false,
        c: false,
        d: false
      }
    };
  },
  methods: {
    enter(i) {
      this.status[i] = true;
    },
    level(i) {
      this.status[i] = false;
    },
    word: function(e) {
      this.$router.push({ path: "/word/detail/" + e.currentTarget.innerText });
    }
  }
};
</script>

<style scoped>
#home {
  padding: 4rem 0;
  position: relative;
  left: 0;
  top: 0;
  overflow: hidden;
}
.subtitle {
  position: absolute;
  top: 12rem;
  left: 50%;
  margin-left: -5rem;
  font-family: kr;
  font-size: 6rem;
  width: 10rem;
  line-height: 5rem;
  color: #999;
}
.subtitle > div:nth-of-type(1) {
  position: relative;
  top: 0;
  left: 2rem;
}
.subtitle > div:nth-of-type(2) {
  position: relative;
  left: -1rem;
}
.subtitle > div:nth-of-type(3) {
  position: relative;
  left: 2rem;
}
.subtitle > div:nth-of-type(4) {
  position: relative;
  left: 0;
}
.subtitle > div > span {
  padding-top: 1rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
.subtitle > div > span:hover {
  color: #000;
  border: 1px solid #999;
  border-radius: 4%;
}
.bg {
  font-size: 3rem;
  color: #e4e4e4;
}
.bg_color {
  color: #000;
}
</style>
