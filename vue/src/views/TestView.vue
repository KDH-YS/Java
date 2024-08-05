<template>
  <div class="">
    <br>
    <br>
    <sample-01-pop/>
    <br>
    <br>
    <sample-02-pop/>
  </div>
</template>

<script>
import Sample01Pop from '@/views/firstweek/Sample01Pop.vue';
import Sample02Pop from '@/views/firstweek/Sample02Pop.vue';
export default {
  name: 'TestView',
  components:{
    Sample01Pop,Sample02Pop
  }
};
</script>
    Sample01Pop

<style scoped>
/* 스타일을 추가하세요 */
</style>