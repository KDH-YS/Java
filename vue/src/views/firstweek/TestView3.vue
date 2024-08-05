<template>
  <div class="">
    
    <img src='https://borgssam.github.io/MySite/img/album_01.jpg' title="가방"><br>
    <img :src="imgSrc" :title="imgTitle">
  </div>

  <div>
    <button :disabled='btn_01' :style="color_red">버튼</button>
    <button :disabled='btn_02' :style="color_blue">버튼</button>
  </div>

</template>

<script>
export default {
  name: 'TextView3',
  components: {
    
  },
  data() {
    return {
      imgSrc:'https://borgssam.github.io/MySite/img/album_01.jpg',
      imgTitle:'가방맨',
      btn_01:true,
      btn_02:false,
      color_red:{color:"red", fontSize:'24px'},
      color_blue:{color:'blue', fontSize:'24px'}      
    };
  },
  setup() {
    
  },
  created() {
    
  },
  mounted() {
    
  },
  unmounted() {
    
  },
  methods: {
    
  }
};
</script>

<style scoped>

</style>