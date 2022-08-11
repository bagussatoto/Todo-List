<template>
  <section class="pb-24">
    <!-- Header -->
    <Section>
      <template v-slot:start>
        <i @click="back" class="active:scale-75 hover:opacity-75 duration-300 text-2xl fa fa-arrow-left"></i>
      </template>
      <template v-slot:end>
        <i class="text-2xl active:scale-75 hover:opacity-75 duration-300 fas fa-ellipsis-v"></i>
      </template>
    </Section>
    
    <!-- Profile -->
    <Section class="border-b-2 border-gray-100 pb-10">
      <template v-slot:start>
        <div class="flex items-start gap-6">
          <img src="/profile.jpg" width="75" class="rounded-full" />
          <div>
            <h1 class="text-2xl font-semibold">William Runnel</h1>
            <p class="text-gray-500">New York, USA</p>
          </div>
        </div>
      </template>
    </Section>
    
    <!-- Your sessions -->
    <Section>
      <template v-slot:start>
        <span>
          <p class="text-xl font-medium text-gray-700">Schedules</p>
          <p class="text-xs text-gray-700">Last sessions : Sun, 23rd July</p>
        </span>
      </template>
      <template v-slot:end>
        <div>
          <button class="text-sm bg-indigo-200 focus:bg-indigo-100 foucs:ring-1 focus:ring-indigo duration-300 p-2 rounded-xl text-indigo-800" type="button">
            <i class="fa fa-plus"></i>
            New sessions
          </button>
        </div>
      </template>
    </Section>
    
    <!-- Empty sessions -->
    <section class="px-5 w-full mb-5">
      <div class="grid place-items-center border-2 border-gray-100 rounded-xl px-5 py-12">
        <p>No sessions scheduled</p>
      </div>
    </section>
    
    <!-- Your progress -->
    <Section>
      <template v-slot:start>
        <div>
          <span class="flex items-center gap-2">
            <h1 class="text-xl font-medium text-gray-700">Progress</h1>
            <span>
              <i class="p-1 mr-1 text-sm rounded-full text-green-600 fa fa-chart-line"></i>
              <small class="text-sm text-green-600">97%</small>
            </span>
          </span>
          <p class="text-xs text-gray-700">Mentoring since : July 2021</p>
        </div>      
      </template>
      <template v-slot:end>
        <div>
          <small class="text-indigo-800 font-medium">
            View detail
            <i class="fa fa-chevron-right"></i>
          </small>
        </div>
      </template>
    </Section>
    
    <!-- History mentoring -->
    <section class="px-5 w-full mb-5">
      <div class="border-2 border-gray-100 rounded-xl px-5 pt-5 pb-1">
        <template v-for="item in 3" :key="item">
          <CheckList />
        </template>
      </div>
    </section>
  </section>
  
  <!-- call to action -->
  <CTA />
</template>

<script setup>
  
  import { useRouter } from 'vue-router'
  import Section from '@/components/Section.vue'
  import CheckList from '@/components/CheckList.vue'
  import CTA from '@/components/CTA.vue'
  
  const router = useRouter()
  const back = () => {
    setTimeout(() => {
      router.go(-1)
    }, 300)
  }
</script>