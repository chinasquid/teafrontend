<template>
	<div class="storeOrigin">
		<a>
			<div class="businessMain" :style="{backgroundImage: 'url('+'http:localhost:8080/'+information.back_img_virtual+')'}">
				<img class="businessImg" :src="information.head_img === null ? img:information.head_img"/>
				<div class="businessDetails">
					<div style="text-align: center;display: flex">
						<a style="font-size: 20px;font-weight: bold;">{{information.user_name}}</a>
						<img :src="storeType" style="width: 80px;height: 20px;margin-left: 10px;">
					</div>
					<div>
						<h5 class="businessType">主营类型：{{information.main_tea_type}} {{information.main_tea_variety}} {{information.main_tea_brand}}</h5>
					</div>
					<div>
						<h5 class="address">发货地址：{{information.address}}</h5>
					</div>
				</div>
			</div>
		</a>
	</div>

</template>

<script>
	export default {
		name: 'BusinessItem',
		data() {
			return {
				img: require('@/assets/logo.png'),
				storeType: require('@/assets/logo1.png'),
				storeBack: require('@/assets/gg2.png'),
			}
		},
		props: {
			information: {
				head_img:String,
				user_name:String,
				main_tea_type:String,
				main_tea_variety:String,
				main_tea_brand:String,
				store_type:String,
				address:String,
				back_img_virtual:String,
			}
		}
	}
</script>

<style scoped>
	a:hover {
		color: #69B170;
	}

	.storeOrigin:hover {
		box-shadow: 3px 2px 1px 1px #BDBDBD;
		transform: scale(1.02);
		transition: 0.2s;

	}

	.businessMain {
		height: 120px;
		display: flex;
		border-bottom-style: solid;
		border-bottom-color: #BDBDBD;
		background-size: 100% 100%;
	}

	.businessImg {
		display: inline-block;
		width: 120px;
		height: 120px;
		margin-left: 10px;
	}

	.businessDetails {
		display: inline-block;
		margin-left: 20px;
		width: 260px;
		margin-top: 4px;
	}

	.businessType {
		overflow: hidden;
		white-space: nowrap;
		text-align: left;
		text-overflow: ellipsis;
		width: 300px;
		height: 20px;
	}

	.address {
		width: 300px;
		height: 10px;
		margin: 0;
		text-align: left
	}
</style>