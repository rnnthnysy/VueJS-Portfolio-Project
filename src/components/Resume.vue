<script setup>
import { useMainStore } from '@/stores/mainStore';
import { computed } from 'vue';

// Initialize store
const store = useMainStore();

// Access resume images from the store
const resumeImages = computed(() => store.resumeImages);
</script>

<template>
  <div class="bg-gray-800 pt-10 pb-10">
    <div class="min-h-screen w-full text-center">
      <!-- Loop through resume images and display them -->
      <img v-for="(image, index) in resumeImages" 
           :key="index" 
           :src="image" 
           class="h-auto max-w-lg mx-auto mb-6" 
           alt="Resume Image" />
    </div>

    <!-- Print Button -->
    <div class="flex justify-center mt-8 no-print">
        <button onclick="window.print()" class="bg-gray-500 hover:bg-gray-700 hover:scale-105 hover:opacity-90 text-white font-bold py-2 px-4 rounded">Print / Save as PDF</button>
    </div>
  </div>
</template>