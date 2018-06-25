<template>
	<div class="wrap">
		<template v-for="(ele, index) in elements">
			
			<div class="form-item" v-if="ele.type == 'input'">
				<div class="form-left"><text>{{ele.name}}</text></div>
				<div class="form-right">
					<input type="text" :name="ele.attrName" v-model="attrList[index].val" :placeholder="ele.placeholder" />
				</div>
			</div>
		
			<div class="btn" v-if="ele.type == 'button'" @click="onBtnClick"><text class="btn-text">{{ele.name}}</text></div>
		
		</template>
		
			
	</div>
</template>

<script>
const Stream = weex.requireModule('stream')

export default {
	data () {
		return {
			elements: [],
			// 需要进行表单提交的属性列表
			/* [
				 	{
						key: 'phone',
						val: '18697909687',
						bind: 'data.user.phone'
					}
				 ]
			*/
			attrList: []
		}
	},

	mounted () {

		// TODO 伪代码
		// step1. 获取页面的配置信息
		this.getPageConfig()
		// step2. 根据配置信息获取字段的默认值或者选项列表
		.then((page) => {
			this.elements = page.element
			for (let i = 0, j = this.elements.length; i < j; i++) {
				this.attrList.push({
					key: this.elements[i].attrName,
					val: '',
					bind: this.elements[i].bindName
				})
			}

			// 可能有多个接口调用
			return this.getElementRemoteValue()
		})
		// step3. 根据接口返回设置字段的默认值或者选项列表
		.then((arr) => {
			
		})

	},

	methods: {
		// 如果有按钮，则自动生成onBtnClick函数
		onBtnClick () {
			
		}
	}
}
</script>

<style scoped>

</style>
