<template>
  <v-container fluid class="blogs">
    <v-row>
      <BlogSide />
      <v-col offset-sm="1">
        <div class="blog-heading">Blog Posts by Hashtag: {{ hashtag }}</div>
        <v-row>
          <v-col v-for="post in filteredPosts" :key="post.id" cols="12" md="4">
            <BlogCard :post="post" />
          </v-col>
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
  name: "blogHashtag",
  components: {
    BlogSide,
    BlogCard,
  },
  data() {
    return {
      hashtag: "",
    };
  },
  created() {
    this.hashtag = this.$route.params.slug;
  },
  computed: {
    ...mapState(["posts"]),
    filteredPosts() {
      return this.posts.filter((post) => post.hashtags.includes(this.hashtag));
    },
  },
  watch: {
    "$route.params.slug": function () {
      this.hashtag = this.$route.params.slug;
    },
  },
};
</script>
