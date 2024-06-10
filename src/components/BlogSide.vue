<template>
  <v-col class="left-blogs-filter" cols="12" md="3" lg="2">
    <v-row>
      <v-col class="col-12 blog-categories-container">
        <h3 class="text-color">Categories</h3>
        <v-row>
          <v-col class="col-12">
            <div class="blog-categories">
              <v-list color="transparent">
                <v-list-item
                  v-for="(count, category) in uniqueCategories"
                  :key="category"
                >
                  <router-link
                    :to="{
                      name: 'blogCategory',
                      params: { slug: category },
                    }"
                    class="w-100 pa-1 category-target"
                  >
                    <v-col class="col-12">
                      <v-row>
                        <v-icon class="mr-2"> mdi-chevron-double-right </v-icon>
                        <span class="flex-grow-1">
                          {{ category }}
                        </span>
                        <v-chip class="ml-auto"> {{ count }} </v-chip>
                      </v-row>
                    </v-col>
                  </router-link>
                </v-list-item>
              </v-list>
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col class="col-12 hashtags-container">
        <h3 class="text-color">#Hashtags</h3>
        <v-row>
          <v-col class="col-12">
            <div class="hashtags">
              <!-- <template v-for="post in posts">
                <v-chip
                  v-for="hashtag in post.hashtags"
                  :key="hashtag"
                  :to="`blog/hashtag/${hashtag}`"
                  :to="{ name: 'blogsHashTag', params: { slug: hashtag } }"
                  class="mr-2 hashtag-chips"
                >
                  #{{ hashtag }}
                </v-chip>
              </template> -->
              <!-- Loop through the unique hashtags and create router links for each -->
              <template v-for="hashtag in uniqueHashtags"
                ><router-link
                  :key="hashtag"
                  :to="{ name: 'blogHashTag', params: { slug: hashtag } }"
                >
                  <v-chip class="hashtag-chips"> #{{ hashtag }} </v-chip>
                </router-link></template
              >
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h3 class="text-color">Latest Blogs</h3>
        <v-row>
          <v-col class="col-12">
            <v-list-item
              v-for="post in limitedPosts"
              :key="post.id"
              :to="`/blog/${post.slug}`"
            >
              <div class="col-12 recent-blog">
                <div
                  class="recent-blog-image"
                  :style="$inlineBgImage('hero-header.jpg')"
                ></div>
                <p class="blog-title">
                  {{ post.title }}
                </p>
                <p class="blog-date">
                  <span> {{ post.date }} </span>
                </p>
              </div>
            </v-list-item>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "BlogSide",
  computed: {
    ...mapState(["posts"]),
    limitedPosts() {
      // Return only the first three items from the posts array
      return this.posts.slice(0, 3);
    },
  },
  data() {
    return {
      uniqueHashtags: [],
      uniqueCategories: {},
      categories: [],
    };
  },
  methods: {
    // getUniqueCategories() {
    //   return Array.from(new Set(this.posts.map((post) => post.category)));
    // },
    getUniqueCategories() {
      // Create an empty object to store unique categories and their occurrence count
      const uniqueCategories = {};

      // Loop through each post object in the posts array
      this.posts.forEach((post) => {
        // Get the category of each post
        const category = post.category;

        // If the category is not in the uniqueCategories object, initialize it with count 1
        if (!uniqueCategories[category]) {
          uniqueCategories[category] = 1;
        } else {
          // If the category already exists, increment the count
          uniqueCategories[category]++;
        }
      });

      return uniqueCategories;
    },
    getUniqueHashtags() {
      // Create an empty Set to store unique hashtags
      const uniqueSet = new Set();

      // Loop through each post object in the posts array
      this.posts.forEach((post) => {
        // Loop through the hashtags array of each post and add them to the Set
        post.hashtags.forEach((hashtag) => {
          uniqueSet.add(hashtag);
        });
      });

      // Convert the Set back to an array and return it
      return Array.from(uniqueSet);
    },
  },
  mounted() {
    // When the component is mounted, compute the unique hashtags
    this.uniqueCategories = this.getUniqueCategories();
    this.uniqueHashtags = this.getUniqueHashtags();
  },
};
</script>
<style scoped>
.w-100 {
  width: 90%;
}
.left-blogs-filter {
  padding-top: 40px;
  /* background: linear-gradient(-90deg, #dbedff, #00bbe4); */
  background-image: linear-gradient(to top, #dfe9f3 0%, white 100%);
}
.hashtag-chips {
  background: #00bbe4 !important;
  color: rgb(255, 243, 243);
  margin: 2px;
  cursor: pointer;
}
.text-color {
  color: #184a62;
}
.blog-categories-container .v-icon {
  color: #076fb6 !important;
}

.blog-categories .category-target {
  margin: auto !important;
  /*border :1px dotted rgba(0, 0, 0, 0.1);*/
  padding: 5px !important;
  background: linear-gradient(
    90deg,
    rgba(7, 111, 182, 0.008),
    rgba(7, 111, 182, 0.08),
    rgba(7, 111, 182, 0.008)
  );
  color: #076fb6 !important;
  border-radius: 4px;
  cursor: pointer;
}
.blog-categories .category-target:hover {
  background: linear-gradient(
    90deg,
    rgba(7, 111, 182, 0.08),
    rgba(7, 111, 182, 0.08),
    rgba(7, 111, 182, 0.08)
  );
}
.recent-blog * {
  padding: 0px !important;
  margin: 0px !important;
  cursor: pointer;
}
.recent-blog {
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.55);
  margin: 10px 0px;
  box-shadow: 1px 1px 2px 2px rgba(7, 111, 182, 0.036);
}
.recent-blog-image {
  height: 150px;
  background-position: center;
  background-size: cover;
  border-radius: 10px;
}
.recent-blog .blog-title {
  font-weight: 500;
  color: #076fb6;
  font-family: "Nunito", sans-serif;
  padding: 5px !important;
}
.recent-blog .blog-date {
  font-weight: 400;
  font-size: 0.6em;
  padding: 0px 5px !important;
}
</style>
