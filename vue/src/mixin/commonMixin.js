export const commonMixin = {
  data(){
    return{
      sharedData:'공유데이터',
    }
  },
  methods:{
    sharedMethod(){
      this.sharedData='공유 데이터 변경됨'
    }
  }
}