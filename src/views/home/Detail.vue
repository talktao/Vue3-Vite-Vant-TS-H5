<script setup lang="ts">

import { ref } from 'vue'
import { useRoute } from 'vue-router'

    const route = useRoute()
    console.log(route,'route');
    let currentId = ref(0) as any
    currentId = route.params.id //路由跳转id


</script>

<template>
  <div>
    <CustomHeader title="详情" leftIcon="arrow-left" leftText="" />
    详情id为:{{currentId}}
  </div>
</template>



<style lang="scss" scoped>

</style>

