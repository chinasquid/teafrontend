<template>
	<div>
		<h2 class="PersonalTittle">收货地址</h2>
		<el-button @click="changeOpenActive">新增收货地址</el-button>
		<el-dialog title="新增收货地址" :visible.sync="openAddress" width="30%">
			<form>
				<div>
					<span>收货人</span><input/>
				</div>
				<div>
					<span>所在地区</span><input/>
				</div>
				<div>
					<span>详细地址</span><input/>
				</div>
				<div>
					<span>邮编</span><input/>
				</div>
				<div>
					<span>联系电话</span><input/>
				</div>
			</form>
			<button>确认添加</button>
		</el-dialog>
		<div style="margin-top: 20px;">
			<el-table :data="gridData" stripe max-height="500">
				<el-table-column property="consigneeName" label="收货人" width="150"></el-table-column>
				<el-table-column property="region" label="所在地区" width="200"></el-table-column>
				<el-table-column property="address" label="详细地址"></el-table-column>
				<el-table-column property="postalCode" label="邮编"></el-table-column>
				<el-table-column property="phone" label="联系电话"></el-table-column>
				<el-table-column label="操作" >
					<template slot-scope="scope">
						<el-button @click.native="handleDelete(scope.$index, scope.row)" type="text" size="small">删除</el-button>
						<el-button @click.native="handleDelete(scope.$index, scope.row)" type="text" size="small">设为默认</el-button>
					</template>
				</el-table-column>
			</el-table>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'HarvestAddress',
		data() {
			return {
				openAddress: false,
				gridData: [{
					phone: '2016-05-02',
					consigneeName: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					phone: '2016-05-04',
					consigneeName: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					phone: '2016-05-01',
					consigneeName: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					phone: '2016-05-03',
					consigneeName: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}],
			}
		},
		methods: {
			changeOpenActive() {
				this.openAddress = !this.openAddress
			},
			handleDelete(index, row) {
				console.log(index, row)
			}
		}
	}
</script>

<style scoped>
	.PersonalTittle {
		color: #409EFF
	}
</style>