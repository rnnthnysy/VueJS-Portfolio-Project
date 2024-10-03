<script setup>
import { useMainStore } from '@/stores/mainStore';
import { computed } from 'vue';

// Initialize store and reactive data
const store = useMainStore();
const homeData = computed(() => store.home);
</script>

<template>
  <div class="font-poppins bg-gray-800 min-h-screen flex items-center justify-center py-16">
    <div class="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-16 max-w-screen-lg mx-auto">
      
      <!-- Image Section -->
      <div class="rounded-full overflow-hidden w-100 h-100 md:w-100 md:h-100">
        <img
          class="w-full h-full object-cover"
          :src="homeData.image"
          alt="Profile Image"
        />
      </div>

      <!-- Text Section -->
      <div class="text-center md:text-left max-w-md">
        <h1 class="text-white font-bold text-3xl md:text-3xl mb-7 leading-tight">
          Hey, it's me, {{ homeData.name }}
        </h1>
        <p class="text-white text-base md:text-md mb-7 leading-relaxed text-justify">
          {{ homeData.description }}
        </p>

        <!-- Social Links -->
        <div class="flex flex-col space-y-4">
          <a
            rel="noopener"
            target="_blank"
            :href="homeData.github"
            class="bg-gray-900 rounded-lg px-8 py-4 w-full text-white flex justify-center items-center text-lg hover:bg-gray-700 transition duration-300 ease-in-out"
          >
            <img
              class="mr-2"
              src="https://ucarecdn.com/1f465c47-4849-4935-91f4-29135d8607af/github2.svg"
              width="24"
              height="24"
              alt="Github"
            />
            Visit my Github
          </a>
          <a
            rel="noopener"
            target="_blank"
            :href="homeData.linkedin"
            class="bg-gray-900 rounded-lg px-8 py-4 w-full text-white flex justify-center items-center text-lg hover:bg-gray-700 transition duration-300 ease-in-out"
          >
            <img
              class="mr-2"
              src="https://ucarecdn.com/95eebb9c-85cf-4d12-942f-3c40d7044dc6/linkedin.svg"
              width="24"
              height="24"
              alt="LinkedIn"
            />
            Follow me on LinkedIn
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
