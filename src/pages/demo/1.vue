<template>
	<div class="wrap">
		<div class="form-item">
			<div class="form-left">姓名：</div>
			<div class="form-right">
				<input type="text" name="name" v-model="name" placeholder="请输入您的姓名" />
			</div>
		</div>
		
		<div class="form-item">
			<div class="form-left">备注：</div>
			<div class="form-right">
				<textarea name="more" v-model="more" placeholder="请输入更多备注">{{more}}</textarea>
			</div>
		</div>
		
		<div class="btn" @click="onBtnClick"><text class="btn-text">确认提交</text></div>
			
	</div>
</template>

<script>
const Stream = weex.requireModule('stream')

export default {
	data () {
		return {
			// attrName
			name: '',
			more: ''
		}
	},

	mounted () {
		// 根据关联的获取接口构建调用，所依赖的所有接口完成调用后再修改data
		Stream.fetch({
			// 自动生成method
			method: 'POST',
			// 自动生成url
			url: 'bindApi'
			type: 'json',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		}, (ret) => {
			// !!!一定要约定好接口返回的数据结构规范
			if (ret.ok) {
				// 根据绑定字段，进行赋值
				this.name = ret.data.a.c.s
			}
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
