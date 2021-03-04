<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  mounted(){
    axios.get('/user/userinfo').then(res=>{
      console.log(res)
    }).catch(err=>{
      console.error(err)
    })
  }
}
</script>
