<template>
	<div style="width: 1200px;margin: auto">
		<el-carousel class="carousel" trigger="click" height="400px">
			<el-carousel-item v-for="item in imgs" :key="item">
				<img :src="item" style="width: 100%">
			</el-carousel-item>
		</el-carousel>
	</div>
</template>

<script>
	export default {
		name: 'RotationChart',
		data() {
			return {
				imgs: [require('@/assets/rotation1.jpg'), require('@/assets/rotation2.jpg')],
				activeName: '1'
			}
		}
	}
</script>

<style scoped>
	.carousel {
		display: inline-block;
		width: 100%;
		border-style: solid;
		border-color: antiquewhite;
	}

	.collapse {
		display: inline-block;
		border-style: solid;
		border-color: rebeccapurple;
		margin: 0;
		width: 400px;
	}

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