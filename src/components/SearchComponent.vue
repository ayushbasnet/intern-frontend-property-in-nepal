<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col class="col-md-10 col-11">
        <v-row justify="center" class="search-container">
          <v-col class="col-md-10 col-9">
            <v-text-field
              class="p-search"
              label="Search"
              placeholder="Search through name, address , property sizes and budget"
              hide-details="auto"
              solo
              v-model="searchWords"
            ></v-text-field>
          </v-col>
          <v-col cols="1">
            <v-btn
              class="p-search-btn"
              height="100%"
              @click="$emit('search', searchWords)"
            >
              Search</v-btn
            >
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "SearchComponent",
  data() {
    return {
      searchWords: "",
    };
  },
};
</script>

<style scoped>
.search-container {
  background-color: hsla(191, 100%, 45%, 0.1);
  border-radius: 5px;
  box-shadow: 12.8037px 15.3644px 13px rgba(0, 0, 0, 0.035),
    5.21632px 6.25958px 6.51852px rgba(0, 0, 0, 0.0274815),
    1.18553px 1.42263px 3.14815px rgba(0, 0, 0, 0.0168519);
}
</style>
