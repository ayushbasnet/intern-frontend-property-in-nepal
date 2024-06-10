// store.js
import Vue from "vue";
import Vuex from "vuex";

// import axios from "axios";

// const api = axios.create({
//   baseURL: "http://localhost:8000/api/V1/",
// });

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    banners: {},
    contact_details: {},
    testimonials: [],
    // Your application's state goes here
    posts: [
      {
        id: 1,
        title: "First Post",
        author: "John Doe",
        date: "18 July, 2023",
        content: "Content goes here.",
        category: "Technology",
        slug: "first-post",
        hashtags: ["technology", "webdev"],
        image:
          "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        id: 2,
        title: "Second Post",
        author: "John Doe",
        date: "18 July, 2023",
        content: "Content goes here.",
        category: "Lifestyle",
        slug: "second-post",
        hashtags: ["lifestyle"],
        image:
          "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        id: 3,
        title: "Third Post",
        author: "John Doe",
        date: "18 July, 2023",
        content: "Content goes here.",
        category: "Technology",
        slug: "third-post",
        hashtags: ["technology"],
        image:
          "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        id: 4,
        title: "Fourth Post",
        author: "John Doe",
        date: "18 July, 2023",
        content: "Content goes here.",
        category: "Food",
        slug: "fourth-post",
        hashtags: ["food", "recipes"],
        image:
          "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        id: 5,
        title: "Fifth Post",
        author: "John Doe",
        date: "19 July, 2023",
        content: "Content goes here.",
        category: "Lifestyle",
        slug: "fifth-post",
        hashtags: ["lifestyle", "fitness"],
        image:
          "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        id: 6,
        title: "Sixth Post",
        author: "Jane Doe",
        date: "19 July, 2023",
        content: "Content goes here.",
        category: "Food",
        slug: "sixth-post",
        hashtags: ["food"],
        image:
          "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  },
  mutations: {
    // Functions to modify the state go here
    setPost(state, post) {
      state.posts = post; // Mutation to update the "Post" object in the state
    },
    SET_BANNERS(state, data) {
      state.banners = data;
    },
    SET_TESTIMONIALS(state, data) {
      state.testimonials = data;
    },
    SET_CONTACT_DETAILS(state, data) {
      state.contact_details = data;
    },
  },
  actions: {
    // Asynchronous operations and API calls go here
    // fetchBanner({ commit }) {
    //   api.get("/banners").then((response) => {
    //     commit("SET_BANNERS", response.data.data[0]);
    //   });
    // },
    // fetchTestimonials({ commit }) {
    //   api.get("/testimonials").then((response) => {
    //     commit("SET_TESTIMONIALS", response.data.data);
    //   });
    // },
    // fetchContactDetails({ commit }) {
    //   api.get("/contact-details").then((response) => {
    //     commit("SET_CONTACT_DETAILS", response.data.data);
    //   });
    // },
  },
  getters: {
    // Computed properties based on the state go here
    getPostBySlug: (state) => (slug) => {
      // Replace this with your actual method to fetch a post by slug from your backend or data source
      return state.posts.find((post) => post.slug === slug);
    },
  },
});
