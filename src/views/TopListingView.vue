<template>
  <div>
    <HeroHeader :titles="titles" />
    <div ref="targetDiv" id="viewer"></div>
    <SearchComponent />
    <v-container class="text-center btn--margin">
      <v-btn tile class="darkblue--btn"> Top Listing</v-btn>
    </v-container>

    <v-container fluid class="p-content">
      <v-row justify="center">
        <v-col class="col-11">
          <v-row>
            <div
              v-for="(item, i) in properties"
              :key="i"
              @click="$router.push({ name: 'singleProperty' })"
              class="col-12 col-sm-6 col-md-4 col-lg-3 property-card-container"
            >
              <v-container fluid>
                <v-row>
                  <v-col class="col-12 property-card rounded-xl">
                    <v-row>
                      <div class="feature-property-card-image">
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
                        <div class="sale-card-tag">
                          {{ item.label }}
                        </div>
                      </div>
                    </v-row>

                    <v-row>
                      <v-col class="col-12 feature-property-details">
                        <v-row>
                          <v-col class="col-9 p-title">
                            {{ item.title }}
                          </v-col>
                          <v-col align-self="end" class="p-time text-right">
                            {{ item.time }}
                          </v-col>
                        </v-row>
                        <v-row class="mt-2">
                          <v-col class="p-location">
                            <v-icon class="pin-icon"> mdi-pin </v-icon>
                            {{ item.location }}
                          </v-col>
                        </v-row>
                        <v-row class="s-price">
                          <p>
                            {{ item.price
                            }}<span v-if="item.label === 'RENT'">/month</span>
                          </p>
                        </v-row>
                        <v-row>
                          <v-col class="col-12">
                            <v-btn
                              class="p-blue--btn"
                              @click="goToPropertyCompare"
                            >
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
                    </v-row>
                  </v-col>
                </v-row>
              </v-container>
            </div>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <!-- Popular Locations Div-->
    <v-container fluid class="discover">
      <v-row>
        <v-col class="text-center my-12">
          <v-icon color="white" size="60" class="mx-2" v-for="i in 3" :key="i"
            >mdi-star</v-icon
          >
          <p class="text-h3 font-weight-bold my-4">Popular Locations</p>
        </v-col>
        <v-col>
          <p class="text-h4 font-weight-bold">Discover Towns and Cities</p>
          <p class="text-subtitle-1 font-weight-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum
          </p>
          <v-row>
            <v-col
              class="font-weight-bold text-h5 col-md-6 col-sm-12"
              v-for="(item, key) in list"
              :key="key"
            >
              <v-icon color="white" size="30">mdi-send</v-icon>
              {{ item }}
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <!-- Premium Properties-->
    <PremiumComponent />
  </div>
</template>
<script>
import PremiumComponent from "@/components/PremiumComponent";
import HeroHeader from "@/components/HeroHeader";
import SearchComponent from "@/components/SearchComponent";
export default {
  metaInfo() {
    return {
      title: "Top Listing",
      titleTemplate: this.$root.$options.titleTemplate,
    };
  },
  components: {
    SearchComponent,
    PremiumComponent,
    HeroHeader,
  },
  data() {
    return {
      titles: {
        mainTitle: "Top Listing",
        subTitle: "Find Your Property With Us",
      },
      tab: 1, // Define the reactive property here

      properties: [
        {
          title: "2BHK Appartment",
          location: "Bishal Nagar, KTM",
          price: "$100,000",
          time: "2 hours ago",
          label: "SALE",
        },
        {
          title: "2BHK Appartment",
          location: "Location 2",
          price: "$150,000",
          time: "3 hours ago",
          label: "RENT",
        },
        {
          title: "2BHK Appartment",
          location: "Location 3",
          price: "$200,000",
          time: "4 hours ago",
          label: "SALE",
        },
        {
          title: "2BHK Appartment",
          location: "Location 3",
          price: "$200,000",
          time: "4 hours ago",
          label: "RENT",
        },
        {
          title: "2BHK Appartment",
          location: "Location 1",
          price: "$100,000",
          time: "2 hours ago",
          label: "SALE",
        },
        {
          title: "2BHK Appartment",
          location: "Location 2",
          price: "$150,000",
          time: "3 hours ago",
          label: "RENT",
        },
        {
          title: "2BHK Appartment",
          location: "Location 3",
          price: "$200,000",
          time: "4 hours ago",
          label: "SALE",
        },
        {
          title: "2BHK Appartment",
          location: "Location 3",
          price: "$200,000",
          time: "4 hours ago",
          label: "RENT",
        },
      ],

      list: {
        city1: "Kathmandu",
        city2: "Butwal",
        city3: "Pokhara",
        city4: "Biratnagar",
      },
    };
  },
  mounted() {
    this.$nextTick(() => {
      const targetDiv = this.$refs.targetDiv;
      targetDiv.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  },
};
</script>
<style scoped>
#viewer {
  position: absolute;
}
@media screen and (max-width: 960px) {
  #viewer {
    top: 4.5%;
  }
}
@media screen and (min-width: 960px) {
  #viewer {
    top: 6.2%;
  }
}
.discover {
  background-color: #1e4d62;
  color: #efefef;
  padding: 120px;
}
.property-details {
  padding: 30px;
}
.p-title {
  align-self: center;
  padding: 0 5px;
}
.p-time {
  padding: 0 5px;
}

.p-location {
  padding: 20px 0;
}
.s-price {
  margin-left: 1px;
  justify-content: space-between;
  align-items: center;
}
</style>
