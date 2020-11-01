<template>
<mu-paper style="height:90vh" :z-depth="1" class="demo-loadmore-wrap"> 
  <mu-container ref="container" class="demo-loadmore-content">
    <mu-load-more   :refreshing="refreshing" :loading="loading" @load="load">
      <mu-list >
        <template v-for="i in num" @click="toDetail(i)">
          <mu-list-item @click="toDetail(i)"> 
                  <div class="">
                       <div class="item-title">xxxxxxxxxxx</div>
                       <div class="flex">
                        <div class="item-body"> xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx </div>
                        <div class="item-img border">  </div>
                      </div>
                      <div class="item-footer between">  
                        <div class="icon-block"><div class="icon-star"></div></div>123
                        <div class="icon-block"><div class="icon-email"></div></div>345
                        <div class="icon-block"><div class="icon-heart"></div></div>66 
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
      //this.setNavShow(false)
      //this.$router.push({name: 'Detail',params:e});
    },
  }
};
</script>

<style lang="less">  

</style>