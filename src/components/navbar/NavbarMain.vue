<template>
	<div id="NavbarMain" class="navmain">
		<logo style=";display:inline-block;padding: 0;margin-top: 0"/>
		<div class="navRight">
			<div style="margin: auto;padding: 0">
				<el-link type="primary" >
				<router-link to="/home" style="text-decoration: none">
					<h3 style="color: #69B170">
						首页
					</h3>
				</router-link>
				</el-link>
			</div>
			<div style="margin: auto;padding: 0" @click="toSearch">
				<el-link type="primary" >
					<h3>
						搜索
					</h3>
				</el-link>
			</div>
			<div style="margin: auto;padding: 0">
				<el-link type="primary">
					<h3>商品秒杀</h3>
				</el-link>
			</div>
			<login style="margin: auto;padding: 0;"/>
		</div>
	</div>
</template>

<script>
	import logo from '@/components/logo/logo'
	import login from '@/components/login/login'

	export default {
		name: 'NavbarMain',
		components: {logo, login
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
			},
			toSearch(){
				this.$router.push('/search');
			}
		}
	}
</script>

<style scoped>
	.navmain {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 60px;
		border-bottom-style: solid;
		border-bottom-color: #BDBDBD;
		box-shadow: 2px 1px 3px 1px #BDBDBD;
	}

	.navCenter {
		border-style: solid;
		border-color: navajowhite;
		margin: auto;
		display: flex;
	}

	.navRight {
		display: flex;
		width: 400px;
		float: right;
		height: 60px;
	}
</style>