<template>
    <main 


class=" top-0 w-full h-full bg-cover text-white" style="
     background-image: url('https://img.freepik.com/free-vector/worldwide-connection-green-background-illustration-vector_53876-61766.jpg?w=826&t=st=1678356933~exp=1678357533~hmac=7b430b72fd499354ec3d55c3a06346ec64de7a13220384ee01b5265dae7b211f');">
  
  <div class=" text-xl flex flex-row gap-4 items-center justify-center">
    <nuxt-link to="/">Home</nuxt-link>
    <nuxt-link to="/">About</nuxt-link>

   
  </div>
 
  <div>

    <NuxtPage />
  
  </div>
</main>
</template>
<script>
 import backgroundUrl from '~/assets/back.jpg'
export default {
 
  data() {
    return {
      data() {
    return { backgroundUrl }
  }
    }
  }
}
</script>
<style>
 /* 
 .bg-image {
  background-image: url("");  
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
} */

</style>
