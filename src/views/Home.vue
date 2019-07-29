<template>
  <v-app>
    <!-- slider -->
    <section class="slider container">
      <!-- swiper -->
      <swiper :options="swiperOption">
        <swiper-slide>
          <img class="img-fluid" src="@/assets/imgs/slide1.jpg" alt="Slider image" />
        </swiper-slide>
        <swiper-slide>
          <img class="img-fluid" src="@/assets/imgs/slide2.jpeg" alt="Slider image" />
        </swiper-slide>
        <!-- <swiper-slide>
          <img class="img-fluid" src="@/assets/imgs/3.jpg" alt="Slider image" />
        </swiper-slide>
        <swiper-slide>
          <img class="img-fluid" src="@/assets/imgs/4.jpg" alt="Slider image" />
        </swiper-slide>
        <swiper-slide>
          <img class="img-fluid" src="@/assets/imgs/5.jpg" alt="Slider image" />
        </swiper-slide> -->
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </section>
    <section class="container startup_process">
      <img class="img-fluid" src="@/assets/imgs/startup_process.png" alt="Image" />
    </section>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  }
};
</script>
<style scoped>
.slider {
  padding-bottom: 0;
  max-width: 90%;
  max-height: 100%; 
  background-repeat: no-repeat;
}
.startup_process {
  background-color: rgb(234, 244, 248);
  max-width: 90%;
  max-height: 100%;
}
</style>

