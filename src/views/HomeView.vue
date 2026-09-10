<script setup>
import NewsCard from '../components/News.vue'
import { newsList } from '../data/docs'
</script>

<template>
  <!-- Banner -->
  <section
    class="bg-gray-200 py-20 text-center"
  >
    <div class="max-w-4xl mx-auto px-4">

      <h1 class="text-3xl md:text-5xl font-bold text-gray-800">
        Chào mừng đến với Cẩm nang Điện Tử ngành Nội vụ
      </h1>

      <p class="mt-5 text-lg text-gray-600">
        Cung cấp các văn bản chính thống các lĩnh vực về Nội vụ để thuận tiện cho cơ quan, đơn vị, địa phương nghiên cứu, tham khảo.
      </p>

    </div>
  </section>


  <!-- Tin tức -->
  <section class="max-w-7xl mx-auto px-4 py-10">

    <div class="flex justify-between items-center mb-6">

      <h2 class="text-2xl font-bold border-l-4 border-red-700 pl-3 text-primary">
        Danh mục truy cập
      </h2>

      <RouterLink
        to="/tin-tuc"
        class="text-red-700"
      >
        Xem tất cả →
      </RouterLink>

    </div>


    <div class="grid md:grid-cols-3 gap-6">

      <NewsCard
        v-for="news in newsList"
        :key="news.id"
        :news="news"
      />

    </div>

  </section>
</template>