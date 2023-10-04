<template>
  <main class="bg-black text-white relativ text-2xl"> 
    <div class="text-xl flex gap-4 items-center">
      <!-- Replace the "." with the actual URL of your image -->
      <img src="./assets/cossi1.png" alt="Logo" class="w-20 h-15">

      <header class=" text-white">
        <nav class="flex items-center justify-between container mx-auto ">
        
          <!-- Mobile Menu Toggle Button -->
          <button
            @click="toggleMobileMenu"
            class="lg:hidden block text-white hover:text-gray-400 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <!-- Mobile Menu (hidden by default) -->
          <div
            :class="{ 'hidden': !mobileMenuOpen }"
            class="lg:flex lg:items-center lg:w-auto"
          >
            <nuxt-link
              to="/"
              class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4"
            >
              Home
            </nuxt-link>
            <nuxt-link
              to="/about"
              class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4"
            >
              About
            </nuxt-link>
            <!-- <nuxt-link
              to="/contact"
              class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400"
            >
              Contact
            </nuxt-link> -->
          </div>
        </nav>
      </header>
  
 
    </div>
    

    <div class=" fixed top-0 left-0 w-full h-full z-0">
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
    data() {
      return {
        mobileMenuOpen: false,
      };
    },
    methods: {
      toggleMobileMenu() {
        this.mobileMenuOpen = !this.mobileMenuOpen;
      },
    },
  };
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
