<template>
<div class="form-wrap">
	<template v-for="(ele, index) in elements">
		<div class="form-item" v-if="ele.type == 'input'">
			<div class="form-left"><text>{{ele.name}}</text></div>
			<div class="form-right">
				<input type="text" :name="ele.attrName" v-model="attrList[index].val" :placeholder="ele.placeholder" />
			</div>
		</div>
	</template>
	<div class="form-item">
		<div class="form-left">姓名：</div>
		<div class="form-right">
			<input type="text" name="name" v-model="name" placeholder="请输入您的姓名" />
		</div>
	</div>
	<div class="form-item">
		<div class="form-left">性别：</div>
		<div class="form-right">
			<div class="picker" @click="onPick"><text>{{sexList[sexIndex]}}</text></div>
		</div>
	</div>
	<div class="form-item">
		<div class="form-left">头像：</div>
		<div class="form-right">
			<div class="image-picker" @click="onPickImage">
				<div v-if="imageData">
					<div>asd</div>
				</div>
				<div v-else>请选择图片</div>
			</div>
			<div><text>{{imageData}}</text></div>
		</div>
	</div>

	<div class="btn" @click="showData"><text class="btn-text">确认提交</text></div>
</div>
</template>

<script>
const Picker = weex.requireModule('picker')
//const ImageCropPicker = weex.requireModule('imageCropPicker')
const modal = weex.requireModule('modal')

export default {
	data () {
		return {
			sexList: ['男', '女'],
			sexIndex: 0,
			name: '',
			imageUrl: '',
			imageData: '',
			elements: [],
			/*
				[
					{
						k: 'sex',
						v: '男'
					}
				]
			*/
			attrList: []

		}
	},

	mounted () {
		let asynData = {
			elements: [
				{
					type: 'input',
					name: '性别',
					attrName: 'sex'
				}, {
					type: 'input',
					name: '电话',
					attrName: 'phone'
				}
			]
		}
		this.elements = asynData.elements
		for (let i = 0, j = this.elements.length; i < j; i++) {
			this.attrList.push({
				key: this.elements[i].attrName,
				val: ''
			})
		}
	},

	methods: {
		onPick () {
			Picker.pick({
				index: 0,
				items: this.sexList
			}, event => {
				if (event.result == 'success') {
					this.sexIndex = event.data
					if (!this.imageData) {
						this.imageData = 'haha'
					} else {
						this.imageData = ''
					}
					modal.toast({message: this.imageData})
				}
			})
		},

		onPickImage() {
					if (!this.imageData) {
						this.imageData = 'haha'
					} else {
						this.imageData = ''
					}
					modal.toast({message: this.imageData})
		},

		showData () {
			modal.toast({
				message: JSON.stringify(this.attrNameList)
			})
		},
/*
		onPickImage () {
			ImageCropPicker.openPicker({
				width: 300,
				height: 400,
				cropping: true
			}).then(image => {
				//console.log(image);
				this.imageData = image
			});
			/*
			ImagePicker.showImagePicker({}, response => {
				if (response.didCancel) {
					console.log('User cancelled image picker')
				} else if (response.error) {
					console.log('ImagePicker Error: ', response.error)
				} else if (response.customButton) {
					console.log('User tapped custom button: ', response.customButton)
				} else {
					this.imageUrl = response.uri
					this.imageData = 'data:image/jpeg;base64,' + response.data
				}
			})
			*/
	//	},

		onChangeSex (e) {
			console.log(e);
			var index = +e.mp.detail.value;
			this.sexIndex = index;
		}
	}
}
</script>

<style scoped>
.form-item {
	box-sizing: border-box;
	margin-left: 25px;
	padding: 25px 25px 25px 0;
	border-bottom-width: 1px;
	border-bottom-style: solid;
	border-bottom-color: #cccccc;
	display: flex;
	flex-direction: row;
}

.form-left {
	text-align: right;
	font-size: 28px;
	width: 100px;
}

.form-right {
	flex: 1;
	font-size: 28px;
}

.btn {
	width: 650px;
	padding: 25px 0;
	margin-left: 50px;
	background-color: #e8452f;
	margin-top: 60px;
}

.btn-text {
	width: 600px;
	display: block;
	text-align: center;
	font-size: 32px;
	color: #ffffff;
}

.preview {
	width: 200px;
	height: 200px;
}
</style>
