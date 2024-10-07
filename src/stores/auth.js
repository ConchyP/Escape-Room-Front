import { ref, reactive } from "vue";
import { defineStore } from "pinia";
import AuthService from "../core/apis/AuthService";
import RegisterService from "@/core/apis/AuthRepository";
import Credentials from "@/core/models/Credentials";


export const useAuthStore = defineStore('auth', () => {

    const user = ref(
        {
            id:'',
            username: '',
            role: '',
            isAuthenticated: false
        }
    )

    function login(username, password) {

        const credentials = new Credentials(username, password)
        const service = new AuthService(credentials)
        return service.login()

    }

    function register(username, password) {

        const credentialsRegister = new Credentials(username, password)
        const service = new RegisterService(credentialsRegister)
        return service.register()

    }

    return { user, login, register }
})