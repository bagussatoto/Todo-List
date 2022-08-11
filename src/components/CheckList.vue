<style scoped>
  
  @keyframes swipe-up {
    from {
      transform: translateY(200%) scale(.75);
    }
    to {
      transform: translateY(0) scale(1);
    }
  }
  
  .swipe-up {
    animation: swipe-up .35s ease-in-out forwards;
  }
</style>
<template>
  <section class="swipe-up mb-4 flex justify-between gap-5 items-start">
    <div>
      <i class="p-2 bg-green-200 rounded-full text-green-800 fa fa-check"></i>
    </div>
    <div>
      <p class="font-medium text-lg">
        Learning and hands on session on building design system
      </p>
      <small class="text-gray-600">
        Wed, 25th July | 3 hours session 
      </small>
    </div>
  </section>
</template>