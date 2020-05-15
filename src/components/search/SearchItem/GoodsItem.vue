<template>
	<div class="item">
		<img style="width: 240px;height: 160px; margin-top: 10px;" :src="'http://localhost:8080/'+information.file_virtual_path" />
		<div>
			<el-link type="danger" style="color:salmon;margin-top: 10px;margin-bottom: 10px;font-size: 18px;">{{information.goods_tittle}}
			</el-link>
		</div>
		<div>
			<span style="font-size: 14px;">{{information.goods_describe}}</span>
		</div>
		<div style="margin: 10px;">
			<span><el-link type="danger" style="float: left">{{information.user_name}}</el-link></span>
		</div>
		<br>
		<div style="margin-top: 20px;">
			<el-link type="danger" style="color:salmon;margin-bottom: 10px;font-size: 22px;">
				￥：{{information.price}}
			</el-link>
		</div>
		<div class="block">
			<el-rate
				v-model="information.score"
				:colors="colors"
				disabled :show-score=showScore>
			</el-rate>
		</div>
		<div style="margin-top: 20px;">
			<el-input-number style="width: 100px;display: inline-block" v-model="num" @change="handleChange" :min="1" :max="10" label="购买数量" size="small"></el-input-number>
			<el-button type="success" style="width: 90px;margin-left: 10px;" size="small">加入购物车</el-button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'GoodsItem',
		data() {
			return {
				num: 1,
				colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
				showScore: true,
			}
		},
		props:{
			information:{
				goods_tittle:String,
				goods_describe:String,
				file_virtual_path:String,
				purpose:String,
				tea_type:String,
				tea_variety:String,
				tea_brand:String,
				tea_season:String,
				price:Number,
				post:Number,
				score:Number,
				user_name:String
			}
		},
		methods: {
			handleChange(value) {
				console.log(value)
			}
		}
	}
</script>

<style scoped>
	.item {
		width: 260px;
		height: 410px;
		border-style: solid;
		border-color: darkgray;
		margin-right: 20px;
		margin-left: 20px;
	}

	.item:hover {
		box-shadow: 0px 5px 5px 1px ;
		transform: scale(1.02);
		transition: 0.2s;
	}
</style>