<template>
	<div>
		<div style="min-width: 1200px;	" :style="{width:mainWidth}">
			<div class="Personal-left">
				<div class="personalChooseTittle" @click="changeActive(1)" :class="{activeColor: activeNum==1}">
					<h4>账号信息</h4>
				</div>
				<div class="personalChooseTittle" @click="changeActive(2)" :class="{activeColor: activeNum == 2}">
					<h4>购物车</h4>
				</div>
				<div class="personalChooseTittle" @click="changeActive(3)" :class="{activeColor: activeNum == 3}">
					<h4>订单状态</h4>
				</div>
				<div class="personalChooseTittle" @click="changeActive(4)" :class="{activeColor: activeNum == 4}">
					<h4>消息通知</h4>
				</div>
			</div>
			<div class="Personal-center">
				<personal-msg v-show="activeNum == 1"/>
				<shopping-cart v-show="activeNum == 2"/>
				<order-for-goods v-show="activeNum == 3"/>
				<notify v-show="activeNum == 4"/>
			</div>
			<div class="Personal-right">
				<user-base/>
			</div>
		</div>
	</div>
</template>

<script>

	import PersonalMsg from '@/components/Person/PersonalMsg'
	import ShoppingCart from '@/components/Person/Shopping/ShoppingCart'
	import OrderForGoods from '@/components/Person/orderForGoods/OrderForGoods'
	import Notify from '@/components/Person/message/Notify'
	import UserBase from '@/components/Person/baseMsg/UserBase'

	let clientWidth = document.body.clientWidth
	export default {
		name: 'PersonView',
		components: {PersonalMsg, ShoppingCart,OrderForGoods,Notify,UserBase},
		data() {
			return {activeNum: 1}
		},
		methods: {
			changeActive(num) {
				console.log(num)
				this.activeNum = num
			}
		},
		computed: {
			mainWidth() {
				if (clientWidth <= 1200) {
					return 1200
				} else {
					return clientWidth
				}
			},
			centerWidth() {
				if (clientWidth <= 1200) {
					return 800
				} else {
					console.log(clientWidth)
					return clientWidth - 400
				}
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

	.personalChooseTittle {
		height: 40px;
	}

	.chooseTittle:hover {
		background-color: #f4f6ff;
	}

	.Personal-left {
		width: 220px;
		background-color: rgb(250, 250, 250);
		display: table-cell;
		vertical-align: top;
		border-width: 2px;
		box-shadow: 0 2px 10px 0 rgba(0,0,0,0.1);
	}

	.Personal-center {
		display: table-cell;
		vertical-align: top;
		min-width: 800px;
		width: 70.8%;
		padding-left: 20px;
		padding-right: 20px;
		padding-top: 20px;
	}

	.Personal-right {
		width: 220px;
		box-shadow: 0 2px 10px 0 rgba(0,0,0,0.1);
		display: table-cell;
		height: 200px;
		vertical-align: top;
	}


</style>