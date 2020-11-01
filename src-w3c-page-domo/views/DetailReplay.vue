<template>
    <div class="replay">
    <div class="detail-user flex">
    <div class="detail-user-icon">
         <div class="icon-block"><div class="icon-heart"></div></div> 
    </div>
    <div class="detail-user-info">
        <div class="detail-user-name">
               西丽科技
        </div>
        <div class="detail-user-desc">
               2020-11-11 10:10:10
        </div>
    </div>
</div>

            <span class="replay-user">
    test: 
    </span>
<span class="replay-content">不错不错</span>
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
.replay-user{color:blue}
.replay-content{color:#ccc}
</style>