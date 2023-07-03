<template>
  <div id="home-page">
    <div class="banner">
      <el-carousel height="50vh">
        <el-carousel-item v-for="(item, index) in banners" :key="index">
          <div class="banner-box flex">
            <img :src="item.url" alt="">
            <div class="title">{{ item.name }}</div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="city-list-title">
      城市简介
    </div>
    <a ></a>
    <div class="city-list flex">
      <div class="city-item flex-column" v-for="(item, index) in banners" :key="index" @click="toDetail(item)">
        <div class="city-banner">
          <img :src="item.url" alt="">
        </div>
        <div class="city-name">
          {{ item.name }}
        </div>
        <div class="city-desc">
          {{ item.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import mockData from '../assets/mock';

const router = useRouter();

const banners = ref<{ url: string, name: string, text: string }[]>(mockData);

const toDetail = function (city: { url: string, name: string, text: string }) {
  router.push({ path: '/detail', query: { name: city.name } });
}
</script>

<style lang="less" scoped>
#home-page {
  width: 100%;
  height: 100%;
  overflow-y: auto;

  .banner {
    height: 50vh;

    :deep(.banner-box) {
      position: relative;
      width: 100%;
      height: 50vh;
      justify-content: center;
      align-items: center;
      overflow: hidden;

      &>img {
        width: 100%;
      }

      .title {
        position: absolute;
        left: 1%;
        top: 5%;
        font-size: 80px;
        color: white;
      }
    }
  }

  .city-list-title {
    font-size: 40px;
    color: #333;
    letter-spacing: 2px;
    margin: 30px 0;
    text-align: center;
  }

  .city-list {
    width: 1200px;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    .city-item {
      width: 30%;
      justify-content: flex-start;
      align-items: center;
      position: relative;
      box-sizing: border-box;
      height: 500px;
      border: 1px  solid #ddd;
      border-radius: 5px;
      margin: 20px 0;
      cursor: pointer;
      transition: all .2s;
      background-color: white;

      &:hover {
        transform: scale(1.2);
        z-index: 3;
        box-shadow:  0 2px 12px 0 rgba(0, 0, 0, 0.1);
      }

      .city-banner {
        width: 100%;
        height: 200px;
        overflow: hidden;

        & > img {
          width: 100%;
          height: 100%;
        }
      }

      .city-name {
        font-size: 30px;
        color: var(--el-color-primary);
        margin: 15px 0;
      }

      .city-desc {
        font-size: 16px;
        flex: 1;
        width: 100%;
        text-indent: 2em;
        box-sizing: border-box;
        padding: 15px;
        overflow: hidden;
        line-height: 1.5;
        color: #aaa;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>