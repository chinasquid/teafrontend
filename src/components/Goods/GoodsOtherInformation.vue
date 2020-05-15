<template>
	<div style="width: 1200px; margin: auto">
		<el-divider/>
		<div>
			<div style="width: 800px;height: 300px;border-style: solid;border-color: #69B170;margin: auto;text-align: left">
				<div style="display: inline-block;width:400px;">
					<h3>茶叶品种: 毛尖</h3>
					<h3>售卖规格: 一份</h3>
					<h3>生产许可证:123123456</h3>
				</div>
				<div style="display: inline-block;width:400px;">
					<h3>储存方法:123123456</h3>
					<h3>保质期:123123456</h3>
					<h3>产地:贵州</h3>
				</div>
				<div style="text-align: left;padding-left: 20px;">
					<p><span style="font-size: 16px;">茶叶类型：绿茶</span></p>
					<p><span style="font-size: 16px;">茶叶品种：毛尖</span></p>
					<p><span style="font-size: 16px;">茶叶品牌：毛尖一号</span></p>
					<div>
						<span style="margin-right: 20px;">累计销量:1111</span>
						<span>评价数量:1111</span>
					</div>
				</div>
			</div>
		</div>
		<div style="width: 1200px;border-style: solid;border-color: #69B170">
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
		components: {
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