<template>
  <div>
    <HeroHeader :titles="titles" />
    <v-container fluid class="default-padding">
      <v-row class="justify-space-between">
        <EMICalculator />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import HeroHeader from "@/components/HeroHeader";
import EMICalculator from "@/components/EMICalculator";
export default {
  name: "home",
  components: {
    HeroHeader,
    EMICalculator,
  },
  metaInfo() {
    return {
      title: "EMI Calculator",
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
  methods: {},
};
</script>

<style lang="scss"></style>
