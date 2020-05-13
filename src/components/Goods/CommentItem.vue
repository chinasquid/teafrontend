<template>
	<div class="CommentMain">
		<div class="avatar" style="height: 140px;width: 100px;">
			<el-avatar shape="square" style="margin-top: 12px;"></el-avatar>
			<h5 style="margin-top: 4px">用户名</h5>
		</div>
		<div style="width: 600px;">
			<div>
				<el-rate
					v-model="value"
					disabled
					show-score
					text-color="#ff9900"
					score-template="{value}" style="margin-top: 10px;">
				</el-rate>
			</div>

			<div>
				<h5 style="font-size: 14px;text-align: left;margin-left: 20px;margin-top: 10px;">评论内容</h5>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'CommentItem',
		data() {
			return {
				value: 3.7
			}
		}
	}
</script>

<style scoped>
	.CommentMain {
		width: 800px;
		border-style: solid;
		border-color: #999999;
		margin: auto;
		height: 120px;
		display: flex;
		background-color: snow;
		margin-top: 20px;
	}
</style>