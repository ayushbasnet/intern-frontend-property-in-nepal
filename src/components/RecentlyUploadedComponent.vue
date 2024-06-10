<template>
  <v-container fluid class="p-content p-recently-uploaded ">
    <v-row>
      <v-col class="col-12 text-center">
        <h3 class="p-content-title">Similar Properties</h3>
        <p class="p-content-subtitle">
          Like you've been looking for
        </p>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col class="col-md-11 col-12">
        <Slick ref="slick" v-bind="propertiesSlickoptions">
          <v-col v-for="(item, i) in properties" :key="i" class="col-12 pb-10">
            <v-col class="col-12 property-card ">
              <router-link
                :to="{ name: 'singleProperty' }"
                class="normalizeLink"
              >
                <v-row>
                  <div class="property-card-image">
                    <v-img
                      :src="`https://picsum.photos/500/300?image=${
                        i * i * 5 + 10
                      }`"
                      :lazy-src="`https://picsum.photos/10/6?image=${
                        i * i * 6 + 10
                      }`"
                      contain
                      height="100%"
                      width="100%"
                    ></v-img>
                    <div class="sale-card-tag">SALE</div>
                  </div>
                </v-row>
                <v-row>
                  <v-col class="col-12 property-details">
                    <p class="p-title">
                      {{ item.title }}
                    </p>
                    <p class="p-location">
                      <v-icon class="pin-icon"> mdi-pin </v-icon>
                      {{ item.location }}
                    </p>
                    <p class="p-price">
                      {{ item.price }}
                    </p>
                    <p class="p-time">
                      {{ item.time }}
                    </p>
                  </v-col>
                </v-row>
              </router-link>
              <v-row>
                <v-col class="col-12">
                  <v-btn
                    class="p-blue--btn col-md-5 col-12"
                    @click="goToPropertyCompare"
                  >
                    Compare +</v-btn
                  >
                  <v-btn
                    class="p-orange--btn float-right col-md-5 col-12 mt-md-0 mt-3"
                    :to="{ name: 'singleProperty' }"
                  >
                    Learn More</v-btn
                  >
                </v-col>
              </v-row>
            </v-col>
          </v-col>
        </Slick>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Slick from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "PremiumComponent",
  components: {
    Slick,
  },
  data() {
    return {
      tab: 1, // Define the reactive property here

      properties: [
        {
          title: "Property 1",
          location: "Location 1",
          price: "$100,000",
          time: "2 hours ago",
        },
        {
          title: "Property 2",
          location: "Location 2",
          price: "$150,000",
          time: "3 hours ago",
        },
        {
          title: "Property 3",
          location: "Location 3",
          price: "$200,000",
          time: "4 hours ago",
        },
        {
          title: "Property 3",
          location: "Location 3",
          price: "$200,000",
          time: "4 hours ago",
        },
        {
          title: "Property 1",
          location: "Location 1",
          price: "$100,000",
          time: "2 hours ago",
        },
        {
          title: "Property 2",
          location: "Location 2",
          price: "$150,000",
          time: "3 hours ago",
        },
        {
          title: "Property 3",
          location: "Location 3",
          price: "$200,000",
          time: "4 hours ago",
        },
        {
          title: "Property 3",
          location: "Location 3",
          price: "$200,000",
          time: "4 hours ago",
        },
      ],
      propertiesSlickoptions: {
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    };
  },
  methods: {
    goToPropertyCompare() {
      this.$router.push("/compare");
    },
  },
};
</script>

<style>
.p-content-title {
  font-size: 30px;
}
.p-content-subtitle {
  font-size: 23px;
  color: #1e4d62;
  font-weight: 700;
}

.normalizeLink {
  text-decoration: none;
}
</style>
