<script lang="ts">
export default {
  name: "RequestLoading",
};
</script>

<script setup lang="ts">
import { vuexStore } from "@/store";
import { computed, defineComponent, reactive, ref, toRefs, watch } from "vue";

let timer = null;

const useLoading = () => {
  const state = reactive({
    loadedText: "加载中...",
    isLoading: computed(() => vuexStore.state.isLoading),
  });
  return toRefs(state);
};
const { loadedText, isLoading } = useLoading() as any;
</script>

<template>
  <div
    v-if="isLoading"
    class="requestLoading position-fixed start-0 top-0 w-100 h-100"
  >
    <div
      class="position-absolute start-50 translate-middle loadingBox text-center"
    >
      <LoadingIcon width="86" height="86" class="loadingIcon" />
      <div class="text-white text-center mt-2 fs-4 h-25">{{ loadedText }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.requestLoading {
  z-index: 99999999;
  background-color: rgba($color: #000000, $alpha: 0.8);
  text-align: center;
  .loadingBox {
    top: 40%;
    left: 40%;
    .loadingIcon {
      animation: rotateIcon 1s infinite;
    }
    @keyframes rotateIcon {
      from {
        transform: rotate(0);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
}
</style>