<template>
  <div class="main-wrapper">
    <section class="sign-up-in-section bg-dark ptb-60" style="background: url('/assets/web/img/page-header-bg.svg')no-repeat right bottom">
      <div class="container">
        <div class="row align-items-center justify-content-center" style="min-height: 100vh;">
          <div class="col-lg-5 col-md-8 col-12">
            <div class="register-wrap p-5 bg-light shadow rounded-custom">
              
              <ul class="nav nav-tabs" role="tablist">
                <li class="nav-item col-6">
                  <a class="nav-link active" data-bs-toggle="tab" href="#navtabs-home" role="tab">
                    <span class="d-block d-sm-none"><i class="fas fa-home"></i></span>
                    <span class="d-none d-sm-block">LogIn</span>
                  </a>
                </li>
                <li class="nav-item col-6">
                  <a class="nav-link" data-bs-toggle="tab" href="#navtabs-profile" role="tab">
                    <span class="d-block d-sm-none"><i class="far fa-user"></i></span>
                    <span class="d-none d-sm-block">register</span>
                  </a>
                </li>
              </ul>
              <!-- Tab panes -->
              <div class="tab-content p-3 text-muted">
                <div class="tab-pane active" id="navtabs-home" role="tabpanel">
                  
                  <h1 class="h3 text-center">LogIn</h1> 
                  
                  <form @submit.prevent="login" class="mt-4 register-form">
                    <AlertErrors :form="loginForm" />
                    
                    <div class="row">
                      <div class="col-sm-12">
                        <label for="email" class="mb-1">email <span class="text-danger">*</span></label>
                        <div class="input-group mb-3">
                          <input :class="{ 'is-invalid': loginForm.errors.has('email') }" v-model="loginForm.email" type="email" class="form-control" placeholder="Email" required aria-label="email">
                          <has-error :form="loginForm" field="email"></has-error>
                        </div>
                      </div>
                      <div class="col-sm-12">
                        <label for="password" class="mb-1">Password <span class="text-danger">*</span> </label>
                        <div class="input-group mb-3">
                          <input :class="{ 'is-invalid': loginForm.errors.has('password') }" v-model="loginForm.password" type="password" class="form-control" placeholder="Password"  required aria-label="Password">
                          <has-error :form="loginForm" field="password"></has-error>
                        </div>
                      </div>
                      <div class="col-12 text-center">
                        <beat-loader v-if="loader" :loading="loader" color="#5578eb"></beat-loader>
                        <button v-else type="submit" class="btn btn-primary mt-3 d-block w-100">Submit</button>
                      </div>
                    </div>
                  </form>
                </div>
                <div class="tab-pane" id="navtabs-profile" role="tabpanel">
                  
                  <h1 class="h3 text-center">register</h1> 
                  <form @submit.prevent="register" class="mt-4 register-form">
                    <AlertErrors :form="registerForm" />
                    
                    <div class="row">
                      <div class="col-sm-12">
                        <label for="name" class="mb-1">name <span class="text-danger">*</span></label>
                        <div class="input-group mb-3">
                          <input :class="{ 'is-invalid': registerForm.errors.has('name') }" v-model="registerForm.name" type="text" class="form-control" placeholder="User Name" required aria-label="name">
                          <HasError :form="registerForm" field="name" />
                        </div>
                      </div>
                      <div class="col-sm-12">
                        <label for="email" class="mb-1">email <span class="text-danger">*</span></label>
                        <div class="input-group mb-3">
                          <input :class="{ 'is-invalid': registerForm.errors.has('email') }" v-model="registerForm.email" type="email" class="form-control" placeholder="Email" required aria-label="email">
                          <HasError :form="registerForm" field="email" />
                        </div>
                      </div>
                      <div class="col-sm-12">
                        <label for="password" class="mb-1">Password <span class="text-danger">*</span> </label>
                        <div class="input-group mb-3">
                          <input :class="{ 'is-invalid': registerForm.errors.has('password') }" v-model="registerForm.password" type="password" class="form-control" placeholder="Password" required aria-label="Password">
                          <HasError :form="registerForm" field="password" />
                        </div>
                      </div>
                      <div class="col-sm-12">
                        <label for="password_confirmation" class="mb-1">Password Confirmation <span class="text-danger">*</span> </label>
                        <div class="input-group mb-3">
                          <input :class="{ 'is-invalid': registerForm.errors.has('password_confirmation') }" v-model="registerForm.password_confirmation" type="password" class="form-control" placeholder="Password Confirmation" required aria-label="password_confirmation">
                          <HasError :form="registerForm" field="password_confirmation" />
                        </div>
                      </div>
                      <div class="col-12 text-center">
                        <beat-loader v-if="loader" :loading="loader" color="#5578eb"></beat-loader>
                        <button v-else type="submit" class="btn btn-primary mt-3 d-block w-100">Submit</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {Form} from 'vform'
import {HasError,AlertErrors} from 'vform/src/components/bootstrap5'
import BeatLoader from 'vue-spinner/src/BeatLoader.vue'
import { mapActions } from 'pinia'
import { UseAuthStore } from '../../stores/auth';

export default {
  components: {HasError,BeatLoader,AlertErrors},
  data() {
    return {
      loginForm: new Form({email: 'demo@example.com',password: 'password'}),
      registerForm: new Form({name: 'demo@example.com',email: 'demo@example.com',password: 'demo@example.com',password_confirmation: 'demo@example.com'}),
      loader:false
    }
  },
  methods: {
    ...mapActions(UseAuthStore, ['userLogin','userLogout']), 
    login() {
      if(!this.loader){ 
        this.loader=true
        this.$axios.defaults.baseURL = '/api'; 
        this.loginForm.post("login").then(({data}) => {
          this.userLogin(data)
          this.$router.push({name:'home'})
        }).catch((error) => {
          this.userLogout();this.loader=false;
        })
      }
    }, 
    register() {
      if(!this.loader){ 
        this.loader=true
        this.$axios.defaults.baseURL = '/api'; 
        this.registerForm.post("register").then(({data}) => {
          this.userLogin(data)
          this.$router.push({name:'home'})
        }).catch((error) => {
          this.userLogout();this.loader=false;
        })
      }
    }
  },
  
}
</script>
<style scoped> @import "./sign-in"; </style>

