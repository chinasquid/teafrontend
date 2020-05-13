<template>
	<div>
		<el-tabs type="border-card">
			<el-tab-pane label="推荐位广告申请"><recommend-apply/></el-tab-pane>
			<el-tab-pane label="商品秒杀位申请"><seckill-apply/></el-tab-pane>
			<el-tab-pane label="广告位申请情况"></el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
	import RecommendApply from '@/components/Business/advertApply/RecommendApply'
	import SeckillApply from '@/components/Business/advertApply/SeckillApply'
	export default {
		name: 'AdvertApply',
		data(){
			return{

			}
		},components:{
			RecommendApply,SeckillApply
		}
	}
</script>

<style scoped>

</style>