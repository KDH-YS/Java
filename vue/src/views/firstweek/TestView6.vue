<template>
  <div class="">
    <label> &nbsp; 성 : <input v-model="familyName1" @input="makeFullName1"></label><br>
    <label>이름: <input v-model="firstName1" @input="makeFullName1"></label>
    <p>성명(메소드방식): {{fullName1}}</p>
    <label> &nbsp; 성 : <input v-model="familyName2"></label><br>
    <label>이름: <input v-model="firstName2"></label>
    <p>성명(computed방식): {{makeFullName2}}</p>
    <label> &nbsp; 성 : <input v-model="familyName3"></label><br>
    <label>이름: <input v-model="firstName3"></label>
    <p>성명(watch방식): {{fullName3}}</p>
  </div>
</template>

<script>
export default {
  name: 'TestView6',
  components: {
    
  },
  data() {
    return {
      familyName1:'',
      firstName1:'',
      fullName1:'',
      familyName2:'',
      firstName2:'',
      fullName2:'',
      familyName3:'',
      firstName3:'',
      fullName3:'',
      
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
  watch:{
    familyName3(){
      this.fullName3 = this.familyName3+' '+this.firstName3;
    },
    firstName3(){
      this.fullName3 = this.familyName3+' '+this.firstName3;
    },

  
  },
  computed:{
    makeFullName2(){
      return (this.familyName2+ ''+this.firstName2);
    }
  },
  methods: {
    makeFullName1(){
      this.fullName1 = this.familyName1+' '+this.firstName1;
    }
    
  }
};
</script>

<style scoped>

</style>