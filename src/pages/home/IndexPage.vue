<template>
  <div>
    <CarouselCom />
    <KTMSection />
    <LectureSchedule />
    <PortalLinks />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { Cookies } from 'quasar';
import { useRouter } from 'vue-router';
import CarouselCom from 'components/home/CarouselCom.vue'
import KTMSection from 'src/components/home/KTMSection.vue';
import LectureSchedule from 'src/components/home/LectureSchedule.vue';
import PortalLinks from 'src/components/home/PortalLinks.vue'

const router = useRouter()
onMounted(() => {
  if (!Cookies.has('signin')) {
    router.push({ name: 'SignInPage' });
  }
})
</script>

<style scoped></style>
