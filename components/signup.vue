<template>
    <main class=" bg-slate-800 items-center justify-center flex text-white">
      
      <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-lg">
           
          <!-- success alert  -->
          <div
            class=" text-yellow-400   px-4 rounded relative"
            role="alert"
            v-show="user"
          >
            {{ user }} created!
          </div>
          <!-- <div
            class= 'text-yellow-400   px-4 rounded relative'
            role="alert"
            v-show="user"
          >
            Please verify Email to procede!
          </div> -->
         
          <div
            class=" text-yellow-400 px-4  rounded relative"
            role="alert"
            v-if="err"
          >
            {{ err }}!
          </div>
          <form
            action=""
            class="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl"
            @submit.prevent="register"
          >
            <p class="text-lg font-medium items-center justify-center">Sign up men</p>
  
            <div>
              
  
              <div class="relative mt-1">
                <input
                  type="email"
                  id="email"
                  v-model="email"
                  class="w-full rounded-lg ring bg-slate-100 p-4 pr-12 text-sm shadow-sm"
                  placeholder="Enter email"
                />
   
              </div>
            </div>
            <div>
              
  
              <div class="relative mt-1">
                <input
                  type="password"
                  id="password"
                  v-model="password"
                  class="w-full rounded-lg ring bg-slate-100 p-4 pr-12 text-sm shadow-sm"
                  placeholder="Enter password"
                />
   
              </div>
            </div>
  
            <div>
               
  
              <div class="relative mt-1">
                <input
                  type="password"
                  id="confirm-password"
                  class="w-full rounded-lg ring bg-slate-100 p-4 pr-12 text-sm shadow-sm"
                  v-model="confirm_password"
                  placeholder="Confirm password"
                />
   
              </div>
            </div>
  
            <button
              type="submit"
              class="block w-full rounded-lg px-5 py-3 text-sm font-medium text-white"
                :class="loading? 'bg-gray-500' : 'bg-blue-500'"
            
              :disabled="loading"
            >
              {{ loading ? "Loading..." : "Sign Up" }}
            </button>
  
            <p class="text-center text-sm text-white">
              Already have an account?
              <NuxtLink to="/login" class="underline">Sign In</NuxtLink>
            </p>
          </form>
          
        </div>
      </div>
    </main>
  </template>
  
  <script>
  
  
  import { createClient } from "@supabase/supabase-js";
  
  export default {
    name: "Register",
    data() {
      return {
        email: "",
        user: "",
        loading: false,
        password: "",
        confirm_password: "",
        err: "",
      };
    },
    components: {},
    methods: {
      async register() {
        const supabase = createClient(
            'https://swocaqwllmwkocyhqnhm.supabase.co',
             'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3b2NhcXdsbG13a29jeWhxbmhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzExNzM2NDIsImV4cCI6MTk4Njc0OTY0Mn0.eE7E7QeAT2iGCsInhiPVjYqOEuyrfD0-OAKsKhuWVaI');
             
             
             if (this.email.length < 1) {
          this.err = "Email is required";
          return;
        }
  
        if (this.password.length < 8) {
          this.err = "Password must be at least 8 characters";
          return;
        }
        if (this.password !== this.confirm_password) {
          console.log(this.password, this.confirm_password);
          this.err = "please check your password";
          return;
        }
         const main_user = await supabase.auth.getUser();
   
        if (!this.email.includes("@")) {
          this.err = "Email is invalid";
          return;
        }
        this.loading = true;
        const { user, data, error } = await supabase.auth.signUp({
          email: this.email,
          password: this.password,
        });
        if (error) {
          this.err = error.message;
          this.loading = false;
          console.log(error);
        } else {
          this.user = data.user.email;
          setTimeout(() => {
            this.loading = false;
            this.$router.push("/login");
          }, 2000);
  
          
        }
      },
    },
  };
  </script>
 