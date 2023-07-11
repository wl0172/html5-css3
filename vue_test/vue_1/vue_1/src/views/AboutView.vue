<script setup>
import { useRouter } from 'vue-router';

// 可以通过路由获取参数
// const $router = useRouter();
// console.log('$router:', $router.currentRoute.value);


// 通过history获取参数
// const historyParams = history.state
// console.log('history.state', historyParams)



{/* <template>
<div ref="parent"style="position: relative: width: 400px; height: 400px;"><div ref="element"style="position: absolute; width: 50px; height: 50px; background-color: red;"></div》
</div>
</template>

<script>
export default {
mounted()(
const element = this.$refs.element;const parent = this.$refs.parent;
setInterval(() => {const parentRect = parent.getBoundingclientRect();const elementRect = element.getBoundingClientRect();
const newX = Math.random() * (parentRect.width - elementRect,width):const newy = Math.random() * (parentRect.height - elementRect.height):

if (newx >= 0 && newx <= parentRect.width - elementRect.wiatn) .element.style.left = $fnewX1px;
if (newy >= 0 8& newy <= parentRect.height - elementRect.height) (
}, 1000); */}

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
