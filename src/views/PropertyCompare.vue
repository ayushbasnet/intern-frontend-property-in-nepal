<template>
  <v-container fluid>
    <div class="d-flex justify-center align-center my-6">
      <v-icon class="compare-icon">mdi-compare-horizontal</v-icon>
      <span class="title">Compare Properties</span>
    </div>

    <v-row justify="center">
      <v-col cols="11" >
        <v-row justify="space-around">


          <template v-for="property in properties">

            <v-col class="col-md-4 col-6 compare-card" :key="property.id">
              <v-row>
                <v-card>
                  <v-row align="center">
                    <v-col cols="12" class="">
                      <router-link :to="{name:'singleProperty'}">

                      <v-img
                          lazy-src="https://picsum.photos/id/11/10/6"
                          :src="'https://picsum.photos/id/12'+ property.id +'/500/300'"
                          class="compare-property-image"
                          cover
                      ></v-img>
                      </router-link>

                      <div class="compare-property-image-overlay">
                        <v-btn
                            @click="removeProperty(property.id)"
                            color="error"
                            medium
                            class="ma-2"
                        >
                          <v-icon>mdi-delete-empty</v-icon>
                        </v-btn>
                      </div>

                    </v-col>
                  </v-row>


                  <router-link :to="{name:'singleProperty'}">

                  <v-card-title class="compare-property-title">
                    {{property.name }}
                  </v-card-title>
                  <v-card-subtitle class="compare-property-subtitle">
                    {{property.location }}
                  </v-card-subtitle>
                  </router-link>

                  <v-card-text>
                    <!-- Display property details here -->
                    <div
                        v-for="(value, key) in property.facility"
                        :key="value"
                        class="attributes"
                    >
                      <strong>{{ key }}: </strong>
                      {{ value }}
                    </div>
                  </v-card-text>
                </v-card>
              </v-row>
            </v-col>


          </template>


          <v-col class="col-md-4 col-6 compare-card" v-if="properties.length != 3">
            <v-card max-width="600" class="mx-auto">
              <v-card-title>Add A Property To Compare</v-card-title>

              <v-card-text class="text--primary">
                <v-text-field
                  v-model="searchQuery"
                  label="Search"
                  outlined
                  @input="filterProperties"
                />
              </v-card-text>
              <v-card-text>
                <v-row>
                  <v-col
                    v-for="(property, index) in filteredProperties"
                    :key="index"
                    cols="12"
                    md="4"
                    sm="6"
                    class="property-card-container"
                  >

                    <div @click="properties.push(property)">
                      <v-img
                          lazy-src="https://picsum.photos/id/11/10/6"
                          :src="'https://picsum.photos/id/12'+ property.id +'/500/300'"
                          cover
                      ></v-img>

                      {{property.name}}
                    </div>
                    <!-- Your property card content -->
                  </v-col>
                </v-row>
              </v-card-text>
              <v-card-actions>
                <v-btn color="blue" text> Add </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>

        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "Compare",
  metaInfo() {
    return {
      title: "Compare Property",
      titleTemplate: this.$root.$options.titleTemplate,
    };
  },
  data() {
    return {

      properties: [
        {
          id: 1,
          name: "House For Sale In Bhaisepati",
          location: " Manjushree Marg, Bhaisepati, Lalitpur ",
          facility:{
            "Land Area" :"15000 sq.ft",
            "Facing" :"North",
            "Bedrooms" :"3",
            "Road" :"Side Street",
            "Bathrooms" :"2",
            "Home Thresher" :"NA",
            "Kitchen" :"Modern",
            "Furnishings" :"Furnished",
            "Parking" :"1 car parking",
            "Location" :"Suburb Area",
          },
        },
        {
          id: 2,
          name: "17 Aana Bungalow For Sale In Bhaisepati",
          location: "Bhaisepati Height, Lalitpur ",
          facility:{
            "Land Area" :"15000 sq.ft",
            "Facing" :"North",
            "Bedrooms" :"3",
            "Road" :"Side Street",
            "Bathrooms" :"2",
            "Home Thresher" :"NA",
            "Kitchen" :"Modern",
            "Furnishings" :"Furnished",
            "Parking" :"1 car parking",
            "Location" :"Suburb Area",
          },
        },
        {
          id: 3,
          name: "A Cosy House For Sale",
          location: " Imadol, Lalitpur",
          facility:{
            "Land Area" :"15000 sq.ft",
            "Facing" :"North",
            "Bedrooms" :"3",
            "Road" :"Side Street",
            "Bathrooms" :"2",
            "Home Thresher" :"NA",
            "Kitchen" :"Modern",
            "Furnishings" :"Furnished",
            "Parking" :"1 car parking",
            "Location" :"Suburb Area",
          },
        },
      ],
      searchQuery: "",
      filteredProperties: [],
      featuredProperties: [
        {
          id: 10,
          name: "Traditional Style House in Historic District",
          location: "Heritage Lane, Old Town",
          facility: {
            "Land Area": "8000 sq.ft",
            "Bedrooms": "3",
            "Bathrooms":"2",
            "Architecture": "Colonial",
            "Kitchen" :"Modern",
            "Garden": "Courtyard garden",
            "Parking": "Street parking",
            "Location": "Historical area"
          }
        },
        {
          id: 9,
          name: "Elegant Penthouse with Panoramic City Views",
          location: "Skyline Heights, Urban Center",
          facility: {
            "Area": "2500.ft",
            "rooms": "4",
            "Bathrooms": "3.5",
            "Kitchen" :"Modern",
            "Balcony ":"Wrap-around balcony",
            "Parking": "Reserved parking",
            "Location": "High-rise building"
          }
        },
        {
          id: 8,
          name: "Contemporary Loft Artistic District",
          location: "Art Avenue, Creative Zone",
          facility: {
            "Area": "1200 sq.ft",
            "Bedrooms": "1",
            "Bathrooms": "1.5",
            "Kitchen" :"Modern",
            "Open Floor Plan": "Yes",
            "Exposed Brick Walls": "Yes",
            "Parking": "Street parking",
            "Location": "Vibrant neighborhood"
          }
        },
        {
          id: 7,
          name: "Charming Farmhouse with Mountain Views",
          location: "Mountain Valley, Rural Area",
          facility: {
            "Land Area": "10000 sq.ft",
            "Bedrooms": "5",
            "Bathrooms": "3",
            "View": "Mountain view",
            "Garden": "Vegetable garden",
            "Parking": "Driveway parking",
            "Location": "Tranquil setting"
          }
        },
        {
          id: 6,
          name: "Modern Townhouse in the Heart of the City",
          location:"City Central, Downtown",
          facility: {
            "Bedrooms": "3",
            "Bathrooms": "2.5",
            "Parking": "Private garage",
            "Roof Terrace": "Yes",
            "Security System": "24/7 surveillance",
            "Location": "Prime location"
          }
        }
      ],
      // Add more properties to compare
    };
  },

  watch: {
    searchQuery: "filterProperties", // Watch for changes in searchQuery and call the filterProperties method
  },
  methods: {
    removeProperty(id) {
      this.properties = this.properties.filter(
        (property) => property.id !== id
      );
    },
    filterProperties() {
      this.filteredProperties = this.featuredProperties.filter(property => {
        return property.name.toLowerCase().includes(this.searchQuery.toLowerCase());
      });
      console.log(this.filteredProperties);

    },
  },
};
</script>

<style scoped>
/* Add custom styles here if needed */
.compare-icon {
  font-size: 40px;
  justify-content: center;
  color: #399ece;
}
.title {
  font-size: 32px !important;
  font-weight: 500;
  color: rgba(12, 59, 79, 0.77);
  justify-content: center;
  padding-left: 15px;
}
.attributes {
  font-size: 17px;
  padding: 10px !important;
}

.attributes strong{
  color: #455f6b;
}

.compare-property-title {
  color: #1E4D62;
  font-size: 20px;
  font-weight: 700;
}
.compare-property-subtitle {
  color: rgb(45, 45, 45);
  font-size: 15px;
  font-weight: 500;
}



/*// Manish*/

.compare-property-image{
  position: relative;
}
.compare-property-image-overlay{
  position: absolute;
  top: 0;
  width: 100%;
}
.compare-property-image-overlay .v-btn{
  float: right;
}
.compare-property-image:hover .compare-property-image-overlay .v-btn{
  display: block;
}

.compare-card{
  padding: 20px;
}
.compare-card .v-card{
  border-bottom: 5px solid #1E4D62;

}

</style>
