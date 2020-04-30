<template>
	<el-carousel trigger="click" height="480px">
		<el-carousel-item v-for="item in imgs" :key="item">
			<img :src="item" style="width: 100%">
		</el-carousel-item>
	</el-carousel>
</template>

<script>
	export default {
		name: 'RotationChart',
		data() {
			return {
				urls: ['../../assets/rotation1.jpg', '../../assets/rotation2.jpg'],
				imgs: [require('@/assets/rotation1.jpg'),require('@/assets/rotation2.jpg')]
			}
		}
	}
</script>

<style scoped>
	.el-carousel {
		/*width:50%*/
	}

	.el-carousel__item h3 {
		color: #475669;
		font-size: 14px;
		opacity: 0.75;
		line-height: 150px;
		margin: 0;
	}

	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}

	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
	}
</style>