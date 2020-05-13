<template>
	<div style="text-align: center;">
		<h3>推荐</h3>
		<div class="med">
			<ul>
				<li>
					<hover-view
							:hov-img-url="imgs[1]"
							:hov-tittle="tittle" :hov-height="height"
							:hov-width="width"
							:hov-describe="describe"/>
				</li>
				<li>
					<hover-view
							:hov-img-url="imgs[0]"
							:hov-tittle="tittle" :hov-height="height"
							:hov-width="width"
							:hov-describe="describe"/>
				</li>
				<li>
					<hover-view
						:hov-img-url="imgs[0]"
						:hov-tittle="tittle" :hov-height="height"
						:hov-width="width"
						:hov-describe="describe"/>
				</li>
				<li>
					<hover-view
						:hov-img-url="imgs[0]"
						:hov-tittle="tittle" :hov-height="height"
						:hov-width="width"
						:hov-describe="describe"/>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import HoverView from '@/components/hoverview/HoverView'

	export default {
		name: 'Recommend',
		components: {
			HoverView
		},
		data() {
			return {
				tittle: '标题1',
				height: '160px',
				width: '240px',
				describe: '描述1',
				imgs: [
					require('@/assets/rotation1.jpg'),
					require('@/assets/rotation2.jpg'),
					require('@/assets/rotation3.jpg'),
					require('@/assets/rotation4.jpg'),
					require('@/assets/rotation5.jpg'),]
			}
		}
	}
</script>

<style scoped>
	.med {
		width: 1200px;
		display: flex;
		margin: auto;
		padding: 0;
	}

	ul {
		display: flex;
		justify-content: center;
		flex-direction: row;
		margin: auto;
		padding: 0;
	}

	ul li {
		list-style: none;
		display: block;
		float: left;
		margin: 0;
	}

	.opa {
		width: 140px;
		height: 180px;
		opacity: 0;
		text-align: center;
		background-color: #BDBDBD;
		margin: 0;
		padding: 0;
	}

	.opa:hover {
		opacity: 0.7;
	}

	.recommend {
		height: 180px;
		width: 140px;
		margin-right: 10px;
		margin-left: 10px;
		/*background-repeat: no-repeat;*/
		/*-moz-background-size: 100% 100%;*/
	}

	ul li div img {
		height: 180px;
		width: 140px;
	}
</style>