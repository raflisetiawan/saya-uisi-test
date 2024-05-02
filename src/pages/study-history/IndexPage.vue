<template>
  <div>
    <div class="row justify-center">
      <!-- <div class="col-md-4"> -->
      <q-card class="study-history q-pa-md">
        <div class="text-body1 text-bold">Detail Riwayat Studi Mahasiswa</div>
        <q-separator></q-separator>
        <q-card-section>
          <div class="row">
            <div class="col-md-6 col-sm-6 col-xs-10">
              <div class="row q-mb-md">
                <div class="col-md-6">
                  <div class="text-body1 text-bold">Nama: </div>
                </div>
              </div>
              <div class="row q-mb-md">
                <div class="col-md-6">
                  <div class="text-body1 text-bold">NIM: </div>
                </div>
              </div>
              <div class="row q-mb-md">
                <div class="col-md-6">
                  <div class="text-body1 text-bold">Dosen Wali: </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-md-6 col-sm-6 col-xs-10">
              <div class="row q-mb-md">
                <div class="text-body1 text-bold">
                  Department:
                </div>
              </div>
              <div class="row">
                <div class="text-body1 text-bold">
                  Tahun Masuk:
                </div>
              </div>
            </div>
          </div>
        </q-card-section>
      </q-card>
      <!-- </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.study-history {
  width: 500px;
  border: solid 2px black;
  border-radius: 5px;
  height: 300px;
}
</style>
