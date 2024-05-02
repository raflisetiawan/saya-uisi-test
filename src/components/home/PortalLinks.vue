<template>
  <div id="portal-links" class="q-mb-md">
    <div class="row justify-evenly items-end">
      <div class="col-md-3">
        <q-img class="portal-link-border-black q-mb-md" width="300px" src="~/assets/siakad.png" no-native-menu
          @mouseover="centerCaptionRef1 = true" @mouseclick="centerCaptionRef1 = true"
          @mouseleave="centerCaptionRef1 = false">
          <div class=" text-center animate-caption full-width full-width"
            :class="{ 'absolute-bottom ': !centerCaptionRef1, 'absolute-center ': centerCaptionRef1 }">
            Sistem Informasi Akademik UISI
          </div>
        </q-img>
      </div>
      <div class="col-md-3">
        <q-img class="portal-link-border-black q-mb-md" width="300px" src="~/assets/kehadiran.png" no-native-menu
          @mouseover="centerCaptionRef2 = true" @mouseclick="centerCaptionRef2 = true"
          @mouseleave="centerCaptionRef2 = false">
          <div class="text-center animate-caption full-width full-width"
            :class="{ 'absolute-bottom ': !centerCaptionRef2, 'absolute-center ': centerCaptionRef2 }">
            Sistem Kehadiran UISI
          </div>
        </q-img>
      </div>
      <div class="col-md-3">
        <q-img class="portal-link-border-black q-mb-md" width="300px" src="~/assets/uisipay.png" no-native-menu
          @mouseover="centerCaptionRef3 = true" @mouseclick="centerCaptionRef3 = true"
          @mouseleave="centerCaptionRef3 = false">
          <div class="text-center animate-caption full-width full-width"
            :class="{ 'absolute-bottom ': !centerCaptionRef3, 'absolute-center ': centerCaptionRef3 }">
            Informasi Pembayaran Kuliah
          </div>
        </q-img>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const centerCaptionRef1 = ref(false);
const centerCaptionRef2 = ref(false);
const centerCaptionRef3 = ref(false);

</script>

<style scoped>
.portal-link-border-black {
  border: solid 2px black;
  border-radius: 10px;
  cursor: pointer;
}

.animate-caption {
  transition: all 0.3s ease;
}
</style>
