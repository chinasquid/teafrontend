<template>
	<div id="SearchMain">
		<el-input placeholder="请输入内容" v-model="information" class="input-with-select">
			<el-button slot="append" icon="el-icon-search" size="mini" @click="routerToSearch"></el-button>
		</el-input>
	</div>
</template>

<script>
	export default {
		name: 'SearchMain',
		data() {
			return {
				information: '',
			}
		}
	,
	methods:{
		searchAll()
		{
			// console.log("发送搜索请求")
		}
	,
		routerToSearch()
		{
			this.$router.push('/search',this.information);
		}
	,
		changeSearchType(typeName) {
			this.$store.commit('changeSearchType', {searchType: typeName})
			console.log(typeName)
		}
	}
	}
</script>

<style scoped>
	.input-with-select {
		width: 480px;
	}

	.el-select .el-input {
		width: 30px;
	}

	.input-with-select .el-input-group__prepend {
		background-color: #fff;
	}
</style>
