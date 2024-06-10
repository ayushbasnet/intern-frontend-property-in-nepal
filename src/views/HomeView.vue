<template>
  <div>
    <!--    MAIN HERO HEADER HOME-->
    <v-container
      fluid
      class="p-hero-header"
      :style="$inlineBgImage('hero-header.jpg')"
    >
      <v-row>
        <v-col class="p-hero-content col-12">
          <v-row v-if="banners">
            <v-col class="col-md-6 col-12 tag-wrapper">
              <h3 class="p-hero-title">{{ banners.title }}</h3>
              <p class="p-hero-subtitle">{{ banners.sub_title }}</p>
              <v-btn class="blue--btn"> Get Started </v-btn>
            </v-col>
            <v-col class="col-md-6 col-12">
              <carousel-3d>
                <slide v-for="(slide, i) in banners.images" :index="i" :key="i">
                  <div :style="$inlineBgImage(slide)" class="slide-image"></div>
                </slide>
              </carousel-3d>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="p-hero-content">
          <v-container fluid>
            <v-row justify="center">
              <v-col class="col-md-10 col-11">
                <v-row justify="center" no-gutters>
                  <v-col cols="8" nogu>
                    <v-text-field
                      class="home-search"
                      label="Search"
                      placeholder="Search through name, address , property sizes and budget"
                      hide-details="auto"
                      solo
                      v-model="searchWords"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="2"
                    ><v-select
                      v-model="selectedFilter"
                      :items="filter"
                      style="border-radius: 0%"
                      solo
                      background-color="#00bbe4"
                      class="dropdown-search"
                    ></v-select>
                  </v-col>
                  <v-col cols="2">
                    <v-btn
                      class="home-search-btn"
                      height="48px"
                      elevation="0"
                      @click="handleSearch"
                    >
                      Search</v-btn
                    ></v-col
                  >
                </v-row>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>

    <!--    //featured-->

    <v-container fluid class="p-content p-featured fix-width">
      <v-row>
        <v-col class="text-center">
          <p class="feature--btn mb-0">Featured Properties</p>
        </v-col>
      </v-row>
      <FeaturedComponent />
    </v-container>

    <!--premium properties-->

    <PremiumComponent />

    <!--premium properties-->

    <!--    ABOUT US HOME-->
    <v-container fluid class="p-about fix-width">
      <v-row justify="center">
        <v-col class="col-md-11 col-12">
          <v-row>
            <v-col class="col-md-6 col-12">
              <v-row>
                <div
                  class="col-md-9 offset-md-3 image-border"
                  :style="$inlineBgImage('hero-header.jpg')"
                >
                  <div class="about-info-clients">4000+ clients</div>
                </div>
              </v-row>
              <svg width="500" height="500">
                <circle
                  cx="250"
                  cy="300"
                  r="150"
                  stroke="black"
                  stroke-width="2"
                  fill="red"
                />
              </svg>
            </v-col>
            <v-col class="col-md-6 col-12">
              <v-row justify="center">
                <v-col class="col-11">
                  <v-row>
                    <v-col class="col-12">
                      <v-btn class="darkblue--btn"> About us </v-btn>

                      <h3 class="p-about-title">
                        The Leading Marketing <br />
                        Real Estate Agency
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime mollitia, molestiae quas vel sint commodi
                        repudiandae consequuntur voluptatum laborum numquam
                        blanditiis harum quisquam eius sed odit fugiat
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime mollitia, molestiae quas vel sint commodi
                        repudiandae
                      </p>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col class="col-12">
                      <v-row class="about-checks">
                        <v-col class="col-6 py-1">
                          <p class="mb-0">
                            <v-icon>mdi-check</v-icon> One Stop Solution
                          </p>
                        </v-col>
                        <v-col class="col-6 py-1">
                          <p class="mb-0">
                            <v-icon>mdi-check</v-icon> Free Consulation
                          </p>
                        </v-col>
                        <v-col class="col-6 py-1">
                          <p class="mb-0">
                            <v-icon>mdi-check</v-icon> Low Commission
                          </p>
                        </v-col>
                        <v-col class="col-6 py-1">
                          <p class="mb-0">
                            <v-icon>mdi-check</v-icon> Property Insurance
                          </p>
                        </v-col>
                      </v-row>

                      <v-row>
                        <v-col class="col-12">
                          <v-btn
                            class="blue--btn"
                            large
                            :to="{ name: 'about-us' }"
                          >
                            Learn More
                          </v-btn>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <!--achievements-->
    <v-container class="p-content p-achievements">
      <v-row justify="center">
        <v-col class="col-12 text-center">
          <v-btn class="lightblue-large-btn" height="45px ">
            Achievements</v-btn
          >
        </v-col>
        <v-col class="col-md-9 text-center">
          <v-row>
            <v-col class="col-md-2 col-4 single-achievement">
              <v-icon class="circle-bg"> mdi-home </v-icon>
              <p>
                Houses Sold
                <span
                  ><br />
                  3000</span
                >
              </p>
            </v-col>

            <v-col class="col-md-2 col-4 single-achievement">
              <v-icon class="circle-bg"> mdi-office-building </v-icon>
              <p>
                Apartment Sold
                <span
                  ><br />
                  3000</span
                >
              </p>
            </v-col>

            <v-col class="col-md-2 col-4 single-achievement">
              <v-icon class="circle-bg"> mdi-land-plots </v-icon>
              <p>
                Land Sold
                <span
                  ><br />
                  3000</span
                >
              </p>
            </v-col>

            <v-col class="col-md-2 col-4 single-achievement">
              <v-icon class="circle-bg"> mdi-office-building </v-icon>
              <p>
                Apartment Rent
                <span
                  ><br />
                  3000</span
                >
              </p>
            </v-col>

            <v-col class="col-md-2 col-4 single-achievement">
              <v-icon class="circle-bg"> mdi-chair-rolling </v-icon>
              <p>
                Office Space
                <span
                  ><br />
                  3000</span
                >
              </p>
            </v-col>

            <v-col class="col-md-2 col-4 single-achievement">
              <v-icon class="circle-bg"> mdi-home-modern </v-icon>
              <p>
                Flat Sold
                <span
                  ><br />
                  3000</span
                >
              </p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <!--testimonial-->
    <TestimonialComponent :testimonials="testimonials" />
  </div>
</template>

<script>
import FeaturedComponent from "@/components/FeaturedComponent";
import PremiumComponent from "@/components/PremiumComponent";
import TestimonialComponent from "@/components/TestimonialComponent.vue";

import { Carousel3d, Slide } from "vue-carousel-3d";
// import { mapActions, mapState } from "vuex";

export default {
  name: "Home",
  metaInfo() {
    return {
      title: "Home",
      titleTemplate: this.$root.$options.titleTemplate,
      searchUrl: "apartment-rent",
    };
  },
  components: {
    PremiumComponent,
    FeaturedComponent,
    Carousel3d,
    Slide,
    TestimonialComponent,
  },
  data() {
    return {
      slides: ["hero-header.jpg", "hero-header.jpg", "hero-header.jpg"],
      filter: ["Land", "House", "Apartment"],
      banners: {
        title: "SMART REAL ESTATE COME TRUE",
        sub_title: "Buy, Sell and Rent Your Properties",
        images: ["hero-header.jpg", "hero-header.jpg", "hero-header.jpg"],
      },
      testimonials: [
        {
          id: 1,
          author: "Mr. Prabesh Acharya",
          review:
            "I recently sold a house with Property In Nepal and while this can be a very stressful process, I felt 110% confident by partnering with Property In Nepal. They was candid, provided great feedback, helped explain clearly all details and managed the actual sale negotiation brilliantly. In addition, they were extremely responsive  to every one of my questions, no matter how small. As I move forward to now buy my next house, I am extremely certain Property In Nepal will be the right partner to help me navigate this process.",
          working_post: "CEO, Property In Nepal",
          author_image:
            "https://img.freepik.com/free-photo/smiling-businessman-face-portrait-wearing-suit_53876-148138.jpg?w=1060&t=st=1688989234~exp=1688989834~hmac=f4002787d471d20e71a3d8a50a0240ff940d9638f2c728048ce3e66586b75bc1",
        },
        {
          id: 2,
          author: "Mr. Brock Foreman",
          review:
            "My wife and I had a dream of downsizing from our house in Cape Elizabeth into a small condo closer to where we work and play in Portland. David and his skilled team helped make that dream a reality. The sale went smoothly, and we just closed on an ideal new place we're excited to call home. Nobody  knows Portland and the peninsula better than David. He really listens to clients and goes the extra mile with customer service, too.",
          working_post: "CEO, Master Nepal",
          author_image:
            "https://i.pinimg.com/736x/d5/08/a3/d508a35a0fa4eca25d20f4a43cc7a5ff.jpg",
        },
      ],
      selectedFilter: "Land",
    };
  },
  computed: {
    // ...mapState(["banners", "testimonials", "contact_details"]),
  },
  beforeMount() {
    // this.fetchBanner();
    // this.fetchTestimonials();
  },
  methods: {
    // ...mapActions(["fetchBanner", "fetchTestimonials", "fetchContactDetails"]),
    handleSearch() {
      if (this.selectedFilter === "Land") {
        this.$router.push("/land-sale");
      } else if (this.selectedFilter === "House") {
        this.$router.push("/house-sale");
      } else if (this.selectedFilter === "Apartment") {
        this.$router.push("/apartment-sale");
      }
    },
  },
};
</script>

<style>
.fix-width {
  max-width: 1500px;
  margin: auto;
}
/*HeroHeader*/
.dropdown-search > .v-input__control > .v-input__slot > .v-select__slot {
  color: white;
  flex-direction: row-reverse;
}

.dropdown-search
  > .v-input__control
  > .v-input__slot
  > .v-select__slot
  > .v-select__selections {
  color: white;
}
.slide-image {
  height: 100%;
  background-position: center;
  background-size: cover;
}
.p-content {
  padding: 30px 0px;
}
.p-hero-header {
  min-height: 530px;
  background-color: #399ece;
  background-position: center;
  background-size: cover;
  position: relative;
}
.p-hero-header::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(12, 59, 79, 0.77);
}

.p-hero-header-small {
  min-height: 280px;
  background-color: #399ece;
  background-position: center;
  background-size: cover;
  position: relative;
}

.p-hero-header-small::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(12, 59, 79, 0.77);
}

.p-hero-content {
  padding-top: 10vh;
  z-index: 2;
  color: white;
  align-items: center;
}

@media only screen and (min-width: 960px) {
  .tag-wrapper {
    padding-left: 50px;
    padding-top: 45px;
  }
  .p-hero-title {
    font-size: 55px;
    line-height: 97%;
  }
  .p-hero-subtitle {
    font-size: 20px;
    line-height: 40px;
  }
}
@media only screen and (max-width: 960px) {
  .tag-wrapper {
    text-align: center;
  }
  .p-hero-title {
    font-size: 43px;
  }
  .p-hero-subtitle {
    font-size: 15px;
  }
}

.blue--btn {
  background-color: #00bbe4 !important;
  color: white !important;
}
.tag-wrapper > .blue--btn > span.v-btn__content {
  font-size: 20px;
}
/* Search*/

.home-search .v-input__slot {
  background: #efefef !important;
  color: #184a62 !important;
  padding-left: 10px;
  border-radius: 0;
}

.home-search-btn {
  color: #efefef !important;
  background-color: #00bbe4 !important;
  border-radius: 0;
}
/*Search*/

/*about*/

.p-about {
  background-color: white;
  padding: 100px 0px;
  position: relative;
}

.p-about-title {
  font-size: 36px;
  line-height: 45px;
  padding-top: 5px;
  margin: 14px 0px;
}

.darkblue--btn {
  background-color: #184a62 !important;
  color: white !important;
}

.about-checks * {
  font-weight: 700;
  font-size: 18px;
  color: #00bbe4 !important;
}

/*svg*/

circle {
  fill: #e3f6fa;
  stroke: white;
  stroke-width: 4;
}

.image-border {
  position: relative;
  min-height: 540px;
  border: 20px solid #d9d9d9;
  z-index: 1 !important;
  background-position: center;
  background-size: cover;
}

svg {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 100%;
  height: 100%;
  z-index: 0 !important;
}

.about-info-clients {
  position: absolute;
  z-index: 5;
  width: 100px;
  background-color: #00bbe4;
  color: white;
  padding: 20px;
  left: -15%;
  top: 50%;
}
@media screen and (max-width: 950px) {
  .about-info-clients {
    left: 0% !important;
    top: 81%;
  }
}

/*featured property*/
.p-featured {
  background-color: white;
}

.lightblue--btn {
  background-color: #63d7f1 !important;
  color: white !important;
  margin-bottom: 30px;
}
.feature--btn {
  color: #184a62;
  font-size: 30px;
  font-weight: 600;
}

/*achievements*/
.p-achievements {
  background-color: #184a62;
  min-height: 300px;
  max-width: 100%;
}
.lightblue-large-btn {
  background-color: #63d7f1 !important;
  color: white !important;
  margin-bottom: 15px;
}
.lightblue-large-btn > span.v-btn__content {
  font-size: 18px;
}
.single-achievement {
  padding: 30px 0px;
}
.single-achievement:hover {
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
}

.circle-bg {
  color: #184a62 !important;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 30px !important;
  padding: 10px;
  border-radius: 50%; /* make a circle */
  background-color: white; /* set the background color */
}
.single-achievement p {
  color: white;
  padding-top: 10px;
}

/*premium*/
.p-premium-properties {
}
</style>
