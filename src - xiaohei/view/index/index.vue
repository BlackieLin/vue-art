<template>
	<div>
		欢迎来到管理员系统
	    	<button v-on:click="created" >ajax post</button>
		<footer-nav v-bind:class="{'isIndex':isNowPage}" :test="test"></footer-nav>
	</div>
</template>
<script>
	import FooterNav from '../../components/footer.vue'
	export default {
	  components: {
	    FooterNav
	  },
	  data () {
	    return {
	      isNowPage: true,
	      registerUrl: '/api/wxapi/ad_check.php',
	      newUserInfo: {
	        text: '最好的产品',
	        t: 123
	      },
	      test: ''
	    }
	  },
	  methods: {
	    created () {
	      console.log(this)
	      this.$http.post(this.registerUrl, this.$qs.stringify(this.newUserInfo), {
	        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
	      })
                   .then(function (response) { console.log(response) })
                   .catch(function (error) { console.log(error) })
	    }
	  }
	}
</script>