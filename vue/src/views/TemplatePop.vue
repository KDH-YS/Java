<template>
<div class="pop">
    <header>
        <slot name="header"></slot>
    </header>
    <main>
        <slot></slot>
    </main>
    <footer>
        <slot name="footer"></slot>
    </footer>
</div>
</template>

<script>
export default {
  name: 'TemplateView',
};
</script>

<style scoped>
.pop{
  width:400px;
  margin: 10px auto;
  background-color:brown;

  padding:10px 20px;
  box-shadow: 0 13px 27px -5px rgba(50,50,93,0.25),
              0  8px 16px -8px rgba(0,0,0,0.3),
              0 -6px 16px -6px rgba(0,0,0,0.25);
  border-radius : 10px;  
}

header {
  background-color:orange;
  padding:2px;
  border-radius : 5px;  
}
main { padding:20px;}
footer{
  background-color: brown;
  border-radius : 5px; 
}
</style>