<script setup>
  import axios from 'axios'
  import { useAuthStore } from "~/stores/useAuthStore"
  definePageMeta({
      layout:""
  })

  const regData = ref({
    name:"",
    email:"",
    password:"",
    password_confirmation:""
  })
  const showError = ref();

  const auth = useAuthStore();
  async function handelRegister(){
    const {error} = await auth.register(regData.value);
    showError.value = error.value.data;

    console.log(error)
    // if(!error.value){
        navigateTo("/task");
    // }
  }

  
</script>
<template>
    <div class="h-screen">
        <div class="flex flex-col justify-center py-6 h-full">   
            <div class="relative py-3 sm:w-96 mx-auto"> 
                <span class="text-2xl font-light">Login Your Account</span>
                <div class="mt-4 bg-white shadow-md rounded-lg text-center">
                    <div class="h-2 bg-indigo-400 rounded-t-md"></div>
                      <p class="text-red-600 mt-1">{{ showError?.message }}</p>
                    <form @submit.prevent="handelRegister" class="px-8 py-6 text-left">
                        
                        <label class="block font-semibold">Name</label>
                        <input v-model="regData.name" type="text" placeholder="Name" class="border w-full h-5 px-3 py-5 mt-2 focus:ring-1 focus:ring-indigo-600 focus:outline-none hover:outline-none rounded-md" >
                        
                        <label class="block font-semibold mt-2">Email</label>
                        <input v-model="regData.email" type="email" placeholder="Email" class="border w-full h-5 px-3 py-5 mt-2 focus:ring-1 focus:ring-indigo-600 focus:outline-none hover:outline-none rounded-md" >
                        
                        <label class="block font-semibold mt-2">Password</label>
                        <input v-model="regData.password" type="password" placeholder="Passwrod" class="border w-full h-5 px-3 py-5 mt-2 focus:ring-1 focus:ring-indigo-600 focus:outline-none hover:outline-none rounded-md" >

                        
                        <label class="block font-semibold mt-2">Password Conformation</label>
                        <input v-model="regData.password_confirmation" type="password" placeholder="Passwrod Conformation" class="border w-full h-5 px-3 py-5 mt-2 focus:ring-1 focus:ring-indigo-600 focus:outline-none hover:outline-none rounded-md" >


                        <div class="flex items-center justify-between">
                            <button type="submit" class="mt-2 px-4 py-2 bg-purple-600 rounded-md font-semibold text-white">Register</button>
                            <!-- <NuxtLink to="/task">Task</NuxtLink> -->
                          </div>
                      </form>
                </div>
            </div>
        </div>
    </div>
</template>

<style>

</style>