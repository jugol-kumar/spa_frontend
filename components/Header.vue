<template>
  <div class="flex items-center justify-between bg-gray-900 shadow-2xl h-20 p-5 text-white">
    <NuxtLink to="/" >Master</NuxtLink> 
    <ul class="flex items-center gap-10">

      <li>
        <NuxtLink to="/task">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/task/users">All users</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/task/tasks">All tasks</NuxtLink>
      </li>

      <li>
        <button @click="handelLogout" to="/auth/login" v-if="auth.user">Logout</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
  import { useAuthStore } from "~/stores/useAuthStore";
  const auth = useAuthStore();

  async function handelLogout(){
    await auth.logout();
  }

</script>

<style>

</style>