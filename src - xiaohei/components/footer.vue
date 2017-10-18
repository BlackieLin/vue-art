<template>
  <div class="footer fixed">
      <ul>
          <li><router-link to="/">首页{{test}}</router-link></li>
          <li><router-link to="/manage">人员管理</router-link></li>
      </ul>
  </div>
</template>
<script>
  export default {
    props: ['test']
  }
</script>
<style scoped>
  .footer{ width:100%;height:50px;}
  .footer ul{display:flex;height:100%;line-height:50px;}
  .footer ul li{flex:1;background-color:#f1f1f1;text-align:center;}
  .isIndex li:first-child{background-color:#d3d3d3;}
  .isIndex li:first-child a{color:#41b883;}
  .isManage li:last-child{background-color:#d3d3d3;}
  .isManage li:last-child a{color:#41b883;}
  </style>