<template>
  <v-container fluid class="p-content p-premium-properties fix-width">
    <v-row>
      <v-col class="col-12 text-center">
        <v-btn class="darkblue--btn"> Premium Properties</v-btn>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col class="col-md-11 col-11">
        <v-row>
          <Slick ref="slick" class="col-12" v-bind="propertiesSlickoptions">
            <div v-for="(item, i) in properties" :key="i" class="col-12 py-10">
              <v-col class="premium-property-card" cols="12">
                <router-link
                  :to="{ name: 'singleProperty' }"
                  class="normalizeLink"
                >
                  <v-row>
                    <div class="property-card-image" id="premium">
                      <v-img
                        :src="`https://picsum.photos/500/300?image=${
                          i * i * 5 + 10
                        }`"
                        :lazy-src="`https://picsum.photos/10/6?image=${
                          i * i * 6 + 10
                        }`"
                        height="100%"
                        width="100%"
                      ></v-img>
                      <div class="premium-card-tag">PREMIUM</div>
                      <div class="premium-crown">
                        <v-icon>mdi-crown</v-icon>
                      </div>
                    </div>
                  </v-row>
                  <v-row>
                    <v-col class="col-12 property-details">
                      <p class="p-title mb-0">
                        {{ item.title }}
                      </p>
                      <p class="p-location mb-1">
                        <v-icon class="pin-icon"> mdi-pin </v-icon>
                        {{ item.location }}
                      </p>
                      <p class="p-price mb-0">
                        {{ item.price }}
                      </p>
                      <p class="p-time mb-0">
                        {{ item.time }}
                      </p>
                    </v-col>
                  </v-row>
                </router-link>
                <v-row>
                  <v-col class="col-12">
                    <v-btn class="p-blue--btn" @click="goToPropertyCompare">
                      Compare +</v-btn
                    >
                    <v-btn
                      class="p-orange--btn"
                      :to="{ name: 'singleProperty' }"
                    >
                      Learn More</v-btn
                    >
                  </v-col>
                </v-row>
              </v-col>
            </div>
          </Slick>
        </v-row>
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
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 300,
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
              slidesToShow: 1,
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
.property-card-image {
  position: relative;
}
.property-card-image .v-image {
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
}
.premium-property-card {
  box-shadow: 0 1px 3px rgba(117, 181, 201, 0.42),
    0 1px 2px rgba(117, 181, 201, 0.33);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  /*border-radius: 14px;*/
  border-radius: 10px;
  border-bottom: 8px solid rgb(117, 181, 201);
  height: 480px;
}

.premium-property-card:hover {
  box-shadow: 0 14px 28px rgba(9, 106, 135, 0.19),
    0 10px 10px rgba(9, 106, 135, 0.12);
}
.property-details-btn,
.property-details {
  padding: 20px;
  height: 150px;
}
#premium {
  overflow: inherit;
}
.property-card-image {
  padding: 0px !important;
  margin: 0px !important;
  width: 100%;
  overflow: hidden;
}
.premium-card-tag {
  position: absolute;
  top: 18px;
  right: -28px;
  background-color: red;
  z-index: 8;
  margin-top: 2%;
  margin-right: 8%;
  padding: 5px;
  color: white !important;
  font-weight: bold;
  font-size: 16px;
  width: 25%;
  text-align: center;
}

.premium-crown {
  position: absolute;
  top: 0;
  right: 0;
  margin-top: -4%;
  margin-right: -3%;
  font-size: 25px !important;
}
.premium-crown * {
  color: red !important;
  font-size: 40px !important;
  transform: rotate(35deg);
}
</style>
