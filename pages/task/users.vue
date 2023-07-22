<template>
  <div>
    <h1 class="text-2xl font-semibold text-white">All Registrate Users</h1>
    <ul class="flex flex-col gap-5 min-w-max">
      <li v-for="user in users.users" :key="'unique_user'+user.id">
        <div class="bg-slate-600 px-4 py-2 rounded-lg">
          <h1 class="text-xl text-white font-semibold">{{ user.name }}</h1>
          <p class="text-white">{{ user.email }}</p>
      </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
  import { useUserStore } from "~/stores/useUserStore";
  const users = useUserStore();
  
  onMounted(async ()=>{
    await users.fetchUsers()
  })

</script>

<style>

</style>