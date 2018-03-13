<template>
  <div class="hello">
    <h2>页面跳转</h2>
    <ul>
      <li><a href="#/demo" target="_blank">a标签</a></li>
      <li><router-link to="demo" target="_blank">router-link</router-link></li>
      <li><button @click="gofirst">click-function</button></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods:{
    gofirst:function(){
      this.$router.push({path:'demo', params: { id: 0 }})
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
