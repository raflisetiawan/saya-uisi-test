<template>
  <q-layout view="lHh Lpr lFf" class="bg-grey-uisi">
    <q-header class="bg-transparent" reveal>
      <q-toolbar class="row justify-center items-center">
        <q-btn flat dense icon="fa-regular fa-bell" color="black"></q-btn>
        <q-img class="text-center q-mx-xl" width="250px" src="~/assets/uisilogo720.png"></q-img>
        <q-btn flat dense icon-right="expand_more" icon="fa-regular fa-user" color="black"></q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
