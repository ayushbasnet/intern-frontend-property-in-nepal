<template>
  <div>
    <HeroHeader :titles="titles" />
    <v-container fluid class="default-padding">
      <v-row class="justify-space-between">
        <UnitConverter />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import HeroHeader from "@/components/HeroHeader";
import UnitConverter from "@/components/UnitConverter";
export default {
  name: "home",
  components: {
    HeroHeader,
    UnitConverter,
  },
  metaInfo() {
    return {
      title: "Unit Converter",
      titleTemplate: this.$root.$options.titleTemplate,
    };
  },
  data() {
    return {
      titles: {
        subTitle: "",
        mainTitle: "TOOLS",
      },
    };
  },
  methods: {
    toggleComponent() {
      this.showUnitConverter = !this.showUnitConverter;
    },
  },
};
</script>

<style lang="scss"></style>
