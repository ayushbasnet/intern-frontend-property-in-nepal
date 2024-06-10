<template>
  <div>
    <v-container fluid>
      <v-row justify="center">
        <v-col class="col-11">
          <v-row>
            <v-col class="col-md-6 col-12 pa-10 order-0 order-md-1">
              <slick ref="c1" v-bind="c1Setting">
                <template v-for="(slide, n) in slides">
                  <div
                    class="large-slick-display"
                    :key="n"
                    :style="$inlineBgImage(slide)"
                  ></div>
                </template>
              </slick>

              <slick
                ref="c2"
                v-bind="c2Setting"
                @beforeChange="onBeforeChangeC1"
              >
                <template #prevArrow>
                  <div class="custom-arrow">
                    <v-icon>mdi mdi-arrow-left-circle</v-icon>
                  </div>
                </template>
                <template #nextArrow>
                  <div class="custom-arrow">
                    <v-icon>mdi mdi-arrow-right-circle</v-icon>
                  </div>
                </template>

                <template v-for="(slide, n) in slides">
                  <div
                    class="small-slick-display"
                    :key="n"
                    :style="$inlineBgImage(slide)"
                  ></div>
                </template>
              </slick>
              <v-row>
                <v-col class="contact-under-slider">
                  <v-icon class="colorIcon mx-3">mdi-phone</v-icon>
                  <h3>{{ property.contactNumber }}</h3>
                </v-col>
              </v-row>
            </v-col>
            <v-col class="col-md-6 col-12 order-1 order-md-0">
              <!--Description-->
              <v-row>
                <v-col class="col-12">
                  <p>
                    <span class="for-sale"> For Sale </span> <br />
                    <span class="property-title">
                      {{ property.title }}
                    </span>
                    <br />
                    <span class="property-sub-title">
                      {{ property.subTitle }}
                    </span>
                  </p>
                </v-col>
              </v-row>
              <!--Features-->
              <v-row class="my-0">
                <v-col>
                  <div class="property-feature">FEATURES</div>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="col-12">
                  <v-row>
                    <v-col class="p-info-box col-6">
                      <h4>LAND AREA</h4>
                      <p>6.5 per aana</p>
                    </v-col>
                    <v-col class="p-info-box col-6">
                      <h4>Price</h4>
                      <p>6.5 per aana</p>
                    </v-col>
                    <v-col class="p-info-box col-3">
                      <h4>Bedroom</h4>
                      <p>
                        <v-icon>mdi-bed</v-icon>
                        5
                      </p>
                    </v-col>
                    <v-col class="p-info-box col-3">
                      <h4>Bathroom</h4>
                      <p>
                        <v-icon>mdi-shower-head</v-icon>
                        5
                      </p>
                    </v-col>
                    <v-col class="p-info-box col-3">
                      <h4>Living Room</h4>
                      <p>
                        <v-icon>mdi-sofa</v-icon>
                        5
                      </p>
                    </v-col>
                    <v-col class="p-info-box col-3">
                      <h4>Kitchen</h4>
                      <p>
                        <v-icon>mdi-countertop</v-icon>
                        5
                      </p>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
              <v-row class="my-6 text-justify">
                <div v-html="property.description"></div
              ></v-row>
              <!--Features-->
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid>
      <v-row justify="center">
        <v-col class="col-11">
          <v-row>
            <v-col class="col-md-8 col-12">
              <v-row>
                <v-col class="col-12">
                  <v-row>
                    <div class="col-12">
                      <p class="p-title-p">Facilities</p>
                      <div class="col-12">
                        <v-row>
                          <v-list class="col-md-4 col-12">
                            <v-list-item
                              v-for="(list, n) in facilities1.slice(0, 3)"
                              :key="n"
                            >
                              <v-icon class="colorIcon">{{ list.icon }}</v-icon>
                              <span class="facilityTitle">
                                {{ list.title }}
                              </span>
                            </v-list-item>
                          </v-list>
                          <v-list class="col-md-4 col-12">
                            <v-list-item
                              v-for="(list, n) in facilities1.slice(3, 6)"
                              :key="n"
                            >
                              <v-icon class="colorIcon">{{ list.icon }}</v-icon>
                              <span class="facilityTitle">
                                {{ list.title }}
                              </span>
                            </v-list-item>
                          </v-list>
                          <v-list class="col-md-4 col-12">
                            <v-list-item
                              v-for="(list, n) in facilities1.slice(6, 9)"
                              :key="n"
                            >
                              <v-icon class="colorIcon">{{ list.icon }}</v-icon>
                              <span class="facilityTitle">
                                {{ list.title }}
                              </span>
                            </v-list-item>
                          </v-list>
                        </v-row>
                      </div>
                    </div>
                  </v-row>

                  <!--Propery Details-->
                  <v-row>
                    <v-col class="col-12">
                      <v-row>
                        <v-col class="col-12">
                          <p class="p-title-p mb-4">Property Details</p>
                          <p class="p-title-p">
                            {{ property.title }}
                          </p>
                          <p>
                            {{ property.description }}
                          </p>
                          <v-list>
                            <v-list-item
                              v-for="(list, n) in facilities3"
                              :key="n"
                              class="col-6 property-specs"
                            >
                              <v-icon class="colorIconGreen"
                                >mdi-sticker-check</v-icon
                              >
                              <span class="facilityTitle black--text">
                                {{ list }}
                              </span>
                            </v-list-item>
                          </v-list>
                        </v-col>
                      </v-row>
                    </v-col>
                    <v-col class="col-12">
                      <v-row>
                        <v-col class="col-12">
                          <iframe
                            width="100%"
                            height="530px"
                            src="https://www.youtube.com/embed/YwRKux8Q6k0"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                          ></iframe>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                  <!--End of Propery Details-->

                  <v-row>
                    <v-col class="col-12">
                      <v-row>
                        <v-col class="col-12">
                          <p class="p-title-p">Contact Details</p>

                          <div class="col-12 social-icons">
                            <v-icon class="colorIcon">mdi-youtube</v-icon>
                            <v-icon class="colorIcon"> mdi-whatsapp</v-icon>
                            <v-icon class="colorIcon">mdi-facebook</v-icon>
                            <v-icon class="colorIcon">mdi-instagram</v-icon>
                            <v-icon class="colorIcon">mdi-linkedin</v-icon>
                            <v-icon class="colorIcon">mdi-tiktok</v-icon>
                          </div>

                          <p class="col-12 p-title-sm">
                            For More Details:<br />
                            Whatsapp/Viber: Mr Ramesh Barudi-
                            {{ property.contactNumber }}
                          </p>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                  <!--                  -->
                </v-col>
              </v-row>
            </v-col>

            <v-col class="col-md-3 offset-md-1">
              <v-row>
                <v-card class="col-12 side-card">
                  <p class="p-title-p">Premium Listing</p>
                  <div class="col-12">
                    <v-row>
                      <div class="col-12 side-ps" v-for="n in 3" :key="n">
                        <v-row>
                          <div
                            class="col-4 side-p-image-container"
                            :style="$inlineBgImage('hero-header.jpg')"
                          ></div>
                          <div class="col-8 side-p-details">
                            <div class="p-title">Dream house in lazimpath</div>
                            <div class="p-location">
                              <v-icon>mdi-pin</v-icon> Lalitpur Kathmandu
                            </div>
                            <div class="p-price">2 - 4 crore</div>
                          </div>
                        </v-row>
                      </div>
                      <v-col class="col-12 pa-0 pl-2 text-center">
                        <a href=""> View All </a>
                      </v-col>
                    </v-row>
                  </div>
                </v-card>
              </v-row>

              <v-row>
                <v-card class="col-12 side-card mt-5">
                  <p class="p-title-p">Top Listing</p>
                  <div class="col-12">
                    <v-row>
                      <div class="col-12 side-ps" v-for="n in 3" :key="n">
                        <v-row>
                          <div
                            class="col-4 side-p-image-container"
                            :style="$inlineBgImage('hero-header.jpg')"
                          ></div>
                          <div class="col-8 side-p-details">
                            <div class="p-title">Dream house in lazimpath</div>
                            <div class="p-location">
                              <v-icon>mdi-pin</v-icon> Lalitpur Kathmandu
                            </div>
                            <div class="p-price">2 - 4 crore</div>
                          </div>
                        </v-row>
                      </div>
                      <v-col class="col-12 pa-0 pl-2 text-center">
                        <a href=""> View All </a>
                      </v-col>
                    </v-row>
                  </div>
                </v-card>
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
import Slick from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import RecentlyUploadedComponent from "@/components/RecentlyUploadedComponent";

export default {
  name: "SingleProperty",
  components: { Slick, RecentlyUploadedComponent },
  metaInfo() {
    return {
      title: "Single Property",
      titleTemplate: this.$root.$options.titleTemplate,
    };
  },
  data() {
    return {
      titles: {
        mainTitle: "Single Property",
        subTitle: "",
      },
      c1Setting: {
        arrows: false,
        dots: false,
        asNavFor: this.$refs.c2,
        focusOnSelect: true,
      },
      c2Setting: {
        arrows: true,
        dots: false,
        asNavFor: this.$refs.c1,
        focusOnSelect: true,
        slidesToShow: 3,
        speed: 300,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 4000,
      },
      slides: [
        "hero-header.jpg",
        "hero-header.jpg",
        "hero-header.jpg",
        "hero-header.jpg",
        "hero-header.jpg",
        "hero-header.jpg",
        "hero-header.jpg",
      ],
      facilities1: [
        {
          title: "Electricity",
          icon: "mdi-power-plug",
        },
        {
          title: "Telephone",
          icon: "mdi-phone-in-talk",
        },
        {
          title: "Wifi",
          icon: "mdi-wifi",
        },
        {
          title: "Cable Connection",
          icon: "mdi-cable-data",
        },
        {
          title: "Peace",
          icon: "mdi-bird",
        },
        {
          title: "24/7 Water Supply",
          icon: "mdi-faucet",
        },
        {
          title: "Parking Space",
          icon: "mdi-parking",
        },
        {
          title: "No Vehicle and Sound Polution",
          icon: "mdi-cancel",
        },
      ],
      facilities3: [
        "Land  Area:- 6.5 Aana",
        "Facing:- South & East",
        "Bedrooms:- 4(3 Master Bedrooms)",
        "Road:- 13 Ft",
        "Bathrooms:- 5",
        "Home Threster:- 13 Ft",
        "Kitchen:- 1",
        "Furnishings:- Semi-Furnished",
        "Parking:- 3 Cars & Few Bikes",
        "Locations:- Mahatomargh-Bhaisepati",
      ],
      property: {
        title: "(4 BHK)-Semi-Furnished Bungalow Premium Property",
        subTitle: "Mahatomargh-Bhaisepati ",
        cost: "6.50 Crores , 6.5 Aana ",
        description:
          "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia </p> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!</p>",
        contactNumber: "9818262007/9848778372",
      },
    };
  },
  methods: {
    onBeforeChangeC1(currentPosition, nextPosition) {
      this.$refs.c1.goTo(nextPosition);
      this.$refs.c2.goTo(nextPosition);
    },
  },
};
</script>

<style scoped>
.large-slick-display {
  min-height: 400px;
  background-position: center;
  background-size: cover;
}
.small-slick-display {
  min-height: 100px;
  background-position: center;
  background-size: cover;
  margin-right: 5px !important;
  border: 4px solid white;
}

.for-sale {
  color: #d31900;
  font-size: 28px;
  font-weight: 700;
}

.property-title {
  color: black;
  font-size: 24px;
  font-weight: 700;
}
.property-sub-title {
  color: rgb(45, 45, 45);
  font-size: 22px;
  font-weight: 700;
}
.contact-under-slider {
  display: inline-flex;
  justify-content: flex-end;
}
.property-feature {
  font-size: 18px;
  font-weight: 700;
  background-color: #1e4d62;
  color: rgb(255, 255, 255);
  width: fit-content;
  padding: 10px;
}
.p-info-box {
  background-color: #c1f3fe !important;
  border: 5px solid white;
  text-align: center;
}

.p-title-p {
  color: #1e4d62 !important;
  font-size: 25px;
  font-weight: bold;
}

.p-title-sm {
  color: #1e4d62 !important;
  font-size: 25px;
  font-weight: bold;
}

.facilityTitle {
  color: rgb(0, 147, 220);
  font-weight: bold;
  padding-bottom: 0px !important;
  margin-bottom: 0px !important;
}
.colorIcon {
  color: #1e4d62 !important;
  margin-right: 5px;
}
.colorIconGreen {
  color: #3bc061 !important;
  margin-right: 5px;
}

.social-icons .colorIcon {
  font-size: 40px;
}

.property-specs {
  float: left;
  padding: 0px;
  margin: 0px;
}

.side-card {
}

.side-ps {
  cursor: pointer;
  margin-bottom: 20px;
  border: 0.3px solid rgba(30, 77, 98, 0.115);
}
.side-p-image-container {
  height: inherit;
  background-size: cover;
  background-position: center;
}

.side-p-details p {
  margin: 0px;
  padding: 0px;
}
.side-p-details .p-title {
  font-weight: bold;
  font-size: 15px;
}
.side-p-details .p-location {
  font-size: 14px;
}
.side-p-details .p-location .v-icon {
  color: #399ece;
  font-size: 19px;
}
.side-p-details .p-price {
  background-color: rgba(57, 77, 86, 0.57);
  padding: 2px 10px;
  width: auto;
  font-weight: bold;
  font-size: 14px;
  color: white;
}

.icon-container {
  width: 50%; /* adjust the width as needed */
  padding-bottom: 50%; /* this creates a square aspect ratio based on the width */
  position: relative;
  margin: 0 auto; /* center the container horizontally */
}

.icon-container svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.side-card .p-title-p {
  text-align: center;
  padding-bottom: 10px;
  border-bottom: 2px solid rgba(30, 77, 98, 0.48);
  font-size: 23px !important;
}
</style>
