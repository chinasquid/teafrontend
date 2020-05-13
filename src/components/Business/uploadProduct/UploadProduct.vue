<template>
	<div>
		<el-tabs type="border-card">
			<el-tab-pane label="上传新商品">
				<look-product ref="product"/>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>

import LookProduct from '@/components/Business/uploadProduct/LookProduct'
	export default {
		name: 'UploadProduct',
		components: {LookProduct},
		methods:{
			getGoodsList(){
				this.$refs.product.getGoodsList();
			}
		}
	}
</script>

<style scoped>

</style>