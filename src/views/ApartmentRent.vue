<template>
<div>

  <HeroHeader :titles="titles" />

  <SearchComponent/>

  <v-container fluid>
    <v-row justify="center">
      <v-col class="col-md-12 col-12 ">
        <v-row>
<!--FilterSection-->
          <v-col class="col-md-3 col-sm-3 col-12 p-filter-section pl-5  ">
            <v-row justify="center">
              <v-col class="col-12 p-filter-header">
                <h3 class="filter-title float-left"> Filters </h3>
                <v-btn class="blue--btn float-right"> Reset Filters</v-btn>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="col-12 ">
                <h3 class="filter-title"> Category </h3>
                <p>Recently Uploaded</p>
                <p>Top Listing</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="col-12 ">
                <h3 class="filter-title"> Price Ranges </h3>
                <v-row>
                  <v-col class="col-6">
                    <v-text-field label="Min" solo></v-text-field>
                  </v-col>
                  <v-col class="col-6">
                    <v-text-field label="Max" solo></v-text-field>
                  </v-col>
                  <v-col class="col-12">
                    <v-range-slider
                        aria-valuemin="1"
                        aria-valuemax="44"
                        max="50"
                        min="-50"
                    ></v-range-slider>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>

            <v-row>

              <v-col class="col-12 ">
                <h3 class="filter-title"> Package Type </h3>

                <v-checkbox
                    label="Budget Package"
                    color="#1E4D62"
                    value="red"
                    hide-details
                ></v-checkbox>
                <v-checkbox
                    label="Premium Package"
                    color="#1E4D62"
                    value="red"
                    hide-details
                ></v-checkbox>
                <v-checkbox
                    label="Value Package"
                    color="#1E4D62"
                    value="red"
                    hide-details
                ></v-checkbox>

              </v-col>
            </v-row>
            <v-row>
              <v-col class="col-12 ">
                <h3 class="filter-title"> Rent Period </h3>
                <v-checkbox
                    label="1 month"
                    color="#1E4D62"
                    value="red"
                    hide-details
                ></v-checkbox>
                <v-checkbox
                    label="3 months"
                    color="#1E4D62"
                    value="red"
                    hide-details
                ></v-checkbox>
                <v-checkbox
                    label="6 months / 1 year"
                    color="#1E4D62"
                    value="red"
                    hide-details
                ></v-checkbox>
              </v-col>
            </v-row>
          </v-col>

<!--          // Searched Cards-->
          <v-col class="col-md-9 col-sm-9 col-12 pr-md-16">
            <v-row>
              <v-col class="col-12">
                <v-row>
                  <v-col class="col-3 p-select-filters">
                    <v-select
                        :items="propertyNames"
                        label="Property Name"
                        solo
                    ></v-select>
                  </v-col>
                  <v-col class="col-3 p-select-filters">
                    <v-select
                        :items="propertySizes"
                        label="Property Size"
                        solo
                    ></v-select>
                  </v-col>
                  <v-col class="col-3 p-select-filters">
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
                    <v-col class="col-md-4 col-sm-6 col-12 filter-card-container" v-for="n in 8" :key="n">
                      <v-row>
                        <v-col class="col-12 filter-cards">
                          <v-row>
                            <v-col class="col-12 ">
                              <v-row>
                                <div
                                    class="s-property-card-image"
                                >
                                  <v-img
                                      :src="`https://picsum.photos/500/300?image=${5 + 10}`"
                                      :lazy-src="`https://picsum.photos/10/6?image=${10}`"
                                      contain
                                      height="100%"
                                      width="100%"
                                  ></v-img>

                                  <div class="property-card-tag">
                                    Rent
                                  </div>

                                </div>


                              </v-row>

                            </v-col>
                            <v-col class="col-12">
                              <h3> 2BHK Apartment </h3>
                              <p>
                                <v-icon class="pin-icon">
                                  mdi-pin
                                </v-icon>
                                Bishal Nagar, KTM
                              </p>
                              <p>
                                <span class="float-left">
                                Rs. 2,00,000/Month
                                </span>

                                <v-btn class="blue--btn float-right"> Learn More</v-btn>
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

  <RecentlyUploadedComponent/>

</div>
</template>

<script>
import RecentlyUploadedComponent from "@/components/RecentlyUploadedComponent";
import HeroHeader from "@/components/HeroHeader";
import SearchComponent from "@/components/SearchComponent";
export default {
  name: "ApartmentRent",
  components: {
    RecentlyUploadedComponent, HeroHeader, SearchComponent
  },
  data() {
    return {
      titles: {
        mainTitle: "Apartment Rent",
        subTitle: "Find Your Property With Us",
      },
      propertyNames: [
        'PropertyName1', 'PropertyName2', 'PropertyName3'
      ],
      propertySizes: [
        'PropertySize1', 'PropertySize2', 'PropertySize3'
      ],
      propertyLocations: [
        'PropertyLocation1', 'PropertyLocation2', 'PropertyLocation3'
      ],
    }
  },
  beforeRouteEnter(to, from, next) {
    const goTo = to.name;
    if (goTo == 'apartment-rent') {
      next(vm => {
        vm.titles.mainTitle='Apartment Rent';
        vm.titles.subTitle="Find Your Property With Us";
      })

    } else if (goTo == 'apartment-sale') {
      next(vm => {
        vm.titles.mainTitle='Apartment Sale';
        vm.titles.subTitle="Find Your Property With Us";
      })
    } else if (goTo == 'house-rent') {
      next(vm => {
        vm.titles.mainTitle='House Rent';
        vm.titles.subTitle="Find Your Property With Us";
      })
    } else if (goTo == 'house-sale') {
      next(vm => {
        vm.titles.mainTitle='House Sale';
        vm.titles.subTitle="Find Your Property With Us";
      })
    } else if (goTo == 'land-sale') {
      next(vm => {
        vm.titles.mainTitle='Land Sale';
        vm.titles.subTitle="Find Your Property With Us";
      })
    } else if (goTo == 'land-rent') {
      next(vm => {
        vm.titles.mainTitle='Land Sale';
        vm.titles.subTitle="Find Your Property With Us";
      })
    }
    else{
      next(from);
    }

  }
}

</script>

<style>
.p-hero-header {
  height: 400px;
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

.p-search .v-input__slot {
  background: #1E4D62 !important;
  padding-left: 10px;
  border-radius: 13px;
}

.p-search ::placeholder {
  color: white !important;
}

.p-search * {
  color: white !important;
}

.p-search-btn{
  height: 100%;
  background-color: #00BBE4 !important;
  color: white !important;
}

.p-filter-header{
  border-bottom: 4px solid black;
}

.filter-title{
  color: #184A62;
}
.p-filter-section{
  background-color: #F9F4F4;
  height: auto;
}
/*//search*/

.filter-card-container{
  padding: 30px;
}

.filter-cards{
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  border-radius: 15px;
  cursor: pointer !important;

}

.s-property-card-image{
  border-top-left-radius: 15px !important;
  border-top-right-radius: 15px !important;
  position: relative;
  overflow: hidden;
}
.property-card-tag{
  position: absolute;
  top: 0;
  right: 0;
  z-index: 4;
  background-color: #D31900;
  padding:5px;
  margin-top: 10px;
  margin-right: 10px;
  width:20%;
  text-align: center;
  font-weight: bold;
  color: white;
  text-transform: uppercase;
}

.p-select-filters .v-input__slot{
  background-color: #184A62  !important;
  color: white !important;
}
.p-select-filters  .v-label, .p-select-filters .v-select__selection , .p-select-filters .v-icon.mdi-menu-down {
  color: white !important;
}
</style>