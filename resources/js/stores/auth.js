import { defineStore } from 'pinia'
import Cookies from "js-cookie";
import axios from "axios";

export const UseAuthStore = defineStore('auth', {
    state: () => {
        return { 
            userData: null,
            token: Cookies.get("token"),
            isLogged: false
        }
    },
    getters: {
        check(state) {
            return state.isLogged;
        },
        user(state) {
            return state.userData;
        },
    },
    actions: {
        userLogin(data) {
            this.userData=data.success.user
            this.token=data.success.token
            this.isLogged=true
            Cookies.set("token", this.token, { expires:365 });
            axios.defaults.headers.common['Authorization'] = 'Bearer '+this.token
        },
        userLogout() {
            this.userData= null,
            this.token= null,
            this.isLogged=false
            Cookies.remove("token");
        },
        async fetchUser() {
            axios.defaults.baseURL = '/api/'; 
            axios.defaults.headers.common['Authorization'] = 'Bearer '+this.token
            await axios.get('user').then(({data}) => {
                this.userData=data.success.user
                this.isLogged=true
            })
            .catch((error) => {
                this.userLogout()
            });
        },
    },
})