<template>
  <router-link :to="`/blog/${post.slug}`">
    <v-card class="mx-auto my-6" hover>
      <v-img class="white--text align-end" height="200px" :src="post.image">
      </v-img>
      <v-card-title>
        <div class="blog-titles">{{ post.title }}</div>
      </v-card-title>
      <v-card-subtitle>
        <v-row justify="space-between" class="blog-subtitle">
          <v-col>
            <v-row>
              <v-col class="published-col mx-1">By: {{ post.author }}</v-col>
            </v-row>
            <v-row class="mt-0">
              <v-col class="published-col"
                ><v-icon class="mr-1 blog-view-post-icon">
                  mdi-clock-time-five-outline</v-icon
                >
                {{ post.date }}
              </v-col>
            </v-row>
            <v-row class="mt-0">
              <v-col class="published-col">
                <v-icon class="mr-1 blog-view-post-icon"
                  >mdi-chart-line-variant</v-icon
                >
                20 Views
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card-subtitle>
      <v-card-text>
        {{ post.content }}
      </v-card-text>
    </v-card>
  </router-link>
</template>

<script>
export default {
  name: "BlogCard",
  props: {
    post: {
      required: true, // Set to true if the prop is mandatory
    },
    // Add more props as needed
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito&family=Titillium+Web&display=swap");
.blog-heading {
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  font-family: "Titillium Web", sans-serif;
}
.published-col {
  white-space: nowrap; /* Prevent text from wrapping to a new line */
}
.blogs {
  background-color: #dbebfc;
}

.blog-titles {
  font-family: "Nunito", sans-serif;
  font-size: 26px;
  font-weight: 600;
  color: #184a62;
}

.blog-subtitle {
  font-size: 14px;
}
.published-col > .blog-view-post-icon {
  font-size: 15px;
}
</style>
