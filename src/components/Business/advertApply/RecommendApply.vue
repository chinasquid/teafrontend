<template>

	<div class="recommend-apply-item">
		<div class="recommend-apply-tittle">
			<h2>主页轮播位申请</h2>
			<h5 style="margin-left: 10px;color: salmon;">必须先查询对应日期的广告位情况，才能进行广告位申请。广告位选择中不可选中，表示该广告位不可申请</h5>
		</div>
		<div class="recommend-apply-content">
			<div class="block">
				<h4 style="display: inline-block;margin-right: 20px;">选择申请日期：</h4>
				<el-date-picker v-model="queryNewDate" type="date" placeholder="选择日期" :picker-options="pickerOptions">
				</el-date-picker>
				<el-button style="margin-left: 20px" :disabled="queryDateIsNull" @click="recommendStatus" type="primary">
					查询广告位情况
				</el-button>
			</div>
			<div class="recommend-apply-details" v-show="queryActive">
				<h4 style="display: inline-block;margin-right: 30px;">请选择广告位:</h4>
				<el-select v-model="value" placeholder="请选择">
					<el-option
						v-for="item in options"
						:key="item.value"
						:label="item.label"
						:value="item.value" :disabled="item.disable">
					</el-option>
				</el-select>
				<span style="margin-left: 20px;font-size: 14px;">申请当前广告位需花费金额为：</span>
				<span style="font-size: 20px;color: salmon;font-weight: bold">100.00</span>
				<div>
					<h5>上传广告位图片</h5>
					<el-upload
						class="upload-demo"
						action="https://jsonplaceholder.typicode.com/posts/"
						:on-preview="handlePreview"
						:on-remove="handleRemove"
						:file-list="fileList"
						:limit="1"
						list-type="picture" style="width: 400px;">
						<el-button size="small" type="primary">点击上传</el-button>
						<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
					</el-upload>
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
		name: 'RecommendApply',
		data() {
			return {
				fileList: [{
					name: 'food.jpeg',
					url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
				}, {
					name: 'food2.jpeg',
					url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
				}],
				queryOldDate: null,
				queryNewDate: '',
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
				value: ''
			}
		},
		methods: {
			recommendStatus() {
				this.queryOldDate = this.queryNewDate
			},
			handleRemove(file, fileList) {
				console.log(file, fileList)
			},
			handlePreview(file) {
				console.log(file)
			}
		},
		computed: {
			queryDateIsNull: {
				get() {
					return this.queryNewDate == null || this.queryNewDate === ''
				}
			},
			queryActive: {
				get() {
					return this.queryNewDate === this.queryOldDate
				}
			}
		}
	}
</script>

<style scoped>
	.recommend-apply-item {
		min-width: 800px;
		text-align: left;
		margin-bottom: 20px;
	}

	.recommend-apply-tittle {
		/*margin-left: 10px;*/
	}

	.recommend-apply-content {
		/*margin-left: 20px;*/
		margin-bottom: 20px;
	}

	.recommend-apply-details {
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

	.recommendDetailsShowTrue {
		display: inline-block;
	}

	.recommendDetailsShowfalse {
		display: none;
	}
</style>