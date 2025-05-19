<script setup lang="ts">

import BlogCard from "@/components/BlogCard.vue";
import Blog from "@/blog.json"
import {ref} from "vue";

const blogs = ref(Blog)

defineProps({
  limit : Number
})
</script>

<template>
  <section class="featured-recipes">
    <BlogCard v-for="blog in blogs.slice(0 , limit || blogs.length())" :key="blog.id"
              :blog="blog"/>
  </section>
</template>

<style scoped>

</style>