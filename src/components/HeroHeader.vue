<template>
  <v-container
      fluid
      class="p-hero-header-small mx-0"
      :style="$inlineBgImage(img)"
  >
    <v-row class="text-center">
      <v-col class="p-hero-content col-10 col-12">
        <v-row>
          <v-col class="col-md-12">
            <div>
              <h2 class="p-hero-title">
                {{ titles.mainTitle }}
              </h2>
              <p class="p-hero-subtitle">
                {{ titles.subTitle }}
              </p>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HeroHeader",
  props: {
    titles: {
      type: Object,
      default: () => ({
        mainTitle: 'Default Main Title',
        subTitle: 'Default Sub Title',
      })
    },
    img:{
      type:String,
      default:'header.jpg',
    }
  }
}
</script>

<style scoped>

</style>