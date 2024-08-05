  <template>
    <div class="">
      <input type="text" name="" id="" value="333"><br>
      <input type="text" :value="nick"><br>
      <input type="text" v-model="nick"><br>
      <input type="number" v-model.number="age"> <br>
      <textarea name="" id="" cols="30" rows="10">마르고 닳도록</textarea><br>
      <textarea v-model="message" id="" cols="30" rows="10"></textarea><br>
      <select name="" id="">
        <option value="01">서울</option>
        <option value="02" selected>인천</option>
        <option value="03">수원</option>
        <option value="04">남원</option>        
      </select><br/>
        <select v-model="city">
        <option value="01">서울</option>
        <option value="02">인천</option>
        <option value="03">수원</option>
        <option value="04">남원</option>        
      </select>
    </div>
  </template>
  <script>
  export default {
    name: 'TestView1',
    components: {
            
    },
    data() {
      return {
        nick:'노래하는 큰바위',
        age:333,
        message:'하느님이 <i>보우하사</i>',
        city:'03'
        
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