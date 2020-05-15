<template>
	<div>
		<div class="shopCartHead">
			<div style="margin-left:40px;width: 100%;">
				<div style="display: inline-block;width: 240px;float: left;margin-top: 14px;">
					<h4>商品信息</h4>
				</div>
				<div style="display: inline-block;width: 110px;float: left;margin-top: 14px;">
					<h4>描述</h4>
				</div>
				<div style="display: inline-block;width: 120px;float: left;margin-top: 14px;">
					<h4>单价</h4>
				</div>
				<div style="display: inline-block;width: 100px;float: left;margin-top: 14px;">
					<h4>数量</h4>
				</div>
				<div style="display: inline-block;width: 110px;float: left;margin-top: 14px;">
					<h4>总价</h4>
				</div>
				<div style="display: inline-block;width: 90px;float: left;margin-top: 6px;	">
					<el-button type="primary" @click="getShoppingCarInformation">刷新购物车</el-button>
				</div>
			</div>
		</div>

		<shopping-item v-for="(shopItem,index) in shopList" :key="index" :information = shopItem />


	</div>
</template>

<script>
	import ShoppingItem from '@/components/Person/Shopping/ShoppingItem'

	export default {
		name: 'ShoppingCart',
		components: {
			ShoppingItem
		},
		data(){
			return{
				shopList:[]
			}
		},
		created(){
this.getShoppingCarInformation()
		},
		methods:{
			getShoppingCarInformation(){
				this.$axios('/getShoppingCarInformation').then(res=>{
					console.log(res.data.body)
					this.shopList = res.data.body
				}).catch(err=>{
					err.log
				})
			}
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
		height: 50px;
		border-radius: 10px;
		box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
		background-color: rgb(250, 250, 250);
		margin-bottom: 10px;
	}

</style>