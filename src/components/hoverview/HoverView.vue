<template>
	<div class="recommend" :style="{backgroundImage:'url('+(HovImgUrl ===undefined ? orginImg :HovImgUrl)+')',backgroundSize:'100% 100%',width:HovWidth,height:HovHeight,}">
		<div class="opacity" :style="{width:HovWidth,height:HovHeight}">
			<br>
			<h3 v-text="HovTittle"></h3>
			<br>
			<h3 v-text="HovDescribe"></h3>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'HoverView',
		data() {
			return {
				orginImg:require('@/assets/logo.png')
			}
		},
		props: ['HovImgUrl', 'HovTittle', 'HovDescribe', 'HovWidth', 'HovHeight']
	}
</script>

<style scoped>
	.recommend {
	}

	.opacity {
		opacity: 0;
		text-align: center;
		background-color: #BDBDBD;
		margin: 0;
		padding: 0;
	}

	.opacity:hover {
		opacity: 0.7;
	}

</style>