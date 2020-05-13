<template>
	<div>
		<!--		分类筛选-->
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
			<li @click="changeBrand('AllBrand')" :class="{active : 'AllBrand' === activeBrand}">
				<a>全部品种</a>
			</li>
			<li @click="changeBrand('Brand1')" :class="{active : 'Brand1' === activeBrand}">
				<a>龙井</a>
			</li>
			<li @click="changeBrand('Brand2')" :class="{active : 'Brand2' === activeBrand}">
				<a>正山小种</a>
			</li>
			<li @click="changeBrand('Brand3')" :class="{active : 'Brand3' === activeBrand}">
				<a>云南滇红</a>
			</li>
			<li @click="changeBrand('Brand4')" :class="{active : 'Brand4' === activeBrand}">
				<a>祁门红茶</a>
			</li>
			<li @click="changeBrand('Brand5')" :class="{active : 'Brand5' === activeBrand}">
				<a>寿眉</a>
			</li>
			<li @click="changeBrand('Brand6')" :class="{active : 'Brand6' === activeBrand}">
				<a>乌龙茶</a>
			</li>
		</ul>
		<el-divider/>
		<ul class="teaClass">
			<li @click="changeStore('AllStore')" :class="{active : 'AllStore' === activeStore}">
				<a>全部类别</a>
			</li>
			<li @click="changeStore('FlagshipStore')" :class="{active : 'FlagshipStore' === activeStore}">
				<a>旗舰店</a>
			</li>
			<li @click="changeStore('ExclusiveStore')" :class="{active : 'ExclusiveStore' === activeStore}">
				<a>专卖店</a>
			</li>
			<li @click="changeStore('DirectStore')" :class="{active : 'DirectStore' === activeStore}">
				<a>直营店</a>
			</li>
			<li @click="changeStore('SelfStore')" :class="{active : 'SelfStore' === activeStore}">
				<a>自营店</a>
			</li>
		</ul>
		<el-divider/>
		<business-item/>
		<el-divider/>
		<business-item/>
		<el-divider/>
		<business-item/>
		<el-divider/>
		<business-item/>
		<el-divider/>
		<business-item/>
		<el-divider/>
		<business-item/>


	</div>
</template>

<script>
	import BusinessItem from '@/components/search/SearchItem/BusinessItem'

	export default {
		name: 'SearchStoreClass',
		components: {BusinessItem},
		data() {
			return {
				page: 12,
				activeTea: 'AllTea',
				activeBrand: 'AllBrand',
				activePurpose: 'AllPurpose',
				activeSeason: 'AllSeason',
				activeStore: 'AllStore'
			}
		},
		component: {
			BusinessItem
		},
		methods: {
			changeTea(TeaName) {
				this.activeTea = TeaName
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
			changeStore(StoreName){
				this.activeStore = StoreName
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

</style>