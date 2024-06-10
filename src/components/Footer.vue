<template>
  <div>
    <v-container fluid class="p-footer">
      <v-row justify="center">
        <v-col class="col-md-11 col-12">
          <v-row>
            <v-col class="col-md-4 col-12">
              <v-img src="@/assets/img/logo.png" contain height="200px"></v-img>

              <p>
                Lorem iaspsum doldfor sit amvset, consectetur adipisicing cvelit
                csed do eiusmod tempor incidi ducvccnt ut labovre.
              </p>
              <p>
                <v-icon class="social-icons">mdi-facebook</v-icon>
                <v-icon class="social-icons">mdi-instagram</v-icon>
                <v-icon class="social-icons">mdi-whatsapp</v-icon>
                <v-responsive class="footer-logo">
                  <svg
                    fill="#ffffff"
                    width="64px"
                    height="64px"
                    viewBox="0 -20 665.60 665.60"
                    id="icons"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#ffffff"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z"
                      ></path>
                    </g>
                  </svg>
                </v-responsive>
              </p>
            </v-col>

            <v-col class="col-md-2 col-12">
              <h3>Finance</h3>
              <v-list color="transparent">
                <v-list-item
                  class="p0"
                  v-for="(item, index) in financeLinks"
                  :key="index"
                  :title="item.title"
                  >{{ item.title }}</v-list-item
                >
              </v-list>
            </v-col>

            <v-col class="col-md-2 col-12">
              <h3>Resources</h3>
              <v-list color="transparent">
                <v-list-item
                  class="p0"
                  v-for="(item, index) in resourcesLinks"
                  :key="index"
                  :title="item.title"
                  >{{ item.title }}</v-list-item
                >
              </v-list>
            </v-col>

            <v-col class="col-md-2 col-12">
              <h3>Quick Links</h3>
              <v-list color="transparent">
                <v-list-item
                  class="px-3"
                  v-for="(item, index) in quickLinks"
                  :key="index"
                  :title="item.title"
                  :to="item.link ? { name: item.link } : '/#'"
                  >{{ item.title }}</v-list-item
                >
              </v-list>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      financeLinks: [
        {
          title: "Home Loan",
        },
        {
          title: "Personal Loan",
        },
        {
          title: "Commercial Loan",
        },
        {
          title: "Line of Credit",
        },
        {
          title: "Asset Finance",
        },
        {
          title: "Relocation Loan",
        },
      ],
      resourcesLinks: [
        {
          title: "Useful Link",
        },
        {
          title: "Gallery",
        },
        {
          title: "Unit Converter",
          link: "unitConverter",
        },
        {
          title: "EMI Calculator",
          link: "emiCalculator",
        },
      ],
      quickLinks: [
        {
          title: "About Us",
          link: "about-us",
        },
        {
          title: "Rent",
          link: "emiCalculator",
        },
        {
          title: "Sale",
        },
        {
          title: "Blog",
          link: "blog",
        },
        {
          title: "Contact",
          link: "contact-us",
        },
        {
          title: "Property Request Form",
          link: "propertyRequest",
        },
        {
          title: "Tools",
        },
      ],
    };
  },
};
</script>

<style scoped>
.p-footer {
  background-color: #e2683882;
  color: black !important;
  background: linear-gradient(90deg, #4dab8c, #040533);
  padding-top: 50px;
}
.p-footer * {
  color: white !important;
}
.p0 {
  padding: 0px !important;
}

.social-icons {
  font-size: 35px !important;
  margin-right: 10px;
}
.footer-logo {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  width: 35px;
  height: 35px;
  letter-spacing: normal;
  line-height: 1;
  position: relative;
  text-indent: 0;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), visibility 0s;
  vertical-align: middle;
}
</style>
