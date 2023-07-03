<template>
  <div id="detail-page">
    <div class="detail-banner flex">
      <img :src="detail?.url" alt="">
      <div class="city-name">{{ detail?.name }}</div>
      <div class="city-desc">{{ detail?.text }}</div>
    </div>
    <div class="back" @click="router.replace('/')">
      <span>&lt;&lt; 返回首页</span>
    </div>
    <div class="detail-main flex">
      <div class="detail-nav flex-column">
        <a class="nav-item" href="#history">历史起源</a>
        <a class="nav-item" href="#scenic">景点名胜</a>
      </div>
      <div class="detail-con">
        <h1 id="history">历史起源</h1>
        <div v-html="detail?.history"></div>
        <h1 id="scenic">景点名胜</h1>
        <div v-html="detail?.scenic"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, getCurrentInstance } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import mockData from '../assets/mock';

const { proxy }: any = getCurrentInstance();
const router = useRouter();
const route = useRoute();
const mock = ref(mockData);
const detail = ref<{ url: string, name: string, text: string, history: string, scenic: string } | null>(null);

onMounted(() => {
  if (!route.query.name) {
    proxy.$message.error('未找到城市信息');
    router.replace('/')
  } else {
    if (!mock.value.find(v => v.name === route.query.name)) {
      proxy.$message.error('当前城市信息未收录');
      router.replace('/')
    } else {
      detail.value = mock.value.find(v => v.name === route.query.name)!
    }
  }
})
</script>

<style lang="less" scoped>
#detail-page {
  overflow-y: auto;

  .detail-banner {
    width: 100%;
    height: 50vh;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;

    &>img {
      width: 100%;
    }

    .city-name {
      position: absolute;
      color: white;
      font-size: 60px;
      top: 50px;
      width: 1200px;
      text-align: left;
      z-index: 3;
      left: calc(50% - 600px);
    }

    .city-desc {
      position: absolute;
      top: 180px;
      width: 750px;
      z-index: 3;
      left: calc(50% - 600px);
      color: white;
      font-size: 20px;
      line-height: 1.5;
      text-indent: 2em;
    }
  }

  .back {
    width: 1200px;
    margin: 0 auto;
    height: 30px;
    line-height: 30px;
    
    & > span {
      cursor: pointer;
      color: var(--el-color-primary);
    }
  }

  .detail-main {
    width: 1200px;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 30px 0;
    align-items: flex-start;

    .detail-nav {
      height: auto;
      position: sticky;
      top: 30px;
      left: 0px;
      width: 200px;
      margin-right: 30px;
      background-color: rgb(179, 216, 255);

      .nav-item {
        font-size: 18px;
        width: 100%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        color: #333;
        box-sizing: border-box;
        border-bottom: 1px solid #ddd;
        cursor: pointer;
      }

    }

    .detail-con {
      flex: 1;

      &>h1 {
        font-size: 30px;
        letter-spacing: 2px;
        font-weight: bold;
        margin-bottom: 10px;
      }

      &>div {
        margin-bottom: 40px;

        :deep(p) {
          margin-bottom: 10px;
          text-indent: 2em;
          font-size: 1em;
          color: #333;
          line-height: 2;
        }

        :deep(h2) {
          font-size: 24px;
          letter-spacing: 2px;
          font-weight: bold;
          margin-bottom: 10px;
        }
      }
    }
  }
}
</style>