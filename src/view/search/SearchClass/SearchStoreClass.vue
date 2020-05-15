<template>
	<div>
		<div style="width: 600px;margin-left: auto;margin-right: auto;margin-top: 20px;">
			<el-input placeholder="请输入内容" v-model="searchOption.search_name" class="input-with-select">
				<el-button slot="append" icon="el-icon-search" @click="search"/>
			</el-input>
		</div>
		<!--		分类筛选-->
		<div style="margin-top: 20px;">
		<ul class="teaClass">
			<li @click="changeTea('')" :class="{active : '' === searchOption.main_tea_type}">
				<a>全部茶叶</a>
			</li>
			<li @click="changeTea('绿茶')" :class="{active : '绿茶' === searchOption.main_tea_type}">
				<a>绿茶</a>
			</li>
			<li @click="changeTea('红茶')" :class="{active : '红茶' === searchOption.main_tea_type}">
				<a>红茶</a>
			</li>
			<li @click="changeTea('黑茶')" :class="{active : '黑茶' === searchOption.main_tea_type}">
				<a>黑茶</a>
			</li>
			<li @click="changeTea('白茶')" :class="{active : '白茶' === searchOption.main_tea_type}">
				<a>白茶</a>
			</li>
			<li @click="changeTea('黄茶')" :class="{active : '黄茶' === searchOption.main_tea_type}">
				<a>黄茶</a>
			</li>
			<li @click="changeTea('青茶 ')" :class="{active : '青茶 ' === searchOption.main_tea_type}">
				<a>青茶</a>
			</li>
		</ul>
		</div>
		<el-divider/>
		<ul class="teaClass">
			<li @click="changeVariety('')" :class="{active : '' === searchOption.main_tea_variety}">
				<a>全部品种</a>
			</li>
			<li @click="changeVariety('龙井')" :class="{active : '龙井' === searchOption.main_tea_variety}">
				<a>龙井</a>
			</li>
			<li @click="changeVariety('毛尖')" :class="{active : '毛尖' === searchOption.main_tea_variety}">
				<a>毛尖</a>
			</li>
		</ul>
		<el-divider/>
		<ul class="teaClass">
			<li @click="changeStore('')" :class="{active : '' === searchOption.store_type}">
				<a>全部类别</a>
			</li>
			<li @click="changeStore('旗舰店')" :class="{active : '旗舰店' === searchOption.store_type}">
				<a>旗舰店</a>
			</li>
			<li @click="changeStore('专卖店')" :class="{active : '专卖店' === searchOption.store_type}">
				<a>专卖店</a>
			</li>
			<li @click="changeStore('直营店')" :class="{active : '直营店' === searchOption.store_type}">
				<a>直营店</a>
			</li>
			<li @click="changeStore('自营店')" :class="{active : '自营店' === searchOption.store_type}">
				<a>自营店</a>
			</li>
		</ul>
		<el-divider/>
		<div v-for="(storeItem , index) in storeData" :key="index">
			<business-item :information="storeItem"/>
			<el-divider/>
		</div>
		<br>
		<el-pagination
			background
			layout="prev, pager, next"
			:total="total" :page-size=page>
		</el-pagination>
		<el-divider/>
	</div>
</template>

<script>
	import BusinessItem from '@/components/search/SearchItem/BusinessItem'

	export default {
		name: 'SearchStoreClass',
		components: {BusinessItem},
		data() {
			return {
				storeData:[],
				currentPage1: 1,
				page: 12,
				total:0,
				searchOption:{
					search_name:'',
					search_type: '',
					main_tea_type: '',
					main_tea_variety: '',
					main_tea_brand: '',
					purpose: '',
					tea_season: '',
					price: '',
					page: 1,
					size: 12,
					store_type:''
				}
			}
		},
		component: {
			BusinessItem
		},
		created(){
			console.log('???')
			this.search();
		},
		methods: {
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
			},
			changeTea(TeaName) {
				this.searchOption.main_tea_type = TeaName
			},
			changeVariety(BrandName) {
				this.searchOption.main_tea_variety = BrandName
			},
			changeStore(StoreName) {
				this.searchOption.store_type = StoreName
			},
			search(){
				console.log('searchOption'+this.searchOption)
				console.log('main_tea_type:'+this.searchOption.main_tea_type)
				this.$axios.post('/searchStore',this.searchOption).then(res=>{
					if (res.data.status === 1){
						this.total = res.data.body.length
						this.storeData = res.data.body
					}else {
						this.$message({
							message:res.data.msg,
							type:'error'
						})
					}


				}).catch(err=>{
					console.log(err)
				})
			},
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