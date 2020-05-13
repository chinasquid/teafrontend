<template>
	<div style="margin-top: 20px;">
		<goods-details-item/>
		<el-divider/>
		<goods-other-information/>
	</div>
</template>

<script>
	import GoodsDetailsItem from '@/components/Goods/GoodsDetailsItem'
	import GoodsOtherInformation from '@/components/Goods/GoodsOtherInformation'

	export default {
		name: 'GoodsView',
		components: {GoodsDetailsItem, GoodsOtherInformation},
	}
</script>

<style scoped>

</style>