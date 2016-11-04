<template>
	<div id="firstcomponent">
		<h1>我是郑旭</h1>
		<a>written by {{author}}</a>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				author:"zhengxu"
			}
		}
	}
</script>
<style type="text/css">
	h1{
		color: #999
	}
</style>