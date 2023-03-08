<template>    
    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 bg-slate-400">
    
         <div class="mx-auto max-w-lg">
         <h1 class=" items-center justify-center flex  text-4xlg m-7">sign in</h1>
         <form @submit.prevent="handleSubmit" class=" bg-slate-600 rounded-lg flex items-center justify-center flex-col text-white">
           <label for="email">Email:</label>
           <input id="email" type="email" v-model="email" class=" rounded-md text-black" required />
           <label for="password">Password:</label>
           <input id="password" type="password" v-model="password" class=" rounded-md text-black"  required />
           <button type="submit" class=" bg-blue-700 text-white p-3 m-3 rounded-md">Log In</button>
         </form>
       </div>
     </div>
     </template>
     
     <script>
     

     import { createClient } from '@supabase/supabase-js';
     
   export default {
     
     data() {
       return {
         email: "",
         name: "",
         password: "",
          
       };
     },
     components: {},
     methods: {
       async handleSubmit() {
         const supabase = createClient(
          'https://swocaqwllmwkocyhqnhm.supabase.co',
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3b2NhcXdsbG13a29jeWhxbmhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzExNzM2NDIsImV4cCI6MTk4Njc0OTY0Mn0.eE7E7QeAT2iGCsInhiPVjYqOEuyrfD0-OAKsKhuWVaI',
            );
         if (this.password.length < 8) {
           alert("Password must be at least 8 characters long");
           return;
         }
         const { data, error } = await supabase.auth.signInWithPassword({
           email: this.email,
           password: this.password,
         });
         if (error) {
           this.err = error.message;
           this.loading = false;
           console.log(error.message);
         } else {
           this.user = data.user.email;
           setTimeout(() => {
             this.$router.push("/index");
             this.loading = false;
           }, 2000);
           //this.$router.push("/Login");
         }
       },
     },
   };
   </script>

