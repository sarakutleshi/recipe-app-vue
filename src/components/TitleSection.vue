<script setup  lang="ts">
defineProps(
    {
      title: String,
    }
)
</script>

<template>
  <div class="row-features">
    <h5>{{ title }}</h5>
  </div>
</template>

<style scoped>
.row-features h5 {
  display: flex;
  justify-content: left;
  margin-left: 60px;
  margin-top: 45px;
  margin-bottom: 30px;
  font-family : Inter , serif;
  font-size: xxx-large;
  color: #b66b51;
}

.row-features h5:hover {
  color: #e89a7e;
}
</style>