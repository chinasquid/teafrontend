<template>
	<div style="text-align: center;margin-top: 20px;">
		<rotation-chart/>
		<recommend/>
		<br>
		<br>
		<img style="width: 1200px;height: 100px" :src="gg">
		<br>
		<br>
		<business-special-area special-name="店铺专区"/>
		<business-special-area special-name="店铺专区"/>
	</div>
</template>

<script>
	import RotationChart from '@/components/rotationchart/RotationChart'
	import Recommend from '@/components/recommend/Recommend'

	import BusinessSpecialArea from '@/components/specialarea/BusinessSpecialArea'

	export default {
		name: 'home',
		components: {
			RotationChart,
			Recommend,
			BusinessSpecialArea,
		},
		data() {
			return {
				imgs: [
					require('@/assets/rotation3.jpg'),
					require('@/assets/rotation2.jpg'),
					require('@/assets/rotation3.jpg'),
					require('@/assets/rotation4.jpg'),
					require('@/assets/rotation5.jpg'),],
				gg: require('@/assets/gg.jpg'),
				img: require('@/assets/logo1.png'),
				activeName: 'first'
			}
		},
		methods: {
			handleClick(tab, event) {
				console.log(tab, event)
			}
		}
	}
</script>

<style scoped>

</style>