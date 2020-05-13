<template>
	<div style="width: 100%;height: 440px;">
		<div class="special">
			<div style="width: 780px;border-style: solid;border-color: #BDBDBD;height: 440px;display: inline-block">
				<div style="width: 780px;">
					<h3 style="margin-top: auto;">{{specialName}}</h3>
				</div>
				<div class="special-left">
					<ul class="special-left-ul">
						<li>
							<div class="special-item">
								<hover-view
									:hov-tittle="tittle" :hov-height="heightNum"
									:hov-describe="describe"/>
							</div>
						</li>
						<li>
							<div class="special-item">
								<hover-view
									:hov-tittle="tittle" :hov-height="heightNum"
									:hov-describe="describe"/>
							</div>
						</li>
						<li>
							<div class="special-item">
								<hover-view
									:hov-tittle="tittle" :hov-height="heightNum"
									:hov-describe="describe"/>
							</div>
						</li>
					</ul>
					<ul class="special-left-ul" style="margin-top: 20px;">
						<li>
							<div class="special-item">
								<hover-view
									:hov-tittle="tittle" :hov-height="heightNum"
									:hov-describe="describe"/>
							</div>
						</li>
						<li>
							<div class="special-item">
								<hover-view
									:hov-tittle="tittle" :hov-height="heightNum"
									:hov-describe="describe"/>
							</div>
						</li>
						<li>
							<div class="special-item">
								<hover-view
									:hov-tittle="tittle" :hov-height="heightNum"
									:hov-describe="describe"/>
							</div>
						</li>
					</ul>
				</div>
			</div>


			<div class="special-right">
				<div style="border-bottom-style:solid;border-bottom-color: #2c3e50">
					<h3 style="margin-top: 0">排行榜</h3>
				</div>
				<div>
					<div class="special-right-div">
						<span class="number on">1</span>
						<span>店铺名称</span>
					</div>
					<div class="special-right-div">
						<span class="number on">2</span>
						<span>店铺名称</span>
					</div>
					<div class="special-right-div">
						<span class="number on">2</span>
						<span>店铺名称</span>
					</div>
					<div class="special-right-div">
						<span class="number">4</span>
						<span>店铺名称</span>
					</div>
					<div class="special-right-div">
						<span class="number">5</span>
						<span>店铺名称</span>
					</div>
					<div class="special-right-div">
						<span class="number">6</span>
						<span>店铺名称</span>
					</div>
					<div class="special-right-div">
						<span class="number">7</span>
						<span>店铺名称</span>
					</div>
					<div class="special-right-div">
						<span class="number">8</span>
						<span>店铺名称</span>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	import HoverView from '@/components/hoverview/HoverView'

	export default {
		name: 'SpecialArea',
		components: {HoverView},
		component: {
			HoverView
		},
		data() {
			return {
				widthNum: '240px',
				heightNum: '160px',
				tittle: '标题',
				describe: '描述'
			}
		},
		props: ['specialName']
	}
</script>

<style scoped>
	.special {
		width: 1200px;
		height: 440px;
		border-style: solid;
		border-color: #2c3e50;
		margin: auto;
	}

	.special-left {
		width: 780px;
		height: 380px;
		border-style: solid;
		border-color: green;
		padding: 0;
		text-align: center;
		margin-top: 0;
	}

	.special-left-ul {
		display: flex;
		padding: 0;
		margin: auto;
		justify-content: left;
		flex-direction: row;
	}

	.special-left-ul li {
		list-style: none;
		border-color: #d3dce6;
		border-style: solid;
		margin-right: 20px;
		width: 240px;
		height: 160px;
	}

	.special-right {
		float: right;
		border-style: solid;
		border-color: bisque;
		width: 400px;
		height: 440px;
		display: inline-block;
	}

	.special-right-div {
		background-color: linen;
		width: 400px;
		height: 40px;
		margin-top: 6px;
		text-align: left;
		line-height: 40px;
	}
	.number{
		color: #999;
		background: #fff;
		width: 20px;
		height: 20px;
		font-size: 14px;
		text-align: center;
		line-height: 18px;
		border-radius: 5px;
		display: inline-block;
		margin-right: 20px;
		margin-left: 10px;
	}
	.on{
		color: #fff;
		background: #00a1d6;
	}
	.special-item {
	}
</style>