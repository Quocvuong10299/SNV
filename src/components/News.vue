<script setup>
defineProps({
  news: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <article
    class="bg-yellow rounded-lg shadow overflow-hidden hover:shadow-lg transition"
  >
    <!-- <img
      :src="news.image"
      :alt="news.title"
      class="w-full h-48 object-cover"
    > -->
  <a :href="news.link" class="card-link">
<div class="p-5">
      <!-- <p class="text-sm text-gray-500 mb-2">
        {{ news.date }}
      </p> -->

      <h3 class="text-lg font-bold mb-3">
        {{ news.title }}
      </h3>

      <p class="text-gray-600">
        {{ news.description }}
      </p>
    </div>
  </a>
  </article>
</template>