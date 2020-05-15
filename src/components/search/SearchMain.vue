<template>
	<div id="SearchMain">
		<el-input placeholder="请输入内容" v-model="search_name" class="input-with-select">
			<el-button slot="append" icon="el-icon-search" size="mini" @click="routerToSearch"></el-button>
		</el-input>
	</div>
</template>

<script>
	export default {
		name: 'SearchMain',
		data() {
			return {
				search_name: '',
			}
		}
		,
		methods: {
			routerToSearch() {
				this.$router.push('/searchMain',this.search_name);
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
