<template>
<mu-paper style="height:50vh" :z-depth="1" class="demo-loadmore-wrap"> 
  <mu-container ref="container" class="demo-loadmore-content">
    <mu-load-more   :refreshing="refreshing" :loading="loading" @load="load">
      <mu-list >
        <template v-for="i in num"  >
          <mu-list-item > 
                  <div class="" @click="toDetail(i)" >
                       <div class="item-title">xxxxxxxxxxx腾讯华为，小黄车</div>
                       <div class="flex">
                        <div class="item-body"> xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx </div>
                        <div class="item-img border">  </div>
                      </div>
                  </div>
          </mu-list-item>
          <mu-divider />
        </template>
      </mu-list>
    </mu-load-more>
  </mu-container>
</mu-paper>
</template>
<script>
import { mapState, mapActions } from 'vuex';
export default {
  data () {
    return {
      num: 10, refreshing: false, loading: false, 
    }
  },
   computed: {
    ...mapState(['list','detail',])
  },
  methods: {
    ...mapActions(['getList','setNavShow']), 
    load () {
      this.loading = true;
      setTimeout(() => { this.loading = false; this.num += 10; }, 2000)
    },
    toDetail(e){  
       this.setNavShow(false)
       this.$router.push({name: 'Detail',params:e});
    },
  }
};
</script>

<style lang="less">

 
</style>