<template>
  <div>


  <div>
  <!-- text-4xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text font-extrabold text-transparent tracking-tight sm:text-6xl -->
  <div class=" text-black py-20 text-center">
    <h1 class="text-3xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text font-extrabold text-transparent tracking-tight sm:text-6xl uppercase" data-aos="zoom-out-up">IT'S  NEPTECH Technologies</h1>
    <p class="text-lg mb-8" data-aos="zoom-out-up">Discover amazing things here.</p>
    <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fHww" alt="Hero Image" class="mx-auto rounded-full w-48 h-48 object-cover shadow-lg mb-8" />
    <a href="#" class="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">Get Started</a>
  </div>

  <!-- Card Section -->
  <div class="container mx-auto  flex flex-wrap justify-center  -800">
    <div v-for="(card, index) in cardItems" :key="index" class=" rounded-lg shadow-lg p-6 m-4 w-64" data-aos="zoom-out-up">
      <img :src="card.imageUrl" :alt="'Card Image ' + index" class="w-full h-32 object-cover mb-4" />
      <h2 class="text-xl font-bold mb-2">{{ card.title }}</h2>
      <p>{{ card.description }}</p>
      <p>{{ card.PRICE }}</p>
      <button class="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded mt-4">Buy Now</button>
    </div>
  </div>



  <div class=" -800 text-black py-20 text-center" data-aos="zoom-out-up">
    <h1 class="text-4xl font-bold mb-6" data-aos="zoom-out-up"> Neptech Innovations: Pioneering Tomorrow's Breakthroughs</h1>
    <p class="text-lg mb-8" data-aos="zoom-out-up">Step into a realm of groundbreaking innovations with Neptech technologies. Our commitment goes beyond the ordinary, as we harness the power of cutting-edge technologies to redefine industries and create a future where possibilities are limitless.</p>
  
   <!-- Image Grid Section -->
   <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 flex-wrap mx-auto gap-4 mb-8 shadow-black" data-aos="zoom-out-up">
    <!-- Image 1 -->
    <div class="rounded overflow-hidden shadow-lg">
      <img src="https://images.pexels.com/photos/3290378/pexels-photo-3290378.jpeg" alt="Wing Image 4" class="w-full h-48 object-cover">
      <div class="px-6 py-4 text-black">
        <p class="font-bold text-xl mb-2">Human-Machine Interaction</p>
        <p class="text-black text-base">Explore the next frontier with immersive virtual reality and augmented reality platforms.</p>
      </div>
    </div>
  
    <!-- Image 2 -->
    <div class="rounded overflow-hidden shadow-lg">
      <img src="https://images.pexels.com/photos/3290378/pexels-photo-3290378.jpeg" alt="Wing Image 5" class="w-full h-48 object-cover">
      <div class="px-6 py-4 text-black">
        <p class="font-bold text-xl mb-2">Innovative Solutions</p>
        <p class="text-black text-base">Constantly pushing boundaries to create unparalleled experiences and groundbreaking advancements.</p>
      </div>
    </div>
  
    <!-- Image 3 -->
    <div class="rounded overflow-hidden shadow-lg">
      <img src="https://images.pexels.com/photos/4100878/pexels-photo-4100878.jpeg" alt="Wing Image 6" class="w-full h-48 object-cover">
      <div class="px-6 py-4 text-black">
        <p class="font-bold text-xl mb-2">Cutting-Edge Technology</p>
        <p class="text-black text-base">Stay at the forefront of technology with Wing Innovations' commitment to excellence and innovation.</p>
      </div>
    </div>
  </div>
  
  <!-- Image Grid Section 2 -->
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mb-8 shadow-transparent" data-aos="zoom-out-up">
    <!-- Image 4 -->
    <div class="rounded overflow-hidden shadow-lg">
      <img src="https://images.pexels.com/photos/1231265/pexels-photo-1231265.jpeg" alt="Wing Image 7" class="w-full h-48 object-cover">
      <div class="px-6 py-4 text-black">
        <p class="font-bold text-xl mb-2">Artificial Intelligence</p>
        <p class="text-black text-base">Unlock the potential of AI to revolutionize industries and enhance everyday experiences.</p>
      </div>
    </div>
  
    <!-- Image 5 -->
    <div class="rounded overflow-hidden shadow-lg">
      <img src="https://images.pexels.com/photos/3290378/pexels-photo-3290378.jpeg" alt="Wing Image 8" class="w-full h-48 object-cover">
      <div class="px-6 py-4 text-black">
        <p class="font-bold text-xl mb-2">Data Security</p>
        <p class="text-black text-base">Ensuring the highest standards of data security to protect the digital landscape.</p>
      </div>
    </div>
  
    <!-- Image 6 -->
    <div class="rounded overflow-hidden shadow-lg">
      <img src="https://images.pexels.com/photos/34153/pexels-photo.jpg" alt="Wing Image 9" class="w-full h-48 object-cover">
      <div class="px-6 py-4 text-black">
        <p class="font-bold text-xl mb-2">Space Exploration</p>
        <p class="text-black text-base">Venture into the cosmos with cutting-edge technology to explore new frontiers.</p>
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
    <h2 class="text-xl font-bold mb-2 text-black">System Maintenance</h2>
    <p class="text-black text-base">Ensure the optimal performance of your systems with our expert maintenance services. Our dedicated team provides proactive monitoring, regular updates, and swift issue resolution to keep your systems running smoothly.</p>
    <a href="#" class="text-blue-500 hover:underline">Learn More</a>
  </div>
</div>

<!-- Service 2: Networking Solutions -->
<div class="service-card mb-8">
  <img src="https://thumbs.dreamstime.com/b/laptop-repair-tools-technical-support-photo-48954177.jpg?w=768" 
    alt="Networking Solutions Image" class="w-full h-48 object-cover">
  <div class="service-details">
    <h2 class="text-xl font-bold mb-2 text-black">Networking Solutions</h2>
    <p class="text-black text-base">Create a robust network infrastructure tailored to your business needs and requirements. Our networking solutions include design, implementation, and optimization services to ensure a seamless and secure network environment.</p>
    <a href="#" class="text-blue-500 hover:underline">Learn More</a>
  </div>
</div>

<!-- Service 3: Another System Maintenance -->
<div class="service-card mb-8">
  <img src="https://thumbs.dreamstime.com/b/laptop-repair-maintenance-concept-modern-open-computer-blank-screen-small-hammer-screwdriver-spanner-82762587.jpg?w=768" 
    alt="System Maintenance Image" class="w-full h-48 object-cover">
  <div class="service-details">
    <h2 class="text-xl font-bold mb-2 text-black">System Maintenance</h2>
    <p class="text-black text-base">Ensure the optimal performance of your systems with our expert maintenance services. Our dedicated team provides proactive monitoring, regular updates, and swift issue resolution to keep your systems running smoothly.</p>
    <a href="#" class="text-blue-500 hover:underline">Learn More</a>
  </div>
</div>

</div>

</div>
    </div>



    <div class="container mx-auto px-4 py-8">
<h1 class="text-2xl font-bold mb-4">Reputation </h1>
<div v-for="company in companies" :key="company.id" class="  shadow-md rounded-lg p-6 mb-4">
  <h2 class="text-lg font-semibold mb-2">{{ company.name }}</h2>
  <p class="text-gray-600">Reputation: {{ company.reputation }}</p>
</div>
</div>

    

<div class=" bg-green-200 border text-card-foreground mx-auto max-w-md p-8   shadow-lg rounded-lg" data-v0-t="card"><div class="flex flex-col space-y-1.5 p-6"><h3 class="tracking-tight text-2xl font-bold text-center">Contact Us</h3><p class="text-sm text-gray-500 text-center">
Please fill out the form below and we will get back to you as soon as possible.
</p></div><div class="p-6"><form class="space-y-4"><div class="grid grid-cols-2 gap-4"><div class="space-y-2"><label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="first-name">First name</label><input class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="first-name" placeholder="Enter your first name"></div><div class="space-y-2"><label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="last-name">Last name</label><input class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="last-name" placeholder="Enter your last name"></div></div><div class="space-y-2"><label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="email">Email</label><input class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="email" placeholder="Enter your email" type="email"></div><div class="space-y-2"><label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="message">Message</label><textarea class="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[100px]" id="message" placeholder="Enter your message"></textarea></div></form></div><div class="items-center p-6 flex justify-end"><button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-blue-500 text-black">Submit</button></div></div>



<div>
 </div>
<footer class=" bg-green-200 py-8">
<div class="container mx-auto px-4">
  <div class="flex flex-wrap justify-center">
    <div class="mr-6 mb-4">
      <a href="https://www.facebook.com" class="text-blue-500 hover:underline flex items-center">
        <img src="https://img.icons8.com/?size=48&id=118497&format=png" alt="Facebook" class="h-5 w-5 inline-block mr-2">
        Facebook
      </a>
    </div>
    <div class="mr-6 mb-4">
      <a href="https://www.twitter.com" class="text-blue-500 hover:underline flex items-center">
        <img src="https://img.icons8.com/?size=48&id=13930&format=png" alt="Twitter" class="h-5 w-5 inline-block mr-2">
        Twitter
      </a>
    </div>
    <div class="mr-6 mb-4">
      <a href="https://www.instagram.com" class="text-blue-500 hover:underline flex items-center">
        <img src="https://img.icons8.com/?size=48&id=32323&format=png" alt="Instagram" class="h-5 w-5 inline-block mr-2">
        Instagram
      </a>
    </div>
    <div class="mr-6 mb-4">
      <a href="https://www.linkedin.com" class="text-blue-500 hover:underline flex items-center">
        <img src="https://img.icons8.com/?size=48&id=xuvGCOXi8Wyg&format=png" alt="LinkedIn" class="h-5 w-5 inline-block mr-2">
        LinkedIn
      </a>
    </div>
    <div class="mb-4">
      <a href="https://www.whatsapp.com" class="text-blue-500 hover:underline flex items-center">
        <img src="https://img.icons8.com/?size=48&id=BkugfgmBwtEI&format=gif" alt="WhatsApp" class="h-5 w-5 inline-block mr-2">
        WhatsApp
      </a>
    </div>
  </div>
  <div class="text-center mt-8">
    <p class="text-gray-700">© 2023 NEPTECH Wing Technologies. All rights reserved.</p>
  </div>
</div>
</footer>

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
        id: 1,
        title: 'HP LAPTOP',
        description: 'CORE i5, 8GB RAM, 1TB SSD, 15.6" SCREEN',
        PRICE: 'Ksh 35,000',
        imageUrl: 'https://images.unsplash.com/photo-1602080858428-57174f9431cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D'
      },
      {
        id: 2,
        title: 'DELL LAPTOP',
        description: ' CORE i7, 16GB RAM, 1TB SSD, 15.6" SCREEN',
        PRICE: 'Ksh 45,000',
        imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D'
      },
      {
        id: 3,
        title: ' ACCER LAPTOP',
        description: ' CORE i5, 4GB RAM, 500GB HDD, 15.6" SCREEN',
        PRICE: 'Ksh 25,000',
        imageUrl: 'https://images.unsplash.com/photo-1589652717521-10c0d092dea9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D'
      },
      {
        id: 4,
        title: 'HP LAPTOP',
        description: 'CORE i5, 8GB RAM, 1TB HDD, 15.6" SCREEN',
        imageUrl: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D'
      },
      {
        id: 5,
        title: 'APPLE MACBOOK',
        description: '  10-core CPU, 16-core GPU, and a 16-core Neural Engine',
        PRICE: 'Ksh 150,000',
        imageUrl: 'https://images.unsplash.com/photo-1602080858428-57174f9431cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D'
      },
      {
        id: 6,
        title: 'APPLE MACBOOK',
        description: '8-core CPU, 7-core or 8-core GPU, and a 16-core Neural Engine.',
        PRICE: 'Ksh 120,000',
        imageUrl: 'https://images.unsplash.com/photo-1602080858428-57174f9431cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D'
      },
      {
        id: 7,
        title: 'HP LAPTOP',
        description: 'CORE i5, 8GB RAM, 1TB SSD, 15.6" SCREEN',
        PRICE: 'Ksh 35,000',
        imageUrl: 'https://images.unsplash.com/photo-1602080858428-57174f9431cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D'
      },
      {
        id: 8,
        title: 'HP LAPTOP',
        description: 'CORE i5, 8GB RAM, 1TB SSD, 15.6" SCREEN',
        PRICE: 'Ksh 35,000',
        imageUrl: 'https://images.unsplash.com/photo-1602080858428-57174f9431cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D'
      },
    ],
    companies: [
      { id: 1, name: 'KENYA BEREAU OF STANDARDS', reputation: 7 },
      { id: 2, name: 'LISH AI TECHNOLOGIES', reputation:10 },
      { id: 3, name: 'NELSON RONO', reputation: 9 },
      { id: 4, name: 'FRANCIS MWANIKI', reputation:9 }
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
.company {
border: 1px solid #ccc;
padding: 10px;
margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  
}
</style>