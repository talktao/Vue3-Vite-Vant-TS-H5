<script lang="ts">
export default{
    name: 'CustomHeader'
}
</script>

<script setup lang="ts">
    import { ref } from 'vue'
    import { useRoute, useRouter } from 'vue-router'
    
    interface topTitleProps {
        title?: string,
        leftIcon?: string,
        leftText?: string,
        rightText?: string,
        color?: string
    }

    // 携带默认值的props
    withDefaults(defineProps<topTitleProps>(), {
        title: '',
        leftIcon: 'arrow-left',
        leftText: '',
        rightText: '',
        color: '#333'
    })

    const emit = defineEmits(['clickLeft', 'clickRight'])

    const route = useRoute()
    const router = useRouter()
    const active = ref(0)

    const clickLeft = () => {
      if (window.history.length > 1) {
          router.back();
      } else {
          router.push("/");
      }
    }
    const clickRight = () => {
        emit("clickRight")
    }
</script>

<template>
    <van-sticky>
        <van-nav-bar :title="title" @click-left="clickLeft" @click-right="clickRight" left-arrow>
            <template #left> <van-icon :color="color" size="20" :name="leftIcon" /><span :style="color">{{ leftText }}</span> </template>
            <template @click-right="onClickRight" #right>
                <span :style="color">{{ rightText }}</span>
            </template>
        </van-nav-bar>
    </van-sticky>
</template>



<style lang="scss" scoped>

</style>