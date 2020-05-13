<template>
	<div style="width: 100%;height: 560px;">
		<div class="tittle" style="width: 1200px;margin: auto">
			<div style="height: 40px;">
				<h2 style="margin-top: auto">【2020春茶 助农好茶】</h2>
			</div>
		</div>
		<div v-if="showType == 'video'">
			<div style="height:400px;display: flex">
				<div style="margin: auto;height:400px;width: 1100px;">
					<div>
						<my-vue-video-player/>
					</div>
				</div>
			</div>
		</div>
		<div v-else-if="showType == 'img'">
			<div style="height:400px;display: flex;">
				<div class="picture" style="margin: auto;width: 1100px;display: flex">
					<div class="picture-left">
						<img style="width: 600px;height: 400px;" :src="imgNow"/>
					</div>
					<div class="picture-right">
						<div style="width: 500px;display: inline-block;height: 300px;">
							<div style="margin-top: 10px;">
								<span style="font-size: 20px;">醉品茶集  西湖龙井 2020年春茶 雨前1号 一级 极简牛皮纸方包 250g/包</span>
							</div>
							<el-divider/>
							<div style="margin: 10px;">
								<span><el-link type="danger" style="float: left">醉品茶城旗舰店</el-link></span>
							</div>
							<br>
							<div style="margin-top: 20px;">
							<span style="color:salmon;font-size: 22px;">
								￥：110
							</span>
							</div>
							<br>
							<div>
							<span style="font-size: 16px;">
								发货地址：贵州
							</span>
							</div>
							<div>
								<span style="margin-right: 20px;">累计销量:1111</span>
								<span>评价数量:1111</span>
							</div>
							<br>
							<div class="block">
								<el-rate
									v-model="value2"
									:colors="colors"
									disabled show-score>
								</el-rate>
							</div>
						</div>
						<br>
						<div class="picture-right-foot" style="width: 500px;">
							<img class="picture-foot-item" @click="changeImg(0)" :src="imgs[0]"/>
							<img class="picture-foot-item" @click="changeImg(1)" :src="imgs[1]"/>
							<img class="picture-foot-item" @click="changeImg(2)" :src="imgs[2]"/>
							<img class="picture-foot-item" @click="changeImg(3)" :src="imgs[3]"/>
						</div>
					</div>
				</div>
			</div>
		</div>

		<br>
		<div>
			<button @click="changeShow('video')">视频</button>
			<button @click="changeShow('img')">图片</button>
		</div>
		<div>
			规格选择:弹窗
		</div>
		<div>
			<el-input-number style="display: inline-block;margin-right: 20px;" v-model="num" :min="1" :max="99" label="购买数量"/>
			<el-button>立即购买</el-button>
			<el-button>加入购物车</el-button>
		</div>
	</div>
</template>

<script>
import myVueVideoPlayer from '@/components/Goods/myVueVideoPlayer'
	export default {
		name: 'GoodsDetailsItem',
		components: {myVueVideoPlayer},
		component:{
			myVueVideoPlayer
		},
		data() {
			return {
				num: 1,
				value2: 3.7,
				colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
				showScore: true,
				imgs: [
					require('@/assets/rotation1.jpg'),
					require('@/assets/rotation2.jpg'),
					require('@/assets/rotation3.jpg'),
					require('@/assets/rotation4.jpg')
				],
				imgNow: require('@/assets/rotation1.jpg'),
				showType: 'video',
				videoUrl:require('@/assets/xc1.mp4'),
				playerOptions: {
					playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
					autoplay: false, //如果true,浏览器准备好时开始回放。
					controls: true, //控制条
					preload: 'auto', //视频预加载
					muted: false, //默认情况下将会消除任何音频。
					loop: false, //导致视频一结束就重新开始。
					language: 'zh-CN',
					aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
					fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
					sources: [{
						type: 'video/mp4',
						src: ''//你所放置的视频的地址，最好是放在服务器上
					}],
					poster: "http://39.106.117.192:8080/static/indexImg.png", //你的封面地址（覆盖在视频上面的图片）
					width: document.documentElement.clientWidth,
					notSupportedMessage: '此视频暂无法播放，请稍后再试' //允许覆盖Video.js无法播放媒体源时显示的默认信息。
				}
			}
		},
		methods: {
			changeImg(num) {
				this.imgNow = this.imgs[num]
			},
			changeShow(typeName) {
				this.showType = typeName
			}
		}
	}
</script>

<style scoped>
	.picture-left {
		width: 600px;
		height: 400px;
		display: inline-block
	}

	.picture-right {
		display: inline-block;
		width: 500px;
	}

	.picture-foot-item {
		width: 90px;
		height: 60px;
		display: inline-block;
		margin-right: 10px;
		border-style: solid;
		border-color: #BDBDBD;
	}
</style>