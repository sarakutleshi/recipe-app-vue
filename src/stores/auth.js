import {defineStore} from "pinia";
import {computed, ref} from "vue";
import client from "@/helpers/client.js";
import {jwtDecode} from "jwt-decode";

export const useAuthStore =
    defineStore('auth', () => {
        // state
        const token = ref(localStorage.getItem('token') || null)

        // actions
        const logIn = async (user) => {
            const response = await client.post('auth/log-in', user)

            if (response.data) {
                token.value = response.data.token
                localStorage.setItem('token', token.value)
            }
        }

        const logOut = () => {
            token.value = null
            localStorage.removeItem('token')
        }

        // getters
        const isLoggedIn = computed(() => {
            return token.value !== null
        })

        const loggedInUser = computed(() => {
            return token.value ? jwtDecode(token.value) : null
        })

        return {
            logIn,
            logOut,
            isLoggedIn,
            loggedInUser
        }
    });