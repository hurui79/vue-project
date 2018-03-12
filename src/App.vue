<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios'
import handleResponse from './utils/handleResponse'

export default {
  created () {
      //响应拦截器
      axios.interceptors.response.use(response => {
          handleResponse.handleResponse(response);//处理错误信息
          return response
      }, error => {
          console.log("error.response:"+error.response);
          return Promise.resolve(error.response)
      });
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

