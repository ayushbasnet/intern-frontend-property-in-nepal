import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ContactView from "../views/ContactView.vue";
import ListingView from "../views/TopListingView.vue";
import DynamicShop from "@/views/DynamicShop";
import SingleProperty from "@/views/SingleProperty";
import UnitConverter from "@/views/UnitConverter";
import EMICalculator from "@/views/EMICalculator";
import PropertyRequest from "@/views/PropertyRequest";
import BlogView from "@/views/BlogView";
import BlogPostView from "@/views/BlogPostView";
import BlogCategoryView from "@/views/BlogCategoryView";
import BlogHashTagView from "@/views/BlogHashtagView";
import PropertyCompare from "@/views/PropertyCompare";
import Login from "@/views/Login";
import Register from "@/views/Register";
import AppLayout from "@/layouts/AppLayout";
import BlankLayout from "@/layouts/BlankLayout";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: AppLayout,
    children: [
      {
        path: "",
        name: "home",
        component: HomeView,
      },
      {
        path: "/about-us",
        name: "about-us",
        component: AboutView,
      },
      {
        path: "/contact-us",
        name: "contact-us",
        component: ContactView,
      },
      {
        path: "/listing",
        name: "listing",
        component: ListingView,
      },
      {
        path: "/single-property",
        name: "singleProperty",
        component: SingleProperty,
      },
      {
        path: "/unit-converter",
        name: "unitConverter",
        component: UnitConverter,
      },
      {
        path: "/emi",
        name: "emiCalculator",
        component: EMICalculator,
      },
      {
        path: "/property-request",
        name: "propertyRequest",
        component: PropertyRequest,
      },
      {
        path: "/blog",
        name: "blog",
        component: BlogView,
      },
      {
        path: "/blog/:slug",
        name: "blogPost",
        component: BlogPostView,
      },
      {
        path: "blog/category/:slug",
        name: "blogCategory",
        component: BlogCategoryView,
      },
      {
        path: "blog/hashtag/:slug",
        name: "blogHashTag",
        component: BlogHashTagView,
      },
      {
        path: "/compare",
        name: "compareProperty",
        component: PropertyCompare,
      },
    ],
  },
  {
    path: "/",
    component: BlankLayout,
    children: [
      {
        path: "register",
        component: Register,
        name: "register",
      },
      {
        path: "login",
        name: "login",
        component: Login,
      },
    ],
  },

  {
    path: "",
    name: "shop",
    component: AppLayout,
    children: [
      {
        path: "*",
        component: DynamicShop,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
