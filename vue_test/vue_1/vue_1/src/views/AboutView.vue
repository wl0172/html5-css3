<script setup>
import { useRouter } from 'vue-router';

// 可以通过路由获取参数
// const $router = useRouter();
// console.log('$router:', $router.currentRoute.value);


// 通过history获取参数
// const historyParams = history.state
// console.log('history.state', historyParams)


</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
