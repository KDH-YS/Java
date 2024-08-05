<template>
  <div class="gson">
    <!-- 내용을 추가하세요 -->
    <p v-bind:style="{color:tcolor}" >큰집손자 2 : {{message}}</p>
    <input type="text" v-model="gsonMsg">
    <input type="button" value="손자12" @click="clickGson22">
  </div>
</template>

<script>
export default {
  name: 'CuteGson12',
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
    // 추가적으로 사용할 컴포넌트들을 등록합니다.
  },
  data() {
    return {
      message:'',
      index:2,
      tcolor:'red',
      gsonMsg:'',
    };
  },
  watch: {
    // sample1() {
    //   console.log('');
    // }
    // 데이터를 감시하고 처리할 로직을 작성합니다.
  },
  computed: {
    // sample2() {
    //   return '';
    // }
    // 필요한 계산된 속성을 정의합니다.
  },
  methods: {
    clickMsg(data) {
      this.message=data;
    },
    changeTextColor(idx,data){      
      // alert('cuteson12=>'+idx+','+data);
      if(this.index == idx) {
        this.tcolor=data;
      }
      // alert('cuteson12=>'+idx+','+data);
    },
    clickGson22(){
      this.$emit('event_report', this.gsonMsg);
    }

  },
  setup() {
    // Vue 3 Composition API의 setup 함수에서 추가적인 로직을 처리할 수 있습니다.
  },
  created() {
    // 컴포넌트가 생성될 때 실행될 로직을 작성합니다.
  },
  mounted() {
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
}
.gson{
  background-color: yellow;
}
</style>