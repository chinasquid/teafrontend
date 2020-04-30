<template>
	<div id="SearchMain">
		<el-input placeholder="请输入内容" v-model.lazy="information" class="input-with-select" >
			<el-select v-model="select" slot="prepend" placeholder="请选择" style="width: 80px">
				<el-option label="综合" :value="all"></el-option>
				<el-option label="商品" :value="goods"></el-option>
				<el-option label="商家" :value="business"></el-option>
			</el-select>
			<el-button slot="append" icon="el-icon-search"  @click="searchAll()"></el-button>
		</el-input>
	</div>
</template>

<script>
	export default {
		name: 'SearchMain',
		data(){
			return {
				information: '',
				select: 'all',
				all:'all',
				goods:'goods',
				business:'business',
				type:'all',
			}
		},
		methods:{
			searchAll(){
				// console.log("发送搜索请求")
			}
		}
	}
</script>

<style scoped>
	.input-with-select{
		width: 560px;
	}
	.el-select .el-input {
		width: 30px;
	}
	.input-with-select .el-input-group__prepend {
		background-color: #fff;
	}
</style>
