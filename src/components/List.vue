<style scoped>
  @keyframes swipe {
    from {
      transform: translateX(-100%) scale(.75);
      opacity: .85;
    } to {
      transform: translateX(0) scale(1);
      opacity: 1;
    }
  }
  
  .swipe {
    animation: swipe .35s ease-in-out forwards;
  }
</style>

<template>
  <section @click="tap" class="swipe flex justify-between items-center mb-5">
    <!-- Profile -->
    <div class="w-2/12">
      <img :src="img" class="rounded-full" width="55" />
    </div>
    <div class="flex justify-between items-center w-9/12 border-b-2 border-gray-100 pb-4">
        <!-- Info -->
      <div>
        <h1 class="font-medium text-lg">{{ name }}</h1>
        <div class="text-sm text-gray-500 flex gap-4 mt-1">
          <span>
            <i class="bg-green-200 p-2 rounded-full text-green-700 mr-1 fas fa-chart-line"></i>
            {{ progress }}
          </span>
          <span>
            <i class="bg-indigo-200 p-2 rounded-full text-indigo-700 mr-1 fas fa-video"></i>
            {{ lastMeet }}
          </span>
        </div>
      </div>
      <!-- Action -->
      <div>
        <i class="active:scale-75 duration-300 text-xl fa fa-chevron-right"></i>
      </div>
    </div>
  </section>
</template>

<script setup>
  
  const emits = defineEmits(['tap'])
  //Tap handler
  const tap = () => {
    setTimeout(() => {
      emits('tap')
    }, 350)
  }
  
  //Props
  defineProps({
    name: {
      type: String,
      default: 'Name'
    },
    progress: {
      type: String,
      default: '100%'
    },
    lastMeet: {
      type: String,
      default: 'Yesterday'
    },
    img: {
      type: String,
      default: '/profile.jpg'
    }
  })
  
</script>