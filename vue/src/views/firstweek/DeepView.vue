<template>

  <div class="">
    <page-title title="title1" age="3"
    hobbies="['자전거','등산','꽃꽂이','게임']"
    family="{'papa':'아빠','mom':'엄마'}"
    />
    <page-title :title="title1" :age="age" 
    :hobbies="hobbies"
    :family="family"  
    :func="customFunc"
    />
  </div>
  <div>
    <input type="text" v-model="hobby">
    <button @click='addHobby'>취미추가</button>
  </div>

  <hr>


</template>

<script>
import PageTitle from '@/components/PageTitle.vue';
export default {
  name: 'DeepView',

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
        PageTitle

  },
  data() {
    return {
      title1:'page 1',
      age:3,
      hobbies:[],
      hobby:'',
      family:{papa:'아빠',mom:'엄마'},
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
    addHobby() {      
      this.hobbies.push(this.hobby);
      return '';
    },
    customFunc(){
      return '부모 지정 사용자함수';
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
/* 스타일을 추가하세요 */
</style>