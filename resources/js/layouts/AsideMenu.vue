<template>
    <div class="vertical-menu">
        <!-- LOGO -->
        <div class="titlebar-brand-box" v-if="company">
            <router-link :to="{name:'home'}" tag="a" class="logo logo-dark">
                <span class="logo-lg row">
                    <img :src="'\\assets\\img\\companies\\logo_'+company.id+'.png'" class="me-auto ms-auto w-50" >
                </span>
            </router-link>
        </div>
        <button type="button" class="btn btn-sm px-3 font-size-16 header-item waves-effect vertical-menu-btn">
            <i class="fa fa-fw fa-bars"></i>
        </button>
        <div data-simplebar class="sidebar-menu-scroll mt-0">
            <!--- Sidemenu -->
            <div id="sidebar-menu">
                <!-- Left Menu Start -->
                <ul class="metismenu list-unstyled" id="side-menu">
                    <li class="menu-title"> Main List</li>
                    <li>
                        <router-link :to="{name:'home'}" tag="a" class="link-page">
                            <i class="fa-duotone fa-blog"></i> <span>  blog posts</span>
                        </router-link>
                    </li>
                </ul>
            </div>
            <!-- Sidebar -->
        </div>
    </div>
</template>
<script>
import { UseAuthStore } from '../stores/auth';
import { mapState} from 'pinia'
export default {
    mounted() {
        let externalScript = document.createElement('script')
        externalScript.setAttribute('src', '/assets/js/app.js')
        document.head.appendChild(externalScript)
    },
    computed: {
        ...mapState(UseAuthStore, {company:'company'})
    },
    methods: {
        routeExists(name){
            return this.$router.resolve(name).name!='404';
        }
    }
}
</script>
<style scoped>
img{
    max-height: 60px;
}
li i{
    font-size: smaller!important;;
}
</style>