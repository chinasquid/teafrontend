<template>
	<div>
		<el-tabs type="border-card">
			<el-tab-pane label="已完成"><finish/></el-tab-pane>
			<el-tab-pane label="待收货"><wait-receiving-goods/></el-tab-pane>
			<el-tab-pane label="待商家发货"><wait-deliver-goods/></el-tab-pane>
			<el-tab-pane label="待支付"><wait-pay/></el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
	import Finish from '@/components/Person/orderForGoods/Finish'
	import WaitReceivingGoods from '@/components/Person/orderForGoods/WaitReceivingGoods'
	import WaitPay from '@/components/Person/orderForGoods/WaitPay'
	import WaitDeliverGoods from '@/components/Person/orderForGoods/WaitDeliverGoods'

	export default {
		name: 'OrderForGoods',
		components:{
			Finish,
			WaitReceivingGoods,
			WaitPay,
			WaitDeliverGoods
		},
		data() {
			return {
				tableData: [{
					id: '12987122',
					name: '好滋好味鸡蛋仔',
					category: '江浙小吃、小吃零食',
					desc: '荷兰优质淡奶，奶香浓而不腻',
					address: '上海市普陀区真北路',
					shop: '王小虎夫妻店',
					shopId: '10333'
				}, {
					id: '12987123',
					name: '好滋好味鸡蛋仔',
					category: '江浙小吃、小吃零食',
					desc: '荷兰优质淡奶，奶香浓而不腻',
					address: '上海市普陀区真北路',
					shop: '王小虎夫妻店',
					shopId: '10333'
				}, {
					id: '12987125',
					name: '好滋好味鸡蛋仔',
					category: '江浙小吃、小吃零食',
					desc: '荷兰优质淡奶，奶香浓而不腻',
					address: '上海市普陀区真北路',
					shop: '王小虎夫妻店',
					shopId: '10333'
				}, {
					id: '12987126',
					name: '好滋好味鸡蛋仔',
					category: '江浙小吃、小吃零食',
					desc: '荷兰优质淡奶，奶香浓而不腻',
					address: '上海市普陀区真北路',
					shop: '王小虎夫妻店',
					shopId: '10333'
				}]
			}
		}
	}
</script>

<style scoped>
	.demo-table-expand {
		font-size: 0;
	}
	.demo-table-expand label {
		width: 90px;
		color: #99a9bf;
	}
	.demo-table-expand .el-form-item {
		margin-right: 0;
		margin-bottom: 0;
		width: 50%;
	}
</style>