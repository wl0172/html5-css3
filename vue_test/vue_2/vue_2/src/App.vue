<script setup lang="ts">
import { ref } from "vue";

import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import router from './router/index';


export type ITest = {
  name: string;
  age: number;
  get getName(): string;
  get getAge(): number;
  addAge(n?: number): void;
  addAge2(n?: number): void;
}














type a = string
const aa:a = 'aaaa'
// console.log( aa );

let tom: [string, number] = ['Tom', 25];
// console.log( tom );

enum Days { Sun, Mon, Tue, Wed, Thu, Fri, Sat };
// console.log( Days );












// div监听事件
const handleInputEvent = (e:any) => {
  console.log(e.target.innerHTML);
}
const handleBlurEvent = (e:any) => {}


</script>

<template>
  <!-- header -->
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>


    
    <div>div：contenteditable</div>
    <div 
      contenteditable="true" 
      style="width: 100px;border: 1px solid;"
      @input="handleInputEvent" @blur="handleBlurEvent">
    </div>

  </header>
  <!-- RouterView -->
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}


.aaaa{
  animation: abc 2s ease-in-out forwards;
}
@keyframes abc {
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(250deg);
  }
}
</style>
