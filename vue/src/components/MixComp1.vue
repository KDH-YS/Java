<template>
  <div class="">
    <h2>콤포넌트 1</h2>
    <p>{{sharedData}}</p>
    <button @click='sharedMethod'>공유메소드</button>
    
  </div>
</template>

<script>
import {commonMixin} from '@/mixin/commonMixin'
export default {
  name: 'MixComp1',
  mixins:[commonMixin],
  }
</script>

<style scoped>

</style>