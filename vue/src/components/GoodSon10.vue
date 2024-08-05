<template>
  <div class="son">
    <!-- 내용을 추가하세요 -->
    <p>큰아들 : {{message}} {{computedMsg}}</p>
    <cute-gson-11 ref="gson11"/>
    <cute-gson-12 ref="gson12" @event_report="receiveEvent"/>
    <input type="text" v-model="sndMessage">
    <button @click="clickSon10">큰아들버튼</button>
    <button @click="clickSon20">큰아들버튼2</button>
    <button @click="clickSon30">큰아들버튼3</button>
  </div>
</template>

<script>
import CuteGson11 from './CuteGson11.vue';
import CuteGson12 from './CuteGson12.vue';
export default {
  name: 'GoodSon10',
  props: {
    // 문자열 타입의 prop 예시
    //sampleString: {
    //  type: String,
    //  default: ''
    //},
    // 숫자 타입의 prop 예시
    //sampleNumber: {
    //  type: Number,
    //  default: 0
    //},
    // 배열 타입의 prop 예시
    //sampleArray: {
    //  type: Array,
    //  default: () => []
    //},
    // 객체 타입의 prop 예시
    //sampleObject: {
    //  type: Object,
    //  default: () => ({})
    //}
  },
  components: {
    CuteGson11,
    CuteGson12
    // 추가적으로 사용할 컴포넌트들을 등록합니다.
  },
  data() {
    return {
      message:'',
      sndMessage:'',
    };
  },
  computed:{
    computedMsg(){
      if(this.$refs.gson11){
        // this.message = '강아지';
        return this.$refs.gson11.gsonMsg+'!!';
      }
      return '';
    }
  },
  methods: {
    clickSon10() {
      this.message='큰아들이 버튼을 눌렀습니다.'
      this.$refs.gson11.clickMsg();
    },
    clickSon20() {
      this.message='큰아들이 버튼을 눌렀습니다.'
      this.$refs.gson12.clickMsg('큰아버지가 둘째아들에게 명령함');
    },
    clickSon30() {
      this.message='큰아들이 버튼을 눌렀습니다.'
      this.$refs.gson11.message = this.sndMessage;
      this.$refs.gson12.message = this.sndMessage;
    },
    changeTextColor(idx, data){
      // alert('goodson2=>'+idx+','+data);
      this.$refs.gson11.changeTextColor(idx,data);
      this.$refs.gson12.changeTextColor(idx,data);
      // alert('goodson2=>'+idx+','+data);
    },
    receiveEvent(data) {
      this.message = data;
    }
    
  },
  setup() {
    // Vue 3 Composition API의 setup 함수에서 추가적인 로직을 처리할 수 있습니다.
  },
  created() {
    // 컴포넌트가 생성될 때 실행될 로직을 작성합니다.
  },
  provide(){
    return{
      
    }
  },
  mounted() {
    this.$forceUpdate();
    // 컴포넌트가 DOM에 마운트된 직후 실행될 로직을 작성합니다.
  },
  unmounted() {
    // 컴포넌트가 파괴되기 전 실행될 로직을 작성합니다.
  }
};
</script>

<style scoped>
.son{
  background-color: rgb(128, 117, 100);
  padding:20px;
  margin: 20px;
}
.gson{
  background-color: yellow;
}
</style>