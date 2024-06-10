<template>
  <div class="div">
    <HeroHeader :titles="titles" />
    <v-container class="col-lg-9 pt-4 pb-4">
      <div role="form" class="property-req-form" dir="ltr">
        <h4 class="text-center text-h4 pb-15">Request Property Form</h4>
        <form method="post">
          <div class="row">
            <div class="col-md-4 form-group">
              <v-text-field name="your-name" placeholder="Name" />
            </div>
            <div class="col-md-4 form-group">
              <v-text-field name="phone-number" placeholder="Phone" />
            </div>
            <div class="col-md-4 form-group">
              <v-text-field placeholder="Email Address" />
            </div>
            <div class="col-md-4 form-group">
              Request Type<br />
              <v-select
                :items="requestType"
                color="pink"
                label="Request Type"
                required
              ></v-select>
            </div>
            <div class="col-md-4 form-group">
              Property Type<br />
              <v-select
                :items="propertyType"
                color="pink"
                label="Property Type"
                required
              ></v-select>
            </div>
            <div class="col-md-4 form-group">
              How Urgent?<br />
              <v-select
                :items="urgentType"
                color="pink"
                label="Urgent Type"
                required
              ></v-select>
            </div>
            <div class="col-md-6 form-group">
              <v-text-field
                name="which-place"
                placeholder="Which place do you like?"
              />
            </div>
            <div class="col-md-6 form-group">
              <v-text-field
                name="price-range"
                placeholder="What is your price range?"
              />
            </div>
            <div class="col-md-3 form-group">
              Car Parking space<br />
              <v-text-field
                type="text"
                name="carparking"
                placeholder="Car Parking Space"
              />
            </div>
            <div class="col-md-3 form-group">
              No. of Bedrooms<br />
              <v-text-field name="bedrooms" placeholder="No Of Bedrooms" />
            </div>
            <div class="col-md-6 form-group">
              What size of property are you looking for?<br />
              <v-text-field
                type="text"
                name="size-of-property"
                placeholder="Size of property"
              />
            </div>
            <div class="col-12 form-group">
              Description of Request<br />
              <v-textarea placeholder="Your-Request"></v-textarea>
            </div>
            <div class="col-12 form-group">
              <v-btn class="blue--btn">Request Property</v-btn>
            </div>
          </div>
          <div></div>
        </form>
      </div>
    </v-container>
  </div>
</template>

<script>
import HeroHeader from "@/components/HeroHeader";
export default {
  name: "PropertyRequest",
  components: { HeroHeader },
  metaInfo() {
    return {
      title: "Propert Request",
      titleTemplate: this.$root.$options.titleTemplate,
    };
  },
  data() {
    return {
      titles: {
        mainTitle: "Request A Property Form",
        subTitle: "You'll be contacted by us.",
      },
      requestType: ["Buy", "Rent", "Sell"],
      propertyType: [
        "House/Bungalow",
        "Flat & Apartment",
        "Commercial Property",
        "Land",
        "Agricultural Land",
        "Office Space",
        "Shutter & Shop Space",
        "Restaurant For Sale",
        "House In A Colony",
      ],
      urgentType: [
        "Very Urgent",
        "Within A Few Days",
        "Within A Month",
        "In Few Months Time",
      ],
    };
  },
};
</script>

<style>
.property-req-form {
  border: 3px solid rgba(26, 92, 191, 0.1);
  border-radius: 15px;
  padding: 50px 20px;
}
.form-group {
  margin-bottom: 1rem;
}
</style>
