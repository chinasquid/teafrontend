<template>
	<div>
		<div style="width: 600px;margin-left: auto;margin-right: auto;margin-top: 20px;">
			<el-input placeholder="请输入内容" v-model="searchOption.search_name" class="input-with-select">
				<el-button slot="append" icon="el-icon-search" @click="search"/>
			</el-input>
		</div>
		<div style="margin-top: 20px;">
			<ul class="teaClass">
				<li @click="changeTea('')" :class="{active : '' === searchOption.tea_type}">
					<a>全部茶叶</a>
				</li>
				<li @click="changeTea('绿茶')" :class="{active : '绿茶' === searchOption.tea_type}">
					<a>绿茶</a>
				</li>
				<li @click="changeTea('红茶')" :class="{active : '红茶' === searchOption.tea_type}">
					<a>红茶</a>
				</li>
				<li @click="changeTea('黑茶')" :class="{active : '黑茶' === searchOption.tea_type}">
					<a>黑茶</a>
				</li>
				<li @click="changeTea('白茶')" :class="{active : '白茶' === searchOption.tea_type}">
					<a>白茶</a>
				</li>
				<li @click="changeTea('黄茶')" :class="{active : '黄茶' === searchOption.tea_type}">
					<a>黄茶</a>
				</li>
				<li @click="changeTea('青茶 ')" :class="{active : '青茶 ' === searchOption.tea_type}">
					<a>乌龙茶</a>
				</li>
			</ul>
			<el-divider/>
			<ul class="teaClass">
				<li @click="changeVarieties('')" :class="{active : '' === searchOption.tea_variety}">
					<a>全部品种</a>
				</li>
				<li @click="changeVarieties('龙井')" :class="{active : '龙井' === searchOption.tea_variety}">
					<a>龙井</a>
				</li>
				<li @click="changeVarieties('正山小种')" :class="{active : '正山小种' === searchOption.tea_variety}">
					<a>正山小种</a>
				</li>
			</ul>
			<el-divider/>
			<ul class="teaClass">
				<li @click="changeBrand('')" :class="{active : '' === searchOption.tea_brand}">
					<a>全部品牌</a>
				</li>
				<li @click="changeBrand('品牌1')" :class="{active : '品牌1' === searchOption.tea_brand}">
					<a>品牌1</a>
				</li>
				<li @click="changeBrand('品牌2')" :class="{active : '品牌2' === searchOption.tea_brand}">
					<a>品牌2</a>
				</li>
			</ul>
			<el-divider/>
			<ul class="teaClass">
				<li @click="changePurpose('')" :class="{active : '' === searchOption.purpose}">
					<a>全部用途</a>
				</li>
				<li @click="changePurpose('自饮')" :class="{active : '自饮' === searchOption.purpose}">
					<a>自饮</a>
				</li>
				<li @click="changePurpose('精装送礼')" :class="{active : '精装送礼' === searchOption.purpose}">
					<a>精装送礼</a>
				</li>
				<li @click="changePurpose('简装送礼')" :class="{active : '简装送礼' === searchOption.purpose}">
					<a>简装送礼</a>
				</li>
			</ul>
			<el-divider/>
			<ul class="teaClass">
				<li @click="changeSeason('')" :class="{active : '' === searchOption.tea_season}">
					<a>全部季节</a>
				</li>
				<li @click="changeSeason('春茶')" :class="{active : '春茶' === searchOption.tea_season}">
					<a>春茶</a>
				</li>
				<li @click="changeSeason('夏茶')" :class="{active : '夏茶' === searchOption.tea_season}">
					<a>夏茶</a>
				</li>
				<li @click="changeSeason('秋茶')" :class="{active : '秋茶' === searchOption.tea_season}">
					<a>秋茶</a>
				</li>
				<li @click="changeSeason('冬茶')" :class="{active : '冬茶' === searchOption.tea_season}">
					<a>冬茶</a>
				</li>
			</ul>
			<el-divider/>
<!--			<ul class="teaClass">-->
<!--				<li @click="changePrice('')" :class="{active : '' === searchOption.price}">-->
<!--					<a>全部价格范围</a>-->
<!--				</li>-->
<!--				<li @click="changePrice('1')" :class="{active : '1' === searchOption.price}">-->
<!--					<a>&lt; 100</a>-->
<!--				</li>-->
<!--				<li @click="changePrice('2')" :class="{active : '2' === searchOption.price}">-->
<!--					<a>100-500</a>-->
<!--				</li>-->
<!--				<li @click="changePrice('3')" :class="{active : '3' === searchOption.price}">-->
<!--					<a>&gt; 500</a>-->
<!--				</li>-->
<!--			</ul>-->
<!--			<el-divider/>-->
		</div>
		<div>
			<div v-for="(List,listIndex) in goodsList" :key="listIndex" style="display: flex;margin-top: 20px;">
				<div v-for="(goodsItem,index) in List" :key="index">
					<router-link :to="'/goodsDetails/'+goodsItem.id">
						<goods-item :information="goodsItem"/>
					</router-link>
				</div>

			</div>
		</div>
		<br>
		<div class="block">
			<el-pagination
				background
				layout="prev, pager, next"
				:total="total" :page-size="searchOption.size"  @current-change="handleCurrentChange"/>
		</div>
	</div>
</template>

<script>
	import GoodsItem from '@/components/search/SearchItem/GoodsItem'

	export default {
		name: 'SearchClass',
		components: {
			GoodsItem
		},
		computed: {
		},
		created(){
			this.search();
		},
		data() {
			return {
				goodsData: [],
				goodsList:[],
				total:0,
				searchOption: {
					search_name:'',
					search_type: '',
					tea_type: '',
					tea_variety: '',
					tea_brand: '',
					purpose: '',
					tea_season: '',
					price: '',
					page: 1,
					size: 12,
				}
			}
		},
		methods: {
			handleCurrentChange(val) {
				this.searchOption.page = val
				this.search()
			},
			changeTea(TeaName) {
				this.searchOption.tea_type = TeaName
			},
			changeVarieties(VarietiesName) {
				this.searchOption.tea_variety = VarietiesName
			},
			changeBrand(BrandName) {
				this.searchOption.tea_brand = BrandName
			},
			changePurpose(PurposeName) {
				this.searchOption.purpose = PurposeName
			},
			changeSeason(SeasonName) {
				this.searchOption.tea_season = SeasonName
			},
			changePrice(PriceName) {
				this.searchOption.price = PriceName
			},
			search() {
				// this.$axios.post('/getAllGoodsList',this.searchOption).then(res => {
				this.$axios.post('/searchGoods',this.searchOption).then(res => {
					console.log('???')
					if (res.data.status === 1) {
						this.total = res.data.body.length
						this.goodsData = res.data.body;
						let len = this.goodsData.length;
						let temp = 0;
						let list = [];
						for (let i = 0; i < len; i++) {
							list[i] = [];
							for (let j = 0; j < 4 && temp < len; j++) {
								list[i][j] = this.goodsData[temp];
								temp++;
							}
							if (temp >= len){
								break;
							}
						}
						this.goodsList = list
					}
				}).catch(err=>{
					console.log(err)
				})
			}
		}
	}
</script>

<style scoped>
	a{
		color: black;
	}
	li {
		height: 24px;
		border-radius: 4px;
		margin-right: 6px;
	}

	.teaClass {
		display: flex;
		list-style: none;
	}

	.teaClass li {
		padding-left: 10px;
		padding-right: 10px;
	}

	.active {
		color: white;
		background-color: #69B170;
	}

	a:visited {
		color: black;
	}

</style>