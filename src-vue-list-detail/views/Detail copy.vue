<template>
    <div class="item">
        <div class="item-title">xxxxxxxxxxx</div>
        <div class="flex">
         
        </div>
        <div class="item-footer between"> 
        <div class="icon-block"><div class="icon-user"></div></div>
    <div class="icon-block"><div class="icon-home icon-home-blue"></div></div>
    <div class="icon-block"><div class="icon-pc"></div></div>
    <div class="icon-block"><div class="icon-phone"></div></div> 
          <div class="icon-block"><div class="icon-star"></div></div>
          <div class="icon-block"><div class="icon-email"></div></div>
          <div class="icon-block"><div class="icon-heart"></div></div> 
        </div>
    </div>

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
    }
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