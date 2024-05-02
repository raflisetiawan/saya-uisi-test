<template>
  <div id="ktm-section">
    <div class="row justify-center q-mt-md">
      <q-card class="my-card q-pa-sm ktm-section-border q-ma-md" flat bordered>
        <q-card-section>
          <div :class="$q.screen.lt.md ? 'text-body1' : 'text-h6'">Kartu tanda Mahasiswa (KTM)</div>
        </q-card-section>

        <q-separator class="q-mb-md" />

        <q-card-actions align="evenly">
          <q-btn outline :class="$q.screen.lt.sm ? 'q-btn-width-100px' : 'q-btn-width-200px'">Unduh KTM</q-btn>
          <q-btn outline :class="$q.screen.lt.sm ? 'q-btn-width-100px' : 'q-btn-width-200px'">Lihat KTM</q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.ktm-section-border {
  border: solid 2px black;
  border-radius: 20px;
}

.q-btn-width-100px {
  width: 100px;
}

.q-btn-width-200px {
  width: 200px;
}
</style>
