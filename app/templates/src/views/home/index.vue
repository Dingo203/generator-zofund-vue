<!-- home -->
<template>
  <div class="index-container">
    <div class="warpper">
      <h1 class="demo-home__title"><span> Vue Mobile脚手架特性</span></h1>
      <h2 class="demo-home__desc">
        A vue h5 template with Vant UI
      </h2>
    </div>
    <van-cell icon="success" v-for="item in list" :key="item" :title="item" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        '配置多环境变量',
        'VantUI 组件按需加载',
        'Less 全局样式',
        'Vuex 状态管理',
        'Axios',
        'Vue-router',
        '配置 alias 别名',
        '配置 打包分析',
        'splitChunks 单独打包第三方模块',
        'Eslint+Pettier 统一开发规范'
      ]
    }
  },

  computed: {},

  mounted() { },

  methods: {}
}
</script>
<style lang="less" scoped>
.index-container {
  .warpper {
    padding: 12px;
    background: #fff;
    .demo-home__title {
      margin: 0 0 6px;
      font-size: 32px;
      .demo-home__title,
      .demo-home__title span {
        display: inline-block;
        vertical-align: middle;
      }
      span {
        margin-left: 16px;
        font-weight: 500;
      }
    }
    .demo-home__desc {
      margin: 0 0 20px;
      color: rgba(69, 90, 100, 0.6);
      font-size: 14px;
    }
  }
}
</style>
