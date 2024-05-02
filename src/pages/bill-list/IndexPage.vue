<template>
  <div>
    <q-page padding>
      <div class="row justify-between">
        <div class="col-md-3 col-sm-5 col-xs-6">
          <div class="text-h6">Daftar Tagihan Terbayar</div>
        </div>
        <div class="col-md-3 col-sm-5 col-xs-6">
          <div class="row">
            <div class="text-body1">Jenis tagihan</div>
          </div>
          <div class="row">
            <q-btn-dropdown color="black" :size="$q.screen.lt.sm ? 'sm' : 'md'" label="Sudah terbayar">
              <q-list>
                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label>Photos</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label>Videos</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label>Articles</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </div>
        </div>
      </div>
      <div class="row justify-center">
        <q-card class="bill-list q-pa-md" :class="{ 'bill-list-card-height-350': $q.screen.lt.sm }">
          <q-separator class="q-mt-md"></q-separator>
          <div class="row absolute-bottom">
            <div class="text-body2 text-center">
              NB : Jika sudah melakukan pembayaran atau ada ketidaksesuaian tagihan,
              silahkan konfirmasi ke email finance@uisi.ac.id atau WA ke +62 813-3101-1010
            </div>
          </div>
        </q-card>
      </div>
    </q-page>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.bill-list {
  width: 500px;
  border: solid 2px black;
  border-radius: 5px;
  height: 300px;
}

.bill-list-card-height-350 {
  height: 350px;
}
</style>
