<template>
	<div style="height: 560px;">
		<div class="picture">
			<div class="picture-left">
				<img style="width: 600px;height: 400px;" :src="imgNow"/>
			</div>
			<div class="picture-right">
				<h2 style="margin-top: auto">【2020春茶 助农好茶】</h2>
				<span style="font-size: 16px;">醉品茶集  西湖龙井 2020年春茶 雨前1号 一级 极简牛皮纸方包 250g/包</span>
				<el-divider/>
				<p style="text-align: left">
					<el-link type="danger" style="">醉品茶城旗舰店</el-link>
				</p>
				<span style="color:salmon;font-size: 30px;">￥：110</span>
				<el-rate v-model="value2" :colors="colors" disabled show-score/>
				<div>
					<el-input-number class="buy" v-model="shopOrder.number" :min="1" :max="99" label="购买数量"/>
					<el-button>立即购买</el-button>
					<el-button>加入购物车</el-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'GoodsDetailsItem',
		components: {},
		data() {
			return {
				num: 1,
				value2: 3.7,
				colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
				showScore: true,
				imgNow: require('@/assets/rotation1.jpg'),
				details: {
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
					img_virtual_path: '',
					price: '',
					number: 1,
					all_price: '',
					user_id: '',
				}
			}
		},
		created() {
			console.log(this.$route.params.id)
			this.$axios.get('/getGoodsDetails', this.$route.params.id).then(res => {
				console.log(res)
			}).catch(err => {
				console.log(err)
			})
		},
		methods: {
			changeImg(num) {
				this.imgNow = this.imgs[num]
			},
			changeShow(typeName) {
				this.showType = typeName
			},
			getItemDetails(id) {
				console.log('???')
				console.log(id)
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