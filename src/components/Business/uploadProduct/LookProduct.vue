<template>
	<div>
		<div style="width: 600px;margin:auto">
			<!--			<p>当前时间：{{form.img_id}}</p>-->
			<!--			<p>goodsList：{{goodsList}}</p>-->
			<!--			<el-button type="success" @click="isLogin">是否登录</el-button>-->
			<el-button @click="getTime" v-if="!isCreated">创建新商品</el-button>
			<div v-if="isCreated">
				<el-form ref="form" :model="form" label-width="80px" label-position="left">
					<el-form-item label="商品名称">
						<el-input v-model="form.goods_tittle" maxlength="20" show-word-limit></el-input>
					</el-form-item>
					<el-form-item label="商品描述">
						<el-input v-model="form.goods_describe" type="textarea" maxlength="80" show-word-limit></el-input>
					</el-form-item>
					<el-form-item label="商品封面(必填)">
						<el-upload
							class="upload-main"
							:action="'http://localhost:8080/UploadProductImg/'+this.form.img_id"
							:on-preview="handlePreview"
							:before-remove="beforeRemove"
							accept="image/jpeg,image/png"
							:on-success="uploadImg"
							:limit="1"
							:with-credentials='true'
							:on-exceed="handleMainExceed"
							list-type="picture"
						>
							<el-button size="small" type="primary">点击上传封面</el-button>
							<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过5mb</div>
						</el-upload>
					</el-form-item>
					<el-form-item label="茶叶类型">
						<el-radio-group v-model="form.tea_type">
							<el-radio label="绿茶" style="width: 30px;">绿茶</el-radio>
							<el-radio label="红茶" style="width: 30px;">红茶</el-radio>
							<el-radio label="白茶" style="width: 30px;">白茶</el-radio>
							<el-radio label="黑茶" style="width: 30px;">黑茶</el-radio>
							<el-radio label="黄茶" style="width: 30px;">黄茶</el-radio>
							<el-radio label="青茶" style="width: 30px;">青茶</el-radio>
							<el-radio label="花茶" style="width: 30px;">花茶</el-radio>
							<el-radio label="果茶" style="width: 30px;">果茶</el-radio>
						</el-radio-group>
					</el-form-item>
					<el-form-item label="茶叶品种">
						<el-input v-model="form.tea_variety" maxlength="10" show-word-limit></el-input>
					</el-form-item>
					<el-form-item label="茶叶品牌">
						<el-input v-model="form.tea_brand" maxlength="10" show-word-limit></el-input>
					</el-form-item>
					<el-form-item label="茶叶用途">
						<el-radio-group v-model="form.purpose">
							<el-radio label="自饮">自饮</el-radio>
							<el-radio label="精装送礼">精装送礼</el-radio>
							<el-radio label="简装送礼">简装送礼</el-radio>
						</el-radio-group>
					</el-form-item>
					<el-form-item label="茶叶季节">
						<el-radio-group v-model="form.tea_season">
							<el-radio label="春茶">春茶</el-radio>
							<el-radio label="夏茶">夏茶</el-radio>
							<el-radio label="秋茶">秋茶</el-radio>
							<el-radio label="冬茶">冬茶</el-radio>
						</el-radio-group>
					</el-form-item>
					<el-form-item label="单品价格">
						<el-input-number v-model="form.price" :precision="2" :step="10.0" :max="9999.99" :min="1.01"/>
					</el-form-item>
					<el-form-item label="邮费">
						<el-input-number v-model="form.post" :precision="2" :step="1.0" :max="99.9" :min="0"/>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="creatGoodsItem" :disabled="!creatStatus">立即保存</el-button>
						<el-button @click="CreatedEnd">取消</el-button>
					</el-form-item>
				</el-form>
			</div>
		</div>
		<el-divider/>
		<div style="display: flex;margin-bottom:20px;margin-left: 10px;">
			<el-button type="primary" @click="getGoodsList">刷新商品列表</el-button>
		</div>
		<div>

		</div>
		<div style="margin-bottom: 14px" v-for="(goodsItem,index) in goodsList" :key="goodsItem">
			<div style="background-color: rgb(245,245,245);height: 110px;display:flex">
				<img class="goodsImg" :src="'http://localhost:8080/'+goodsItem.file_virtual_path"/>
				<div style="width: 100px;height: 100px;">
					<h5>{{goodsItem.goods_tittle}}</h5>
				</div>
				<div style="width: 120px;height: 100px;">
					<h5>{{goodsItem.goods_describe}}</h5>
				</div>
				<div style="width: 80px;height: 100px;">
					<h5>{{goodsItem.tea_type}}</h5>
				</div>
				<div style="width: 100px;height: 100px;">
					<h5>{{goodsItem.tea_variety}}</h5>
				</div>
				<div style="width: 100px;height: 100px;">
					<h5>{{goodsItem.tea_brand}}</h5>
				</div>
				<div style="width: 60px;height: 100px;">
					<h5>{{goodsItem.tea_season}}</h5>
				</div>
				<div style="width: 60px;height: 100px;">
					<h5>{{goodsItem.price}}</h5>
				</div>
				<div style="width: 60px;height: 100px;">
					<h5>{{goodsItem.post}}</h5>
				</div>
				<div>
					<el-button type="warning" style="margin-top: 14px" size="small" @click="goodsItem.show = 1">修改</el-button>
				</div>
			</div>
			<div v-if="goodsItem.show === 1" class="goodsItemDetails">
				<el-form :ref="index" :model="goodsItem" label-width="80px" label-position="left">
					<el-form-item label="商品名称">
						<el-input v-model="goodsItem.goods_tittle" maxlength="20" show-word-limit></el-input>
					</el-form-item>
					<el-form-item label="商品描述">
						<el-input v-model="goodsItem.goods_describe" type="textarea" maxlength="80" show-word-limit></el-input>
					</el-form-item>
<!--					<el-form-item label="商品封面(必填)">-->
<!--						<el-upload-->
<!--							class="upload-main"-->
<!--							:action="'http://localhost:8080/UploadProductImg/'+goodsItem.img_id"-->
<!--							:on-preview="handlePreview"-->
<!--							:before-remove="beforeRemove"-->
<!--							accept="image/jpeg,image/png"-->
<!--							:on-success="updateImg(goodsItem)"-->
<!--							:limit="1"-->
<!--							:with-credentials='true'-->
<!--							:on-exceed="handleMainExceed"-->
<!--							list-type="picture"-->
<!--							:file-list="[{url:'http://localhost:8080/'+goodsItem.file_virtual_path}]"-->
<!--						>-->
<!--							<el-button size="small" type="primary">点击上传封面</el-button>-->
<!--							<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过5mb</div>-->
<!--						</el-upload>-->
<!--					</el-form-item>-->
					<el-form-item label="茶叶类型">
						<el-radio-group v-model="goodsItem.tea_type">
							<el-radio label="绿茶" style="width: 30px;">绿茶</el-radio>
							<el-radio label="红茶" style="width: 30px;">红茶</el-radio>
							<el-radio label="白茶" style="width: 30px;">白茶</el-radio>
							<el-radio label="黑茶" style="width: 30px;">黑茶</el-radio>
							<el-radio label="黄茶" style="width: 30px;">黄茶</el-radio>
							<el-radio label="青茶" style="width: 30px;">青茶</el-radio>
							<el-radio label="花茶" style="width: 30px;">花茶</el-radio>
							<el-radio label="果茶" style="width: 30px;">果茶</el-radio>
						</el-radio-group>
					</el-form-item>
					<el-form-item label="茶叶品种">
						<el-input v-model="goodsItem.tea_variety" maxlength="20" show-word-limit></el-input>
					</el-form-item>
					<el-form-item label="茶叶品牌">
						<el-input v-model="goodsItem.tea_brand" maxlength="20" show-word-limit></el-input>
					</el-form-item>
					<el-form-item label="茶叶用途">
						<el-radio-group v-model="goodsItem.purpose">
							<el-radio label="自饮">自饮</el-radio>
							<el-radio label="精装送礼">精装送礼</el-radio>
							<el-radio label="简装送礼">简装送礼</el-radio>
						</el-radio-group>
					</el-form-item>
					<el-form-item label="茶叶季节">
						<el-radio-group v-model="goodsItem.tea_season">
							<el-radio label="春茶">春茶</el-radio>
							<el-radio label="夏茶">夏茶</el-radio>
							<el-radio label="秋茶">秋茶</el-radio>
							<el-radio label="冬茶">冬茶</el-radio>
						</el-radio-group>
					</el-form-item>
					<el-form-item label="单品价格">
						<el-input-number v-model="goodsItem.price" :precision="2" :step="10.0" :max="9999.99" :min="1.01"/>
					</el-form-item>
					<el-form-item label="邮费">
						<el-input-number v-model="goodsItem	.post" :precision="2" :step="1.0" :max="99.9" :min="0"/>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="updateGoodsDetails(goodsItem)" :disabled="goodsItem.goods_tittle === '' || goodsItem.tea_brand === '' || goodsItem.goods_describe === '' || goodsItem.tea_variety === '' ">立即保存</el-button>
						<el-button @click="goodsItem.show = 0">取消</el-button>
					</el-form-item>
				</el-form>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'LookProduct',
		components: {},
		data() {
			return {
				mainImg: [],
				form: {
					user_id: this.$cookies.get('user_id'),
					goods_tittle: '',
					goods_describe: '',
					tea_type: '绿茶',
					price: 0.01,
					post: 0,
					tea_brand: '',
					purpose: '自饮',
					img_id: '',
					tea_variety: '',
					tea_season: '春茶'
				},
				img: require('@/assets/logo.png'),
				isCreated: false,
				fileList: [],
				goodsList: [],
				uploadImgStatus: false
			}
		},
		computed: {
			creatStatus() {
				return this.uploadImgStatus && this.form.goods_tittle !== '' && this.form.tea_brand !== '' && this.form.goods_describe !== '' && this.form.tea_variety !== '';
			}
		},
		methods: {
			fileChange(file, fileList) {
				this.OtherFiles = fileList
				console.log('fileList' + fileList)
			},
			fileRemove(file, fileList) {
				this.OtherFiles = fileList
			},
			handleMainExceed(file, fileList) {
				this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${fileList.length} 个文件，共选择了 ${fileList.length + fileList.length} 个文件`)
			},
			handleOtherExceed(file, fileList) {
				this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${fileList.length} 个文件，共选择了 ${fileList.length + fileList.length} 个文件`)
			},
			handlePreview(file) {
				console.log('点击' + file)
			},
			beforeRemove(file) {
				return this.$confirm(`确定移除 ${file.name}？`)
			},
			uploadImg() {
				console.log("状态前：" + this.uploadImgStatus)
				console.log("上传成功")
				this.uploadImgStatus = true
				console.log("状态后：" + this.uploadImgStatus)
			},
			getTime() {
				this.isCreated = true
				let hh = new Date().getHours() + ''
				let mf = new Date().getMinutes() + ''
				let ss = new Date().getSeconds() + ''
				this.form.img_id = hh + mf + ss
			}
			,
			CreatedEnd() {
				this.isCreated = false
				this.form.img_id = ''
			},
			creatGoodsItem() {
				this.uploadImgStatus = false
				this.$axios.post('/creatGoodsItem', this.form).then(res => {
					if (res.data.status === 1) {
						this.$message({
							message: res.data.msg,
							type: 'success'
						})
					} else {
						this.$message({
							message: res.data.msg,
							type: 'error'
						})
					}
					this.isCreated = false;
					this.form.img_id = '';
					this.form.goods_tittle = '';
					this.form.goods_describe = '';
					this.form.tea_type = '1';
					this.form.price = 0.01;
					this.form.post = 0;
					this.form.tea_brand = '';
					this.form.purpose = '1';
					this.form.img_id = '';
					this.form.tea_season = '1';
					this.form.tea_variety = ''
				}).catch(err => {
					console.log(err)
				})
			},
			getGoodsList() {
				this.$axios.get('/getGoodsList').then(res => {
					console.log(res.data.body);
					this.goodsList = res.data.body
				}).catch(err => {
					console.log(err)
				})
			},
			updateGoodsDetails(goodsItem) {
				this.$axios.post('/creatGoodsItem', goodsItem).then(res => {
					if (res.data.status === 1) {
						this.$message({
							message: res.data.msg,
							type: 'success'
						})
					} else {
						this.$message({
							message: res.data.msg,
							type: 'error'
						})
					}
					goodsItem.show = 0
				}).catch(err => {
					console.log(err)
				})
			},
			updateImg(goodsItem){
				goodsItem.file_virtual_path = '';
			}
		}
	}
</script>

<style scoped>
	.goodsImg {
		width: 120px;
		height: 90px;
		margin-left: 10px;
		margin-top: 10px;
	}

	.goodsItemDetails {
		/*border-style: solid;*/
		margin-top: 20px;
		width: 800px;
		margin-left: auto;
		margin-right: auto;
		padding: 20px;
		box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
		border-radius: 20px;
	}
</style>