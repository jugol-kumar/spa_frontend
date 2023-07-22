<template>
    <h1 class="text-3xl font-semibold text-white">{{ users?.task?.task }}</h1>

    <div class="flex gap-20">
        <div class="flex-1">
            <h1 class="text-2xl font-semibold text-white mt-4">All Assigned Users</h1>
            <ul class="flex flex-col gap-5 min-w-max">
                <li v-for="user in users.task?.task_users" :key="'unique_user'+user.id">
                    <div class="bg-slate-600 px-4 py-2 rounded-lg">
                        <h1 class="text-xl text-white font-semibold">{{ user?.name }}</h1>
                        <p class="text-white">{{ user?.email }}</p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="flex-1"> 
            <h1 class="text-2xl font-semibold text-white mt-4">Assigned User In This Task</h1>
            <form @submit.prevent="handelAssignedUser">
                <div class="flex flex-col gap-5">
                    <select v-model="selectUser" class="bg-slate-600 py-2 px-3 text-white mt-5">
                        <option value="null" selected disabled>~~ Select User ~~</option>
                        <option v-for="user in users.users" :key="'user_'+user.id" :value="user.id">{{ user.name }}</option>
                    </select>
                </div>
                <button class="btn-primary mt-2" type="submit">Assigned</button>
            </form>
        </div>

    </div>
    
</template>

<script setup>
    const route = useRoute()
    console.log()

    import { useUserStore } from "~/stores/useUserStore";
    const users = useUserStore();
    
    const selectUser = ref();
    const handelAssignedUser = () =>{
        const {data, error} = users.faceAssignedUser(route.params.id, selectUser.value)
        console.log("data"+data);
        console.log(error);
    }


    onMounted(async ()=>{
      await users.faceSingleTask(route.params.id)
      await users.fetchUsers()
    })

</script>

<style>

</style>