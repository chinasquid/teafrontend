<template>
	<div style="text-align: center">
		<rotation-chart/>
		<recommend/>
		<br>
		<div style="width: 300px;height: 300px;background-color: red">
			<hover-view :hov-img-url="imgs[0]" hov-tittle="标题" hov-height="180px" hov-width="140px" hov-describe="asdasdasd"/>
		</div>
	</div>
</template>

<script>
	import RotationChart from '@/components/rotationchart/RotationChart'
	import Recommend from '@/components/recommend/Recommend'
	import HoverView from '@/components/hoverview/HoverView'

	export default {
		name: 'home',
		components: {
			RotationChart,
			Recommend,
			HoverView
		},
		data() {
			return {
				imgs: [
					require('@/assets/rotation3.jpg'),
					require('@/assets/rotation2.jpg'),
					require('@/assets/rotation3.jpg'),
					require('@/assets/rotation4.jpg'),
					require('@/assets/rotation5.jpg'),]
			}
		},
	}
</script>

<style scoped>

</style>