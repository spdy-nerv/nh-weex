<template>
<div class="list-wrap">
	<div class="slider-wrap">
		<slider class="slider" interval="3000" auto-play="true">
			<div class="frame" v-for="img in imageList">
				<image class="image" resize="cover" :src="img.src"></image>
			</div>
		</slider>
	</div>
	<div class="cube-wrap">
		<div class="cube-row">
			<div class="cube-big cube-left" @click="gotoApply(applies[0].link)"><text class="cube-text">{{applies[0].name}}</text></div>
			<div class="cube-small" @click="gotoApply(applies[1].link)"><text class="cube-text">{{applies[1].name}}</text></div>
		</div>
		<div class="cube-row">
			<div class="cube-small cube-left" @click="gotoApply(applies[2].link)"><text class="cube-text">{{applies[2].name}}</text></div>
			<div class="cube-big" @click="gotoApply(applies[3].link)"><text class="cube-text">{{applies[3].name}}</text></div>
		</div>
	</div>
	<!--
	<div v-for="a in applies" class="apply-item">
		<div @click="gotoApply(a.link)">{{a.name}}</div>
	</div>
	-->
</div>
</template>

<script>
export default {
	data () {
		return {
			imageList: [
				{ src: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg'},
				{ src: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg'},
				{ src: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg'}
			],
			applies: [
				{
					id: 1,
					name: 'picker演示',
					link: '/pages/form/index'
				}, {
					id: 2,
					name: '登录演示',
					link: '/pages/login/index'
				}, {
					id: 3,
					name: '查询申请',
					link: '/pages/record/index'
				}, {
					id: 4,
					name: 'XX申请',
					link: '/pages/apply/index?id=4'
				}
			]
		}
	},

	methods: {
		gotoApply (link) {
			this.$router.push(link)	
		}
	}
}
</script>

<style scoped>

.slider-wrap {
	width: 750px;
	height: 400px;
	margin-bottom: 25px;
	background-color: #ccc;
}

.slider {
	width: 750px;
	height: 400px;
}

.image {
	width: 750px;
	height: 400px;
}

.frame {
	width: 750px;
	height: 400px;
	position: relative;
}

.cube-row {
	width: 750px;
	display: flex;
	flex-direction: row;
	text-align: center;
	padding: 0 25px;
}

.cube-big {
	height: 200px;
	flex: 3;
	background-color: #ccc;
	margin-bottom: 25px;
}

.cube-text {
	text-align: center;
	line-height: 200px;
}

.cube-small {
	height: 200px;
	flex: 2;
	background-color: #ccc;
	margin-bottom: 25px;
	text-align: center;
	line-height: 200px;
}

.cube-left {
	margin-right: 25px;
}

	.apply-item {
		line-height: 80px;
		font-size: 14px;
		border-width: 1px;
		border-style: solid;
		border-color: red;
		padding: 5px;
		margin-bottom: 10px;
	}
</style>
