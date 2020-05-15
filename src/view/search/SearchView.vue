<template>
	<div style="width: 1200px;margin-left: auto;margin-right:auto;margin-top: 10px;">
		<div class="searchTypeMain">
			<div style="float: left">
				<div class="searchTypeItem" :class="{activeItem: activeName === 'tea'}" @click="changeSearchType('tea')">
					<h4 style="margin: 0" :class="{activeText: activeName === 'tea'}">茶叶搜索</h4>
				</div>
				<div class="searchTypeItem" :class="{activeItem: activeName === 'store'}" @click="changeSearchType('store')">
					<h4 style="margin: 0" :class="{activeText: activeName === 'store'}">商家搜索</h4>
				</div>
			</div>
		</div>
		<div v-if="activeName === 'tea'">
			<search-tea-class ref="teaSearch"/>
		</div>
		<div v-if="activeName === 'store'">
			<search-store-class ref="storeSearch"/>
		</div>
	</div>
</template>

<script>
	import searchStoreClass from '@/view/search/SearchClass/SearchStoreClass'
	import searchTeaClass from '@/view/search/SearchClass/SearchTeaClass'

	export default {
		name: 'SearchView',
		components: {searchTeaClass, searchStoreClass},
		computed: {},
		data() {
			return {
				activeName: 'tea',
				page: 12,
				information:''
			}
		},
		methods: {
			changeSearchType(typeName) {
				this.activeName = typeName
			}
		}
	}
</script>

<style scoped>
	.activeItem {
		border-bottom-style: solid;
		border-bottom-color: #69B170;
	}

	.activeText {
		color: #69B170;
	}

	.searchTypeMain {
		height: 50px;
		border-bottom-color: rgb(220, 223, 230);
		border-bottom-style: solid;
		border-width: 4px;
	}

	.searchTypeItem {
		height: 30px;
		width: 80px;
		display: inline-block;
		margin-right: 20px;
		margin-top: 20px;
		border-width: 4px;
	}

</style>