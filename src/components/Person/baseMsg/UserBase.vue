<template>
	<div >
		<div style="height: 100px;"></div>
		<el-button type="primary" @click="getBaseMsg">测试</el-button>
		<div style="margin-top: 40px;">
			<el-upload
				class="avatar-uploader"
				action="https://jsonplaceholder.typicode.com/posts/"
				:show-file-list="false"
				:on-success="handleAvatarSuccess"
				:before-upload="beforeAvatarUpload">
				<img v-if="imageUrl" :src="imageUrl" class="avatar">
				<i v-else class="el-icon-plus avatar-uploader-icon"></i>
			</el-upload>
			<div>
				<h3>用户名</h3>
			</div>
			<div>
				<h5>手机号：15286229371</h5>
			</div>
			<div>
				<h4 style="color: #1989fa">是否商家</h4>
			</div>
		</div>

	</div>

</template>

<script>
	export default {
		name: 'UserBase',
		data() {
			return {
				imageUrl: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
			};
		},
		methods: {
			handleAvatarSuccess(res, file) {
				this.imageUrl = URL.createObjectURL(file.raw);
			},
			beforeAvatarUpload(file) {
				const isJPG = file.type === 'image/jpeg';
				const isLt2M = file.size / 1024 / 1024 < 2;

				if (!isJPG) {
					this.$message.error('上传头像图片只能是 JPG 格式!');
				}
				if (!isLt2M) {
					this.$message.error('上传头像图片大小不能超过 2MB!');
				}
				return isJPG && isLt2M;
			},
			getBaseMsg(){
				console.log(this.$confirm.get('user_id'))
				if (this.$confirm.get('user_id') == null){
					this.$router.push('/home')
					this.$message({
						message:"登录过期，请重新登录",
						type:'warning'
					})
				}
				this.$axios.get('/getBaseMsg').then(res=>{
					console.log(res.data)
					if (res.data.status === 1){
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
				}).catch(err=>{
					console.log(err)
				})
			}
		}
	}
</script>

<style scoped>
	.headPicture {
		width: 140px;
		border-style: solid;
		height: 140px;
		border-radius: 90px;
		margin: auto
	}
	avatar-uploader .el-upload {
		border: 1px dashed #d9d9d9;
		border-radius: 6px;
		cursor: pointer;
		position: relative;
		overflow: hidden;
	}
	.avatar-uploader .el-upload:hover {
		border-color: #409EFF;
	}
	.avatar-uploader-icon {
		font-size: 28px;
		color: #8c939d;
		width: 178px;
		height: 178px;
		line-height: 178px;
		text-align: center;
	}
	.avatar {
		width: 178px;
		height: 178px;
		display: block;
	}
</style>