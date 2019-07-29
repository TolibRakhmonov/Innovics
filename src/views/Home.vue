<template>
  <v-app>
    <!-- slider -->
    <section class="slider container">
      <!-- swiper -->
      <swiper :options="swiperOption">
        <swiper-slide>
          <img src="@/assets/imgs/1.jpg" alt="Slider image" />
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/imgs/2.jpg" alt="Slider image" />
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/imgs/3.jpg" alt="Slider image" />
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/imgs/4.jpg" alt="Slider image" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
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
          delay: 4000,
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
  max-width: 878px;
  max-height: 494px;
  margin-top: 30px;
}
</style>

