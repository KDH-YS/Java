<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/App/test1">테스트1</router-link> |
    <router-link to="/test2">테스트2</router-link> |
    <router-link to="/test3">테스트3</router-link> |
    <router-link to="/test4">테스트4</router-link> |
    <router-link to="/test5">테스트5</router-link> |
    <router-link to="/test6">테스트6</router-link> |
    <router-link to="/basic">3.컴포넌트</router-link> |
    <router-link to="/exam">예제1</router-link> |    
    <router-link to="/test">테스트</router-link> |
    <router-link to="/basic">5.콤포넌트(기본)</router-link> |
    <router-link to="/deep">8.콤포넌트(심화)</router-link>|
    <router-link to="/deep2">8.콤포넌트(심화2)</router-link>

    
    <router-link to="/calculator1">9.계산기1</router-link>
    <router-link to="/calculator2">9.계산기2</router-link>
    <router-link to="/calculator3">9.계산기3</router-link>
    <router-link to="/calculator4">9.계산기4</router-link>
    <router-link to="/mixin">9.Mixin</router-link>
    <router-link to="/user">11.vuex예제1</router-link>
    <router-link to="/member">11.vuex예제(회원목록)</router-link>

  </nav>
  <router-view/>
</template>
<script>
export default {
  name : 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2C3E50;
}
nav {
  z-index : 1;
  position: fixed;
  top:10px;
  right:10px;
  display: flex;
  flex-direction:column;
  background-color: white;
  padding:10px 20px;
  box-shadow: 0 13px 27px -5px rgba(50,50,93,0.25),
              0  8px 16px -8px rgba(0,0,0,0.3),
              0 -6px 16px -6px rgba(0,0,0,0.25);
  border-radius: 5px;
}
nav a {
  text-decoration: none;
  color : #0008FC;
  text-transform:uppercase;
  font-size: 12px;
  text-align:center;
  font-weight: 600;
}
nav a:not(:last-child){
  margin-bottom: 10px;
}
</style>
