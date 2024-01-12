<template>
    <div>


    <div>
    <!-- text-4xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text font-extrabold text-transparent tracking-tight sm:text-6xl -->
    <div class="bg-green-800 text-white py-20 text-center">
      <h1 class="text-3xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text font-extrabold text-transparent tracking-tight sm:text-6xl uppercase" data-aos="zoom-out-up">Welcome to  Wing Technologies</h1>
      <p class="text-lg mb-8" data-aos="zoom-out-up">Discover amazing things here.</p>
      <img src="https://images.pexels.com/photos/11001424/pexels-photo-11001424.jpeg" alt="Hero Image" class="mx-auto rounded-full w-48 h-48 object-cover shadow-lg mb-8" />
      <a href="#" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Get Started</a>
    </div>

    <!-- Card Section -->
    <div class="container mx-auto  flex flex-wrap justify-center bg-green-800">
      <div v-for="(card, index) in cardItems" :key="index" class=" rounded-lg shadow-lg p-6 m-4 w-64" data-aos="zoom-out-up">
        <img :src="card.imageUrl" :alt="'Card Image ' + index" class="w-full h-32 object-cover mb-4" />
        <h2 class="text-xl font-bold mb-2">{{ card.title }}</h2>
        <p>{{ card.description }}</p>
      </div>
    </div>



    <div class="bg-green-800 text-white py-20 text-center" data-aos="zoom-out-up">
      <h1 class="text-4xl font-bold mb-6" data-aos="zoom-out-up">Welcome to Wing Innovations: Pioneering Tomorrow's Breakthroughs</h1>
      <p class="text-lg mb-8" data-aos="zoom-out-up">Step into a realm of groundbreaking innovations with Wing Innovations. Our commitment goes beyond the ordinary, as we harness the power of cutting-edge technologies to redefine industries and create a future where possibilities are limitless.</p>
    
     <!-- Image Grid Section -->
     <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 flex-wrap mx-auto gap-4 mb-8 shadow-black" data-aos="zoom-out-up">
      <!-- Image 1 -->
      <div class="rounded overflow-hidden shadow-lg">
        <img src="https://images.pexels.com/photos/3290378/pexels-photo-3290378.jpeg" alt="Wing Image 4" class="w-full h-48 object-cover">
        <div class="px-6 py-4 text-white">
          <p class="font-bold text-xl mb-2">Human-Machine Interaction</p>
          <p class="text-white text-base">Explore the next frontier with immersive virtual reality and augmented reality platforms.</p>
        </div>
      </div>
    
      <!-- Image 2 -->
      <div class="rounded overflow-hidden shadow-lg">
        <img src="https://images.pexels.com/photos/3290378/pexels-photo-3290378.jpeg" alt="Wing Image 5" class="w-full h-48 object-cover">
        <div class="px-6 py-4 text-white">
          <p class="font-bold text-xl mb-2">Innovative Solutions</p>
          <p class="text-white text-base">Constantly pushing boundaries to create unparalleled experiences and groundbreaking advancements.</p>
        </div>
      </div>
    
      <!-- Image 3 -->
      <div class="rounded overflow-hidden shadow-lg">
        <img src="https://images.pexels.com/photos/4100878/pexels-photo-4100878.jpeg" alt="Wing Image 6" class="w-full h-48 object-cover">
        <div class="px-6 py-4 text-white">
          <p class="font-bold text-xl mb-2">Cutting-Edge Technology</p>
          <p class="text-white text-base">Stay at the forefront of technology with Wing Innovations' commitment to excellence and innovation.</p>
        </div>
      </div>
    </div>
    
    <!-- Image Grid Section 2 -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mb-8 shadow-transparent" data-aos="zoom-out-up">
      <!-- Image 4 -->
      <div class="rounded overflow-hidden shadow-lg">
        <img src="https://images.pexels.com/photos/1231265/pexels-photo-1231265.jpeg" alt="Wing Image 7" class="w-full h-48 object-cover">
        <div class="px-6 py-4 text-white">
          <p class="font-bold text-xl mb-2">Artificial Intelligence</p>
          <p class="text-white text-base">Unlock the potential of AI to revolutionize industries and enhance everyday experiences.</p>
        </div>
      </div>
    
      <!-- Image 5 -->
      <div class="rounded overflow-hidden shadow-lg">
        <img src="https://images.pexels.com/photos/3290378/pexels-photo-3290378.jpeg" alt="Wing Image 8" class="w-full h-48 object-cover">
        <div class="px-6 py-4 text-white">
          <p class="font-bold text-xl mb-2">Data Security</p>
          <p class="text-white text-base">Ensuring the highest standards of data security to protect the digital landscape.</p>
        </div>
      </div>
    
      <!-- Image 6 -->
      <div class="rounded overflow-hidden shadow-lg">
        <img src="https://images.pexels.com/photos/34153/pexels-photo.jpg" alt="Wing Image 9" class="w-full h-48 object-cover">
        <div class="px-6 py-4 text-white">
          <p class="font-bold text-xl mb-2">Space Exploration</p>
          <p class="text-white text-base">Venture into the cosmos with cutting-edge technology to explore new frontiers.</p>
        </div>
      </div>
    </div>
    
<!-- Services Offering Section -->
<div class="services-container flex flex-wrap shadow-inner gap-2" data-aos="fade-up">

  <!-- Service 1: System Maintenance -->
  <div class="service-card mb-8">
    <img src="https://thumbs.dreamstime.com/b/laptop-repair-maintenance-concept-modern-open-computer-blank-screen-small-hammer-screwdriver-spanner-82762587.jpg?w=768" 
      alt="System Maintenance Image" class="w-full h-48 object-cover">
    <div class="service-details">
      <h2 class="text-xl font-bold mb-2 text-white">System Maintenance</h2>
      <p class="text-white text-base">Ensure the optimal performance of your systems with our expert maintenance services. Our dedicated team provides proactive monitoring, regular updates, and swift issue resolution to keep your systems running smoothly.</p>
      <a href="#" class="text-blue-500 hover:underline">Learn More</a>
    </div>
  </div>

  <!-- Service 2: Networking Solutions -->
  <div class="service-card mb-8">
    <img src="https://thumbs.dreamstime.com/b/laptop-repair-tools-technical-support-photo-48954177.jpg?w=768" 
      alt="Networking Solutions Image" class="w-full h-48 object-cover">
    <div class="service-details">
      <h2 class="text-xl font-bold mb-2 text-white">Networking Solutions</h2>
      <p class="text-white text-base">Create a robust network infrastructure tailored to your business needs and requirements. Our networking solutions include design, implementation, and optimization services to ensure a seamless and secure network environment.</p>
      <a href="#" class="text-blue-500 hover:underline">Learn More</a>
    </div>
  </div>

  <!-- Service 3: Another System Maintenance -->
  <div class="service-card mb-8">
    <img src="https://thumbs.dreamstime.com/b/laptop-repair-maintenance-concept-modern-open-computer-blank-screen-small-hammer-screwdriver-spanner-82762587.jpg?w=768" 
      alt="System Maintenance Image" class="w-full h-48 object-cover">
    <div class="service-details">
      <h2 class="text-xl font-bold mb-2 text-white">System Maintenance</h2>
      <p class="text-white text-base">Ensure the optimal performance of your systems with our expert maintenance services. Our dedicated team provides proactive monitoring, regular updates, and swift issue resolution to keep your systems running smoothly.</p>
      <a href="#" class="text-blue-500 hover:underline">Learn More</a>
    </div>
  </div>

</div>

</div>
<div class="main-container">
  <div class="card-container">
    <div class="card">
      <div class="card-header">
        <h2>Wing Innovations</h2>
        <p class="sub-heading">Transforming Tomorrow</p>
      </div>

      <div class="card-body">
        <p><strong>Explore the Future with Us</strong></p>

        <ul>
          <li>🚁 <strong>AI-Powered Drones:</strong> Revolutionizing logistics and transportation, our autonomous systems navigate complex environments, delivering packages and redefining connectivity.</li>

          <li>☀️ <strong>Sustainable Energy Solutions:</strong> From advanced solar technologies to eco-friendly power storage, Wing Innovations is dedicated to creating an environmentally conscious future, where clean energy powers our world.</li>

          <li>🕶️ <strong>Immersive XR Platforms:</strong> Step into the next frontier of human-machine interaction with our virtual reality and augmented reality experiences. From interactive education to cutting-edge entertainment, we bridge the digital and physical worlds.</li>
        </ul>
      </div>

      <div class="card-footer">
        <p>Discover the synergy of artificial intelligence and robotics at Wing Innovations, where innovation takes flight and transforms the way we live. Join us in shaping tomorrow's possibilities.</p>
      </div>
    </div>
  </div>

  <div class="cta-button">
    <a href="#" class="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded">Explore Our Innovations</a>
  </div>
</div>

      </div>
      
    
    <!--
// v0 by Vercel.
// https://v0.dev/t/5eLjBi7za2v
-->
<div class="border text-card-foreground mx-auto max-w-md p-8 bg-green shadow-lg rounded-lg" data-v0-t="card"><div class="flex flex-col space-y-1.5 p-6"><h3 class="tracking-tight text-2xl font-bold text-center">Contact Us</h3><p class="text-sm text-gray-500 text-center">
  Please fill out the form below and we will get back to you as soon as possible.
</p></div><div class="p-6"><form class="space-y-4"><div class="grid grid-cols-2 gap-4"><div class="space-y-2"><label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="first-name">First name</label><input class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="first-name" placeholder="Enter your first name"></div><div class="space-y-2"><label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="last-name">Last name</label><input class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="last-name" placeholder="Enter your last name"></div></div><div class="space-y-2"><label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="email">Email</label><input class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="email" placeholder="Enter your email" type="email"></div><div class="space-y-2"><label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="message">Message</label><textarea class="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[100px]" id="message" placeholder="Enter your message"></textarea></div></form></div><div class="items-center p-6 flex justify-end"><button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-blue-500 text-white">Submit</button></div></div>

 
<section class="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-100 dark:bg-gray-800"><div class="container px-4 md:px-6"><div class="flex flex-col items-center space-y-4 text-center"><div class="space-y-2"><h1 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 dark:text-gray-100">
  Welcome to Our Community
</h1><p class="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
  Join us today and be part of the change you want to see in the world.
</p></div><div class="w-full max-w-sm space-y-2"><form class="flex space-x-2"><input class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-w-lg flex-1" placeholder="Enter your email" type="email"><button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2" type="submit">Join Now</button></form><p class="text-xs text-gray-500 dark:text-gray-400">
  Sign up to get notified about our latest updates and events. <a class="underline underline-offset-2" href="#">
    Terms &amp; Conditions
  </a></p></div></div></div></section>
  </div>
   

</template>

<script >
import AOS from 'aos';
import 'aos/dist/aos.css'; 
 
export default {
  data() {
    return {
      cardItems: [
        {
          title: 'Card 1',
          description: 'Description for Card 1',
          imageUrl: 'https://images.pexels.com/photos/18254694/pexels-photo-18254694/free-photo-of-man-with-suitcase-in-front-of-modern-building-in-baku-in-black-and-white.jpeg'
        },
        {
          title: 'Card 2',
          description: 'Description for Card 2',
          imageUrl: 'https://images.pexels.com/photos/11001424/pexels-photo-11001424.jpeg'
        },
        {
          title: 'Card 3',
          description: 'Description for Card 3',
          imageUrl: 'https://images.pexels.com/photos/18357062/pexels-photo-18357062/free-photo-of-halves-of-figs.jpeg'
        },
        {
          title: 'Card 4',
          description: 'Description for Card 1',
          imageUrl: 'https://images.pexels.com/photos/18254694/pexels-photo-18254694/free-photo-of-man-with-suitcase-in-front-of-modern-building-in-baku-in-black-and-white.jpeg'
        },
        {
          title: 'Card 5',
          description: 'Description for Card 2',
          imageUrl: 'https://images.pexels.com/photos/11001424/pexels-photo-11001424.jpeg'
        },
        {
          title: 'Card 6',
          description: 'Description for Card 3',
          imageUrl: 'https://images.pexels.com/photos/18357062/pexels-photo-18357062/free-photo-of-halves-of-figs.jpeg'
        }
      ]
    };
  },
  beforeMount() {
    created: {
      AOS.init();
    }
  },
};

</script>
<style scoped>
.services-container {
  justify-content: center;
  align-items: center;
}

.service-card {
  width: 100%;
  max-width: 400px; /* Adjust the maximum width as needed */
}

.service-details {
  padding: 20px;
}

@media screen and (max-width: 768px) {
  .service-card {
    margin-right: 0;
    margin-bottom: 20px;
  }
}
  .main-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }

  .card-container {
    background-color: darkslategray;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    width: 100%;
    margin-bottom: 20px;
  }

  .card {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .card-header {
    background-color: #4CAF50;
    color: #fff;
    padding: 20px;
    text-align: center;
  }

  .card-body {
    padding: 20px;
  }

  .card-body strong {
    color: #4CAF50;
  }

  .card-footer {
    background-color: rgb(129, 235, 129);
    padding: 20px;
    text-align: center;
  }

  .cta-button {
    text-align: center;
    margin-top: 20px;
  }

  .cta-button a {
    background-color: #4CAF50;
    color: #fff;
    font-weight: bold;
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 5px;
    transition: background-color 0.3s;
  }

  .cta-button a:hover {
    background-color: #92ec97;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin-bottom: 10px;
  }

  @media screen and (max-width: 600px) {
    .card-container {
      width: 100%;
    }
  }
</style>