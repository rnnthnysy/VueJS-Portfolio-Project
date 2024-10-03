<script setup>
import { useMainStore } from '@/stores/mainStore';
import { computed, ref, onMounted } from 'vue';

// Initialize store
const store = useMainStore();

// Access certificates data
const certificates = computed(() => store.certificates);

// Add a state to control when the animation starts
const animateCertificates = ref(false);

// Trigger animation on component mount
onMounted(() => {
  animateCertificates.value = true;
});
</script>

<template>
  <div class="min-h-screen w-full bg-gray-800 mt-10">
    <!-- Apply animation to the certificate grid when component is mounted -->
    <transition name="fade-slide" mode="out-in">
      <div v-if="animateCertificates" class="w-full mx-auto py-10 px-10 md:px-8">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Certifications
          </h2>
        </div>
        <div class="grid max-w-2xl grid-cols-1 gap-8 mx-auto mt-8 auto-rows-fr lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <!-- Loop through certificates and maintain the design -->
          <article
            v-for="(cert, index) in certificates"
            :key="index"
            class="relative flex flex-col justify-end px-4 pt-40 pb-4 overflow-hidden bg-gray-900 md:pt-28 isolate rounded-xl dark:shadow dark:shadow-gray-400/50 transition-transform duration-500 hover:scale-105 hover:opacity-90"
          >
            <img :src="cert.image" alt="" class="absolute inset-0 object-cover w-full h-full -z-10">
            <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
            <div class="absolute inset-0 -z-10 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
            <a class="text-lg font-semibold leading-6 text-white hover:text-teal-100" :href="cert.link">
              {{ cert.title }}
            </a>
          </article>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
/* Add animation styles for fade and slide-up */
.fade-slide-enter-active, .fade-slide-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
