<template>
  <div class="gson">
    <!-- 내용을 추가하세요 -->
    <p v-bind:style="{color:tcolor}" >큰집손자 1 :{{message}}</p>
    <input type="text" v-model="gsonMsg">
    <button @click="clickMsg">장손메시지</button>

  </div>
</template>

<script>
export default {
  name: 'CuteGson11',
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
      index:1,
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
    clickMsg() {
      this.message = '장손이 버튼을 눌렀습니다.';
    },
    changeTextColor(idx,data){
      if(this.index == idx) {
        this.tcolor=data;
      }
    }
  }
};
</script>

<style scoped>
.son{
  background-color: moccasin;
}
.gson{
  background-color: yellow;
}
</style>