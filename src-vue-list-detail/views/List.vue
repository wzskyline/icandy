<template>
<mu-paper :z-depth="1" class="demo-loadmore-wrap"> 
  <mu-container ref="container" class="demo-loadmore-content">
    <mu-load-more   :refreshing="refreshing" :loading="loading" @load="load">
      <mu-list>
        <template v-for="i in num" @click="toDetail(i)">
          <mu-list-item>
            <mu-list-item-title @click="toDetail(i)">   {{i}}</mu-list-item-title>
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
    ...mapState(['deviceInfo','list','detail',])
  },
  methods: {
    ...mapActions(['getList']), 
    load () {
      this.loading = true;
      setTimeout(() => { this.loading = false; this.num += 10; }, 2000)
    },
    toDetail(e){ 
      this.$router.push({name: 'Detail',params:e});
    },
  }
};
</script>

<style lang="less">
.demo-loadmore-wrap {
  width: 100%;
  max-width: 360px;
  height: 420px;
  display: flex;
  flex-direction: column;
  .mu-appbar {
    width: 100%;
  }
}
.demo-loadmore-content {
  flex: 1;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
</style>