<template>
  <div class="navbar">
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      right
      class="hidden-md-and-up"
    >
      <!-- Navigation links here -->
      <v-list>
        <template v-for="(link, n) in links">
          <v-list-group prefix-icon="mdi-folder" v-if="link.children" :key="n">
            <template v-slot:activator>
              <v-list-item-title>{{ link.name }}</v-list-item-title>
            </template>

            <v-list-item
              v-for="(item, index) in link.children"
              :key="index"
              :to="{ name: item.url }"
              class="nav-links"
            >
              <v-list-item-title>{{ item.name }}</v-list-item-title>
            </v-list-item>
          </v-list-group>

          <v-list-item :to="{ name: link.url }" :key="n" exact v-else>
            <v-list-item-icon v-if="link.icon">
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-title>{{ link.name }}</v-list-item-title>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app dark height="90">
      <router-link :to="{ name: 'home' }">
        <v-img src="@/assets/img/logo.png" class="logo-main" contain></v-img>
      </router-link>
      <!-- <v-btn
        text
        icon
        @click.stop="drawer = true"
        class="hidden-md-and-up class-logo"
      >
        <v-img src="@/assets/img/logo.png" class="logo-small" contain></v-img>
      </v-btn> -->
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <template v-for="(link, n) in links">
          <v-menu offset-y v-if="link.children" :key="n">
            <template v-slot:activator="{ on }">
              <v-btn text v-on="on"
                >{{ link.name }}
                <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item
                v-for="(item, index) in link.children"
                :key="index"
                class="nav-links"
                :to="{ path: item.url }"
              >
                <v-list-item-title>{{ item.name }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-btn v-else text :to="{ name: link.url }" exact :key="n">{{
            link.name
          }}</v-btn>
        </template>
      </v-toolbar-items>
      <v-btn
        text
        icon
        @click.stop="drawer = true"
        class="hidden-md-and-up burger-menu"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <!--<v-spacer></v-spacer>
      <v-img src="@/assets/img/logo.png" class="logo-small" contain></v-img>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text :to="{ name: 'login' }">Login</v-btn>
        <v-btn text :to="{ name: 'register' }">Register</v-btn>
      </v-toolbar-items> -->
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      title: "My Website",
      links: [
        {
          name: "Home",
          url: "home",
        },
        {
          name: "About Us",
          url: "about-us",
        },

        {
          name: "Sale",
          children: [
            {
              name: "Land Sale",
              url: "land-sale",
            },
            {
              name: "Apartment Sale",
              url: "apartment-sale",
            },
            {
              name: "House Sale",
              url: "house-sale",
            },
          ],
        },
        {
          name: "Rent",
          children: [
            {
              name: "Land Rent",
              url: "land-rent",
            },
            {
              name: "Apartment Rent",
              url: "apartment-rent",
            },
            {
              name: "House Rent",
              url: "house-rent",
            },
          ],
        },
        {
          name: "Listing",
          url: "listing",
        },
        {
          name: "Contact Us",
          url: "contact-us",
        },

        {
          name: "Tools",
          children: [
            {
              name: "EMI Calculator",
              url: "emi",
            },
            {
              name: "Unit Converter",
              url: "unit-converter",
            },
          ],
        },
        {
          name: "Property Request",
          url: "propertyRequest",
        },
        {
          name: "Blog",
          url: "blog",
        },
      ],
    };
  },
};
</script>

<style>
.v-app-bar,
.v-app-bar--fixed,
.v-app-bar--is-scrolled,
.v-toolbar__content {
  position: relative;
  z-index: 9 !important;
  background: white;
  transition: background-color 1s ease !important;
}

.v-toolbar__items.hidden-sm-and-down * {
  color: black;
}

@media (max-width: 1200px) {
  span.v-btn__content {
    font-size: 10px;
  }
}
@media (min-width: 1200px) {
  span.v-btn__content {
    font-size: 12px;
  }
}
.nav-links * {
  text-decoration: none;
}

.navbar .v-btn--active {
  background-color: rgb(17, 190, 232) !important;
  color: white !important;
}

.v-btn.v-btn--text.theme--dark.v-size--default:focus {
  background-color: rgba(16, 57, 74, 0.58) !important;
  color: white !important;
}
.navbar .v-list-item--active {
  background-color: #253940;
  color: white;
}

a.v-btn.v-btn--router.v-btn--text.theme--dark.v-size--default:hover,
button.v-btn.v-btn--text.theme--dark.v-size--default:hover {
  background-color: rgb(182, 229, 242);
}

.navbar .v-list-item--active .v-list-item__title {
  background-color: #253940;
  color: white !important;
}

.nav-links:hover {
  background-color: rgba(30, 77, 98, 0.68);
  text-decoration: none;
}
.nav-links.v-list-item--active {
  background-color: rgb(17, 190, 232) !important;
  color: white;
}
.nav-links .v-list-item__title:active {
  color: white !important;
}

.v-btn--active * {
  color: white !important;
}
.v-navigation-drawer {
  z-index: 999 !important;
}

.logo-small {
  margin-top: 30px;
  width: 120px !important;
}

.logo-main {
  margin-left: 0%;

  margin-top: 15%;
  width: 70%;
}
.v-navigation-drawer {
  z-index: 999 !important;
}
.class-logo.hidden-md-and-up {
  margin-left: 30px !important;
  color: black !important;
}
.burger-menu.hidden-md-and-up {
  color: black !important;
  margin-right: 80px !important;
  padding: 80px !important;
}

.nav-links * {
  text-decoration: none;
}
</style>
