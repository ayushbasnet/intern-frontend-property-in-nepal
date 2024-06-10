<template>
  <div>
    <HeroHeader :titles="titles" />

    <!--Contact US Text-->
    <v-container fluid>
      <v-row justify="center">
        <v-col class="col-10">
          <div class="my-10 text-center">
            <p class="text-h4 pa-2 font-weight-bold">
              If You Have Any Query, Feel Free To <br />
              Contact Us
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <!--Form-->
    <v-container fluid>
      <v-row dense justify="center">
        <v-col class="col-md-11 col-12">
          <v-row>
            <v-col class="col-md-5 col-12">
              <v-row class="circle-div" justify="center">
                <div class="circle3 hidden-md-and-down"></div>
                <v-col cols="6">
                  <v-card tile outlined class="my-3">
                    <v-row>
                      <v-col cols="3">
                        <div class="icon-container">
                          <v-icon
                            class="icon-background"
                            color="white"
                            size="40"
                          >
                            mdi-cellphone</v-icon
                          >
                        </div>
                      </v-col>
                      <v-col cols="9">
                        <v-row>
                          <v-col class="py-0">
                            <v-card-title class="text-h6 font-weight-bold">
                              Phone No</v-card-title
                            >
                            <v-card-text class="text-subtitle-2 black--text">
                              {{ contact_details.contact }}
                            </v-card-text>
                          </v-col>
                        </v-row>
                      </v-col>
                    </v-row>
                  </v-card>

                  <v-card tile outlined class="my-3">
                    <v-row>
                      <v-col cols="3">
                        <div class="icon-container">
                          <v-icon
                            class="icon-background"
                            color="white"
                            size="40"
                          >
                            mdi-email</v-icon
                          >
                        </div>
                      </v-col>
                      <v-col cols="9">
                        <v-row>
                          <v-col class="py-0">
                            <v-card-title class="text-h6 font-weight-bold">
                              Email
                            </v-card-title>
                            <v-card-text class="text-subtitle-2 black--text">
                              {{ contact_details.email }}
                            </v-card-text>
                          </v-col>
                        </v-row>
                      </v-col>
                    </v-row>
                  </v-card>
                  <v-card tile outlined class="my-3">
                    <v-row>
                      <v-col cols="3">
                        <div class="icon-container">
                          <v-icon
                            class="icon-background"
                            color="white"
                            size="40"
                          >
                            mdi-map-marker</v-icon
                          >
                        </div>
                      </v-col>
                      <v-col cols="9">
                        <v-row>
                          <v-col class="py-0">
                            <v-card-title class="text-h6 font-weight-bold">
                              Location
                            </v-card-title>
                            <v-card-text class="text-subtitle-2 black--text">
                              {{ contact_details.address }}
                            </v-card-text>
                          </v-col>
                        </v-row>
                      </v-col>
                    </v-row>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>

            <v-col class="col-md-7 col-12 circle-div">
              <div class="circle1 hidden-md-and-down"></div>
              <div class="circle2 hidden-md-and-down"></div>
              <v-row>
                <v-col>
                  <v-form>
                    <v-card outlined>
                      <v-row class="ma-4">
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field
                            v-model="contactForm.name"
                            label="Your Name"
                            filled
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field
                            v-model="contactForm.email"
                            label="Your Email"
                            filled
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row class="mx-4">
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field
                            v-model="contactForm.location"
                            label="Location"
                            filled
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field
                            v-model="contactForm.budget"
                            label="Budget"
                            filled
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row class="mx-4">
                        <v-col cols="12">
                          <v-textarea
                            v-model="contactForm.message"
                            label="Message"
                            filled
                          ></v-textarea>
                        </v-col>
                      </v-row>
                      <v-card-actions>
                        <v-list-item>
                          <v-row justify="end">
                            <v-btn
                              color="#00BBE4"
                              elevation="2"
                              tile
                              x-large
                              class="white--text"
                            >
                              Submit
                            </v-btn>
                          </v-row>
                        </v-list-item>
                      </v-card-actions>
                    </v-card>
                  </v-form>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <!--Socials-->
    <v-container class="text-center content-header">
      <v-row>
        <v-col>
          <p class="text-h4 font-weight-bold">Connect With Via Socials</p>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" sm="auto" class="my-8 d-flex flex-wrap justify-center">
          <div
            class="social-container mx-8"
            v-for="(icon, key) in socials"
            :key="key"
          >
            <v-icon v-if="icon !== 'mdi-tiktok'" class="social" size="50">
              {{ icon }}
            </v-icon>
            <v-responsive v-if="icon === 'mdi-tiktok'">
              <svg
                fill="#1E4D62"
                width="64px"
                height="64px"
                viewBox="-90 -150 972.80 972.80"
                id="icons"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#1E4D62"
                stroke-width="0.00512"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke="#CCCCCC"
                  stroke-width="6.144"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z"
                  ></path>
                </g>
              </svg>
            </v-responsive>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid>
      <v-row class="help">
        <v-col class="hidden-sm-and-down col-6"
          ><v-img
            src="./../assets/img/man.png"
            aspect-ratio="0.75"
            max-width="25rem"
            class="offset-md-4"
          ></v-img
        ></v-col>
        <v-col class="col-md-6 col-12">
          <p class="text-h4 font-weight-bold">How can we help you?</p>
          <p class="font-weight-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius
          </p>
          <v-row>
            <v-col
              class="font-weight-bold col-6"
              v-for="(item, key) in list"
              :key="key"
            >
              <p>
                <v-icon color="white" size="30">mdi-check</v-icon>
                {{ item }}
              </p>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-btn
                color="#00BBE4"
                elevation="2"
                tile
                x-large
                class="white--text"
                >Get Started</v-btn
              >
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <!--    MAP-->
    <!--    <v-container fluid>-->
    <!--      <v-row>-->
    <!--        <v-col class="col-12 map-container" >-->
    <!--        <div id="map"></div>-->
    <!--        </v-col>-->
    <!--      </v-row>-->
    <!--    </v-container>-->
  </div>
</template>
<script>
import HeroHeader from "@/components/HeroHeader";
// import { mapState } from "vuex";

export default {
  components: { HeroHeader },
  metaInfo() {
    return {
      title: "Contact",
      titleTemplate: this.$root.$options.titleTemplate,
    };
  },

  data() {
    return {
      map: null,
      marker: null,
      logo: "false",
      contactForm: {
        name: "",
        email: "",
        location: "",
        budget: "",
        message: "",
      },
      titles: {
        mainTitle: "Contact Us",
        subTitle: "Find Your Property With Us",
      },
      cards: [
        {
          title: "Phone Number",
          icon: "mdi-cellphone",
          flex: 3,
        },
        {
          title: "Email",
          icon: "mdi-email",
          flex: 3,
        },
        {
          title: "Location",
          icon: "mdi-map-marker",
          flex: 3,
        },
      ],
      social: [],
      contact_details: {
        address: "Nepal",
        email: "nav@np.com",
        contact: "9804049460",
      },
      socials: {
        icon1: "mdi-youtube",
        icon2: "mdi-whatsapp",
        icon3: "mdi-facebook",
        icon4: "mdi-instagram",
        icon5: "mdi-tiktok",
        icon6: "mdi-linkedin",
      },
      list: {
        item1: "Rental Apartment",
        item2: "Buy Apartment",
        item3: "Sale House",
        item4: "Buy House",
        item5: "Sale Land",
        item6: "Buy Land",
      },
    };
  },
  computed: {
    // ...mapState(["contact_details"]),
    getLink() {
      return "x";
    },
  },
  beforeMount() {},
  mounted() {},
};
</script>
<style scoped>
.circle-div {
  position: relative;
}
.circle1 {
  position: absolute;
  top: -80px;
  right: -80px;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background-color: #e3f6fa;
  z-index: 0;
}
.circle2 {
  position: absolute;
  bottom: -38px;
  left: -38px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #e3f6fa;
  z-index: 0;
}
.circle3 {
  position: absolute;
  top: 0;
  left: -10px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #e3f6fa;
  z-index: 0;
}
.icon-container {
  display: inline-block;
  padding: 10px;
  position: relative;
}

.icon-background {
  font-size: 24px;
  background-color: #1e4d62;
  padding: 10px;
  position: relative;
  z-index: 1;
  width: 1.5em;
  height: 1.5em;
}
#icons {
  height: 6em;
  width: 6em;
  display: flex;
  justify-content: center;
  top: 0;
}
.social-container {
  background-color: #e3f6fa; /* Specify your desired dark background color */
  padding: 10px;
  display: inline-block;
  margin: 5px;
  border-radius: 50%;
  height: 6em;
  width: 6em;
  display: flex;
  justify-content: center;
}

.social {
  color: #1e4d62; /* Specify your desired icon color */
}

.help {
  background-color: #1e4d62;
  color: #efefef;
  justify-content: center;
  align-items: center;
}

.map-container {
  margin: 0px !important;
  padding: 0px !important;
}

#map {
  height: 600px;
  overflow: hidden;
}

.content-header {
  color: #1e4d62;
  margin-top: 40px;
}
</style>
