<script setup lang="ts">
import { ref, reactive, toRefs  } from 'vue'

//底部tab栏相关
const useTabBar = () => {
    const state = reactive({
        tabBar: [
            {
				title: '首页',
				to: {
					name: 'Home'
				},
				icon: 'home-o'
            },
            {
				title: '分类',
				to: {
					name: 'Category'
				},
				icon: 'apps-o'
            },
            {
				title: '福利票',
				to: {
                	name:'Welfare'
              	},
              	icon: 'gift-o'
            },
            {
				title: '订单',
				to: {
					name:'Orders'
				},
				icon: 'orders-o'
            },
            {
				title: '我的',
				to: {
					name:'About'
				},
				icon: 'user-o'
            }
        ]
    })
    return toRefs(state)
}
const { tabBar } = useTabBar()

const handleChange = (value) => {
    console.log(value,'valueeeeeee');
}

</script>

<template>
  <div class="app-container">
    <div class="layout-content">
      <keep-alive v-if="$route.meta.keepAlive">
        <router-view></router-view>
      </keep-alive>
      <router-view v-else></router-view>
    </div>
    <div class="layout-footer">
      <!-- <TabBar :data="tabBar" @chang="handleChange"></TabBar> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>