<template>
  <main class="  ml-5">
       <h1 class=" text-3xl flex items-center flex-wrap justify-center text-white ">WELCOME TO<span class=" flex-wrap text-green-600 text-3xl ">C-TECHNOLOGIES</span>  </h1>
       <div class="ml-4">
        <ToggleMode />
        <carousel />
      </div>
  
       <div class=" ">
<!--      <img src="../assets/COS.jpg" alt="">
 -->   </div>
   
 

       <div class=" flex flex-col ">
         <h1 class=" text-5xl p-3 mt-8 ">About Me</h1>
         <p class=" font-bold"> I am a skilled software developer with experience using a range of cutting-edge technologies, including Python, Vue, Nuxt, Django, Node.js, Tailwind CSS, Supabase, and MongoDB. With expertise in both front-end and back-end development, I am able to create dynamic and responsive applications that are both aesthetically pleasing and functional. Whether working independently or collaboratively as part of a team, I am committed to delivering high-quality work that meets the needs of clients and end-users alike. Always striving to improve my skills and stay ahead of the curve, I am passionate about learning new technologies and exploring innovative ways to tackle complex technical challenges.
         </p>
       </div>
       
      
   
 
  <h1 class=" text-5xl p-4">My Projects</h1>
          <div class="  rounded-md  grid  grid-rows-3 md:grid-rows-2 md:grid-cols-2 lg:grid-cols-3 grid-cols-1 items-center justify-center gap-3 mx-auto container">
            
              <div class="flex justify-center flex-col  items-center hover:scale-105">
               <h1>online transport</h1>
               <img src="../assets/1.png" alt=""
                            class=" max-h-min h-52 w-auto"  >
                    <nuxt-link to="http://accomodation-one.vercel.app/">
                   <button type="submit" class=" rounded-md p-3 m-3 bg-white text-black ">View</button>
                   </nuxt-link>
               </div>
 
                 
              <div class="flex justify-center flex-col  items-center hover:scale-105">
               <h1>kabarak university chatbot</h1>
               <img src="../assets/2.png" alt=""
                            class=" max-h-min h-52 w-auto"  >
                    <nuxt-link to="https://gray-water-0524d2610.3.azurestaticapps.net/main">
                   <button type="submit" class=" rounded-md p-3 m-3 bg-white text-black ">View</button>
                   </nuxt-link>
               </div>
 
 
   
               <div class="flex justify-center flex-col  items-center hover:scale-105">
                 <h1>Number Gaming system</h1>
               <img src="../assets/3.png" alt=""
                            class=" max-h-min h-52 w-auto"  >
                    <nuxt-link to="https://happy-plant-091f25c10.3.azurestaticapps.net/">
                   <button type="submit" class=" rounded-md p-3 m-3 bg-white text-black ">View</button>
                   </nuxt-link>
               </div>
 
 
 
   
               <div class="flex justify-center flex-col  items-center hover:scale-105">
                 <h1>Online diary</h1>
               <img src="../assets/4.png" alt=""
                            class=" max-h-min h-52 w-auto"  >
                    <nuxt-link to="https://cosmasrono.github.io/timeline/">
                   <button type="submit" class=" rounded-md p-3 m-3 bg-white text-black ">View</button>
                   </nuxt-link>
               </div>
 
 
 
   
               <div class="flex justify-center flex-col  items-center hover:scale-105">
                 <h1>CRUD image system</h1>
               <img src="../assets/5.png" alt=""
                            class=" max-h-min h-52 w-auto"  >
                    <nuxt-link to="https://supabase-mocha.vercel.app/">
                   <button type="submit" class=" rounded-md p-3 m-3 bg-white text-black ">View</button>
                   </nuxt-link>
               </div>
 
 
 
   
               <div class="flex justify-center flex-col  items-center hover:scale-105">
                 <h1>CRUD image system</h1>
               <img src="../assets/6.png" alt=""
                            class=" max-h-min h-52 w-auto"  >
                    <nuxt-link to="https://supabase-mocha.vercel.app/">
                   <button type="submit" class=" rounded-md p-3 m-3 bg-white text-black ">View</button>
                   </nuxt-link>
               </div>
 
 
 
   
               <div class="flex justify-center flex-col  items-center hover:scale-105">
                 <h1>Online map</h1>
               <img src="../assets/7.png" alt=""
                            class=" max-h-min h-52 w-auto"  >
                    <nuxt-link to="https://live-location-map.netlify.app/">
                   <button type="submit" class=" rounded-md p-3 m-3 bg-white text-black ">View</button>
                   </nuxt-link>
               </div>
 
 
 
 
   
               <div class="flex justify-center flex-col  items-center hover:scale-105">
                 <h1>crud system</h1>
               <img src="../assets/8.png" alt=""
                            class=" max-h-min h-52 w-auto"  >
                    <nuxt-link to="http://todo-coral-nine.vercel.app/">
                   <button type="submit" class=" rounded-md p-3 m-3 bg-white text-black ">View</button>
                   </nuxt-link>
               </div>
 
 
 
 
   
               <div class="flex justify-center flex-col  items-center hover:scale-105">
                 <h1>online E-commerce</h1>
               <img src="../assets/9.png" alt=""
                            class=" max-h-min h-52 w-auto"  >
                    <nuxt-link to="http://vue-add-cart.vercel.app/">
                   <button type="submit" class=" rounded-md p-3 m-3 bg-white text-black ">View</button>
                   </nuxt-link>
               </div>
               </div>
 
 
  
          <div class=" ml-6 mt-20">
          
 </div>
 
 
 
   
         <div class="  p-3 ml-2">
           <h1 class=" text-5xl "> Services that we offer</h1>
            <li>web developmemt</li>
           <li>Installing Oparating System</li>
           <li>System Maintanance</li>
           <li>System cleaning</li>
           <li>App development</li>
           
         </div>
 
       <div class="items-start flex justify-start flex-col m-4 mt-24">
             <h1 class=" text-5xl ">Hey welcome feel free to contact me</h1>
             <form @submit.prevent="submitForm">
                 <div class="flex items-center justify-center flex-col pb-4">
                     <label for="name">Name</label>
                     <input id="name" v-model="name" type="text" placeholder="Enter your name" class="rounded-md p-3 text-black">
 
                     <label for="idNumber">ID number</label>
                     <input id="idNumber" v-model="idNumber" type="text" placeholder="Enter your ID number" class="rounded-md p-3 text-black">
 
                     <button class=" transform h-14 bg-blue-700 transition duration-500 hover:scale-105 mt-5 hover:bg-blue-700 flex justify-center items-center text-white flex-col rounded-md px-5 py-3"><a href="sms:254757450716?body=Hello cosmas wing ,,we need your services">Click to Hire me</a></button>
                 </div>
             </form>
         </div>
 
         <div class=" ml-5">
     <h1>My CV</h1>
     <a href="../static/cosmas-resume1.pdf" download="" target="_blank" >Download</a>
   </div>
   <h1 class=" text-2xl">CREDITS</h1>
   <div class="rounded-md flex flex-wrap grid-rows-3 md:grid-rows-2 md:grid-cols-2 lg:grid-cols-3 grid-cols-1 items-center justify-center gap-3 mx-auto container">
 
   <div class=" rounded-md bg-slate-900 m-5 p-7 hover:scale-105 ">
     <h1 class=" items-center justify-center flex text-2xl mb-2">Nelson Rono -app developer and system audit</h1>
     <img src="" alt="">
     <p> i want to thank above named person for personally <br>building and motivating me towards achievement</p>
   </div>
 
   <div class=" rounded-md bg-slate-900 m-5 p-7 hover:scale-105">
     <h1 class=" items-center justify-center flex text-2xl mb-2">Francis mwaniki-Web developer </h1>
     <img src="" alt="">
     <p> i want to thank above named person for personally <br>building and motivating me towards achievement</p>
   </div>
 
 
   <div class=" rounded-md bg-slate-900 m-5 p-7 hover:scale-105">
     <h1 class=" items-center justify-center flex text-2xl mb-2">Mulandi evaline-web developer</h1>
     <img src="" alt="">
     <p> i want to thank above named person for personally <br>building and motivating me towards achievement</p>
   </div>
   
 
   <div class=" rounded-md bg-slate-900 m-5 p-7 hover:scale-105">
     <h1 class=" items-center justify-center flex text-2xl mb-2">OIC CELESINE OCHIENG-Web developer</h1>
     <img src="" alt="">
     <p> i want to thank above named person for personally <br>building and motivating me towards achievement</p>
   </div>
   
 
   <div class=" rounded-md bg-slate-900 m-5 p-7 hover:scale-105">
     <h1 class=" items-center justify-center flex text-2xl mb-2">Owen lintech-software developer</h1>
     <img src="" alt="">
     <p> i want to thank above named person for personally <br>building and motivating me towards achievement</p>
   </div>
   
 
   <div class=" rounded-md bg-slate-900 m-5 p-7 hover:scale-105">
     <h1 class=" items-center justify-center flex text-2xl mb-2">Enock-AI and data scientist</h1>
     <img src="" alt="">
     <p> i want to thank above named person for personally <br>building and motivating me towards achievement</p>
   </div>
   
 
 </div>
 
  <div class="flex gap-2 flex-wrap">
  <video src="https://www.shutterstock.com/shutterstock/videos/1103928479/preview/stock-footage-one-hour-neon-digital-negative-countdown-timer-hour-digital-negative-countdown-neon-one-hour.webm"
         alt=""
         controls
         loop
         muted>
  </video>
  <video src="https://www.shutterstock.com/shutterstock/videos/1029151850/preview/stock-footage-shiny-blue-futuristic-countdown-to-loop-technology-interference-circle-count-down-numbers.webm"
         loop
         muted>
  </video>
</div>
 
 <div class=" ml-5 mt-24 ">
   <h1 class=" text-5xl">location</h1>
   <p>We are located in everywhere in the country and majorly we work online and even <br>in delivering we never disappoint</p>
   <p class=" italic">Join us through the following social media platforms</p>
   <h1 class=" italic">0757450716</h1>
 </div>


 
 <div class=" ml-5  flex mt-4 pt-3 flex-row gap-80">
   <h1 class=" text-rose-700">cossiwing001@2023</h1>
    <span class="  flex items-end justify-end">
        <a href="https://github.com/Cosmasrono?tab=repositories">
        <img src="https://img.icons8.com/?size=1x&id=AZOZNnY73haj&format=png"></a>
        <a href="https://www.linkedin.com/in/cosmas-cheruiyot-a95a3122b/">
        <img src="https://img.icons8.com/?size=1x&id=xuvGCOXi8Wyg&format=png"></a>
                                    
                              </span> 
                              </div>
                              
                              </main>
   
   </template>
 
   
   <script>
  
 
   
 export default {
     data() {
         return {
           pdfLink: 'https://www.example.com/myfile.pdf',
             name: '',
             idNumber: '',
             buttonText: 'Hover me',
             descriptionText: 'This button will perform an action when clicked'
         }
     },
     methods: {
         submitForm() {
             if (!this.name || !this.idNumber) {
                 alert('Please fill in all required fields.');
             } else {
                 // Your code to send the SMS message would go here
             }
         },
         methods: {
       showDescription() {
         this.buttonText = this.descriptionText;
       },
       hideDescription() {
         this.buttonText = 'Hover me';
       }
     }
     }
 }
 
 
 
 
 
 
 </script>
   <style>
   table, th, td {
   border: 1px solid white;
   border-collapse: collapse;
 }
 .video-container {
   padding: 20px; /* Adjust the value as per your desired padding size */
   display: flex;
   justify-content: center;
 }
 
 </style>