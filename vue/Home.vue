<template>
  <div class="App">
     <li v-for="(item,i) in list">
        <router-link :to="{name:'/detail', params:  item }">
           <div :class="{ 'active': i%2==0 }" >  {{ item.name }}  </div>
        </router-link>
    </li>
     <hr/>
     <li v-for="(item,i) in list">
        <div :class="getClass(i)"  @click = "toDetail(item)">  {{ item.name }}  </div>
    </li>
  </div>
</template>

<script>
`
vue 循环 动态加载类名 跳转页面
 router 里面修改
  {
    path: '/detail',
    name: '/detail',
    component: view('/VueTemplateIntro.vue')
  },
   
`
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      list:[]
    };
  },
  created() {
    window.HWH5.navTitle({ title: '列表页面' });
    // ajax fetch 拿数更新 list 
    this.list =[{ id:1,name:'1'},{ id:2,name:'2'},{ id:3,name:'3'}]
  },
  computed: {
    ...mapState(['deviceInfo'])
  },
  methods: {
    ...mapActions(['getDeviceInfo']),
    getClass(index){
      return index%2==0 ? 'active':''
    },
    toDetail(arg){
      // https://www.jianshu.com/p/310d516bf8a9
      this.$router.push({name: '/detail',params:arg});
    },
  }
};
</script>

<style lang="less" scoped>
 .active{color:red}
</style>
