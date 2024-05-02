<template>
  <div class="q-pa-md">
    <div class="row ">
      <div class="col-md-4 col-sm-6 col-xs-10">
        <div class="row">
          <div class="text-h6">Daftar Sesi Kelas</div>
        </div>
        <div class="row">
          <div class="text-body1">Riwayat Nilai Non Transfer</div>
        </div>
        <q-separator color="black"></q-separator>
        <div class="row">
          <div class="text-body1">Riwayat Nilai Transfer/MBKM</div>
        </div>
      </div>
    </div>
    <div class="row justify-center">
      <q-card class="list-of-class-sessions q-pa-md"
        :class="{ 'list-of-class-sessions-card-height-350': $q.screen.lt.sm }">
      </q-card>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.list-of-class-sessions {
  width: 500px;
  border: solid 2px black;
  border-radius: 5px;
  height: 300px;
}

.list-of-class-sessions-card-height-350 {
  height: 350px;
}
</style>
