<template>
  <div>
    <HeroHeader :titles="titles" />
    <div ref="targetDiv" style="position: absolute; top: 7%"></div>
    <SearchComponent @search="searchPackages" />

    <v-container fluid>
      <v-row justify="center">
        <v-col class="col-md-12 col-12">
          <v-row>
            <!--FilterSection-->
            <v-col class="col-md-3 col-sm-3 col-12 p-filter-section pl-5">
              <v-expansion-panels v-model="panel" multiple>
                <v-expansion-panel>
                  <v-row justify="center">
                    <v-col class="col-12 p-filter-header">
                      <v-expansion-panel-header>
                        <h3 class="filter-title">Filters</h3>

                        <template v-slot:actions>
                          <v-icon>
                            {{ getIcon(panel.length) }}
                          </v-icon>
                        </template>
                      </v-expansion-panel-header>

                      <v-btn class="blue--btn ma-2" @click="resetFilter">
                        Reset Filters</v-btn
                      >
                    </v-col>
                  </v-row>
                  <v-expansion-panel-content>
                    <!--CATEGORY-->
                    <v-row>
                      <v-col class="col-12">
                        <h3 class="filter-title pb-3">Category</h3>
                        <p>Recently Uploaded</p>
                        <p>Top Listing</p>
                      </v-col>
                    </v-row>
                    <!--                    //PRICE RANGES-->
                    <v-row>
                      <v-col class="col-12">
                        <h3 class="filter-title">Price Ranges</h3>
                        <v-row>
                          <v-col class="col-6">
                            <v-text-field
                              v-model="search.searchValue[0]"
                              class="col-6 float-left"
                              solo
                            />
                          </v-col>
                          <v-col class="col-6">
                            <v-text-field
                              v-model="search.searchValue[1]"
                              class="col-6 float-left"
                              solo
                            />
                          </v-col>
                          <v-col class="col-12">
                            <v-range-slider
                              v-model="search.searchValue"
                              :min="0"
                              :max="100000"
                              strict
                              class="col-12"
                            ></v-range-slider>
                          </v-col>
                        </v-row>
                      </v-col>
                    </v-row>
                    <!--                    //PRICE RANGES-->

                    <v-row>
                      <v-col class="col-12">
                        <h3 class="filter-title">Package Type</h3>

                        <v-checkbox
                          label="Budget Package"
                          color="#1E4D62"
                          value="budget"
                          v-model="search.package"
                          hide-details
                        ></v-checkbox>
                        <v-checkbox
                          label="Premium Package"
                          color="#1E4D62"
                          value="premium"
                          v-model="search.package"
                          hide-details
                        ></v-checkbox>
                        <v-checkbox
                          label="Value Package"
                          color="#1E4D62"
                          value="value"
                          v-model="search.package"
                          hide-details
                        ></v-checkbox>
                      </v-col>
                    </v-row>

                    <v-row v-if="rentOrSale === 'rent'">
                      <v-col class="col-12">
                        <h3 class="filter-title">Rent Period</h3>

                        <v-radio-group v-model="search.checkbox">
                          <v-radio
                            label="1 month"
                            value="option1"
                            color="#1E4D62"
                          ></v-radio>
                          <v-radio
                            label="3 months"
                            value="option2"
                            color="#1E4D62"
                          ></v-radio>
                          <v-radio
                            label="6 months/1 year"
                            value="option3"
                            color="#1E4D62"
                          ></v-radio>
                        </v-radio-group>
                      </v-col>
                    </v-row>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-col>

            <!--          // Searched Cards-->
            <v-col class="col-md-9 col-sm-9 col-12 pr-md-16">
              <v-row>
                <v-col class="col-12">
                  <v-row>
                    <v-col class="col-md-3 col-4 p-select-filters">
                      <v-select
                        :items="propertyNames"
                        label="Property Name"
                        solo
                      ></v-select>
                    </v-col>
                    <v-col class="col-md-3 col-4 p-select-filters">
                      <v-select
                        :items="propertySizes"
                        label="Property Size"
                        solo
                      ></v-select>
                    </v-col>
                    <v-col class="col-md-3 col-4 p-select-filters">
                      <v-select
                        :items="propertyLocations"
                        label="Property Location"
                        solo
                      ></v-select>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
              <v-row justify="center">
                <v-col class="col-12 pa-5">
                  <v-row>
                    <v-col
                      class="col-md-4 col-sm-6 col-12 filter-card-container"
                      v-for="n in 8"
                      :key="n"
                    >
                      <v-row>
                        <v-col class="col-12 filter-cards">
                          <v-row>
                            <v-col class="col-12">
                              <v-row>
                                <div class="s-property-card-image">
                                  <v-img
                                    :src="`https://picsum.photos/500/300?image=${
                                      n + 5 + 10
                                    }`"
                                    :lazy-src="`https://picsum.photos/10/6?image=${
                                      n + 5 + 10
                                    }`"
                                    contain
                                    height="100%"
                                    width="100%"
                                  ></v-img>

                                  <div
                                    v-if="rentOrSale === 'sale'"
                                    class="sale-card-tag"
                                  >
                                    SALE
                                  </div>
                                  <div v-else class="sale-card-tag">RENT</div>
                                  <div class="s-property-card-image-overlay">
                                    <div>
                                      <div class="property-views">
                                        <v-icon>mdi-eye</v-icon>100 views
                                      </div>
                                      <v-btn
                                        class="property-compare-btn"
                                        small
                                        @click.self="letsCompare()"
                                      >
                                        Compare
                                      </v-btn>
                                    </div>
                                  </div>
                                </div>
                              </v-row>
                            </v-col>
                            <v-col
                              class="col-12"
                              @click="$router.push({ name: 'singleProperty' })"
                            >
                              <h3 class="text-capitalize">
                                {{ whatProperty }} for {{ rentOrSale }}
                              </h3>
                              <p class="property-location">
                                <v-icon class="pin-icon"> mdi-pin </v-icon>
                                Bishal Nagar, KTM
                              </p>
                              <p>
                                <span class="property-price float-left">
                                  Rs. 2,00,000/Month
                                </span>

                                <!--                                <v-btn class="blue&#45;&#45;btn float-right">-->
                                <!--                                  <v-icon>-->
                                <!--                                    mdi-compare-horizontal-->
                                <!--                                  </v-icon>-->
                                <!--                                 </v-btn>-->
                              </p>
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
        </v-col>
      </v-row>
    </v-container>

    <RecentlyUploadedComponent />
  </div>
</template>

<script>
import RecentlyUploadedComponent from "@/components/RecentlyUploadedComponent";
import HeroHeader from "@/components/HeroHeader";
import SearchComponent from "@/components/SearchComponent";
import * as VExpansionPanel from "vuetify/es5/components/VExpansionPanel";
export default {
  name: "DynamicShop",
  metaInfo() {
    return {
      title: this.capitalizeStr(this.currentPage),
      titleTemplate: this.$root.$options.titleTemplate,
    };
  },
  components: {
    RecentlyUploadedComponent,
    HeroHeader,
    SearchComponent,
    VExpansionPanel,
  },
  data() {
    return {
      panel: [0],
      search: {
        searchValue: [0, 2000],
        package: "budget",
        checkbox: "option1",
      },
      titles: {
        mainTitle: "",
        subTitle: "",
      },
      propertyNames: ["PropertyName1", "PropertyName2", "PropertyName3"],
      propertySizes: ["PropertySize1", "PropertySize2", "PropertySize3"],
      propertyLocations: [
        "PropertyLocation1",
        "PropertyLocation2",
        "PropertyLocation3",
      ],
    };
  },
  watch: {
    "$route.params.pathMatch"(newVal) {
      const capitalizedStr = newVal
        .split("-")
        .map((word) => {
          return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(" ");

      this.metaInfo = {
        title: capitalizedStr,
      };
      this.titles = {
        mainTitle: capitalizedStr,
        subTitle: "Find Your Property With Us",
      };
      this.gotoViewer();
    },
    shouldCollapse() {
      if (this.shouldCollapse) {
        this.panel = [];
      } else {
        this.panel = [0];
      }
    },
  },
  computed: {
    currentPage() {
      return this.$route.params.pathMatch;
    },
    rentOrSale() {
      return this.splitString(this.$route.params.pathMatch)[1];
    },
    whatProperty() {
      return this.splitString(this.$route.params.pathMatch)[0];
    },
    shouldCollapse() {
      return this.$vuetify.breakpoint.smAndDown;
    },
  },
  beforeRouteEnter(to, from, next) {
    const goTo = to.params.pathMatch;
    const possiblePaths = [
      "apartment-rent",
      "apartment-sale",
      "house-sale",
      "house-rent",
      "land-sale",
      "land-rent",
    ];
    if (possiblePaths.includes(goTo)) {
      next((vm) => {
        const title = vm.capitalizeStr(goTo);

        //Fetch Data
        //Change Data

        // Update Titles of page before route enters
        vm.titles = {
          mainTitle: title,
          subTitle: "Find Your Property With Us",
        };

        // Update Meta
        vm.metaInfo = {
          title: title,
        };
      });
    } else {
      next(from);
    }
  },
  beforeRouteUpdate(to, from, next) {
    const goTo = to.params.pathMatch;
    const possiblePaths = [
      "apartment-rent",
      "apartment-sale",
      "house-sale",
      "house-rent",
      "land-sale",
      "land-rent",
    ];
    if (possiblePaths.includes(goTo)) {
      next();
    } else {
      next(from);
    }
  },
  methods: {
    gotoViewer() {
      this.$nextTick(() => {
        const targetDiv = this.$refs.targetDiv;
        targetDiv.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    },
    getIcon(isExpanded) {
      return isExpanded ? "mdi-chevron-up" : "mdi-chevron-down";
    },
    capitalizeStr(newVal) {
      return newVal
        .split("-")
        .map((word) => {
          return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(" ");
    },
    splitString(str) {
      const parts = str.split("-");
      return [parts[0], parts[1]];
    },
    resetFilter() {
      this.search = [];
      this.search.searchValue = [0, 0];
    },
    searchPackages(searchWords) {
      // Search

      console.log(searchWords);
      //After Search if small screen collapse
      if (this.shouldCollapse) {
        this.panel = [];
      }
    },
    letsCompare() {
      console.log("compare");
      this.$router.push({ name: "compareProperty" });
    },
  },

  mounted() {
    this.gotoViewer();
  },
};
</script>

<style>
.p-search .v-input__slot {
  background: #1e4d62 !important;
  padding-left: 10px;
  border-radius: 13px;
}

.p-search ::placeholder {
  color: white !important;
}

.p-search * {
  color: white !important;
}

.p-search-btn {
  height: 100%;
  background-color: #00bbe4 !important;
  color: white !important;
}

.p-filter-header {
}

.filter-title {
  color: #184a62;
}
.p-filter-section {
  background-color: #f9f4f4;
  height: auto;
}
/*//search*/

.filter-card-container {
  padding: 30px;
}

.filter-cards {
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  border-radius: 10px;
  border-bottom: 6px solid rgba(30, 77, 98, 0.21);
}

.filter-cards:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.s-property-card-image {
  border-top-left-radius: 9px !important;
  border-top-right-radius: 9px !important;
  position: relative;
  overflow: hidden;
}
.s-property-card-image-overlay {
  border-top-left-radius: 9px !important;
  border-top-right-radius: 9px !important;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
.s-property-card-image-overlay div {
  /*position: relative;*/
}
.property-views {
  position: absolute;
  bottom: 0% !important;
  left: 0% !important;
  color: white;
  background-color: #0e5dae;
  padding: 5px;
  font-size: 12px;
  margin: 2px;
}
.property-views .v-icon {
  color: white;
  font-size: 12px;
}

.property-compare-btn {
  position: absolute;
  bottom: 0% !important;
  right: 0% !important;
  padding: 5px;
  margin: 5px;
  display: none;
  color: white !important;
  background-color: #0e5dae !important;
}

.filter-cards:hover .property-views,
.filter-cards:hover .property-compare-btn {
  display: inline-block;
}

.p-select-filters .v-input__slot {
  background-color: #184a62 !important;
  color: white !important;
}
.p-select-filters .v-label,
.p-select-filters .v-select__selection,
.p-select-filters .v-icon.mdi-menu-down {
  color: white !important;
}

.property-location {
  margin: 0px;
  margin: 10px 0px;
  font-size: 14px;
}
.property-price {
  font-weight: bold;
  font-size: 19px;
}
</style>
