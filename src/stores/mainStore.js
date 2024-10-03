import { defineStore } from 'pinia';
import { reactive } from 'vue';

export const useMainStore = defineStore('mainStore', {
  state: () => ({
    // Home Data
    home: reactive ({
      image: '/ron.png',
      name: 'Ron Anthony Sy',
      description: `As a fourth year computer science student at New Era University, my objective is to acquire more programming experience and improve my coding abilities. As I advance academically, I plan to investigate collaborative projects, seminars, and apprenticeships that will provide me with hands-on experience and an understanding of industry standards. Due to my profound curiosity and eagerness to acquire knowledge, I am confident in my capacity to adapt to challenges and thrive in a dynamic and interactive environment.`,
      github: 'https://github.com/rnnthnysy',
      linkedin: 'https://www.linkedin.com/in/ron-anthony-sy/',
    }),

    // Certificate Data
    certificates: [
        { title: 'Fortinet Certified Associate in Cybersecurity', link: 'https://drive.google.com/file/d/1PGjCxTZ9KO0YVJ5wOma6s7XjQLs3OZnz/view?usp=drive_link', image: '/Fortinet Certified Associate in Cybersecurity-1.png' },
        { title: 'FCA - FortiGate 7.4 Operator Self-Paced', link: 'https://drive.google.com/file/d/1USgVyXc0OHiSC41HgYrVcJBZaLqmpLr4/view?usp=drive_link', image: '/FCA - FortiGate 7.4 Operator Self-Paced-1.png' },
        { title: 'FCF - Technical Introduction to Cybersecurity 1.0 Self-Paced', link: 'https://drive.google.com/file/d/12h8NptOIcZoMDdTFxZyBBKHWi8uKN0-x/view?usp=drive_link', image: '/FCF - Technical Introduction to Cybersecurity 1.0 Self-Paced-1.png' },
        { title: 'Enhancing Digital Protection Cybersecurity for All', link: 'https://drive.google.com/file/d/1FfzyfjsnlgL-j5LlFCDuTSined1U7Np5/view?usp=drive_link', image: '/Enhancing Digital Protection Cybersecurity for All-1.png' },
        { title: 'Fortinet Certified Fundamentals in Cybersecurity', link: 'https://drive.google.com/file/d/1MAEc4xVa-PuQ4UWkALIv1vJPa0x2Pk36/view?usp=drive_link', image: '/Fortinet Certified Fundamentals in Cybersecurity-1.png' },
        { title: 'FCF - Getting Started in Cybersecurity 2.0 Self-Paced', link: 'https://drive.google.com/file/d/1HRj5qMuuM9IAjtUk6OG4Qs7D1rVk2VmC/view?usp=drive_link', image: '/FCF - Getting Started in Cybersecurity 2.0 Self-Paced-1.png' },
        { title: 'FCF - Introduction to the Threat Landscape 2.0 Self-Paced', link: 'https://drive.google.com/file/d/1vN9ytrfw95zJiUxZVVIKsgQCoOxtXywp/view?usp=drive_link', image: '/FCF - Introduction to the Threat Landscape 2.0 Self Paced-1.png' },
        { title: 'Cyber Security Bootcamp', link: 'https://drive.google.com/file/d/1FbdQK0RPr6DfZFztXdd4FcPKDrwxfhnM/view?usp=drive_link', image: '/Cyber Security Bootcamp-1.png' },
        { title: 'Cybersecurity Workshop - CTF', link: 'https://drive.google.com/file/d/1wAN4DlExeWl1rXumVXiGrKb6xyQJRbb7/view?usp=drive_link', image: '/Cybersecurity Workshop - CTF.png' },
        { title: 'Python', link: 'https://drive.google.com/file/d/1zEv7uCDIEYCbCgMPTa80LL_85s1HQ43W/view?usp=drive_link', image: '/Python.png' },
        { title: 'Intro to Programming', link: 'https://drive.google.com/file/d/1LlIPp4I04kQQ5irBVcw7hw-DGwl2PnBi/view?usp=drive_link', image: '/Intro to Programming.png' },
        { title: 'Data Analytics Essentials', link: 'https://drive.google.com/file/d/19AURAS57TwHbkAoTjd-QtVXITIcWT6ZQ/view?usp=drive_link', image: '/Data Analytics Essential-1.png' },
        { title: 'Business Analytics with Excel', link: 'https://drive.google.com/file/d/1-0zlC1q5KSwFh7h0B2eHwtPakAq9CewA/view?usp=drive_link', image: '/Business Analytics with Excel.png' }
    ],

    // Resume Data
    resumeImages: [
      '/Ron Anthony Sy-CV-1.png',
      '/Ron Anthony Sy-CV-2.png',
    ],
  }),

  actions: {
    // Home Data Actions
    updateHomeData(updatedHome) {
      this.home = { ...this.home, ...updatedHome };
    },

    // Certificate Actions
    addCertificate(certificate) {
      this.certificates.push(certificate);
    },
    updateCertificate(index, updatedCertificate) {
      this.certificates[index] = { ...this.certificates[index], ...updatedCertificate };
    },
    removeCertificate(index) {
      this.certificates.splice(index, 1);
    },

    // Resume Actions
    addResumeImage(imageUrl) {
      this.resumeImages.push(imageUrl);
    },
    removeResumeImage(index) {
      this.resumeImages.splice(index, 1);
    },
  },
});
