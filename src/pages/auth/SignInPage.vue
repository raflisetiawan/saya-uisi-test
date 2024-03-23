<template>
  <q-page>
    <div id="signin" class="row items-center justify-center">
      <div class="row full-width">
        <div class="col-12 text-center">
          <div class="row">
            <div class="col">
              <div class="text-h5">SAYA UISI</div>
              <div class="text-h6">Login</div>
            </div>
          </div>
          <q-form @submit="onSubmit">
            <div class="row full-width justify-center">
              <div class="col-md-5">
                <q-input rounded outlined v-model="signInForm.email" label="Masukkan Email UISI" />
              </div>
            </div>
            <div class="row full-width justify-center q-mt-md">
              <div class="col-md-5">
                <q-input rounded outlined v-model="signInForm.password" type="password" label="Masukkan Password"
                  bottom-slots>
                  <template v-slot:hint><q-btn flat dense>Lupa Password?</q-btn></template>
                </q-input>
              </div>
            </div>
            <div class="row full-width justify-center q-mt-xl">
              <div class="col-md-5">
                <q-btn label="Login" type="submit" color="primary" class="full-width"></q-btn>
              </div>
            </div>
          </q-form>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { Cookies } from 'quasar';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const signInForm = reactive({
  email: '',
  password: ''
})

const onSubmit = () => {
  Cookies.set('signin', 'true');
  router.push({ name: 'HomePage' })
}
</script>

<style scoped>
#signin {
  height: 100vh;
}
</style>
