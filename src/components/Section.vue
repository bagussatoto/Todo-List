<template>
  <section class="px-5 py-4 flex w-full justify-between items-center">
    <slot name="start" />
    <slot name="end" />
  </section>
</template>

<script setup>
  
  defineProps({
    borderBottom : {
      type: Boolean
    }
  })
  
</script>