<script setup>
const props = defineProps({
  msg: {
    type: String,
    required: true
  },
  handleHelloWorldClick: {
    type: Object,
    required: false,
    default: null,
  },

})

// 组件内事件 - 1
const handleHelloWorldClick = () => {
  console.log(props,'=')
}

console.log(2)

</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>

    <div @click="props.handleHelloWorldClick ? props.handleHelloWorldClick() : handleHelloWorldClick()">HelloWorld事件11</div>

  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
