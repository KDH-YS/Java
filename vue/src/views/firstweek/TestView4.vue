<template>
  <div class="">
    <table>
      <thead>
        <th>제품명</th>
        <th>가격</th>
        <th>품목</th>
        <th>배송료</th>
      </thead>
      <tbody>
        <tr v-for="(item,index) in goods" :key="index">
          <td>{{item.name}}</td>
          <td>{{item.price}}</td>
          <td>{{item.category}}</td>
          <td>{{item.delivery}}</td>         
        </tr>
       
      </tbody>
    </table>

    <p v-if="true">호랑이</p>
    <p v-if="false">사자</p>

    <div>
      <label for="">점수를 입력하세요
        <input type="number" v-model="score">
      </label><br>
      <p v-if="score>=90">A학점</p>
      <p v-else-if="score>=80">B학점</p>
      <p v-else-if="score>=70">C학점</p>
      <p v-else-if="score>=60">D학점</p>
      <p v-else>F학점</p>
    </div>

    <div>
      <label for="">국어:<input type="number" v-model="kor"></label>
      <label for="">수학:<input type="number" v-model="math"></label>
      <label for="">영어:<input type="number" v-model="eng"></label>
      <br>
      <p>{{(average)}}</p>
      <p v-if="avg>=90">A학점({{avg}})</p>
      <p v-else-if="avg>=80">B학점({{avg}})</p>
      <p v-else-if="avg>=70">C학점({{avg}})</p>
      <p v-else-if="avg>=60">D학점({{avg}})</p>
      <p v-else>F학점({{avg}})</p>
    </div>
    <div>
      <button v-on:click="calcul">계산</button>
    </div>
  
  <div><br>
    <label><input type="number" v-model="dan">단</label><br>
    <button v-on:click="times">계산</button> <button v-on:click="reset">초기화</button>
    <span v-if="redan > 0">
      <p>{{redan}}단</p>
      <p v-for="(item, index) in danarr" :key="index">{{ redan }} * {{ item }} = {{redan*item}}</p>
    </span>
  </div>  


  </div>
</template>

<script>
export default {
  name: 'TestView4',
  components: {
    
  },
  data() {
    return {
      goods:[
        {"name":'마우스', price:100000, "category":"PC상품", "delivery":2500},
        {"name":'키보드', price:200000, "category":"PC상품", "delivery":2500},
        {"name":'그래픽카드', price:3000000, "category":"PC상품", "delivery":0},
      ],
      score:0,
      kor:0,
      math:0,
      eng:0,
      avg:0,
      dan:2,
      redan:0,
      danarr:[2,3,4,5,6,7,8,9]
    };
  },
    computed: {
    average() {
      return (this.kor + this.math + this.eng) / 3;
    },

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
    showMessage(){
      alert('메시지');
    },
    calcul(){
      this.avg=(this.kor+this.eng+this.math)/3;
    },
        times(){
      this.redan=this.dan;
    },
    reset(){
      this.redan=0
    }
  }
};
</script>

<style scoped>
#app{
  text-align: center;
}
  table{
    width: 80%;
  border-collapse: collapse;
  }
  td,th{
border: 1px solid #ddd; 
  }
</style>