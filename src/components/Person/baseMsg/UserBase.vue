<template>
	<div >
		<div style="height: 100px;"></div>
		<div style="margin-top: 40px;">
			<el-avatar size="large" style="width: 80px;height: 80px;z-index: 1" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
			<div>
				<h3>用户名</h3>
			</div>
			<div>
				<h5>手机号：15286229371</h5>
			</div>
			<div>
				<h4 style="color: #1989fa">已实名认证/未实名认证</h4>
			</div>
		</div>

	</div>

</template>

<script>
	export default {
		name: 'UserBase',
		data() {
			return {

			}
		}
	}
</script>

<style scoped>
	.headPicture {
		width: 140px;
		border-style: solid;
		height: 140px;
		border-radius: 90px;
		margin: auto
	}
</style>