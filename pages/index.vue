<template>
 <main class=" p-4 ml-5">
    


      <h1 class=" text-2xl flex items-center justify-center text-white p-5 m">WELCOME TO <span class=" text-green-600 italic "> C-TECHNOLOGIES</span>  </h1>
      <div class=" text-black text-xl  md:mt-1 md:left top-1 md:ml-2  md:relative  md:flex ">
        <div class=" relative left-14"> 
     <div class=" flex items-center justify-end pr-6 pl-6 px-3 my-4 mx-60 rounded-md border-slate-700  text-white">
    <div class="">
      <img src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/04/web-developer-portfolio.webp" alt="">
    </div>
     </div>
        </div>
      </div>
      <div class=" flex flex-col ">
        <h1 class=" text-5xl p-3">About Me</h1>
        <p> I am a skilled software developer with experience using a range of cutting-edge technologies, including Python, Vue, Nuxt, Django, Node.js, Tailwind CSS, Supabase, and MongoDB. With expertise in both front-end and back-end development, I am able to create dynamic and responsive applications that are both aesthetically pleasing and functional. Whether working independently or collaboratively as part of a team, I am committed to delivering high-quality work that meets the needs of clients and end-users alike. Always striving to improve my skills and stay ahead of the curve, I am passionate about learning new technologies and exploring innovative ways to tackle complex technical challenges.
        </p>
      </div>
      
     
  


         <div class="  grid  grid-rows-3 md:grid-rows-2 md:grid-cols-2 lg:grid-cols-3 grid-cols-1 items-center justify-center gap-1 mx-auto container">
            
             <div class="flex justify-center flex-col  items-center">
                <img src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/04/web-developer-portfolio.webp" alt=""
                          class=" max-h-min h-52 w-auto"  >
                   <nuxt-link to="">
                  <button type="submit" class=" rounded-md p-3 m-3 bg-white text-black ">View</button>
                  </nuxt-link>
              </div>


                  
              <div class="flex justify-center flex-col  items-center">
                <img src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/04/web-developer-portfolio.webp" alt=""
                          class=" max-h-min h-52 w-auto"  >
                   <nuxt-link to="">
                  <button type="submit" class=" rounded-md p-3 m-3 bg-white text-black ">View</button>
                  </nuxt-link>
              </div>



                  
              <div class="flex justify-center flex-col  items-center">
                <img src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/04/web-developer-portfolio.webp" alt=""
                          class=" max-h-min h-52 w-auto"  >
                   <nuxt-link to="">
                  <button type="submit" class=" rounded-md p-3 m-3 bg-white text-black   ">View</button>
                  </nuxt-link>
              </div>


                   
             <div class="flex justify-center flex-col items-center">
                <img src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/04/web-developer-portfolio.webp" alt=""
                          class=" max-h-min h-52 w-auto"  >
                   <nuxt-link to="">
                  <button type="submit" class=" rounded-md p-3 m-3 bg-white text-black   ">View</button>
                  </nuxt-link>
              </div>

     
              <div class="flex justify-center flex-col mx-auto items-center">
                <img src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/04/web-developer-portfolio.webp" alt=""
                          class=" max-h-min h-52 w-auto"  >
                   <nuxt-link to="">
                  <button type="submit" class=" rounded-md p-3 m-3 bg-white text-black   ">View</button>
                  </nuxt-link>
              </div>


     
              <div class="flex justify-center mx-auto flex-col items-center">
                <img src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/04/web-developer-portfolio.webp" alt=""
                          class=" max-h-min h-52 w-auto"  >
                   <nuxt-link to="">
                  <button type="submit" class=" rounded-md p-3 m-3 bg-white text-black ">View</button>
                  </nuxt-link>
              </div>

              
              </div>


 
         <div class=" ml-6 mt-20">
         <h1>my next journey as developer</h1>
         <table class=" rounded p-2 border-solid">
          <tr > 
            <th class=" text-pink-600"> ACTIVITY</th>
            <th class=" text-pink-600"> DURATION</th>
            <th class=" text-pink-600">PROJECT SAMPLE</th>
          </tr>

          <tr>
            <td>Mchine learning</td>
            <td>4 months</td>
            <td>weather prediction</td>
          </tr>


          <tr>
            <td>flutter</td>
            <td>4 months</td>
            <td>weather prediction</td>
          </tr>

          <tr>
            <td>ruby</td>
            <td>4 months</td>
            <td>weather prediction</td>
          </tr>


          <tr>
            <td>flask</td>
            <td>4 months</td>
            <td>weather prediction</td>
          </tr>


          <tr>
            <td>deep learning</td>
            <td>4 months</td>
            <td>weather prediction</td>
          </tr>

          <tr>
            <td>Mchine learning</td>
            <td>4 months</td>
            <td>weather prediction</td>
          </tr>
         </table>
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

                    <button type="submit" class="flex items-center justify-center text-white bg-blue-700 flex-col rounded-md px-5 py-3 m-7">Hire me</button>
                </div>
            </form>
        </div>


        <div class="">
          <h1>Resume</h1>
          <a href="./static/cosmas-resume1.pdf" download>Download my resume</a>
    </div>

  
<div class=" mt-9 flex  gap-5 ">  

  <div class=" rounded-md bg-slate-900 m-5 p-7 hover:scale-105 ">
    <h1 class=" items-center justify-center flex text-2xl mb-2">Nelson rono -app developer and system audit</h1>
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
  

</div>

  <span class=" flex flex-row items-center justify-center gap-5   mt-4 pt-3 ml-72 mr-52 bg-white0">Follow me on 
       <a href="https://github.com/Cosmasrono?tab=repositories"><img src="../assets/github.png"></a>
       <a href="https://www.linkedin.com/in/cosmas-cheruiyot-a95a3122b/"><img src="../assets/l.png"></a>
                                   
                             </span></main>
  
  </template>
  
  <script>
export default {
    data() {
        return {
            name: '',
            idNumber: ''
        }
    },
    methods: {
        submitForm() {
            if (!this.name || !this.idNumber) {
                alert('Please fill in all required fields.');
            } else {
                // Your code to send the SMS message would go here
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
</style>