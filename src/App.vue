<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>
  <h1>Vue3 Quill Editor 세팅</h1>
  <div class="wrapper">     
      <RouterLink to="/">Home</RouterLink> | 
      <RouterLink to="/modules">AddModules</RouterLink> | 
      <RouterLink to="/basic">BasicExample</RouterLink> | 
      <RouterLink to="/content">ContentType</RouterLink> | 
      <RouterLink to="/form">With Form</RouterLink>
  </div>
  <div>
    <RouterView />
  </div>
  
</template>

<style>
@import '@vueup/vue-quill/dist/vue-quill.snow.css';
@import '@/assets/base.css';

body {
  margin: 20px;
}
</style>
