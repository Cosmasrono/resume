<template>
  <main class="bg-black text-white relativ text-2xl"> 
    <div class="text-xl flex gap-4">
      <div class="flex flex-row gap-4 items-start justify-start">
        <!-- Replace the "." with the actual URL of your image -->
        <img src="./assets/cossi.png" alt="Logo" class="w-20 h-15">
      </div>
      
      <div class="gap-4 flex items-end justify-end">
        <nuxt-link to="/">Home</nuxt-link>
        <nuxt-link to="/about">About</nuxt-link>
        <nuxt-link to="/contact">Contact</nuxt-link>
      </div>
    </div>

    <div class="absolute top-0 left-0 w-full h-full z-0">
      <div class="video-container">
        <!-- Add the 'loop' and 'muted' attributes to the video element -->
        <video src="./assets/one.mp4" loop muted autoplay class="w-full h-full object-cover video-rotate"></video>
      </div>
   </div>

    <div class="relative z-10">
      <!-- Your main content goes here -->
      <NuxtPage/>
    </div>
  </main>
</template>

<script>
 export default {
  // Your component's logic, if needed
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@500;700&display=swap");

@keyframes rotateVideo {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.main {
  /* Your existing styles for the main element */
  background-color: transparent;
}

.video-rotate {
  /* The animation duration determines the rotation speed */
  animation: rotateVideo 30s linear infinite;
}

.video-container {
  padding: 20px; /* Adjust the value as per your desired padding size */
  display: flex;
  justify-content: center;
}

* {
  font-family: "Darker Grotesque", sans-serif;
  font-size: large;
  font-weight: 700;
  transition: all 0.2s ease-in-out;
  scroll-behavior: smooth;
  overflow-y: visible;
}

</style>
