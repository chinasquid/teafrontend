<template>
	<div id="logo">
<!--		<img src="../../assets/logo1.png" style="width: 200px;height: 50px;background-size: 100% 100%">-->
		<img :src="img" style="width: 140px;height: 50px;background-size: 100% 100%"/>
	</div>
</template>

<script>
	export default {
		name: 'logo',
		data(){
			return{
				img:require("@/assets/logo1.png")
			}
		}
	}
</script>

<style scoped>

</style>