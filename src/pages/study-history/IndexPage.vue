<template>
  <div>
    <q-page padding>
      <div class="row justify-center">
        <q-card class="study-history q-pa-md" :class="{ 'study-history-card-height-350': $q.screen.lt.sm }">
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
            <div class="row justify-center " :class="{ 'q-mt-xl': $q.screen.gt.xs }">
              <div class="text-body2 text-center">Catatan : Baris Yang Berwarna Merah Adalah Nilai Yang Tidak Di
                Masukkan Ke transkrip / Matkul Yang Pernah Diulang</div>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="row q-my-md">
        <div class="col-md-4 col-sm-6 col-xs-10">
          <div class="row">
            <div class="text-h6">Data Riwayat Studi Mahasiswa</div>
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
        <q-card class="study-history q-pa-md" :class="{ 'study-history-card-height-350': $q.screen.lt.sm }">
        </q-card>
      </div>
    </q-page>
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

.study-history-card-height-350 {
  height: 350px;
}
</style>
