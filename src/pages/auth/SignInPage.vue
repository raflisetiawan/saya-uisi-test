<template>
  <q-page>
    <div id="signin" class="row items-center justify-center">
      <div class="row full-width">
        <div class="col-12 text-center">
          <div class="row">
            <div class="col q-mt-md">
              <q-img width="300px" src="~/assets/uisilogo720.png"></q-img>
              <div class="text-h6">Login</div>
            </div>
          </div>
          <q-form @submit="onSubmit">
            <div class="row full-width justify-center">
              <div class="col-md-5 col-sm-8 col-xs-10">
                <q-input color="black" rounded outlined v-model="signInForm.email" label="Masukkan Email UISI" />
              </div>
            </div>
            <div class="row full-width justify-center q-mt-md">
              <div class="col-md-5 col-sm-8 col-xs-10">
                <q-input style="border-color: black;" color="black" rounded outlined v-model="signInForm.password"
                  type="password" label="Masukkan Password" bottom-slots>
                  <template v-slot:hint><q-btn flat dense>Lupa Password?</q-btn></template>
                </q-input>
              </div>
            </div>
            <div class="row justify-center q-mt-md">
              <div class="col-md-5">
                <div class="row">
                  <q-checkbox label="Remember me" color="black" v-model="rememberMe" />
                </div>
              </div>
            </div>
            <div class="row full-width justify-center q-mt-md">
              <div class="col-md-5 col-sm-8 col-xs-10">
                <q-btn label="Login" type="submit" color="black" class="full-width"></q-btn>
              </div>
            </div>
            <div class="row full-width justify-center q-mt-sm ">
              <div class="col-md-5 col-sm-8 col-xs-10">
                <span class="text-body1 text-bold">OR</span>
              </div>
            </div>

            <div class="row full-width justify-center q-mt-sm">
              <div class="col-md-5 col-sm-8 col-xs-10">
                <q-btn outline label="Continue with Google" icon="fa-brands fa-google" type="submit" color="black"
                  class="full-width"></q-btn>
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
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const signInForm = reactive({
  email: '',
  password: ''
})
const rememberMe = ref(false);

const onSubmit = () => {
  Cookies.set('signin', 'true');
  router.push({ name: 'HomePage' })
}
</script>

<style scoped></style>
