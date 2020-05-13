<template>
	<div>
		<div>
			<ul class="teaClass">
				<li @click="changeTea('AllTea')" :class="{active : 'AllTea' === activeTea}">
					<a>全部茶叶</a>
				</li>
				<li @click="changeTea('GreenTea')" :class="{active : 'GreenTea' === activeTea}">
					<a>绿茶</a>
				</li>
				<li @click="changeTea('RedTea')" :class="{active : 'RedTea' === activeTea}">
					<a>红茶</a>
				</li>
				<li @click="changeTea('BlackTea')" :class="{active : 'BlackTea' === activeTea}">
					<a>黑茶</a>
				</li>
				<li @click="changeTea('WriteTea')" :class="{active : 'WriteTea' === activeTea}">
					<a>白茶</a>
				</li>
				<li @click="changeTea('YellowTea')" :class="{active : 'YellowTea' === activeTea}">
					<a>黄茶</a>
				</li>
				<li @click="changeTea('Oolong ')" :class="{active : 'Oolong ' === activeTea}">
					<a>乌龙茶</a>
				</li>
			</ul>
			<el-divider/>
			<ul class="teaClass">
				<li @click="changeVarieties('AllVarieties')" :class="{active : 'AllVarieties' === activeVarieties}">
					<a>全部品种</a>
				</li>
				<li @click="changeVarieties('Varieties1')" :class="{active : 'Varieties1' === activeVarieties}">
					<a>龙井</a>
				</li>
				<li @click="changeVarieties('Varieties2')" :class="{active : 'Varieties2' === activeVarieties}">
					<a>正山小种</a>
				</li>
				<li @click="changeVarieties('Varieties3')" :class="{active : 'Varieties3' === activeVarieties}">
					<a>云南滇红</a>
				</li>
				<li @click="changeVarieties('Varieties4')" :class="{active : 'Varieties4' === activeVarieties}">
					<a>祁门红茶</a>
				</li>
				<li @click="changeVarieties('Varieties5')" :class="{active : 'Varieties5' === activeVarieties}">
					<a>寿眉</a>
				</li>
				<li @click="changeVarieties('Varieties6')" :class="{active : 'Varieties6' === activeVarieties}">
					<a>乌龙茶</a>
				</li>
			</ul>
			<el-divider/>
			<ul class="teaClass">
				<li @click="changeBrand('AllBrand')" :class="{active : 'AllBrand' === activeBrand}">
					<a>全部品牌</a>
				</li>
				<li @click="changeBrand('Brand1')" :class="{active : 'Brand1' === activeBrand}">
					<a>品牌1</a>
				</li>
				<li @click="changeBrand('Brand2')" :class="{active : 'Brand2' === activeBrand}">
					<a>品牌2</a>
				</li>
				<li @click="changeBrand('Brand3')" :class="{active : 'Brand3' === activeBrand}">
					<a>品牌3</a>
				</li>
				<li @click="changeBrand('Brand4')" :class="{active : 'Brand4' === activeBrand}">
					<a>品牌4</a>
				</li>
				<li @click="changeBrand('Brand5')" :class="{active : 'Brand5' === activeBrand}">
					<a>品牌5</a>
				</li>
				<li @click="changeBrand('Brand6')" :class="{active : 'Brand6' === activeBrand}">
					<a>品牌6</a>
				</li>
			</ul>
			<el-divider/>
			<ul class="teaClass">
				<li @click="changePurpose('AllPurpose')" :class="{active : 'AllPurpose' === activePurpose}">
					<a>全部用途</a>
				</li>
				<li @click="changePurpose('SelfPurpose')" :class="{active : 'SelfPurpose' === activePurpose}">
					<a>自饮</a>
				</li>
				<li @click="changePurpose('HardcoverGiftPurpose')" :class="{active : 'HardcoverGiftPurpose' === activePurpose}">
					<a>精装送礼</a>
				</li>
				<li @click="changePurpose('PaperbackGiftPurpose')" :class="{active : 'PaperbackGiftPurpose' === activePurpose}">
					<a>简装送礼</a>
				</li>
			</ul>
			<el-divider/>
			<ul class="teaClass">
				<li @click="changeSeason('AllSeason')" :class="{active : 'AllSeason' === activeSeason}">
					<a>全部季节</a>
				</li>
				<li @click="changeSeason('SpringSeason')" :class="{active : 'SpringSeason' === activeSeason}">
					<a>春季</a>
				</li>
				<li @click="changeSeason('SummerSeason')" :class="{active : 'SummerSeason' === activeSeason}">
					<a>夏季</a>
				</li>
				<li @click="changeSeason('AutumnSeason')" :class="{active : 'AutumnSeason' === activeSeason}">
					<a>秋季</a>
				</li>
				<li @click="changeSeason('WinterSeason')" :class="{active : 'WinterSeason' === activeSeason}">
					<a>冬季</a>
				</li>
			</ul>
			<el-divider/>
			<ul class="teaClass">
				<li @click="changePrice('AllPrice')" :class="{active : 'AllPrice' === activePrice}">
					<a>全部价格范围</a>
				</li>
				<li @click="changePrice('Price1')" :class="{active : 'Price1' === activePrice}">
					<a>&lt; 100</a>
				</li>
				<li @click="changePrice('Price2')" :class="{active : 'Price2' === activePrice}">
					<a>100-500</a>
				</li>
				<li @click="changePrice('Price3')" :class="{active : 'Price3' === activePrice}">
					<a>&gt; 500</a>
				</li>
			</ul>
			<el-divider/>
		</div>

		<!--		商品推荐-->
		<div style="display: flex;margin-top: 20px;">
			<router-link to="/goodsDetails">
				<goods-item/>
			</router-link>
			<goods-item/>
			<goods-item/>
			<goods-item/>
		</div>
		<div style="display: flex;margin-top: 20px;">
			<goods-item/>
			<goods-item/>
			<goods-item/>
			<goods-item/>
		</div>
		<div style="display: flex;margin-top: 20px;">
			<goods-item/>
			<goods-item/>
			<goods-item/>
			<goods-item/>
		</div>
		<div style="display: flex;margin-top: 20px;">
			<goods-item/>
			<goods-item/>
			<goods-item/>
			<goods-item/>
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
		computed: {},
		data() {
			return {
				activeTea: 'AllTea',
				activeVarieties: 'AllVarieties',
				activeBrand: 'AllBrand',
				activePurpose: 'AllPurpose',
				activeSeason: 'AllSeason',
				activePrice: 'AllPrice'
			}
		},
		methods: {
			stu() {
				console.log('分页查询----S')
			},
			changeTea(TeaName) {
				this.activeTea = TeaName
			},
			changeVarieties(VarietiesName) {
				this.activeVarieties = VarietiesName
			},
			changeBrand(BrandName) {
				this.activeBrand = BrandName
			},
			changePurpose(PurposeName) {
				this.activePurpose = PurposeName
			},
			changeSeason(SeasonName) {
				this.activeSeason = SeasonName
			},
			changePrice(PriceName) {
				this.activePrice = PriceName
			}
		}
	}
</script>

<style scoped>
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