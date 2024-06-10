<template>
  <div>
    <!-- <HeroHeader :titles="titles" /> -->

    <div class="mx-auto mt-12">
      <!--About Us-->
      <v-container fluid>
        <v-row
          justify="center"
          v-for="content in contents"
          :key="content.id"
          v-bind:class="[{ reverse: content.alignRight }, my - 10]"
        >
          <v-col class="content-text-container" cols="12" md="5">
            <v-row>
              <p class="text-center text-h5 col-12">About Us</p>
              <p>
                Welcome to our website, your ultimate destination for finding
                the perfect properties for sale and rent! Whether you're looking
                for a new home, an investment property, or a temporary rental,
                we've got you covered. With our extensive listings and
                user-friendly interface, your property search experience is
                about to get a whole lot easier.
                <br />
                <br />
                Welcome to our website, your ultimate destination for finding
                the perfect properties for sale and rent! Whether you're looking
                for a new home, an investment property, or a temporary rental,
                we've got you covered. With our extensive listings and
                user-friendly interface, your property search experience is
                about to get a whole lot easier.
              </p>
            </v-row>
          </v-col>
          <v-col cols="12" md="5">
            <v-img :src="content.img" class="content-image-container"> </v-img>
          </v-col>
        </v-row>
      </v-container>
      <!--End Of About Us-->
      <v-container fluid>
        <v-row justify="center">
          <v-col cols="12" md="4">
            <!-- Mission-->
            <v-card
              class="mx-auto my-4 m-v-hover"
              max-width="25em"
              style="height: 20em"
            >
              <div class="content-container">
                <div class="icon-container">
                  <v-icon color="#00b8e6" size="68">mdi-bullseye-arrow</v-icon>
                </div>
                <v-card-title class="m-v-title"> Our Mission</v-card-title>
                <v-card-text class="m-v-text" v-text="mission"></v-card-text>
              </div>
            </v-card>
            <!-- End of Mission-->
          </v-col>
          <v-col cols="12" md="4">
            <!--Vision-->
            <v-card
              class="mx-auto my-4 m-v-hover"
              max-width="25em"
              style="height: 20em"
            >
              <div class="content-container">
                <div class="icon-container">
                  <v-icon color="#00b8e6" size="68">mdi-eye</v-icon>
                </div>
                <v-card-title class="m-v-title">Our Vision</v-card-title>
                <v-card-text class="m-v-text" v-text="vision"></v-card-text>
              </div>
            </v-card>
            <!--End of Vision-->
          </v-col>
        </v-row>
      </v-container>

      <!-- How It Works Section-->
      <div class="text-center">
        <v-btn
          color="#00b8e6"
          elevation="2"
          x-large
          class="my-5 white--text"
          tile
          >How It Works</v-btn
        >
      </div>
      <v-container class="mb-8">
        <v-row justify="center" no-gutters>
          <v-col
            v-for="card in cards"
            :key="card.title"
            :cols="12"
            :md="6"
            :lg="4"
          >
            <v-card
              class="mx-4 my-2 card-hover"
              max-width="23em"
              style="height: 18em"
              elevation="4"
            >
              <div class="content-container">
                <div class="icon-container">
                  <v-icon class="icon-background" color="white" size="68">{{
                    card.icon
                  }}</v-icon>
                </div>
                <v-card-title
                  class="font-weight-bold text-h5"
                  v-text="card.title"
                ></v-card-title>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <!-- FAQ -->
      <div class="text-center my-2">
        <v-btn
          color="#00b8e6"
          elevation="2"
          large
          class="my-10 white--text"
          tile
          x-large
          >Frequently Asked Questions</v-btn
        >
        <!-- <p class="text-h6 text-sm-h5 text-md-h5 font-weight-bold">
          WE ARE HERE TO HELP YOU WITH ANY <br />
          QUESTION YOU MAY HAVE
        </p> -->
      </div>

      <v-responsive class="mt-5 mb-16 mx-auto" max-width="60%">
        <v-row justify="center">
          <v-col :cols="12" v-for="(item, i) in faqs" :key="i">
            <v-expansion-panels accordion>
              <v-expansion-panel>
                <v-expansion-panel-header
                  class="font-weight-bold"
                  :value="item.isExpanded"
                  @click="toggleExpansion(item)"
                  :class="
                    item.isExpanded ? 'expanded-panel' : 'collapsed-panel'
                  "
                >
                  {{ item.question }}
                  <template v-slot:actions>
                    <v-icon :color="item.isExpanded ? 'white' : ''">
                      {{ getIcon(item.isExpanded) }}
                    </v-icon>
                  </template>
                </v-expansion-panel-header>
                <v-expansion-panel-content class="mt-4">
                  {{ item.answer }}
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </v-row>
      </v-responsive>
    </div>
  </div>
</template>
<script>
// import HeroHeader from "@/components/HeroHeader";
export default {
  name: "AboutUs",
  // components: { HeroHeader },
  metaInfo() {
    return {
      title: "About Us",
      titleTemplate: this.$root.$options.titleTemplate,
    };
  },
  methods: {
    toggleExpansion(item) {
      this.$set(item, "isExpanded", !item.isExpanded);
    },
    getIcon(isExpanded) {
      return isExpanded ? "mdi-minus" : "mdi-plus";
    },
  },
  data() {
    return {
      titles: {
        mainTitle: "About Us",
        subTitle: "Find Your Property With Us",
      },
      vision:
        "“To adapt and evolve to continue to offer beyond expectation service and results, through creative thinking, leadership, initiative, respect and passion. ”",
      mission:
        "“To enthusiastically serve our clients by providing tenants with homes and workplaces that they can be proud of.”",
      contents: [
        {
          id: 1,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid",
          img: "https://img.freepik.com/free-vector/marketing-consulting-concept-illustration_114360-9659.jpg?w=740&t=st=1689234829~exp=1689235429~hmac=ba8991f44427884c90d24c76e02f01c72ee80a4908e0676278ba2483af87ca2e",
          alignRight: false,
        },
      ],
      tag: {
        mainTitle: "THE BEST REAL STATE OUT THERE",
        subTitle:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid",
      },
      photos: [
        {
          id: 1,
          url: "https://www.realestateinnepal.com/wp-content/uploads/2019/03/2.jpeg",
        },
        {
          id: 2,
          url: "https://www.neopropertynepal.com/uploads/articles/images/house-building.jpg",
        },
        {
          id: 3,
          url: "https://epropertynepal.com/system/photos/21602/original_1.jpg?1660639794",
        },
        {
          id: 4,
          url: "https://www.propertynepal.com/images/properties/892/1682586802.jpeg",
        },
      ],

      cards: [
        {
          title: "Evaluate Property",
          icon: "mdi-book-open-page-variant",
        },
        {
          title: "Meet Our Agent",
          icon: "mdi-account-tie",
        },
        {
          title: "Close The Deal",
          icon: "mdi-handshake",
        },
      ],
      faqs: [
        {
          question: "HOW TO BUY LAND IN KATHMANDU PRIME LOCATION",
          answer: "By using property in Nepal",
          isExpanded: false,
        },
        {
          question: "WHAT ARE COST ASSOCIATED WITH THE LAND REVENEUES",
          answer: "Contact Us",
          isExpanded: false,
        },
        {
          question: "HOW TO BUY LAND IN KATHMANDU PRIME LOCATION",
          answer: "By using property in Nepal",
          isExpanded: false,
        },
        {
          question: "WHAT ARE COST ASSOCIATED WITH THE LAND REVENEUES",
          answer: "Contact Us",
          isExpanded: false,
        },
        {
          question: "HOW TO BUY LAND IN KATHMANDU PRIME LOCATION",
          answer: "By using property in Nepal",
          isExpanded: false,
        },
        {
          question: "WHAT ARE COST ASSOCIATED WITH THE LAND REVENEUES",
          answer: "Contact Us",
          isExpanded: false,
        },
        {
          question: "HOW TO BUY LAND IN KATHMANDU PRIME LOCATION",
          answer: "By using property in Nepal",
          isExpanded: false,
        },
        {
          question: "WHAT ARE COST ASSOCIATED WITH THE LAND REVENEUES",
          answer: "Contact Us",
          isExpanded: false,
        },
        {
          question: "HOW TO BUY LAND IN KATHMANDU PRIME LOCATION",
          answer: "By using property in Nepal",
          isExpanded: false,
        },
        {
          question: "WHAT ARE COST ASSOCIATED WITH THE LAND REVENEUES",
          answer: "Contact Us",
          isExpanded: false,
        },
      ],
    };
  },
  mounted() {
    // this.$metaInfo = {
    //   title: "Aboooout ME",
    // };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Barlow&family=Diphylleia&display=swap");
.m-v-title {
  font-family: "Diphylleia", serif;
  font-size: 30px;
  font-weight: 700;
}
.m-v-text {
  font-family: "Barlow", sans-serif;
  font-size: 16px;
  font-weight: 300;
}
.icon-container {
  display: inline-block;
  padding: 10px;
  position: relative;
}

.icon-background {
  font-size: 24px;
  background-color: #00b8e6;
  padding: 35px;
  position: relative;
  z-index: 1;
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
}

.content-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: center;
}
.m-v-hover {
  transition: all 300ms ease-in-out 0s;
}
.m-v-hover:hover {
  transform: scale(1.08);
  transition: transform 0.3s ease-in-out;
  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
}

.content-text-container {
  display: flex;
  font-size: 20px;
  text-align: center;
  align-items: center;
  justify-content: center;
}
.content-image-container {
  width: 90%;
}
.reverse {
  flex-direction: row-reverse;
}
.card-hover:hover {
  transform: scale(1.08);
  transition: transform 0.2s ease-in-out;
}
.expanded-panel {
  background-color: #184a62;
  color: white;
}

.collapsed-panel {
  background-color: #e0f3f6;
}

@media screen and (max-width: 480px) {
  .collapsed-panel {
    font-size: 12px;
  }
}

@media screen and (min-width: 481px) and (max-width: 768px) {
  .collapsed-panel .about-tag {
    font-size: 14px;
  }
}

@media screen and (min-width: 769px) and (max-width: 1024px) {
  .collapsed-panel {
    font-size: 16px;
  }
}

@media screen and (min-width: 1025px) {
  .collapsed-panel {
    font-size: 18px;
  }
}
</style>
