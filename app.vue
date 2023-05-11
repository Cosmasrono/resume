<template>
  <main class=" bg-black text-white"> 
   <div class=" text-xl flex flex-row gap-4 items-center justify-center">
    <nuxt-link to="/">Home</nuxt-link>
    <nuxt-link to="/">About</nuxt-link>
    <nuxt-link to="/">Services</nuxt-link>
    <nuxt-link to="/contact">Contacts</nuxt-link>

  </div>
  <div> 
    <NuxtPage />
  </div>
  
 
  
</main>
</template>
<script>
 export default {
  // ...
  router: {
    scrollBehavior(to, from, savedPosition) {
      if (to.hash) {
        return {
          selector: to.hash,
          behavior: 'smooth'
        }
      } else {
        return { x: 0, y: 0 }
      }
    }
  }
}
</script>
<style>
 

</style>
