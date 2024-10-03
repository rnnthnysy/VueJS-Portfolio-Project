<template>
  <div class="p-6 bg-gray-800 min-h-screen text-white">
    <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white mt-10">Admin Panel</h1>

    <!-- Tabs to navigate between different sections -->
    <div class="flex space-x-4 mb-6">
      <button @click="currentTab = 'home'" :class="{ 'bg-teal-600': currentTab === 'home' }" class="bg-gray-700 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">
        Home Settings
      </button>
      <button @click="currentTab = 'certificates'" :class="{ 'bg-teal-600': currentTab === 'certificates' }" class="bg-gray-700 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">
        Certificate Settings
      </button>
      <button @click="currentTab = 'resume'" :class="{ 'bg-teal-600': currentTab === 'resume' }" class="bg-gray-700 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">
        Resume Settings
      </button>
    </div>

    <!-- Home Settings -->
    <div v-if="currentTab === 'home'">
      <h2 class="text-xl font-bold mb-4">Edit Home Page Settings</h2>
      <form @submit.prevent="saveHomeChanges">
        <div class="mb-4">
          <label for="image" class="block text-sm font-medium text-white">Profile Image URL</label>
          <input v-model="home.image" type="text" id="image" class="mt-1 block w-full p-2 bg-gray-700 text-white rounded" />
        </div>
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium text-white">Name</label>
          <input v-model="home.name" type="text" id="name" class="mt-1 block w-full p-2 bg-gray-700 text-white rounded" />
        </div>
        <div class="mb-4">
          <label for="description" class="block text-sm font-medium text-white">Description</label>
          <textarea v-model="home.description" id="description" rows="4" class="mt-1 block w-full p-2 bg-gray-700 text-white rounded"></textarea>
        </div>
        <div class="mb-4">
          <label for="github" class="block text-sm font-medium text-white">GitHub Link</label>
          <input v-model="home.github" type="text" id="github" class="mt-1 block w-full p-2 bg-gray-700 text-white rounded" />
        </div>
        <div class="mb-4">
          <label for="linkedin" class="block text-sm font-medium text-white">LinkedIn Link</label>
          <input v-model="home.linkedin" type="text" id="linkedin" class="mt-1 block w-full p-2 bg-gray-700 text-white rounded" />
        </div>
        <button type="submit" class="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">
          Save Home Changes
        </button>
      </form>
    </div>

    <!-- Certificate Settings -->
    <div v-if="currentTab === 'certificates'">
      <h2 class="text-xl font-bold mb-4">Edit Certificate Page Settings</h2>
      
      <ul class="space-y-6">
        <li v-for="(certificate, index) in certificates" :key="index" class="bg-gray-700 p-4 rounded-lg">
          <h3 class="text-lg font-semibold mb-2">Certificate {{ index + 1 }}</h3>

          <label class="block text-sm font-medium text-white">Title</label>
          <input v-model="certificate.title" type="text" class="mt-1 block w-full p-2 bg-gray-600 text-white rounded mb-4" />

          <label class="block text-sm font-medium text-white">Image URL</label>
          <input v-model="certificate.image" type="text" class="mt-1 block w-full p-2 bg-gray-600 text-white rounded mb-4" />

          <label class="block text-sm font-medium text-white">Link</label>
          <input v-model="certificate.link" type="text" class="mt-1 block w-full p-2 bg-gray-600 text-white rounded mb-4" />

          <!-- Remove Button -->
          <button @click="removeCertificate(index)" class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Remove Certificate
          </button>
            </li>
          </ul>

          <button @click="addCertificate" class="mt-6 bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">
            Add Certificate
          </button>

          <button @click="saveCertificateChanges" class="mt-6 bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">
            Save Certificate Changes
          </button>
    </div>

    <!-- Resume Settings -->
    <div v-if="currentTab === 'resume'">
      <h2 class="text-xl font-bold mb-4">Edit Resume Page Settings</h2>

      <div v-for="(image, index) in resumeImages" :key="index" class="mb-4">
        <label class="block text-sm font-medium text-white">Resume Image {{ index + 1 }} URL</label>
        <input v-model="resumeImages[index]" type="text" class="mt-1 block w-full p-2 bg-gray-700 text-white rounded" />

        <!-- Remove Button for Resume Images -->
        <button @click="removeResumeImage(index)" class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4">
          Remove Resume Image
        </button>
      </div>

      <button @click="addResumeImage" class="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">
        Add Resume Image
      </button>

      <button @click="saveResumeChanges" class="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded mt-4">
        Save Resume Changes
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useMainStore } from '@/stores/mainStore';

// Initialize store
const store = useMainStore();

// Reactive data for managing current tab
const currentTab = ref('home');

// Home Data
const home = ref({ ...store.home });

// Certificates Data
const certificates = ref([...store.certificates]);

// Resume Images
const resumeImages = ref([...store.resumeImages]);

// Save Home Data Changes
const saveHomeChanges = () => {
  store.updateHomeData(home.value);
  alert('Home data saved successfully!');
};

// Add Certificate
const addCertificate = () => {
  certificates.value.push({ title: '', image: '', link: '' });
};

// Remove Certificate
const removeCertificate = (index) => {
  certificates.value.splice(index, 1);
};

// Save Certificate Changes
const saveCertificateChanges = () => {
  store.certificates = [...certificates.value];
  alert('Certificate changes saved successfully!');
};

// Add Resume Image
const addResumeImage = () => {
  resumeImages.value.push('');
};

// Remove Resume Image
const removeResumeImage = (index) => {
  resumeImages.value.splice(index, 1);
};

// Save Resume Changes
const saveResumeChanges = () => {
  store.resumeImages = [...resumeImages.value];
  alert('Resume changes saved successfully!');
};
</script>
