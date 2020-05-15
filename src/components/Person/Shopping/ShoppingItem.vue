<template>
	<div class="shopItem" :class="{chooseGoodsItemTrue:checkedNow,chooseGoodsItemFalse:!checkedNow}">
		<div style="margin-top: 16px;">
			<div class="shop-goods-item">
				<el-checkbox v-model="checkedNow" @click="show"/>
			</div>
			<div class="shop-goods-item" style="width: 120px;">
				<img :src="'http://localhost:8080/'+information.file_virtual_path" style="width: 120px;height: 90px;margin-top: 5px;"/>
			</div>
			<div class="shop-goods-item" style="width: 100px;">
				<h5>{{information.goods_tittle}}</h5>
			</div>
			<div class="shop-goods-item" style="width: 100px;">
				<h5>{{information.goods_describe}}</h5>
			</div>
			<div class="shop-goods-item" style="width: 80px;">
				<h5>单价:{{information.price}}</h5>
			</div>
			<div class="shop-goods-item" style="width: 110px;">
				<div style="padding-top: 16px;">
					<el-input-number v-model="information.number" style="width: 100px;" size="mini" @change="handleChange" :min="1" :max="99"/>
				</div>
			</div>
			<div class="shop-goods-item" style="width: 100px;">
				<h5>{{nowAllPrice}}</h5>
			</div>
			<div class="shop-goods-item" style="width: 80px;">
				<el-button size="mini" type="danger" @click="deleteGoods" style="display: block;padding: 7px 7px">删除</el-button>
				<el-button size="mini" type="success" @click="buyGoods" style="display: block;padding: 7px 7px;margin-left: 0;margin-top: 10px">
					购买
				</el-button>
				<el-button size="mini" type="primary" @click="saveGoods" style="display: block;padding: 7px 7px;margin-left: 0;margin-top: 10px">
					保存
				</el-button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'ShoppingItem',
		data() {
			return {
				img: require('@/assets/rotation1.jpg'),
				num: 1,
				checkedNow: false,
			}
		},
	props:{
		information:{
			goods_id: '',
			file_virtual_path: '',
			price: '',
			number: 1,
			all_price: '',
			user_id: '',
			goods_tittle:'',
			goods_describe:''
		}
	},computed:{
			nowAllPrice(){
				return this.information.number * this.information.price
			}
		},
		methods: {
			handleChange(value) {
				console.log(value)
			},
			show() {
				console.log(this.checkedNow)
			},
			deleteGoods() {
					this.$axios.post('/deleteShopCarItem',{
						goods_id:this.information.goods_id
					}).then(res=>{
					this.$message({
						message:res.data.msg,
						type:'warning'
					})
				}).catch(err=>{
					console.log(err)
				})
			},
			buyGoods(){

			},
			saveGoods(){
				console.log('???')
				this.$axios.post('/saveShopCarItem',this.information).then(res=>{
					this.$message({
						message:res.data.msg,
						type:'warning'
					})
				}).catch(err=>{
					console.log(err)
				})
			}
		}
	}
</script>

<style scoped>
	h5 {
		margin-top: 20px;
	}

	.chooseGoodsItemTrue {
		box-shadow: 0 2px 10px 0 #1989fa;
	}

	.chooseGoodsItemFalse {
		box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
	}

	.shop-goods-item {
		display: inline-block;
		height: 100px;
		vertical-align: top;
		margin: 0px 5px;
	}

	.shopItem {
		min-height: 120px;
		text-align: left;
		padding-left: 20px;
		padding-bottom: 20px;
		padding-top: 10px;
		margin-bottom: 20px;
		border-radius: 20px;
		background-color: rgb(250, 250, 250);
	}
</style>