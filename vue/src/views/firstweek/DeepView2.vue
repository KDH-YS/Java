<template>
  <div class="">
    <br><br><br><br><br>
    <GoodSon10 ref="son10"/>
    <GoodSon20 ref="son20"/>
    <input type="button" value="할아버지버튼1" @click="clickGpapa">
  </div>
</template>

<script>
import GoodSon10 from '@/components/GoodSon10.vue';
import GoodSon20 from '@/components/GoodSon20.vue';
export default {
  name: 'DeepView2',
  components: {
    GoodSon10, GoodSon20,
  },
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
  data() {
    return {
      // 컴포넌트의 데이터를 초기화합니다.
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
    clickGpapa() {
      //alert('clickGpapa() 시작');
      //둘째 아들들은 호출해서 글씨 파란색으로 바꾸기
      this.$refs.son10.changeTextColor(2,'blue');
      this.$refs.son20.changeTextColor(2,'blue');
      //alert('clickGpapa() 끝');
    }
    // 컴포넌트에서 사용할 메서드를 정의합니다.
  }
};
</script>

<style scoped>
/* 스타일을 추가하세요 */
</style>