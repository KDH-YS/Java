<template>
  <div class="">
    
    <select v-model="city" @change="cgcity">
      <option value="서울">서울</option>
      <option value="부산">부산</option>
      <option value="대전">대전</option>
      <option value="수원">수원</option>
      <option value="런던" selected>런던</option>      
    </select>
    <p>{{message}}</p>

  </div>
<div>
      <label>이메일
        <input v-model="emailValue" placeholder="이메일을 입력하세요" @input="cgemail">
      </label>
      <p>{{ emailmessage }}</p>
    </div>

    <div>
      <label>비밀번호
        <input type="password" v-model="pwdValue" @input="changePwd" placeholder="비밀번호를 입력하세요">
      </label>
      <p>{{ msgPwd }}</p>
    </div>

    <div>
      <label>비밀번호 확인
        <input type="password" v-model="pwdConfirmValue" @input="changePwdConfirm" placeholder="비밀번호 확인을 입력하세요">
      </label>
      <p>{{ msgPwdConfirm }}</p>
    </div>

  


</template>

<script>
export default {
  name: 'TestView5',
  components: {
    
  },
  data() {
    return {
      city:'수원',
      message:'',
      emailValue:'',
      emailmessage:'이메일을 입력하세요',
      msgPwd:'비밀번호를 입력하세요',
      msgPwd2:'비밀번호를 입력하세요',
      pwdValue:''
    };
  },
  setup() {
    
  },
  created() {
    
  },
  mounted() {
    
  },
  unmounted() {
    
  },watch:{

  },
  
  methods: {
    cgcity(){
      switch(this.city){
        case '서울':
          this.message='안녕하세요 반갑습니다.';
          break;
        case '부산':
          this.message='안녕하십니꺼 반갑습니더.';
          break;
        case '대전':
          this.message='안녕하셔유 반가워유.'
          break;
        case '수원':
          this.message='수원'
          break;
        case '런던':
          this.message='hello'
          break;
      }
    },

    cgemail() {
      const emailExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (this.emailValue.length === 0) {
        this.emailmessage = '이메일을 입력하세요';
      } else if (emailExp.test(this.emailValue)) {
        this.emailmessage = '정상적인 이메일 주소입니다';
      } else {
        this.emailmessage = '정상적인 이메일 주소가 아닙니다';
      }
    },
    changePwd() {
      const pwdExp = /^[^\s@#]*$/;
      if (this.pwdValue.length === 0) {
        this.msgPwd = '비밀번호를 입력하세요';
      } else if (this.pwdValue.length < 8) {
        this.msgPwd = '비밀번호는 8자 이상이어야 합니다';
      }else if (!pwdExp.test(this.pwdValue)) {
        this.msgPwd = '유효하지않는 비밀번호입니다'; 
      }else {
        this.msgPwd = '유효한 비밀번호입니다';
      }
      this.validatePwdConfirm();
    },
    changePwdConfirm() {
      if (this.pwdConfirmValue.length === 0) {
        this.msgPwdConfirm = '비밀번호 확인을 입력하세요';
      } else {
        this.validatePwdConfirm();
      }
    },
    validatePwdConfirm() {
      if (this.pwdValue !== this.pwdConfirmValue) {
        this.msgPwdConfirm = '비밀번호가 일치하지 않습니다';
      } else {
        this.msgPwdConfirm = '비밀번호가 일치합니다';
      }
    }
    
  

    
  }
};
</script>

<style scoped>

</style>