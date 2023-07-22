import { defineStore } from "pinia"
import { useApiFetch } from "~/composables/useApiFetch";
type User = {
  id: number;
  name:string;
  email:string;
}
type Task = {
  id: number;
  user_id: number;
  task:string;
}
type SingleTask = {
  id: number;
  user_id: number;
  task:string;
}


export const useUserStore = defineStore('users', () => {
  const users = ref<User | null>(null)
  const tasks = ref<Task | null>(null)
  const task = ref<SingleTask | null>(null)
      
  async function fetchUsers(){
    const {data, error} = await useApiFetch("/api/users");
    console.log(error)
    users.value = data.value as User;
  }
      
  async function fetchUserTask(userId:string){
    const {data} = await useApiFetch("/api/tasks/"+userId);
    tasks.value = data.value as Task;
  }

  async function faceSingleTask(taskId:number){
    const {data} = await useApiFetch("/api/tasks-single/"+taskId);
    task.value = data.value as SingleTask;
  }

  async function faceAssignedUser(taskId:number, userId:number){
    const assigned = await useApiFetch("/api/assigned-user",{
      method:"POST",
      body:{
        taskId:taskId,
        userId:userId,
      }
    });

    return assigned;
  }


  return { users, tasks, task, fetchUsers, fetchUserTask, faceSingleTask, faceAssignedUser}
  })