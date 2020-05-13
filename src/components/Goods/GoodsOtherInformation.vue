<template>
	<div style="width: 1200px; margin: auto">
		<div>
			<button @click="changeShow('details')">商品描述</button>
			<button @click="changeShow('comment')">评论</button>
		</div>
<el-divider/>
		<div v-if="showType == 'details'">
			<div style="width: 800px;height: 300px;border-style: solid;border-color: #69B170;margin: auto;text-align: left">
				<div style="display: inline-block;width:400px;">
					<h3>茶叶品种: 毛尖</h3>
					<h3>售卖规格: 一份</h3>
					<h3>生产许可证:123123456</h3>
				</div>
				<div style="display: inline-block;width:400px;">
					<h3>储存方法:123123456</h3>
					<h3>保质期:123123456</h3>
					<h3>产地:贵州</h3></div>
			</div>
			<img style="margin: auto;border-style: solid;border-color: #999999;width: 1200px;height: 900px;"/>
		</div>
		<div v-else-if="showType == 'comment'" style="width: 1200px;height: 800px;border-style: solid;border-color: #69B170">
			<comment-item/>
			<comment-item/>
			<comment-item/>
			<comment-item/>
		</div>
	</div>
</template>

<script>
	import CommentItem from '@/components/Goods/CommentItem'
	export default {
		name: 'GoodsOtherInformation',
		components:{
			CommentItem
		},
		data() {
			return {
				showType: 'details',

			}
		},
		methods: {
			changeShow(typeName) {
				this.showType = typeName
			}
		}
	}
</script>

<style scoped>

</style>