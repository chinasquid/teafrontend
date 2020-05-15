<template>
	<div style="margin-top: 20px;">
		<div style="height: 560px;border-style: solid">
			<div class="picture">
				<div class="picture-left">
					<img style="width: 600px;height: 400px;" :src="imgNow"/>
				</div>
				<div class="picture-right">
					<h2 style="margin-top: auto">{{details.goods_tittle}}</h2>
					<span style="font-size: 16px;">{{details.goods_describe}}</span>
					<el-divider/>
					<p style="text-align: left">
						<el-link type="danger" style="">{{details.user_name}}</el-link>
					</p>
					<span style="color:salmon;font-size: 30px;">{{details.price}}</span>
					<el-rate v-model="value2" :colors="colors" disabled show-score/>
					<div>
						<el-input-number class="buy" v-model="shopOrder.number" :min="1" :max="99" label="购买数量"/>
						<el-button>立即购买</el-button>
						<el-button @click="addToShopCar">加入购物车</el-button>
					</div>
				</div>
			</div>
		</div>
		<goods-other-information/>
	</div>
</template>

<script>
	import GoodsOtherInformation from '@/components/Goods/GoodsOtherInformation'

	export default {
		name: 'GoodsView',
		components: {GoodsOtherInformation},
		created() {
			this.details.goods_id = this.$route.params.id
			this.$axios.get('/getGoodsDetails', {
				params: {
					goods_id: this.details.goods_id
				}
			}).then(res => {
				this.details = res.data.body
				this.shopOrder.goods_id = this.details.goods_id
				this.shopOrder.img_virtual_path = this.details.img_virtual_path
				this.shopOrder.price = this.details.price
			}).catch(err => {
				console.log(err)
			})
		},
		data() {
			return {
				value2: 3.7,
				colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
				showScore: true,
				imgNow: require('@/assets/rotation1.jpg'),
				details: {
					goods_id: '',
					goods_tittle: String,
					goods_describe: String,
					file_virtual_path: String,
					purpose: String,
					tea_type: String,
					tea_variety: String,
					tea_brand: String,
					tea_season: String,
					price: Number,
					post: Number,
					score: Number,
					user_name: String
				},
				shopOrder: {
					goods_id: '',
					file_virtual_path: '',
					price: '',
					number: 1,
					all_price: '',
					user_id: '',
				}
			}
		},
		methods:{
			addToShopCar(){
				this.$axios.get('/isLogin').then(res => {
					if (res.data.status === 1) {
						this.$cookies.set('user_name',res.data.body.user_name)
						this.$cookies.set('user_id',res.data.body.user_id)
						this.$cookies.set('phone',res.data.body.phone)
						this.$cookies.set('user_type',res.data.body.user_type)
						this.shopOrder.all_price = this.shopOrder.price * this.shopOrder.number
						this.shopOrder.goods_id = this.$route.params.id
						this.shopOrder.user_id = this.$cookies.get('user_id')
						this.shopOrder.file_virtual_path = this.details.file_virtual_path
						this.$axios.post('/addToShopCar',this.shopOrder).then(res=>{
							if (res.data.status === 1){
								this.$message({
									message:res.data.msg,
									type:'success'
								})
							}else {
								this.$message({
									message:res.data.msg,
									type:'warning'
								})
							}
						}).catch(err=>{
							console.log(err)
						})
					} else {
						this.$cookies.remove('user_name')
						this.$cookies.remove('user_id')
						this.$cookies.remove('phone')
						this.$cookies.remove('user_type')
						this.$store.commit('signOutSystem')
						this.$message({
							message: '未登录，请先登录再操作！',
							showClose: true
						})
					}
				}).catch(err => {
					console.log(err)
				})

			},
			isLogin() {

			},
		}

	}
</script>

<style scoped>
	.picture {
		margin: auto;
		width: 1100px;
		display: flex
	}

	.picture-left {
		width: 600px;
		height: 400px;
		display: inline-block;

	}

	.picture-right {
		display: inline-block;
		width: 500px;
		margin-top: 40px;
	}

	.picture-foot-item {
		width: 90px;
		height: 60px;
		display: inline-block;
		margin-right: 10px;
		border-style: solid;
		border-color: #BDBDBD;
	}

	.buy {
		display: inline-block;
		margin-right: 20px;
	}
</style>