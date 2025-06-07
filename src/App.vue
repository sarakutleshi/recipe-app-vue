<script setup>
import TheLayout from "@/components/TheLayout.vue";
import AuthView from "@/views/auth/AuthView.vue";
import {useAuthStore} from "@/stores/auth.js";

const authStore = useAuthStore();
</script>

<template>
  <the-layout/>
</template>
