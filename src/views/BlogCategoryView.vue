<template>
  <v-container fluid class="blogs">
    <v-row>
      <BlogSide />
      <v-col offset-md="1">
        <div class="blog-heading">Blogs by Category: {{ category }}</div>
        <v-row>
          <v-col v-for="post in filteredBlogs" :key="post.id" cols="12" md="4">
            <BlogCard :post="post"
          /></v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BlogSide from "@/components/BlogSide";
import BlogCard from "@/components/BlogCard";
import { mapState } from "vuex";

export default {
  components: {
    BlogSide,
    BlogCard,
  },
  data() {
    return {
      category: "",
    };
  },
  methods: {},
  created() {
    this.category = this.$route.params.slug;
  },
  computed: {
    ...mapState(["posts"]),
    filteredBlogs() {
      return this.posts.filter((blog) => blog.category === this.category);
    },
  },
  watch: {
    "$route.params.slug": function () {
      this.category = this.$route.params.slug;
    },
  },
};
</script>
