<template>
	<div id="NavbarMain" class="navmain">
		<logo/>
		<SearchMain/>
		<el-menu
				:default-active="activeIndex2"
				class="el-menu-demo"
				mode="horizontal"
				@select="handleSelect"
				text-color="#FFFBFF"
				active-text-color="#ffffff"
				background-color="#69B170"
				menu-trigger="hover back " >
			<el-menu-item index="1">首页</el-menu-item>
			<el-menu-item index="2" disabled>商品秒杀</el-menu-item>
			<el-submenu index="3">
				<template slot="title">我的工作台</template>
				<el-menu-item index="2-1">选项1</el-menu-item>
				<el-menu-item index="2-2">选项2</el-menu-item>
				<el-menu-item index="2-3">选项3</el-menu-item>
				<el-submenu index="2-4">
					<template slot="title">选项4</template>
					<el-menu-item index="2-4-1">选项1</el-menu-item>
					<el-menu-item index="2-4-2">选项2</el-menu-item>
					<el-menu-item index="2-4-3">选项3</el-menu-item>
				</el-submenu>
			</el-submenu>
			<el-menu-item index="4" disabled>个人中心</el-menu-item>
			<el-menu-item index="5"><login/></el-menu-item>
<!--			<login/>-->
		</el-menu>
	</div>
</template>

<script>
	import SearchMain from '@/components/search/SearchMain'
	import logo from '@/components/logo/logo'
	import login from '@/components/login/login'
	export default {
		name: 'NavbarMain',
		components: {
			SearchMain,logo,login
		},
		data() {
			return {
				activeIndex: '1',
				activeIndex2: '1'
			}
		},
		methods: {
			handleSelect(key, keyPath) {
				console.log(key, keyPath)
			}
		}
	}
</script>

<style scoped>
	.navmain {
		background-color: #69B170;
		display: flex;
		justify-content: space-between;
		align-items: center
	}
</style>