<template>
	<div>
		<div style="min-width: 1200px;	" :style="{width:mainWidth}">
			<div class="Business-left">
				<div class="businessChooseTittle" @click="changeActive(1)" :class="{activeColor: activeNum===1}">
					<h4>基础信息</h4>
				</div>
				<div class="businessChooseTittle" @click="changeActive(2)" :class="{activeColor: activeNum===2}">
					<h4>销售数据</h4>
				</div>
				<div class="businessChooseTittle" @click="changeActive(3)" :class="{activeColor: activeNum === 3}">
					<h4>订单状态</h4>
				</div>
				<div class="businessChooseTittle" @click="changeActive(4)" :class="{activeColor: activeNum === 4}">
					<h4>广告申请</h4>
				</div>
				<div class="businessChooseTittle" @click="GoodsList" :class="{activeColor: activeNum === 5}">
					<h4>商品管理</h4>
				</div>
				<div class="businessChooseTittle" @click="changeActive(6)" :class="{activeColor: activeNum === 6}">
					<h4>消息通知</h4>
				</div>
			</div>
			<div class="Business-center">
				<business-information v-show="activeNum === 1"/>
				<sales-data v-show="activeNum === 2"/>
				<OrderManage v-show="activeNum === 3"/>
				<advert-apply v-show="activeNum === 4" />
				<upload-product v-show="activeNum === 5" ref="productChild"/>
			</div>
			<div class="Business-right">
				<user-base/>
			</div>
		</div>
	</div>
</template>

<script>
	import businessInformation from '@/components/Business/businessInformation/businessInformation'
	import UserBase from '@/components/Person/baseMsg/UserBase'
	import SalesData from '@/components/Business/salesData/SalesData'
	import OrderManage from '@/components/Business/orderManage/OrderManage'
	import AdvertApply from '@/components/Business/advertApply/AdvertApply'
	import UploadProduct from '@/components/Business/uploadProduct/UploadProduct'

	let clientWidth = document.body.clientWidth
	export default {
		name: 'businessView',
		data() {
			return {activeNum: 1}
		},
		components: {
			businessInformation,
			UserBase, SalesData, OrderManage, AdvertApply,UploadProduct
		},
		computed: {
			mainWidth() {
				if (clientWidth <= 1200) {
					return 1200
				} else {
					return clientWidth
				}
			}
		},
		methods: {
			changeActive(num) {
				console.log(num)
				this.activeNum = num
			},
			GoodsList(){
				this.activeNum = 5
				this.$refs.productChild.getGoodsList();

			}
		}
	}
</script>

<style scoped>
	h4 {
		padding-top: 8px;
	}

	.activeColor {
		color: #1989fa;
		border-right-style: solid;
		border-right-color: #1989fa;
	}

	.businessChooseTittle {
		height: 40px;
	}

	.chooseTittle:hover {
		background-color: #f4f6ff;
	}

	.Business-left {
		width: 220px;
		background-color: rgb(250, 250, 250);
		display: table-cell;
		vertical-align: top;
		border-width: 2px;
		box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
	}

	.Business-center {
		display: table-cell;
		vertical-align: top;
		min-width: 800px;
		width: 70.8%;
		padding-left: 20px;
		padding-right: 20px;
		padding-top: 10px;
	}

	.Business-right {
		width: 220px;
		box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
		display: table-cell;
		height: 200px;
		vertical-align: top;
	}
</style>