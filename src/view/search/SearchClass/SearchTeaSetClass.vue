<template>
	<div>
		<div>
			<ul class="teaClass">
				<li @click="changeMaterial('AllMaterial')" :class="{active : 'AllMaterial' === activeMaterial}">
					<a>全部材料类型</a>
				</li>
				<li @click="changeMaterial('CeramicMaterial')" :class="{active : 'CeramicMaterial' === activeMaterial}">
					<a>陶瓷茶具</a>
				</li>
				<li @click="changeMaterial('GlassMaterial')" :class="{active : 'GlassMaterial' === activeMaterial}">
					<a>玻璃茶具</a>
				</li>
				<li @click="changeMaterial('PurpleSandMaterial')" :class="{active : 'PurpleSandMaterial' === activeMaterial}">
					<a>紫砂茶具</a>
				</li>
				<li @click="changeMaterial('OtherMaterial')" :class="{active : 'OtherMaterial' === activeMaterial}">
					<a>其他茶具</a>
				</li>
			</ul>
			<el-divider/>
			<ul class="teaClass">
				<li @click="changePurpose('AllPurpose')" :class="{active : 'AllPurpose' === activePurpose}">
					<a>全部使用类型</a>
				</li>
				<li @click="changePurpose('SelfPurpose')" :class="{active : 'SelfPurpose' === activePurpose}">
					<a>自用</a>
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
			<div style="display: flex;margin-top: 20px;">
				<tea-set-item/>
				<tea-set-item/>
				<tea-set-item/>
				<tea-set-item/>
			</div>
		</div>
	</div>
</template>

<script>
	import TeaSetItem from '@/components/search/SearchItem/TeaSetItem'

	export default {
		name: 'SearchTeaSetClass',
		components: {TeaSetItem},
		component: {TeaSetItem},
		data() {
			return {
				activeMaterial: 'AllMaterial',
				activeBrand: 'AllBrand',
				activePurpose: 'AllPurpose',
				activePrice: 'AllPrice'
			}
		},
		methods: {
			stu() {
				console.log('分页查询----S')
			},
			changeMaterial(MaterialName) {
				this.activeMaterial = MaterialName
			},
			changeBrand(BrandName) {
				this.activeBrand = BrandName
			},
			changePurpose(PurposeName) {
				this.activePurpose = PurposeName
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

</style>