<template>
	<div class="personalMain">
<!--		<div class="personalItem">-->
<!--			<authentication/>-->
<!--		</div>-->
		<div class="personalItem">
			<update-pwd/>
		</div>
		<div class="personalItem">
			<harvest-address/>
		</div>
	</div>
</template>

<script>
	// import authentication from '@/components/Person/baseMsg/authentication'
	import updatePwd from '@/components/Person/baseMsg/updatePwd'
	import HarvestAddress from '@/components/Person/baseMsg/HarvestAddress'

	export default {
		name: 'PersonalMsg',
		components: {
			// authentication,
			HarvestAddress,
			updatePwd
		}
	}
</script>

<style scoped>

	.personalItem {
		min-height: 120px;
		text-align: left;
		padding-left: 20px;
		padding-bottom: 20px;
		padding-top: 10px;
		border-radius: 20px;
		margin-bottom: 20px;
		box-shadow: 0 2px 10px 0 rgba(0,0,0,0.1);
	}

</style>