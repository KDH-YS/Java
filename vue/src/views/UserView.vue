<template>
  <div class="">
    <h1>사용자정보</h1>
    <div>
      <p><b>이름:</b>{{ user.name }}</p>
      <p><b>이메일:</b>{{ user.email }}</p>
    </div>
    <button @click="saveUserData1"> 사용자정보읽기</button>
    <button @click="saveUserData2"> 사용자정보수정</button>
    <br>
    <input type="text" v-model="editName"><br>
    <input type="text" v-model="editEmail"><br>
    <button @click="saveUser">저장</button>
    
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed,ref } from 'vue';

export default {
  name: 'UserView',
  setup() {
    const store = useStore();
    
  const editName = ref('');
  const editEmail = ref('');


    // Vuex에서 user 데이터 가져오기
    const user = computed(() => store.state.user);

    // 데이터1을 Vuex에 저장하는 메서드
    const saveUser=()=>{
      const data = { name: editName.value, email:editEmail.value };
      store.commit('setUser', data);

    }
    const saveUserData1 = () => {
      const data = { name: '엄복동', email: 'bicyclethief@gmail.com' };
      store.commit('setUser', data);
    };

    // 데이터2를 Vuex에 저장하는 메서드
    const saveUserData2 = () => {
      const data = { name: '장발장', email: 'breadthief@gmail.com' };
      store.commit('setUser', data);
    };

    // setup 함수에서 반환하여 템플릿에서 사용 가능하게 함
    return {
      user,
      editName,
      editEmail,
      saveUserData1,
      saveUserData2,
      saveUser
    };
  }
};
</script>

<style scoped>
/* 스타일을 여기에 추가하세요 */
</style>
