<template>
   <mu-container>
  <mu-tabs :value.sync="active1" inverse color="secondary" text-color="rgba(0, 0, 0, .54)"  center>
    <mu-tab>TAB ITEM 1</mu-tab>
    <mu-tab>TAB ITEM 2</mu-tab>
    <mu-tab>TAB ITEM 3</mu-tab>
  </mu-tabs>
  <div class="demo-text" v-if="active1 === 0">
 https://muse-ui.org/#/zh-CN/breadcrumbs
  
  </div>
  <div class="demo-text" v-if="active1 === 1">
 https://blog.csdn.net/BaiHuaXiu123/article/details/89602591
<mu-carousel>
  <mu-carousel-item>
    <img src="https://www.baidu.com/img/flexible/logo/pc/result.png"/>
  </mu-carousel-item>
  <mu-carousel-item>
    <img src="https://nutui.jd.com/img/nut.png"/>
  </mu-carousel-item>
  <mu-carousel-item>
    <img src="http://aui.dianm.cc/Public/Image/logo.png"/>
  </mu-carousel-item>
   
</mu-carousel>

  </div>
  <div class="demo-text" v-if="active1 === 2">
    <p>  npm i muse-ui -S
  npm install --save material-design-icons
 
@import 'http://cdn.bootcss.com/material-design-icons/3.0.1/iconfont/material-icons.css';</p>
     
    <mu-icon value="home"></mu-icon>
    <mu-icon value="flight_takeoff" color="red"></mu-icon>
    <mu-icon value="cloud_download" color="orange"></mu-icon>
    <mu-icon value="info" color="blue"></mu-icon>
  </div>
  <mu-bottom-nav>
    <mu-bottom-nav-item title="Recents" icon="restore"></mu-bottom-nav-item>
    <mu-bottom-nav-item title="Favorites" icon="favorite"></mu-bottom-nav-item>
    <mu-bottom-nav-item title="Nearby" icon="location_on"></mu-bottom-nav-item>
  </mu-bottom-nav>
</mu-container>
   
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {  active1: 0,};
  },
  created() {
    window.HWH5.navTitle({ title: 'Hello World!' });
    console.log(this.list)
    this.getList()
  },
  computed: {
    ...mapState(['deviceInfo','list','detail',])
  },
  methods: {
    ...mapActions(['getList'])
  }
};
</script>

<style lang="less" scoped>
 
</style>
