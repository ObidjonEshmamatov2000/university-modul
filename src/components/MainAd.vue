<template>
  <v-carousel :show-arrows="true">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    >

    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
    data () {
      return {
        items: [
          {
            src: "https://cdn.pixabay.com/photo/2015/07/31/11/45/library-869061_1280.jpg",
          },
          {
            src: 'https://cdn.pixabay.com/photo/2017/08/01/00/38/laptop-2562325_1280.jpg',
          },
          {
            src: 'https://cdn.pixabay.com/photo/2017/03/27/13/17/document-2178656_1280.jpg',
          },
          {
            src: 'https://cdn.pixabay.com/photo/2017/09/21/13/32/girl-2771936_1280.jpg',
          },
        ],
      }
    },
}
</script>

<style scoped>

</style>