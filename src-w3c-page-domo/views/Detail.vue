<template>
  <div class="detail">
   <div class="detail-user flex">
    <div class="detail-user-icon">
       <div class="icon-block"><div class="icon-heart"></div></div> 
    </div>
    <div class="detail-user-info">
        <div class="detail-user-name">
            南山第一
        </div>
        <div class="detail-user-desc">
           2020年，年度发明家
        </div>
    </div>
</div>
    <div class="item">
        <div class="item-title">xxxxxxxxxxx</div>
        <div class="flex">
          <div class="item-summery"> xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx </div>
          <div class="item-img border">  </div>
        </div>
       
    </div>
    <DetailReplay/>
    <DetailWeBottom/>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import DetailReplay from './DetailReplay'
import DetailWeBottom from './DetailWeBottom'
export default {
  components: { DetailReplay,DetailWeBottom },
  data () {
    return {
       
    }
  },
  created(){
   window.HWH5.navTitle({ title: '帖子详情' });
  },
   computed: {
    ...mapState(['detail',])
  },
  methods: {
    ...mapActions(['getList']), 
    load () {
      
    }
  }
};
</script>

<style lang="less">
 .detail-user-icon{
   border:1px soild #FFF;
   border-radius:50%;
   background-color: #CCC;
   width:30px;
   height:30px;
 }
</style>