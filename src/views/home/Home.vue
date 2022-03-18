<script setup lang="ts">
	import { getList } from '@/api/home'
import { log } from 'console'
import { computed, ref } from 'vue'
	import { useRoute, useRouter } from 'vue-router'
	// import { Form, Field, Button, CellGroup  } from 'vant'

    const phone = ref('')

	const route = useRoute()
    const router = useRouter()

	const pattern = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/


	const onSubmit = (value) => {
		getList(value).then(res=> {

			console.log(res,'res');
			
		})
		router.push('/orders')
		console.log(value,'valuevaluevalue');
		
	}

	const onFailed = (error) => {
		console.log(error,'Failed');
	}

    // const store = useStore()
    // const name = computed(() => store.state.userNmae)
    // const handleBtn = () =>{
    //   store.commit('getUserNmae', 'Vue')
    // }

</script>

<template>
	<div>
		<CustomHeader title="首页" />
		<div class="py-20">
			<van-form @submit="onSubmit" @failed="onFailed">
				<van-cell-group  inset>
					<van-field
						v-model="phone" 
						required 
						name="phone"
						label="手机号" 
						placeholder="请输入手机号" 
						:rules="[{ pattern, message: '请输入正确内容' }]" />
				</van-cell-group >
				<div style="margin: 16px;">
					<van-button round block type="primary" native-type="submit">
						查询
					</van-button>
				</div>
			</van-form>
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