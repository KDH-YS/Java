<template>
  <div class="">
    <h3>CalculatorView1</h3>
    <input type="text" v-model="num1" @keyup="plusNumbers"><span>+</span>
    <input type="text" v-model="num2" @keyup="plusNumbers"><span>=</span>
    <span>{{result}}</span>
  </div>
</template>

<script>
export default {
  name: 'CalculatorView1',
  props: {},
  methods: {
    plusNumbers(){
      this.result = Number(this.num1)+Number(this.num2);
    }

  }
};
</script>

<style scoped>
/* 스타일을 추가하세요 */
</style>