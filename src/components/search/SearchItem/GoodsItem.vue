<template>
	<div class="item">
		<img style="width: 240px;height: 160px; margin-top: 10px;" :src="goods" />
		<div>
			<el-link type="danger" style="color:salmon;margin-top: 10px;margin-bottom: 10px;font-size: 18px;">【2020春茶 助农好茶】
			</el-link>
		</div>
		<div>
			<span style="font-size: 14px;">醉品茶集  西湖龙井 2020年春茶 雨前1号 一级 极简牛皮纸方包 250g/包</span>
		</div>
		<div style="margin: 10px;">
			<span><el-link type="danger" style="float: left">醉品茶城旗舰店</el-link></span>
		</div>
		<br>
		<div style="margin-top: 20px;">
			<el-link type="danger" style="color:salmon;margin-bottom: 10px;font-size: 22px;">
				￥：110
			</el-link>
		</div>
		<div class="block">
			<el-rate
				v-model="value2"
				:colors="colors"
				disabled :show-score={showScore}>
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
				value2: 3.7,
				colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
				showScore: true,
				goods:require('@/assets/goodsitem.jpg')
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
		height: 440px;
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