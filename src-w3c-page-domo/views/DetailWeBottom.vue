<template>
    <div class="bottom_nav">
          <div class="flex webottom">
              <input 
              v-model="str"
              @keyup.enter="onSubmit"
              class="webottom-input radius" 
              type="text" placeholder="评论..." />
           
              <mu-badge content="12" circle color="red"  class="demo-icon-badge">
                  <div class="icon-block"><div class="icon-star"></div></div> 
               </mu-badge>
                <mu-badge content="6688888" circle color="red"  class="demo-icon-badge">
                  <div class="icon-block"><div class="icon-heart"></div></div> 
               </mu-badge>
         </div> 
    </div> 
</template>
<script>
import { mapState, mapActions } from 'vuex';
export default {
  data () {
    return {
      str:'', 
    }
  },
   computed: {
    ...mapState(['deviceInfo','list','detail',])
  },
  methods: {
    ...mapActions(['getList']), 
    onSubmit () {
       console.log(this.str)
    }
  }
};
</script>

<style lang="less"> 
.webottom-input{
  border:1px soild #CCC 
}
.webottom{ background-color: #CCC;padding:20px 10px 20px 20px}
</style>