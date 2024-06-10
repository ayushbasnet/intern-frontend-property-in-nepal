<template>
  <v-container fluid class="blog-post">
    <v-row>
      <v-col cols="12" sm="8" offset-sm="2">
        <v-card>
          <v-img
            class="white--text align-end"
            height="500"
            src="https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          >
          </v-img>
          <v-card-title>
            <div class="blog-post-titles">{{ post.title }}</div>
          </v-card-title>

          <v-card-subtitle>
            <v-row justify="space-between">
              <v-col class="published-col"> By: {{ post.author }} </v-col>
              <v-col class="published-col">
                <v-icon class="mr-1 blog-view-post-icon">
                  mdi-clock-time-five-outline</v-icon
                >
                {{ post.date }}
              </v-col>
              <v-col class="published-col">
                <v-icon class="mr-1 blog-view-post-icon"
                  >mdi-chart-line-variant</v-icon
                >
                20 Views
              </v-col>
            </v-row>
          </v-card-subtitle>
          <v-card-text>
            <v-chip
              color="primary"
              :to="`/blog/category/${post.category}`"
              class="mr-2"
            >
              {{ post.category }}
            </v-chip>
            <v-chip
              color="#00bbe4"
              text-color="white"
              v-for="hashtag in post.hashtags"
              :key="hashtag"
              :to="`/blog/hashtag/${hashtag}`"
              class="mr-2"
            >
              #{{ hashtag }}
            </v-chip>
          </v-card-text>
          <v-card-text>
            <p>{{ post.content }}</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
              aperiam libero perferendis sed tempora. Alias aliquam aperiam
              consequuntur distinctio dolorem, dolores eligendi eum expedita
              fuga iusto officia sapiente similique voluptatum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
              aperiam libero perferendis sed tempora. Alias aliquam aperiam
              consequuntur distinctio dolorem, dolores eligendi eum expedita
              fuga iusto officia sapiente similique voluptatum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
              aperiam libero perferendis sed tempora. Alias aliquam aperiam
              consequuntur distinctio dolorem, dolores eligendi eum expedita
              fuga iusto officia sapiente similique voluptatum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
              aperiam libero perferendis sed tempora. Alias aliquam aperiam
              consequuntur distinctio dolorem, dolores eligendi eum expedita
              fuga iusto officia sapiente similique voluptatum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
              aperiam libero perferendis sed tempora. Alias aliquam aperiam
              consequuntur distinctio dolorem, dolores eligendi eum expedita
              fuga iusto officia sapiente similique voluptatum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
              aperiam libero perferendis sed tempora. Alias aliquam aperiam
              consequuntur distinctio dolorem,1 dolores eligendi eum expedita
              fuga iusto officia sapiente similique voluptatum.
            </p>
          </v-card-text>
          <v-card-actions>
            <router-link to="/blog"
              ><v-btn elevation="2" color="indigo" dark
                ><v-icon dark> mdi-arrow-left </v-icon>Back to Blog</v-btn
              ></router-link
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      post: {},
    };
  },
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters([
      "getPostBySlug",
      // ...
    ]),
  },
  created() {
    const slug = this.$route.params.slug;
    this.post = this.getPostBySlug(slug);
  },
  methods: {},
};
</script>
<style scoped>
.blog-post-titles {
  font-family: "Nunito", sans-serif;
  font-size: 38px;
  font-weight: 800;
  color: #184a62;
}
.blog-post-icon {
  font-size: 20px;
}
.blog-post {
  background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}
</style>
