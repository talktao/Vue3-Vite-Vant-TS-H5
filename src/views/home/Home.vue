<script setup lang="ts">
	import { computed, reactive, ref, toRefs } from 'vue'
	
	import logo from '@/assets/logo.png'

	const useShowList = () => {
		const state = reactive({
			list: [
				{title: 'vite'},
				{title: 'rem移动端适配'},
				{title: 'VantUI 组件按需加载'},
				{title: 'Sass 全局样式'},
				{title: 'Vuex 状态管理'},
				{title: 'Pinia 状态管理'},
				{title: 'Axios 封装及接口管理'},
				{title: 'Vue-router'},
				{title: 'vite.config.ts 基础配置'},
				{title: '检查文件中的env路径'},
				{title: '配置 proxy 跨域'},
				{title: '配置 alias 别名'},
				{title: 'Eslint+Pettier 统一开发规范'},
				{title: '批量全局注册公共组件'},
			]
		})
		return toRefs(state)
	}
	const { list }  = useShowList()

</script>

<template>
	<div>
		<CustomHeader title="首页" />
		<div class="py-3 px-3">
			<div class="title py-2 flex-start align-items-center">
				<van-image width="36" :src="logo" />
				<span class="fs-1 px-5">Vue3+TS H5开发模板</span>
			</div>
			<div class="subTitle px-3 fs-3 opacity-50">
				A Vue3 h5 template with Vant UI 
			</div>
		</div>
		<div class="py-5">
			<van-list finished-text="没有更多了">
				<van-cell v-for="(item, index) in list" :key="index" :title="item.title" icon="success" />
			</van-list>
		</div>
	</div>
</template>



<style lang="scss" scoped>
  h1 {
    display: block;
    font-size: 40px;
    text-align: center; 
    padding: 20px 0;
  }
  ul {
    li {
      display: block;
      font-size: 20px;
      padding: 20px 0;
      text-align: center;
    }
  }
</style>