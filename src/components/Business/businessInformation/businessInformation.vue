<template>
	<div class="Information-Main">
		<div style="text-align: left;padding-left: 20px;">
			<h3 style="padding-top: 20px;">基础信息</h3>
		</div>
		<el-divider/>
		<div style="padding: 20px;">
			<el-button style="margin-bottom: 40px;margin-top: 0" @click="getBusinessInformation">刷新用户信息</el-button>
			<div class="Information-left">
				<el-form label-position="left" label-width="120px" :model="form">
					<el-form-item label="用户名">
						<el-input v-model="form.user_name"/>
					</el-form-item>
					<el-form-item label="手机号码">
						<el-input v-model="form.phone"/>
					</el-form-item>
					<el-form-item label="密码">
						<el-input v-model="form.password"/>
					</el-form-item>
					<el-form-item label="发货地址">
						<el-input v-model="form.address"/>
					</el-form-item>
					<el-form-item label="店铺类型">
						<el-radio-group v-model="form.store_type">
							<el-radio-button label="旗舰店" style="width: 80px;">旗舰店</el-radio-button>
							<el-radio-button label="专卖店" style="width: 80px;">专卖店</el-radio-button>
							<el-radio-button label="直营店" style="width: 80px;">直营店</el-radio-button>
							<el-radio-button label="自营店" style="width: 80px;">自营店</el-radio-button>
						</el-radio-group>
					</el-form-item>
					<el-form-item label="主营业茶叶类型">
						<el-radio-group v-model="form.main_tea_type">
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
					<el-form-item label="主营业茶叶品种">
						<el-input v-model="form.main_tea_variety" maxlength="10" show-word-limit/>
					</el-form-item>
					<el-form-item label="主营业茶叶品牌">
						<el-input v-model="form.main_tea_brand" maxlength="10" show-word-limit/>
					</el-form-item>
				</el-form>
				<el-button type="primary" style="width: 100px;margin: auto" @click="setInformation(form)">保存修改</el-button>
			</div>
		</div>
		<div style="height: 30px;">
		</div>
		<div class="business-backImg">
			<div style="text-align: left">
				<h3 style="margin-left: 20px;">修改店铺搜索背景图</h3>
			</div>
			<el-divider/>
			<el-button style="margin-bottom: 40px;margin-top: 0">刷新图片</el-button>
			<div style="width: 800px;margin: auto;padding-bottom: 20px;">
				<el-upload
					class="avatar-uploader"
					action="http://localhost:8080/uploadStoreBackImg"
					:show-file-list="false"
					:on-success="handleAvatarSuccess"
					:before-upload="beforeAvatarUpload">
					<img style="width: 800px;height: 80px;" v-if="form.back_img_virtual" :src="'htp://localhost:8080/'+form.back_img_virtual" class="avatar">
					<i v-else class="el-icon-plus avatar-uploader-icon"/>
				</el-upload>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "businessInformation",
		data() {
			return {
				imageUrl: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
				isChange: true,
				form:{
					user_name:'',
					phone:'',
					password:'',
					address:'',
					store_type:'',
					main_tea_type:'',
					main_tea_variety:'',
					main_tea_brand:'',
					back_img_virtual:'',
					head_img:''
				}
			}
		}, methods: {
			getBusinessInformation() {
				this.$axios.get('/getBusinessInformation', this.$cookies.get('user_id')).then(res => {
					console.log(res.data)
					if (res.data.status === 1){
						this.form = res.data.body
						this.$message({
							message:res.data.msg,
							type:'success'
						})
					}else {
						this.$message({
							message:res.data.msg,
							type:'error'
						})
					}
				}).catch(err => {
					console.log(err)
				})
			},
			setInformation(form){
				this.$axios.post('/setStoreInformation',form).then(res=>{
					console.log('set-data:#####'+res.data)
					if (res.data.status === 1){
						this.$message({
							message: res.data.msg,
							type:'success'
						})
						this.form = res.data.body
					}else {
						this.$message({
							message: res.data.msg,
							type:'error'
						})
					}
				}).catch(err=>{
					console.log(err)
				})
			},
			handleRemove(file, fileList) {
				console.log(file, fileList);
			},
			handlePreview(file) {
				console.log(file);
			},
			// handleAvatarSuccess(res, file) {
			handleAvatarSuccess(res) {
				// this.imageUrl = URL.createObjectURL(file.raw);
				// this.form.back_img_virtual =
				this.form.back_img_virtual = res.data.body
				console.log('????')
			},
			beforeAvatarUpload(file) {
				const isJPG = file.type === 'image/jpeg';
				const isPNG = file.type === 'image/png';
				const isLt2M = file.size / 1024 / 1024 < 2;
				if (!isJPG && !isPNG) {
					this.$message.error('上传图片只能是 JPG / PNG 格式!');
				}
				if (!isLt2M) {
					this.$message.error('上传图片大小不能超过 2MB!');
				}
				return isJPG && isLt2M;
			}
		},
		created() {
			console.log('cread')
			this.getBusinessInformation()
		}
	}
</script>

<style scoped>
	.Information-Main {
		display: block;
		border-radius: 20px;
		box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
		background-color: rgb(250, 250, 250);
	}

	.Information-left {
		width: 600px;
		margin: auto;
	}

	.business-backImg {

	}

</style>