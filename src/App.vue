<template>
	<div id="app">
		<el-backtop/>
		<navbar-main/>
		<router-view></router-view>
	</div>
</template>

<script>
	import NavbarMain from '@/components/navbar/NavbarMain'

	export default {
		name: 'App',
		components: {
			NavbarMain,

		},
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

	.toTop {
		height: 100%;
		width: 100%;
		background-color: #f2f5f6;
		box-shadow: 0 0 6px rgba(0, 0, 0, .12);
		text-align: center;
		line-height: 40px;
		color: #1989fa;
	}
</style>
