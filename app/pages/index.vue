<template>
    <div class="relative h-screen  overflow-hidden w-full">
      <!-- Background video -->
      <video
        autoplay
        muted
        loop
        playsinline
        class="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src="https://res.cloudinary.com/dlurh2boh/video/upload/v1744851828/3194277-hd_1920_1080_30fps_n9ckp5.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
  <Navbar/>
      <!-- Your content goes here -->
      
        <h1 class="lg:text-[60px] md:text-6xl font-bold lg:mt-[300px] text-white lg:ml-[450px] ml-[50px] mt-[250px] text-[30px]">Start Checking Contract <br>Addresses Of Tokens <br>Before Investing In it To<br> Avoid Fraud Tokens.</h1>
      <br>
      <small class="text-gray-500 lg:ml-[450px] lg:visible lg:text-[20px] font-bold mr-[-400px] pl-[-50px] hidden">Do some security/DD checks on a token before working with it.</small>

      <div class="flex gap-[10px]">
       <NuxtLink to='/checker'> <button class="text-white bg-purple-500 rounded p-[10px] lg:ml-[450px] ml-[50px]"> Start Scanning</button></NuxtLink>
        <button class="text-white rounded p-[10px] bg-gray-500 w-[120px]"> Docs</button>
      </div>

    </div>
    <div class="bg-gradient-to-r from-purple-500 to-white p-6 rounded-xl shadow-md w-full h-full">
    <About id="aboutt"/><br><br>
    <hr>
    <How id="howIt"/><br><br>
    <Footer/>
  </div>
  </template>

  