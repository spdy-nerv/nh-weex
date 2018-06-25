<template>
<div v-if="!hasLogined" class="form-wrap">
	<div class="form-item">
		<div class="form-left">帐号：</div>
		<div class="form-right">
			<input type="text" name="account" v-model="account" placeholder="请输入帐号" />
		</div>
	</div>
	<div class="form-item">
		<div class="form-left">密码：</div>
		<div class="form-right">
			<input type="text" name="password" v-model="password" placeholder="请输入密码" />
		</div>
	</div>
	<div>
		<text>{{returnData}}</text>
	</div>

	<div class="btn"><text class="btn-text" @click="doLogin">登录</text></div>
</div>
<div v-else>
	<div>{{userName}}，您好。您已经登录！</div>
	<div class="btn"><text class="btn-text" @click="doLogout">退出登录</text></div>
</div>
</template>

<script>
const Stream = weex.requireModule('stream')
const Storage = weex.requireModule('storage')

export default {
	data () {
		return {
			account: '',
			password: '',
			hasLogined: false,
			returnData: ''
		}
	},

	mounted () {
		let uid = Storage.getItem('userInfo', e => {
			if (e.data != 'undefined' && e.data) {
				this.userName = JSON.parse(e.data).userName
				this.hasLogined = true
			}
		})
	},

	methods: {
		doLogout () {
			Storage.setItem('userInfo', 'undefined', e => {
				this.userName = ''
				this.hasLogined = false
			})	
		},

		doLogin () {
			let that = this
			let data = {
				account: '99901755',
				password: '123456'
			}
			//this.setUserInfo(this.account)
			Stream.fetch({
				method: 'POST',
				//url: 'https://api.ithome.com/json/newslist/news',
				//url: 'http://httpbin.org/post',
				url: 'http://www.smart-ecity.com/rest/services/irp/login',
				type: 'json',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			}, (ret) => {
				if (ret.ok) {
					let userName = ret.data.realName
					let uid = ret.data.smtId
					let jgbm = ret.data.orgId
					this.setUserInfo({
						userName: userName,
						uid: uid,
						jgbm: jgbm
					})
				}
			})
		},

		setUserInfo (info) {
			Storage.setItem('userInfo', JSON.stringify(info), e => {
				this.hasLogined = true
				this.userName = info.userName
			})
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
