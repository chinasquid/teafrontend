<template>
	<div>
		<el-tabs type="border-card">
			<el-tab-pane label="已完成"><business-finish/></el-tab-pane>
			<el-tab-pane label="待用户收货"><wait-user-receiving/></el-tab-pane>
			<el-tab-pane label="待确认发货"><confirm-deliver/></el-tab-pane>
			<el-tab-pane label="待用户支付"><wait-user-pay/></el-tab-pane>
		</el-tabs>

	</div>
</template>

<script>
	import businessFinish from '@/components/Business/orderManage/businessFinish'
	import WaitUserReceiving from '@/components/Business/orderManage/WaitUserReceiving'
	import confirmDeliver from '@/components/Business/orderManage/confirmDeliver'
	import WaitUserPay from '@/components/Business/orderManage/WaitUserPay'

	export default {
		name: 'OrderManage',
		components:{
			businessFinish,
			WaitUserReceiving,
			confirmDeliver,
			WaitUserPay
		}
	}
</script>

<style scoped>

</style>