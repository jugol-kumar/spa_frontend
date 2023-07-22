<template>
    <div>
      <h1 class="text-2xl font-semibold text-white">User Taks</h1>


      <ul class="flex flex-col gap-5 min-w-max">
            <li v-for="task in users.tasks" :key="'unique_user'+task.id">
                <NuxtLink :to="`/task/${task.id}`">
                    <div class="bg-slate-600 px-4 py-2 rounded-lg">
                        <h1 class="text-xl text-white font-semibold">{{ task.task }}</h1>
                        <p class="text-white">{{ task.user_id }}</p>
                    </div>
                </NuxtLink>
            </li>
      </ul>
    </div>
  </template>
  
  <script setup>
    import { useUserStore } from "~/stores/useUserStore";
    const users = useUserStore();
    
    onMounted(async ()=>{
      await users.fetchUserTask(1)
    })
  
  </script>
  
  <style>
  
  </style>