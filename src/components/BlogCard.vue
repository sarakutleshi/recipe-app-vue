<script setup lang="ts">
defineProps<{
  blog: {
    id: number;
    imageUrl: string;
    username: string;
    content: string;
  };
}>();
</script>

<template>
  <div class="recipe-card">
    <img :src="blog.imageUrl" class="card-img-top" alt="Recipe Image">
    <div class="card-body">
      <h5 class="card-title">{{ blog.username }}</h5>
      <p class="card-text">{{ blog.content }}</p>
      <a :href="`/blogs/${blog.id}`" class="btn">View More</a>
    </div>
  </div>
</template>


<style scoped>

</style>