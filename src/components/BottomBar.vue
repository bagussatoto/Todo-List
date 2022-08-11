<style scoped>
  
  .wrapper {
    @apply bg-white fixed bottom-0 left-0 right-0;
  }
  
  .bottom-bar {
    @apply w-full mx-auto md:w-6/12 lg:w-4/12 xl:w-3/12 px-5 py-3 flex justify-between border-t-2 border-gray-100; 
  }
  
  .menu {
    @apply active:scale-125 duration-300 flex flex-col items-center text-gray-400;
  }
  
  .active {
    @apply text-indigo-600 font-medium;
  }
  
</style>

<template>
  <section class="wrapper">
    <div class="bottom-bar">
      <template v-for="(menu, index) in menus" :key="index">
        <span @click="active = menu.name" class="menu" :class="active === menu.name ? 'active' : ''">
          <i :class="menu.icon" class="text-2xl"></i>
          <small>{{ menu.name }}</small>
        </span>
      </template>
    </div>
  </section>
</template>

<script setup>
  
  import { ref } from 'vue'
  
  const active = ref('Home')
  const menus = [
      {
        name: 'Home',
        icon: 'fa fa-home'
      },
      {
        name: 'Chats',
        icon: 'fas fa-comments'
      },
      {
        name: 'Requests',
        icon: 'fas fa-comment-alt'
      },
      {
        name: 'Settings',
        icon: 'fas fa-cog'
      }
    ]
  
</script>