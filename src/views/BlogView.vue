<template>
  <v-container fluid class="blogs">
    <v-row justify="space-between">
      <BlogSide />
      <v-col cols="12" md="9">
        <div class="blog-heading">Property In Nepal Blog</div>
        <v-row>
          <v-col v-for="post in posts" :key="post.id" cols="12" md="4" sm="6">
            <BlogCard :post="post" />
          </v-col>
        </v-row>

        <v-row>
          <v-col class="col-12">
            <v-pagination
              v-model="pagination.current"
              :length="pagination.total"
              @input="onPageChange"
            ></v-pagination>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import BlogCard from "@/components/BlogCard";
import BlogSide from "@/components/BlogSide";
export default {
  name: "Blog",
  components: {
    BlogSide,
    BlogCard,
  },
  data() {
    return {
      categories: [],
      selectedCategory: null,
      pagination: {
        current: 1,
        total: 2,
      },
    };
  },
  created() {
    this.categories = this.getUniqueCategories();
  },
  computed: {
    ...mapState(["posts"]),
    // filteredPosts() {
    //   return this.selectedCategory
    //     ? this.posts.filter((post) => post.category === this.selectedCategory)
    //     : this.posts;
    // },
  },
  methods: {
    getUniqueCategories() {
      return Array.from(new Set(this.posts.map((post) => post.category)));
    },
    filterByCategory() {
      // Optionally, you can add some logic here if you want to do something when the category is selected
    },
    getUniqueHashtags(post) {
      // Use a Set to store unique hashtags
      const uniqueSet = new Set(post.hashtags);
      // Convert the Set back to an array
      return Array.from(uniqueSet);
    },
  },
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

.blogs {
  background-image: linear-gradient(to top, #dfe9f3 0%, white 100%);
}
</style>
