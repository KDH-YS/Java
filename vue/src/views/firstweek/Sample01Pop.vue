<template>
  <div class="">
    <TemplatePop>
      <template v-slot:header>
        <h3 style="color:red">경고</h3>
      </template>
      <p>당신은 제한 <span style="color:red">접근구역</span>에 들어가려고합니다.</p>
      <template v-slot:footer>
        <button type="button">닫기</button>
      </template>
    </TemplatePop>
  </div>
</template>

<script>
import TemplatePop from '@/views/TemplatePop.vue';
export default {
  name: 'Sample01Pop',
  components:{
    TemplatePop,
  }
};
</script>

<style scoped>
/* 스타일을 추가하세요 */
</style>