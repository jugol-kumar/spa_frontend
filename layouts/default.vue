<script lang="ts" setup>
  definePageMeta({
    middleware:['auth']
  })
</script>

<template>
  <div>
    <Header/>
    <div class="bg-slate-900 h-screen">  
      <div class="container mx-auto bg-slate-800 h-full p-12">
        <slot />
      </div>
    </div>
  </div>
</template>