export default {
	setGoodsList(context, information) {
		console.log(information)
		this.$axios.get('/getGoodsList').then(res => {
			console.log(res.data)
			if (res.data.status === 1) {
				context.commit('changeGoodsList', res.data.body)
				this.$message({
					message: res.data.msg,
					type: 'success'
				})
			} else {
				this.$message({
					message: res.data.msg,
					type: 'error'
				})
			}
		}).catch(err => {
			console.log(err)
		})
	},
	getGoodsList(context) {
		return context.commit('getGoods')
	}
}