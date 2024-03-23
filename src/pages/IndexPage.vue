<template>
  <div>
    <h1>Hap</h1>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import {Cookies} from 'quasar';
import { useRouter } from 'vue-router';

const router = useRouter()
 onMounted(() => {
  if(!Cookies.has('signin')){
    router.push({name: 'SignInPage'});
  }
 })
</script>

<style scoped></style>
