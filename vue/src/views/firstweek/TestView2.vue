<template>
  <div class="">
    <input type="checkbox" id="cbtn_agree" name="cbtn_agree">
    <label for="cbtn_agree">동의</label><br/>

    <label><input type="checkbox" v-model="agree">동의</label><br>

    <label><input type="checkbox" v-model="agree2"
    true-value='동의' false-value="비동의">{{agree2}}</label>

    <p>기본피자에 원하시는 토핑추가</p>
    <label><input type="checkbox" v-model="pizza" value="치즈">치즈</label>
    <label><input type="checkbox" v-model="pizza" value="페퍼로니">페퍼로니</label>
    <label><input type="checkbox" v-model="pizza" value="올리브">올리브</label>
    <p>당신이 추가로 선택하신 토핑은 {{pizza}} 입니다</p>

    <div>
      <p>당신의 탕수육취향은?</p>
      <label><input type="radio" v-model="ssp" value="찍먹">부먹</label>
      <label><input type="radio" v-model="ssp" value="부먹">찍먹</label>
      <p>당신은 <span>{{ssp}}파</span> 입니다.</p>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'TextView2',
  components: {
    
  },
  data() {
    return {
      agree:true,
      agree2:"비동의",
      pizza:[],
      ssp:'처먹',
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