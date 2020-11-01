<template>
 <div class="page">  
  <input  
   class="weui-inputS"
    v-model="str" @keyup.enter="onSubmit"
    style="z-index:999" type="text" placeholder="请输入文本" /> 
<mu-carousel>
  <mu-carousel-item>
    <img src="https://www.baidu.com/img/flexible/logo/pc/result.png"/>
  </mu-carousel-item>
  <mu-carousel-item>
    <img src="https://nutui.jd.com/img/nut.png"/>
  </mu-carousel-item>
  <mu-carousel-item>
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALAAAAAWCAYAAABg8hatAAAAAXNSR0IArs4c6QAAEV5JREFUaAXtm3mU1cWVx2+997qbpVeaXYJg3DBMRgVE9BiRBGLkDxNZFcR4TGQnUUedmYw5mOiMSyAI3SzijBlkkUbnGMMAIotBETUsARI1CLIv3Wy90U13v/dqPrfe+71+79HQ3TRo5hzq9O/Vcm/dql/Vt+69VfVrk5lnf2eNZBgjW7/RWp7761BTLU0INy6wI6j+Ix7jE9m+cYSZ3ARxrmrWTDvGWvkOmSOl482jDZGXO8deWx2UR31Gdt3QTaa8d4cJNqRefTyt59gO1WH5ti8s1cXjzdr6+C/RL+4IBKzIN8RKPwByz/4iKaa56U1q0spI6t+pMlgYezRuSsiZZW8NhmSWymCR/Y2oQQAGvP/De3UL84KbP5Uy6s1UGU0JOTPtt6tqZAsyfGEj+4k7N0XeV1m3/XTb5pRfRpmwtCidaH6d3Hb2dHtP2C/Xi5FlpePMR8n0i51HSeWEw/I4Wu/txrQfABQbAG8/7SCA+yHReQPYWmt6LJTeAMcFOrMhkjr/X16q03nWzo2rF5+OK25cMmjlcmpgWC5+yMqzNzKOA867JZ/sLhlvFnv1bbZUmBKZxNSktJ1rXy76qSn0aBqHfTLGhqW7zycfxJfHpzPy7Bvx+cam24VlxM5Jpiq5HnJzbUhep/xbEpZh2bPs4OKxRhVFvSFgffKRhCJ8RqTXkALrXzLUREvqrZ/A0HORXMOg53iF/lRkf13BJw/xXv+ORtnFIs37urpxvu0yF9czCZOaUH8ddWMALhxlTgGUT5ifW7Ei6o4t8WQDmC6hoHSnzfI2IfljiUdIjq3cklzUmPzp4JmLv+Mc27qsRgpYWNcyTydw+UYC3j97crNm2J7FE2STMSaqFj1KJA5kAOCyKFzRxOnvnpDukLYmsjUsh2rqE4f8gx8PMgcaVvPCc5WNNUuRqs//y4CLso7JjAGYuXmRJ42yX7Moj8a/FG7SMAUmtOXQlivNF5JCnXxm/QGPF4C2DWsmLBMyZ1gFsQCLaeGg3KVpQkmRkSegRXLer5V3SieZT/xG+oifFpICu4sMNhjvaHGqSL9QQE4nsbjs/glyOn4H026WbXuqhoVk5SrAu4e+jCieYHZ7den/P9PfSdn5Mg/r/i91gThwaLQ5lplvdzI4V2pFVPnNRGcAOPe/7WXBau2fSJpIRbIJ0vKQdXU1qW95VvchY6a9BrDfRsfbMVQn/SLbToyT9XV10Ak7z5/MV2wrBiUrtVqOHh1vyj0xVy6zaUf3R1yT9jkSTg/XagYWsy0sj0xSRo4cOjDUVHr1GhP3mGNTvhRpcXI0hvs8ApvVnVTTxwU22/9BIo0xW1ESN8lKZKJ7MdG3AvpPy8abmJl3fq2RQU4AP8yxCwD+KhL6iARkAX7xYKXxdxklY1153A9uxWGynwCuvYB7pAnIoZKxZo3HkjPHZkl065+WKvvAVIVHy5xpR7JgTpROMMtMnOQ2+bZ9ZUiW0O43wcqfaft+fPPjXr1ovBhgD6O/o7Jnih8QP5GMEc+fi5l6BPZJEiI9F9pfdPLL9nCVbOD5srJaDtOxgcl85BX8XojJ9Aqy5tgbM/LtOl7oc3zbuXTsGdrLx7d8Pytf9mTOssM93qbG+JBjbZUc0/6eNjLEk6fmsnC37AvXyE4blJUtq12safekW9klbACVXlokh3Tj5tVtSDzZWh8bkod31Mj+YFCOoBzubUi9i8GT4peVPiu3AYK5Kp/4Oc3HP/i91yig2a/shP6T2EPe1fHJY8YvqzTNe/UAaC+g5Oa0mm6v07JzBeagP7zPU+flzJdsZMFQQcurrPwhCt7V6akyuGxCInh1HDNq5Ajgfog+lYKXEVl5MkXL49sMRDOqLUe6tEkAofRdawOlh+QxtGQODb1XXi3tWKrqkDwJ//9G60vfApteWu3cD1fk8ydqYF5+CKB4DWKaVyc+Rl5nfNZFTPjNJePkkeSVFs/bkDQb0ge0n8m8DOgPKGur5ZjcUo00HR8wlRVMqmqkbFwi3dhui6efLc3i6DslX6ZB/0fHgwDC3Nb/af947CFzyOW+wp+o1SlHQ5dpV5i0gyWTzC6vC52m2ualqW5jpy/bTLWkR8uYYZ8HOCVYgkVeWck4s4n5mQPoRwd9Mo/N4MC6LLHy68IPhWU2SeO38m/FPzNfaDn1RwHG5zTtgpErymtkDZo9ldlSC5NGnDolD9uQAkdkDB0ryeFT88UPiB+ZbLAbBDd5mISYtoTpajW9rgY/pUfQyNGNWXaqtPbKiW/JfpW9bTSUBuUmkhF5IjUt28tmj5Y12/ak08ngPcAALeNRh911RvlZlT/Lmo1P1/Tg3J1kMQC7zvJkvri8DuM5Q9Zc2xXL8mYoJGthjIA3UqOa9vJJ6jHe1xei74zu6gyAenkP4H2c8e6gHSPupKcBmtaNFVEuWPir5uPD99vIM8zZ+/B3PH1a5sHbIp6u6dxZuJsh9VulOZr9leKJ5lWPB+21kvpVXh6erqTbKGiJK4gPE+9QtwLX5WPqr4N/FcBSrJTBP2Rqnkz16jsNfMPVso2z0gqILQCrwZ/pDcNyZeI84nu8iAstAlKOkHL40uHzS6X0hfCWI8b5v0jYwsXBaVfOD+ZZj+ac5tVOUHc8q10BLb2X2cySQvnNoQrpi1xnZtCS34X0utIvZsBnL2nXSpolt/FFsSxILjtbHnP4r7gpv4Tu3i/GZ+QtX0D+qWS02dVY9GZOtzehCh6LySLBHDTXPAviJfzhygRadNzQsEOgqSJxgcl/A625hDo6r4LmfByCPpFgZD2JEGBZA7k/lkfdpbWVVdKNOdS/MwCsJ1RY0zFYyxUwFFdUSKpx0qMyiehHOvOs+/lVj46TyZPH19KwCkewVPewyazGIh8sfsQU11LPndKFh+wpvMtCj9MBWG+p0CAbKfyOI4SdG+EATCf76ctrIFpNdILH7VrRqv1IOwDzsn2ibBTVanQuIrqzGmv9aiPjMEvzMQO+pQvlweBJebZFirTrkimH9pRIKTLSGfjIolBJ5xus1+tzC1h+V53nkueuFKVmzLZ92ME/m8S8Hffp5/GbnCR6/VmD9sNXrYuR8p51lWsZtM5E+riAkdU5FeL2OjfM0ZtERSS6q3x84RVs/Kb6wxIIGumP26TzuRZEqwJRn3m7xsmBRXGy9Qz7ozvaSqEC2m3i4piOjTN/Y5M20JchZZ6pjyOLnvFm59nLw1h0QBlv1ePZzkgD1iPHJ8jt8e6lA3CUU92ICIABo5YNeMe2PH7UaeMIi8+t1JNkHIAZFPeiSiStWtsFBmqDlw6HaieCAdnPLcv8PgW21dsLZSWVenh8ASMdm6fI2+xMZ8MTWTwe8e809oekg6oZF4wcw6d+akBrmXu+5+ieKK5H16OB+3t5TL8fJbBC82igewK+RJeEPvwc8A3EzL6GFp3n1WMTd1SPQJibjlqW5pNnVQNiNR6m7DaeKjZPG6K+sJ4jDMGNmEY8nDmsBOiqsFygfA6Ad3sHLajhWVnoTkAkVIM1jgb82UX43GGu2zmUi9A9GouliPZGax7yIixCF4/WkDjIpwmA9/vxvDEA+zkPxoeLBCM36a3aTYvcS6ZoIS90OqODfOg/KSc8Noqv0+OQzrnSEjehTaQyJzN6ORINmC/d9HnBrejqas4ypRa8CK/mmXZle3lm/d2mzGO+KHEDNXOD2vbxZiEJtkyRLc0yZeiee82e2O1AgwTUzXRiktHNZcx86zUwGlJDqGQifmHSoT6AUauot2lF3L7F6mmZC0Y6KCCLxkmhwZyjfZ07gqVzbt6BR00lmnA5gLobv/MVLGsmtP9STVsrQm4AdJ28fEJcO78qu1dcNoGNPhxIKCCDUtMTjvLk8oS8kVb0zVOuCaQYgFPCssEDJp3Iys2X67rmJGjY9erXAuytHHkdp5O5KqkKF4MPW3BpIoFOHvmIiYxmFfnFHoCp01XL4dnrvSQv8HvW72Obhptd7ebZlrF6FythaN5rvIltNEuRzFz8vzS/9MJMb8pdaCezyGepS9ZE0QnVK334pvSZsSpMBm8CYx0ZPUXa9Bc0p2FjFAU+499chwBAxjZTgZDMqDFyN+DtDW8YYMyJF4fmH8apQAwvCTQuMrAAS7Us4Jc7Qz60dx3B1HBAmRyM/Cp65p1MieXdnsDUA2A1LazCvYD3cq2JH3Qzg6Y+USQYWaMJHQT85bXQBmse/n48sQ0bLx/TvkoH3Js9cJO9lk1G75RUmVFVLXdg7qb8aYTRFSh6uVC0W/5CH1akB+QpvWDR8gseLqAGbpcqu7BczkIxBq0Yk+mlB2UsX+Q9snmEeedC9R3ZP1ZZgG5lY2Vu2y5XMydgX/Z4dZHjNq64BLF5q/EJDoEco5HWgHU/izPhUqFkotnt1U+O1QcORy8ymvtlZ/xFRjLvhc7jNiWEGPgYtNt50es9KiZltZfG14ulGZjvspJv9mjEMRla1r+t3rDJXkfXEw4j83cclS6bR5ofeODtVGCbF36JT2SlC8+YsqB8lrwxcPUvxI/24AKFraPMB/iq3A4laJxugGBFj/l2ac8Ce01Tm9LbNObB7TVwzV5vrDy04Y+1Di/9uVeX/qZHy5wGxgXpCmiXKni1nPYux5ddkjm19jjVq/v3FieaBCsf0sFhrpN67117rlt6hV82bor2Hvuyxrs6VNCxwTAMrgtsOFRGLLhjlzz7BIOyWAvhv5LFugVN+xaDtk195JKj7qasg1eJwV5Q1xUsAx/oscCe61Lh800jzFAn5wK6Cl6/6oo332de7FFgF7OreZ6ZH+7x8L4DGaMBaOM8kyJPbxra+CtlxuhOTPNURRRKY/7JceZc7+41HYs57srBdxzMuAUZ5zc5OegY8ktrLhhud0x+2YdFvJ85eYom9PRHPyl4kvF/ifgGTmbfA9xPo3319OLihLD8ikuTc/rA9F2tW50hAcCBgKyqiXopCjTOSYsw87rzXB2/sy572OxgcPfA00WlltbI3lZpuB6cEX/TLx9v1sK4wN19AW5HDzrxRLQ4jbrD6JN+hJIQGOxVzTPkF7qLcQF/LMaDBqfeP3ik5Ji6td5Kw1wFjEfTA+Dch5R7e863eey0p9HfniqVV0thkf4EH/9Fso36JoKTghfwR0eqHN5rS5uwPNUoAdp+WO5jvJoByALOpFtWhWVd3Ajt4Lz9l9DvdG3o9whW7tcrXYD+Q/Y2r/EC3RigGcz1KfzUFcp3oQNj1LdemUkYiedPcCFOjDGfAsIPPIaiSvnMpQPuStArdjGDOtsrKD7tNnRhJutVgB71hjxqJOYjkyfZ4Y5mMN2OOZHqclXInH5VQO7ST/9i9BR3luk2BQxms1h5fYkGuAr0ZW19YhpD3zjSrN90HzeSRh5E9mFX18izmwaZSLoRwgCT9k0vGQrSU2RIXd/R1ifOnyJ/YEwPogLyL2sln6Fh1yFvNWUvpPCPB6R/jwxLfuZVqXK39z3CsYnmUG7LyLEc7/IhV/sXzJ9P7jPXzPf6A3LLOR+RMcn1vHyCBtbCFj4ZVGnle5o+FZIwI/j01uFn/usM552/efe47MDENVc1xlVyeZsW8q7WO1vgWOZlfNvFwRoZxKDdBp9+jXaI+PM0voo6Ntoc9twUT0bJT81urmq/xX65F+6Jr4J/5Un3130dTD9qj30sX/f7JVvlMFExsVybL/UFZT/tH8Ukv++1Ex/D/yIme6GWsehiviN93MgHOoO0nLYqNE4O0Z3+7/g25A2+cx1/RYr8NtZ4MvM58nyZtRwX4HbG7MuYNToLf8tUeZq5ei6nuVTGn0Hihu1DxgAs4Mno2VrMxYmKOpA5235aOsZ8kdzHPQ+6m9Qnu7xqm3mnF2dpXq5gLL7gQyCl35ojVQ05SgS4j2OtWrRIlT/Vt+nL/q0t9qXIA1iU+Nc7W3culV8agUsjcGkELo3AVzIC/weUequbxLNbpwAAAABJRU5ErkJggg=="/>
  </mu-carousel-item>
   
</mu-carousel>
   
   <swiper :options="swiperOption">
            <swiper-slide class="swiper-slide" >
               <div class="icon-img-item">
                  <div class="icon-img" > <div class="icon-block"><div class="icon-user"></div></div>  </div>
                  <div class="icon-title" > 战略发展 </div>
               </div>
            </swiper-slide>
            <swiper-slide class="swiper-slide" >
                <div class="icon-img-item">
                  <div class="icon-img"  > <div class="icon-block"><div class="icon-user"></div></div>  </div>
                  <div class="icon-title" > 能源 </div>
               </div>
            </swiper-slide>
            <swiper-slide class="swiper-slide" >
                <div class="icon-img-item">
                  <div class="icon-img" > <div class="icon-block"><div class="icon-user"></div></div>  </div>
                  <div class="icon-title" > 学习 </div>
               </div>
            </swiper-slide>
            <swiper-slide class="swiper-slide" >
               <div class="icon-img-item">
                  <div class="icon-img" > <div class="icon-block"><div class="icon-user"></div></div>  </div>
                  <div class="icon-title" > 教育 </div>
               </div>
            </swiper-slide>
            <swiper-slide class="swiper-slide" >
               <div class="icon-img-item">
                  <div class="icon-img"> <div class="icon-block"><div class="icon-user"></div></div>  </div>
                  <div class="icon-title"> 生命周期 </div>
               </div>
            </swiper-slide>
            <swiper-slide class="swiper-slide" >
                <div class="icon-img-item">
                  <div class="icon-img"> <div class="icon-block"><div class="icon-user"></div></div>  </div>
                  <div class="icon-title"> 金融 </div>
               </div>
            </swiper-slide>
            <!-- 分页器 -->
            <div class="swiper-pagination"  slot="pagination"></div>    
        </swiper>
        <List/>
 </div>   
</template>

<script>
import { mapState, mapActions } from 'vuex';
import List from './List1'
export default {
 components: { List },
  data() {
    return {  
      str:'',
      swiperOption: { 
                    slidesPerView: 5,
                    pagination: {
                      el: '.swiper-pagination'
                    },  
                    autoplay: {
                      delay: 2000, 
                      disableOnInteraction: false,
                    }, 
                    loop: false 
    },};
  },
  created() {
    window.HWH5.navTitle({ title: '战马社区' });
    console.log(this.list)
    this.getList()
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

<style lang="less" scoped>
 .mu-carousel { height: 150px; }
.icon-title,.icon-img{text-align:center!important}
</style>
