<template>
  <main class=" bg-black text-white">
    <img src="" alt="">

  <div class=" text-xl flex flex-row gap-4 items-center justify-center">
    <nuxt-link to="/">Home</nuxt-link>
    <nuxt-link to="/">About</nuxt-link>

   
  </div>
 
  <div>

    <NuxtPage />
  
  </div></main>
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
