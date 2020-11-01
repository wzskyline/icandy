<template>
   <div class="page">  
     <div class="weui-tab">
                <div class="weui-navbar">
                    <div  :class="['weui-navbar__item',{ 'weui-bar__item_on':tab==1 }]" @click="changeTab(1)">
                        <span class="weui-navbar__item_title">推荐</span>
                    </div>
                    <div  :class="['weui-navbar__item',{ 'weui-bar__item_on':tab==2 }]" @click="changeTab(2)">
                        <span class="weui-navbar__item_title">学院</span>
                    </div>
                    <div  :class="['weui-navbar__item',{ 'weui-bar__item_on':tab==3 }]" @click="changeTab(3)">
                        <span class="weui-navbar__item_title">读书社</span>
                    </div>
                    <div  :class="['weui-navbar__item',{ 'weui-bar__item_on':tab==4 }]" @click="changeTab(4)">
                        <span class="weui-navbar__item_title">学习</span>
                    </div>
                </div> 
            </div>
            <List/>
    </div>
   
</template>

<script>
import { mapState, mapActions } from 'vuex';
import List from './List2'
export default {
  components: { List },
  data() {
    return {  tab: 1,};
  },
  created() {
    window.HWH5.navTitle({ title: '发现' });
    console.log(this.list)
    this.getList()
  },
  computed: {
    ...mapState(['deviceInfo','list','detail',])
  },
  methods: {
    ...mapActions(['getList']),
    changeTab(i){ this.tab = i},
  }
};
</script>

<style lang="less" scoped>
 
</style>
