import { useAuthStore } from "~/stores/useAuthStore";
import Vue3EasyDataTable from "vue3-easy-data-table"
import "vue3-easy-data-table/dist/style.css"

export default defineNuxtPlugin(async (app)=>{
    const auth = useAuthStore();
    if (!auth.isLoggedIn) {
      await auth.fetchUser()
    }
})