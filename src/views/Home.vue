<template>
  <section class="pb-24">
    <!-- Section -->
    <Section class="border-b-2 border-gray-100">
      <template v-slot:start>
        <h1 class="text-3xl font-bold">
          <span class="text-indigo-700">Pro </span>
          <span>Mentor.</span>
        </h1>
      </template>
      <template v-slot:end>
        <i class="text-gray-50 p-3 rounded-full bg-indigo-700 fa fa-user"></i>
      </template>
    </Section>
    
    <!-- Contents -->
    <section class="px-5 mt-8">
      <h1 class="text-2xl font-medium mb-5">Today's Schedules</h1>
      <!-- Alert -->
      <Alert content="You have no sheduled sessions for today" button-text="New session" icon="fa fa-plus" />
    </section>
    
    <!-- Students list -->
    <Section borderBottom="false" class="mt-8">
      <template v-slot:start>
        <span class="text-2xl font-medium">
          Your students
          <span class="text-base">(6)</span>
        </span>
      </template>
      
      <template v-slot:end>
        <p class="text-indigo-700 font-medium">Manage</p>
      </template>
    </Section>
    
    <div class="px-5 w-full mt-3">
      <template v-for="(student, index) in Students" :key="index">
        <List :img="student.img" :name="student.name" :progress="student.progress" :last-meet="student.lastMeet" v-on:tap="tap" />
      </template>
    </div>
    
    <!-- BottomBar -->
     <BottomBar/>
  </section>
</template>
<script setup>
  
  import { useRouter } from 'vue-router'
  import BottomBar from '@/components/BottomBar.vue'
  import Section from '@/components/Section.vue'
  import Alert from '@/components/Alert.vue'
  import List from '@/components/List.vue'
  import Students from '@/Students.js'
  
  const router = useRouter()
  
  const tap = () => router.push({ name: 'detail' })
</script>