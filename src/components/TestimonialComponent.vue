<template>
  <v-container fluid class="fix-width">
    <v-row>
      <v-col class="col-12 text-center">
        <h2 class="p-content p-testimonial-title">
          See What Others People Are Saying
        </h2>
      </v-col>
    </v-row>
    <v-row justify="center" class="mt-0 pt-0 mb-4">
      <v-col cols="12" md="8" class="pt-0">
        <VueSlickCarousel
          v-bind="settings"
          class="p-testimonial"
          v-if="testimonials.length > 0"
        >
          <div v-for="testimonial in testimonials" :key="testimonial.id">
            <v-row justify="center">
              <v-col class="col-md-10 col-12 text-center">
                <v-row>
                  <v-col class="col-12">
                    <v-row>
                      <v-col>
                        <p class="p-testimonial-content">
                          "{{ testimonial.review }}"
                        </p>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col class="p-wrapper">
                        <img
                          class="avatar"
                          :src="testimonial.author_image"
                          contain
                        />
                        <div>
                          <p class="p-testimonial-author mb-0">
                            {{ testimonial.author }}
                          </p>
                          <p class="p-testimonial-role mb-0">
                            {{ testimonial.working_post }}
                          </p>
                        </div>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </div>
          <template #prevArrow="arrowOption">
            <div class="custom-arrow">
              {{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }}
            </div>
          </template>
          <template #nextArrow="arrowOption">
            <div class="custom-arrow">
              {{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }}
            </div>
          </template>
        </VueSlickCarousel>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  name: "TestimonialComponent",
  components: { VueSlickCarousel },
  props: ["testimonials"],
  data() {
    return {
      settings: {
        arrows: true,
        edgeFriction: 0.35,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Merriweather:ital@1&display=swap");
/*//testimonial*/
.avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  margin-right: 10px;
}

.slick-prev:before {
  color: black !important;
}
.slick-next:before {
  color: black !important;
}
/* .slick-prev {
  left: -10px;
}
.slick-next {
  right: 10px;
} */

.p-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.p-content {
  align-items: center;
}
.p-testimonial {
  min-height: 300px;
  width: 90%;
  margin: auto;
}

.p-testimonial-title {
  font-weight: bold;
  font-size: 30px;
}
.p-testimonial-content {
  text-justify: auto;
  font-family: "Merriweather", serif;
}

.p-testimonial-role {
  color: #184a62;
}
@media (min-width: 959px) {
  .p-testimonial-content {
    font-size: 14px;
  }
  .p-testimonial-author {
    font-size: 10px;
  }
  .p-testimonial-role {
    font-size: 8px;
  }
}
@media (min-width: 1200px) {
  .p-testimonial-content {
    font-size: 16px;
  }
  .p-testimonial-author {
    font-size: 12px;
  }
  .p-testimonial-role {
    font-size: 10px;
  }
}
@media (min-width: 1450px) {
  .p-testimonial-content {
    font-size: 18px;
  }
  .p-testimonial-author {
    font-size: 14px;
  }
  .p-testimonial-role {
    font-size: 12px;
  }
}
@media (min-width: 1600px) {
  .p-testimonial-content {
    font-size: 20px;
  }
  .p-testimonial-author {
    font-size: 16px;
  }
  .p-testimonial-role {
    font-size: 14px;
  }
}
</style>
