<template>
	<div>
		<div class="shopCartHead">
			<div style="margin-left:40px;width: 100%">
				<div style="display: inline-block;width: 240px;float: left;margin-top: 8px;">
					<h4>商品信息</h4>
				</div>
				<div style="display: inline-block;width: 110px;float: left;margin-top: 8px;">
					<h4>规格</h4>
				</div>
				<div style="display: inline-block;width: 120px;float: left;margin-top: 8px;">
					<h4>单价</h4>
				</div>
				<div style="display: inline-block;width: 100px;float: left;margin-top: 8px;">
					<h4>数量</h4>
				</div>
				<div style="display: inline-block;width: 110px;float: left;margin-top: 8px;">
					<h4>总价</h4>
				</div>
				<div style="display: inline-block;width: 90px;float: left;margin-top: 8px;	">
					<h4>操作</h4>
				</div>
			</div>
		</div>
		<shopping-item/>
		<shopping-item/>
		<shopping-item/>
		<shopping-item/>
		<shopping-item/>
		<div>
			<el-button type="success">购买已选中</el-button>
		</div>
	</div>
</template>

<script>
	import ShoppingItem from '@/components/Person/Shopping/ShoppingItem'

	export default {
		name: 'ShoppingCart',
		components: {
			ShoppingItem
		}
	}
</script>

<style scoped>
	h4 {
		margin: 0;
		text-align: left;
	}

	.shopCartHead {
		display: block;
		height: 40px;
		border-radius: 10px;
		box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
		background-color: rgb(250, 250, 250);
		margin-bottom: 10px;
	}

</style>