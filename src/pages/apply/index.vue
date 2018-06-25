<template>
	<div class="container">
		<text @click="clickDiv">{{code}}</text>
		<input type="text" name="code" v-model="code" placeholder="编码" />
	</div>
</template>

<script>
export default {
	data() {
		return {
			code: '666'
		}
	},

	mounted () {
		this.code = 'apply id: ' + this.$route.query.id
	},

	methods: {
		clickDiv () {
			this.code = 'clicked'
		}
	}
}
</script>

<style scoped>

</style>
