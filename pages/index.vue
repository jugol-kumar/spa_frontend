
<script setup>
  definePageMeta({
    layout:"",
    middleware:["guest"]
  })
</script>


<template>
  <div class="w-full h-screen bg-slate-900">
    <div class="grid place-items-center h-full">
      <div class="flex items-center flex-col gap-16">
        <div>
          <h1 class="text-4xl text-white text-center font-semibold">Welcome To Task Management System</h1>
          <p class="text-white text-center mt-1">Please First Login Existing Account Or Registration An New Account</p>
        </div>

        <div class="flex gap-10">
          <NuxtLink class="btn-primary" to="/auth/register">Registration</NuxtLink>
          <NuxtLink class="btn-primary" to="/auth/login">Login</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
<style>

</style>