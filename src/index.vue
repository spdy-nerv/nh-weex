<template>
  <div class="container">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png'
    }
  }
}
</script>

<style scoped>
.container {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
}
</style>
