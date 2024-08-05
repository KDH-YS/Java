<template>
  <div class="Exam1">
    <div class="sing-up" :style='signup'>
      <h2>회원가입</h2>
      <p>사용자 이름</p>
      <input type="text" v-model="username">
      <p>이메일</p>
      <input type="text" v-model="email">
      <p>비밀번호</p>
      <input type="password" value="0000">
      <p>비밀번호 확인</p>
      <input type="password" value="1234">
      <p>성별</p>
      <div class="gender-options">
      <label for=""><input type="radio" v-model="gender" value="남">남</label>
      <label for="" style="margin-left: 5px;"><input type="radio" v-model="gender" value="여">여</label>
    </div>
    <br>
      <p>좋아하는 음식</p>
      <select name="" id="">
        <option value="한식">한식</option>
        <option value="일식">일식</option>
        <option value="중식">중식</option>
      </select><br>
      <label for="" style="text-align: left;"><input type="checkbox" name="" id="">정보공개 동의</label>
      <br><button>가입하기</button>



    </div>
    
    
  </div>
</template>

<script>
export default {
  name: 'ExamView',
  components: {

  },
  data() {
    return {
    username:'엄복동',
    email:'bycyclethief@gmail.com',
    gender:'',
    
    signup:{
    top: '50%',
    position: 'absolute',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    width:'500px',
    height: '700px',
    border: '1px solid #f1f1f1',        
    },
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
.Exam1{
  background-color: #ccc;
  width: 100%;
  height: 1000px;
  display: flex;
  justify-content: center; /* Centering the sign-up form */
  align-items: center; 
}
p{
  text-align: left;
  font-size: 17px;
  font-weight: bold;
  margin: 0;
  margin-left: 50px;
  
}
input:not([type=checkbox],[type=radio]){
  width: 390px;
  height: 30px;
  margin: 10px 0px 20px;
  font-size: 17px;
  padding-left: 10px;
}
select{
  margin: 15px;
  width: 400px;
  height: 30px;
  padding: 0;
}
button{
  width: 100px;
  height: 40px;
  margin: 20px;
  background-color: rgb(79, 81, 255);
  color: white;
  border: 0;
  border-radius: 10px;
}
label {
  font-weight: bold;
  display: block; /* Make label a block element for full-width */
  margin-left: 50px; /* Align label with other elements */
}
.gender-options {
  margin-left: 5px; /* Align gender options with labels */
  display: flex; /* Align gender options horizontally */
   /* Space between radio buttons */
}

</style>