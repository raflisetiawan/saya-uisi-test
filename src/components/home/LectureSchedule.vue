<template>
  <div id="lecture-schedule">
    <div class="row justify-center q-mt-md">
      <div class="col-md-6">
        <div class="row justify-between">
          <div class="col-md-10">
            <div :class="$q.screen.lt.md ? 'text-body2 text-bold' : 'text-h6 text-bold'">
              Jadwal Perkuliahan
            </div>
          </div>
          <div class="col-md-2">
            <div :class="$q.screen.lt.md ? 'text-body2 text-bold' : 'text-h6 text-bold'">Pilih <q-btn flat
                icon="unfold_more" dense :size="$q.screen.lt.sm ? 'sm' : 'md'"></q-btn></div>
          </div>
        </div>
        <div class="col-md-6 col-sm-10 col-xs-10">
          <q-card class="my-card q-mt-md lecture-schedule-card q-mb-md" flat bordered>
            <q-card-section>

            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">

</script>

<style scoped>
.lecture-schedule-card {
  height: 300px;
  border: solid 2px black;
  border-radius: 10px;
}

@media only screen and (max-width: 1024px) {
  .lecture-schedule-card {
    width: 400px;
  }
}

@media only screen and (max-width: 600px) {
  .lecture-schedule-card {
    width: 300px;
  }
}
</style>
