<template>
  <div id="app"> 
      <router-view></router-view> 
      <div  :class="['weui-tab bottom_nav',{ 'none':!navShow }]" > 
        <div class="weui-tabbar"> 
            <a href="javascript:;"  :class="['weui-tabbar__item',{ 'weui-bar__item_on':nav==1 }]" @click="goPage(1,'Home1')">
                <i class="icon-tab icon-tab-email"></i>
                <p class="weui-tabbar__label">社区</p>
            </a>
             <a href="javascript:;"  :class="['weui-tabbar__item',{ 'weui-bar__item_on':nav==2 }]" @click="goPage(2,'Home2')">
                <span style="display: inline-block; position:relative;">
                    <i class="icon-tab icon-tab-contact"></i>
                </span>
                <p class="weui-tabbar__label">发现</p>
            </a>
            <a href="javascript:;"  :class="['weui-tabbar__item',{ 'weui-bar__item_on':nav==3 }]" @click="goPage(3,'Home3')">
                <i class="icon-tab icon-tab-business"></i>
                <p class="weui-tabbar__label">行业</p>
            </a> 
        </div>
    </div>
  </div>
  
</template>

<script>
import './app.css';
import { mapState, mapActions } from 'vuex';
export default {
  name: 'app',
  data() {
    return {};
  },
  computed: {
    ...mapState(['nav','navShow'])
  },
  methods: {
    ...mapActions(['setNav','setNavShow']),
    goPage(i,name){
      this.setNav(i)
      this.$router.push({name,params:i});
      //this.setNavShow(false)
    },
  },
  created() {
    
    window.HWH5.navTitle({ title: '战马社区' });
    window.HWH5.addEventListener({ type: 'back', func: () => { 
      console.log('back', this.$router.history.current.name)
      if('Detail' === this.$router.history.current.name){
        this.setNavShow(true)
      }
      return true; 
    } })
  },

};
</script>
<style>
.bottom_nav{ position:absolute;bottom: 0;width:100%;z-index:-999}
</style>
