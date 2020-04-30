<template>
	<div id="app">
		<navbar-main></navbar-main>
<!--		<img alt="Vue logo" src="./assets/logo.png">-->
		<home/>
	</div>
</template>

<script>
import NavbarMain from '@/components/navbar/NavbarMain'
import Home from '@/view/home/Home'
	export default {
		name: 'App',
		components: {
			NavbarMain,Home
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
</style>
