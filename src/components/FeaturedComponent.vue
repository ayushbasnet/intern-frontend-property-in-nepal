<template>
  <v-row justify="center">
    <v-col class="col-md-11 col-12">
      <v-tabs v-model="tab" color="deep-purple-accent-4 " centered>
        <v-tab
          v-for="(property, index) in featuredProperties"
          :key="index"
          :value="index"
          @click="gotoStart"
        >
          {{ property.title }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item
          v-for="(category, index) in paginatedProperties"
          :key="index"
          :value="index"
        >
          <v-container fluid>
            <v-row>
              <v-col class="col-md-12">
                <v-row>
                  <v-col
                    v-for="(item, i) in category.properties"
                    :key="i"
                    cols="12"
                    lg="3"
                    md="4"
                    sm="6"
                    class="property-card-container"
                  >
                    <v-container fluid>
                      <v-row>
                        <v-col class="col-12 property-card">
                          <router-link
                            :to="{ name: 'singleProperty' }"
                            class="normalizeLink"
                          >
                            <v-row>
                              <div class="feature-property-card-image">
                                <v-img
                                  :src="`https://picsum.photos/500/300?image=${
                                    i * index * 5 + 10
                                  }`"
                                  :lazy-src="`https://picsum.photos/10/6?image=${
                                    i * index * 5 + 10
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
                                <p class="p-title mb-1">
                                  {{ item.title }}
                                </p>
                                <p class="p-location mb-1">
                                  <v-icon class="pin-icon"> mdi-pin </v-icon>
                                  {{ item.location }}
                                </p>
                                <p class="p-price mb-0">
                                  {{ item.price }} only
                                </p>
                                <p class="p-time mb-0">
                                  {{ item.time }}
                                </p>
                              </v-col>
                            </v-row>
                          </router-link>
                          <v-row>
                            <v-col class="col-12 feature-property-details-btn">
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
                    </v-container>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-container>
          <!-- Pagination controls -->
          <v-row>
            <v-col cols="12" class="text-center">
              <v-pagination
                v-model="currentPage"
                @input="changePage"
                :length="totalPageCount(index)"
              />
            </v-col>
          </v-row>
        </v-tab-item>
      </v-tabs-items>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "FeaturedComponent",
  data() {
    return {
      tab: 0, // Define the reactive property here
      featuredProperties: [
        {
          title: "House For Sale",
          properties: [
            {
              title: "Beautiful house for sale ",
              location: "Shantinagar, Kathmandu",
              price: "$250,000",
              time: "5 days ago",
              label: "SALE",
            },
            {
              title: "Urgent sale house with discount",
              location: "Shantinagar, Kathmandu",
              price: "$300,000",
              time: "6 weeks ago",
              label: "SALE",
            },
            {
              title: "An eyecatching title for featured",
              location: "Shantinagar, Kathmandu",
              price: "$350,000",
              time: "1 month ago",
              label: "SALE",
            },
            {
              title: "Cheapest house on sale",
              location: "Shantinagar, Kathmandu",
              price: "$350,000",
              time: "7 hours ago",
              label: "SALE",
            },
          ],
        },
        {
          title: "House For Rent",
          properties: [
            {
              title: "House for rent in kathmandu",
              location: "Shantinagar, Kathmandu",
              price: "$250,000",
              time: "5 weeks ago",
              label: "RENT",
            },
            {
              title: "Office space for rent",
              location: "Shantinagar, Kathmandu",
              price: "$300,000",
              time: "6 weeks ago",
              label: "RENT",
            },
            {
              title: "Full building for rent",
              location: "Shantinagar, Kathmandu",
              price: "$350,000",
              time: "7 days ago",
              label: "RENT",
            },
            {
              title: "Building in rent for restaurant",
              location: "Shantinagar, Kathmandu",
              price: "$350,000",
              time: "7 days ago",
              label: "RENT",
            },
          ],
        },
        {
          title: "Land For Sale",
          properties: [
            {
              title: "SALE SALE SALE",
              location: "Shantinagar, Kathmandu",
              price: "$250,000",
              time: "5 hours ago",
              label: "SALE",
            },
            {
              title: "Land for sale in Shital Height",
              location: "Shantinagar, Kathmandu",
              price: "$300,000",
              time: "6 hours ago",
              label: "SALE",
            },
            {
              title: "10 Anna for urgent sale",
              location: "Shantinagar, Kathmandu",
              price: "$350,000",
              time: "7 hours ago",
              label: "SALE",
            },
            {
              title: "Square land for sale",
              location: "Shantinagar, Kathmandu",
              price: "$350,000",
              time: "7 hours ago",
              label: "SALE",
            },
          ],
        },
        {
          title: "Land For Rent",
          properties: [
            {
              title: "Land rent for agriculture purpose",
              location: "Shantinagar, Kathmandu",
              price: "$250,000",
              time: "5 hours ago",
              label: "RENT",
            },
            {
              title: "Property 5",
              location: "Land rent, contract 10 years",
              price: "$300,000",
              time: "6 hours ago",
              label: "RENT",
            },
            {
              title: "Property 6",
              location: "Land available for rent",
              price: "$350,000",
              time: "7 hours ago",
              label: "RENT",
            },
            {
              title: "Property 6",
              location: "Rent cheap fast",
              price: "$350,000",
              time: "7 hours ago",
              label: "RENT",
            },
          ],
        },
        {
          title: "Apartment For Sale",
          properties: [
            {
              title: "Property 1",
              location: "Apartment with mountain view",
              price: "$100,000",
              time: "2 hours ago",
              label: "SALE",
            },
            {
              title: "Property 2",
              location: "15th floor apartment on cheap",
              price: "$150,000",
              time: "3 hours ago",
              label: "SALE",
            },
            {
              title: "Property 3",
              location: "Shantinagar, Kathmandu",
              price: "$200,000",
              time: "4 hours ago",
              label: "SALE",
            },
            {
              title: "Property 3",
              location: "Shantinagar, Kathmandu",
              price: "$200,000",
              time: "4 hours ago",
              label: "SALE",
            },
          ],
        },
        {
          title: "Apartment For Rent",
          properties: [
            {
              title: "Property 1",
              location: "Shantinagar, Kathmandu",
              price: "$100,000",
              time: "2 days ago",
              label: "RENT",
            },
            {
              title: "Property 2",
              location: "Shantinagar, Kathmandu",
              price: "$150,000",
              time: "3 hours ago",
              label: "RENT",
            },
            {
              title: "Property 3",
              location: "Shantinagar, Kathmandu",
              price: "$200,000",
              time: "4 days ago",
              label: "RENT",
            },
            {
              title: "Property 3",
              location: "Shantinagar, Kathmandu",
              price: "$200,000",
              time: "4 days ago",
              label: "RENT",
            },
            {
              title: "Property 3",
              location: "Shantinagar, Kathmandu",
              price: "$200,000",
              time: "4 weeks ago",
              label: "RENT",
            },
            {
              title: "Property 3",
              location: "Shantinagar, Kathmandu",
              price: "$200,000",
              time: "4 months ago",
              label: "RENT",
            },
            {
              title: "Property 3",
              location: "Shantinagar, Kathmandu",
              price: "$200,000",
              time: "4 hours ago",
              label: "RENT",
            },
            {
              title: "Property 3",
              location: "Shantinagar, Kathmandu",
              price: "$200,000",
              time: "4 week ago",
              label: "RENT",
            },
            {
              title: "Property 3",
              location: "Shantinagar, Kathmandu",
              price: "$200,000",
              time: "4 hours ago",
              label: "RENT",
            },
            {
              title: "Property 3",
              location: "Shantinagar, Kathmandu",
              price: "$200,000",
              time: "2 weeks ago",
              label: "RENT",
            },
            {
              title: "Property 3",
              location: "Shantinagar, Kathmandu",
              price: "$200,000",
              time: "1 month ago",
              label: "RENT",
            },
            {
              title: "House on sale in Wasik, Budhanilkantha",
              location: "Shantinagar, Kathmandu",
              price: "$200,000",
              time: "4 hours ago",
              label: "RENT",
            },
          ],
        },
      ],
      currentPage: 1,
      itemsPerPage: 4,
    };
  },
  computed: {
    paginatedProperties() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      const paginatedProperties = [];

      this.featuredProperties.forEach((featuredProperty) => {
        paginatedProperties.push({
          title: featuredProperty.title,
          properties: featuredProperty.properties.slice(startIndex, endIndex),
        });
      });

      return paginatedProperties;
    },
  },
  methods: {
    goToPropertyCompare() {
      this.$router.push("/compare");
    },
    gotoStart() {
      this.currentPage = 1;
    },
    changePage(pageNumber) {
      this.currentPage = pageNumber;
    },
    totalPageCount(categoryIndex) {
      //const categoryIndex = 5; // Replace 0 with the index of the category you want to get the count for
      const categoryProperties =
        this.featuredProperties[categoryIndex].properties;
      return Math.ceil(categoryProperties.length / this.itemsPerPage);
    },
  },
};
</script>

<style>
.property-card-container {
  padding: 20px;
}

.property-card {
  box-shadow: 0 1px 3px rgba(117, 181, 201, 0.42),
    0 1px 2px rgba(117, 181, 201, 0.33);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  /*border-radius: 14px;*/
  border-radius: 10px;
  border-bottom: 8px solid rgb(117, 181, 201);
  height: 450px;
}
.feature-property-card-image {
  position: relative;
  padding: 0px !important;
  margin: 0px !important;
  width: 100%;
  max-height: 200px;
  overflow: hidden;
}
.feature-property-card-image .v-image {
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
}
.property-card:hover {
  box-shadow: 0 14px 28px rgba(9, 106, 135, 0.19),
    0 10px 10px rgba(9, 106, 135, 0.12);
}

.sale-card-tag {
  position: absolute;
  background: linear-gradient(#d31900, #e51f04, #d31900);
  z-index: 8;
  margin-top: 5%;
  padding: 2.5px;
  font-size: 18px;
  color: white !important;
  font-weight: 400;
  text-align: center;
  transform: rotate(-45deg);
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
}

@media (min-width: 0px) and (max-width: 576px) {
  .sale-card-tag {
    top: 2px;
    left: -35px;
    width: 40%;
    font-size: 15px;
  }
}

@media (min-width: 576px) and (max-width: 960px) {
  .sale-card-tag {
    top: 6px;
    left: -20%;
    width: 65%;
    font-size: 15px;
  }
}
@media (min-width: 960px) {
  .sale-card-tag {
    top: 0px;
    left: -15%;
    width: 50%;
  }
}
.feature-property-details-btn {
  padding: 20px;
}

.feature-property-details {
  padding: 20px;
  height: 170px;
}
.p-title {
  color: #000;
  font-size: 22px;
  font-weight: 700;
}
.p-location {
  color: #000;
  font-size: 14px;
  margin-left: -5px;
  padding-top: 5px;
  padding-bottom: 5px;
}
.p-time {
  color: #000;
  font-size: 14px;
  padding-top: 6px;
}
.p-price {
  color: #000;
  float: left;
  font-weight: bold;
  font-size: 19px;
  padding-left: 3px;
}
.p-time {
  float: right;
}
.p-blue--btn,
.p-orange--btn {
  border-radius: 10px;
  text-transform: none;
  color: white !important;
  letter-spacing: 0.5px;
  font-size: 0.8rem !important;
}
.p-blue--btn {
  background-color: #00bbe4 !important;
  float: left;
}

.p-orange--btn {
  background-color: #e44400 !important;
  float: right;
}

.pin-icon {
  color: #00bbe4 !important;
  font-size: 22px !important;
}
.v-tabs-bar {
  height: auto;
}
.v-tab {
  border-radius: 14px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin: 10px;
  min-height: 32px;
}

.v-tab--active {
  background: #184a62 !important;
  color: white !important;
}

.v-tabs-slider-wrapper {
  display: none;
}

.v-slide-group__prev--disabled {
  display: none !important;
}
</style>
