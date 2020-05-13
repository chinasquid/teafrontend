<template>
	<div style="">
		<el-table :data="tableData" style="width: 100%" :stripe="true">
			<el-table-column type="expand">
				<template slot-scope="props">
					<el-form label-position="left" class="demo-table-expand">
						<el-form-item label="商品名称">
							<span>{{ props.row.name }}</span>
						</el-form-item>
						<el-form-item label="所属店铺">
							<span>{{ props.row.shop }}</span>
						</el-form-item>
						<el-form-item label="商品 ID">
							<span>{{ props.row.id }}</span>
						</el-form-item>
						<el-form-item label="店铺 ID">
							<span>{{ props.row.shopId }}</span>
						</el-form-item>
						<el-form-item label="商品分类">
							<span>{{ props.row.category }}</span>
						</el-form-item>
						<el-form-item label="店铺地址">
							<span>{{ props.row.address }}</span>
						</el-form-item>
						<el-form-item label="商品描述">
							<span>{{ props.row.desc }}</span>
						</el-form-item>
						<el-form-item>
							<el-button :disabled="{}">商品评价</el-button>
						</el-form-item>
					</el-form>
				</template>
			</el-table-column>
			<el-table-column label="订单编号" prop="id">
			</el-table-column>
			<el-table-column label="商品名称" prop="name">
			</el-table-column>
			<el-table-column label="支付总价" prop="desc">
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
	export default {
		name: 'Finish',
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
				}],
				msg: [
					{
						//订单编号、商品名称、商品类型、购买规格、商品金额、邮费、支付总价、商家名称、快递单号、创建订单时间、支付时间、发货时间、发货地址、收货地址
						id: '111',
						goodsName: 'goodsName1',
						goodsType: 'goodsType1',
						Specifications: 'Specifications1' + 'Specifications2',//数量加类型
						amountOfMoney: 110.0,
						Postage: 10.0,
						TotalPayment: 120.0,
						storeName: 'storeName',
						courierNumber: '315616',
						OrderCreationTime: '2020-5-5',
						paymentTime: '2020-5-5',
						deliveryTime:'2020-5-6',
						deliveryAddress:'北京',
						receivingAddress:'贵州省都匀市********'
					}
				]
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