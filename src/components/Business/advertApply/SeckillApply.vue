<template>
	<div>
		<div class="Seckill-apply-tittle">
			<h2>商品秒杀申请</h2>
			<h5 style="margin-left: 10px;color: salmon;">必须先查询对应日期的广告位情况，才能进行广告位申请。广告位选择中不可选中，表示该广告位不可申请</h5>
		</div>
		<div class="Seckill-apply-query">
			<h4 style="display: inline-block;margin-right: 20px;">选择申请日期：</h4>
			<el-date-picker v-model="queryNewDate" type="date" placeholder="选择日期" :picker-options="pickerOptions">
			</el-date-picker>
			<el-button style="margin-left: 20px" @click="Seckillstatus" :disabled="seckillActiveIsNull" type="primary">
				查询广告位情况
			</el-button>
		</div>
		<div class="Seckill-apply-body" v-show="SeckillBodyStatus">
			<div>
				<h4 style="display: inline-block;margin-right: 30px;">请选择参与秒杀活动的商品:</h4>
				<el-select v-model="value" placeholder="请选择">
					<el-option
						v-for="item in options"
						:key="item.value"
						:label="item.label"
						:value="item.value" :disabled="item.disable">
					</el-option>
				</el-select>
			</div>
			<div>
				<div>
					<h4 style="display: inline-block">商品活动数量：</h4>
					<el-input-number style="display: inline-block" v-model="activeNum" @change="handleChange" :min="1" :max="99" label="描述文字"></el-input-number>
				</div>
				<div>
					<h4 style="display: inline-block">商品原价：</h4>
					<el-input v-model="originMoney" @change="handleChange" label="商品原价" style="width: 100px;display: inline-block" disabled></el-input>

				</div>
				<div>
					<h4 style="display: inline-block">商品活动单价：</h4>
					<el-input-number style="display: inline-block" v-model="activeMoney" @change="handleChange" :min="1" :max="originMoney-0.01" label="描述文字"></el-input-number>
				</div>
				<div style="margin-top: 20px;">
					<div style="display: flex;width: 400px;margin: auto">
						<el-button style="text-align: center" type="danger">支付金额</el-button>
						<el-button style="margin: auto;" type="primary" :disabled="true">提交申请</el-button>
					</div>
				</div>
				<el-divider/>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'SeckillApply',
		data() {
			return {
				queryNewDate: '',
				queryOldDate: null,
				seckillactive: false,
				pickerOptions: {
					disabledDate(time) {
						return time.getTime() < (Date.now() + 1)
					},
				},
				options: [{
					value: '选项1',
					label: '黄金糕'
				}, {
					value: '选项2',
					label: '双皮奶',
					disable: true
				}, {
					value: '选项3',
					label: '蚵仔煎'
				}, {
					value: '选项4',
					label: '龙须面'
				}, {
					value: '选项5',
					label: '北京烤鸭'
				}],
				value: '',
				activeNum: 1,
				originMoney: 100.00,
				activeMoney: 0.1
			}
		},
		computed: {
			seckillActiveIsNull: {
				get() {
					return this.queryNewDate == null || this.queryNewDate === ''
				}
			},
			SeckillBodyStatus: {
				get() {
					if (this.queryNewDate !== '' && this.queryNewDate !== null) {
						if (this.queryNewDate === this.queryOldDate) {
							return true
						}
					}
					return false
				}
			}
		},
		methods: {
			Seckillstatus() {
				this.queryOldDate = this.queryNewDate
			},
			handleChange(value) {
				console.log(value)
			}
		}
	}
</script>

<style scoped>
	.Seckill-apply-tittle {
		text-align: left;
	}

	.Seckill-apply-query {
		text-align: left;
	}

	.Seckill-apply-body {
		text-align: left;
		border-style: solid;
		border-width: 1px;
		min-width: 800px;
		box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
		border-radius: 20px;
		border-color: #F5F5F5;
		padding-left: 20px;
		padding-top: 10px;
		margin-top: 10px;
	}
</style>