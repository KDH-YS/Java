<template>
  <div class="test">
    <TemplatePop>
      <template v-slot:header>
        <h4>공지사항</h4>
      </template>
      <p>금주토요일 대관실공지</p>
      <p>금주배관공사공지</p>
      <template v-slot:footer>
        <button type="button">닫기</button>
      </template>
    </TemplatePop>
  </div>
</template>

<script>
import TemplatePop from '../TemplatePop.vue';
export default {
  name: 'Sample02Pop',
  components:{
    TemplatePop,
  }
};
</script>

<style scoped>

</style>