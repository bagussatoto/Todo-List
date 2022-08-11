<template>
  <section class="flex justify-between border-2 border-gray-100 px-5 py-4 rounded-xl">
    <p class="w-6/12 text-base font-medium text-gray-500">{{ content }}</p>
    <div class="w-5/12 grid place-items-center">
      <button type="button" class="bg-indigo-600 focus:bg-indigo-400 focus:ring-1 focus:ring-indigo-200 hover:bg-indigo-500 duration-300 text-gray-50 text-sm font-medium p-2 rounded-xl">
        <i :class="icon"></i>
        {{ buttonText }}
      </button>
    </div>
  </section>
</template>

<script setup>
  
  defineProps({
    content: {
      type: String,
      default: "Text content goes here"
    },
    buttonText: {
      type: String,
      default: "Button text"
    },
    icon: {
      type: String,
      default: "fa fa-user"
    }
  })
  
</script>