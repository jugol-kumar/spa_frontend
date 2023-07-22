<template>
  <div>
    <h1 class="text-2xl font-semibold text-white">Welcome to task management dashboard</h1>
    

    <div class="w-52 mt-32">
      <h1 class="text-white mb-2">Login By</h1>
      <div class="bg-slate-600 px-4 py-2 rounded-lg">
        <h1 class="text-xl text-white font-semibold">{{ auth?.user?.name }}</h1>
        <p class="text-white">{{ auth?.user?.email }}</p>
      </div>
    </div>

  </div>
</template>

<script setup>
  import { useAuthStore } from "~/stores/useAuthStore";
  const auth = useAuthStore();
</script>

<style>

</style>