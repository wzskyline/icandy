<template>
  <div class="weui-article">
    <h1>详细页面</h1>
    <ul class="advantage">
       ID ={{ this.pageItem.id }} , Name = {{ this.pageItem.name }}  
       <input v-model="pageItem.id"/>
       <br/>
       <textarea v-model="pageItem.name"></textarea>
       <button @click.once="post"> submit</button>
    </ul>
  </div>
</template>
<script>
`
vue 的知识点很多 这些只是基础中的基础
@click.once  vue 修饰符 很多

`
export default {
  props: {
    item: {
      id: Number, 
      name:String
    }
  },
 data() {
    return {
      pageItem:{}
    };
  },
  created() {  
    console.log(this.props);// 子有当 某页面是 引用了 <Detail porpos={ item } /> 这种类似的才是父子关系
    console.log(this.$route.params); // 跳转间 页面的关系是平级的
    this.pageItem = this.$route.params
  },
  computed: {
 
  },
  methods: {
    post(){
      var _this = this;// 方法里面的函数指针 需要注意这个
      fetch('http://www.baidu.com').then(res=>{
        console.log('res',res)
        return res.text()
      }).then(data=>{
        _this.pageItem.name = 'get baidu ok';
        console.log('百度首页的源码',data) 
      })
    }
  }
}
</script>
<style lang="less" scoped>
 
</style>
