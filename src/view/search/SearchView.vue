<template>
	<div style="width: 1200px;margin: auto;margin-top: 10px;">
		<div class="searchTypeMain">
			<div style="float: left">
				<router-link to="tea" style="text-decoration: none;color: #2c3e50">
					<div class="searchTypeItem" :class="{activeItem: activeName === 'tea'}" @click="changeSearchType('tea')">
						<h4 style="margin: 0" :class="{activeText: activeName === 'tea'}">茶叶搜索</h4>
					</div>
				</router-link>
				<router-link to="business" style="text-decoration: none;color: #2c3e50">
					<div class="searchTypeItem" :class="{activeItem: activeName === 'brand'}" @click="changeSearchType('brand')">
						<h4 style="margin: 0" :class="{activeText: activeName === 'brand'}">商家搜索</h4>
					</div>
				</router-link>
			</div>
		</div>
		<router-view/>
		<div style="height: 60px;"/>
		<el-pagination
			background
			layout="prev, pager, next"
			:total="1000" :page-size={page} >
		</el-pagination>
	</div>
</template>

<script>

	export default {
		name: 'SearchView',
		components: {},
		computed: {},
		data() {
			return {
				activeName: 'tea',
				page: 12,
			}
		},
		methods: {
			handleClick(tab, event) {
				console.log(tab, event)
			},
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