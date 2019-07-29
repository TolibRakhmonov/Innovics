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
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </section>
    <section class="container startup_process">
      <img class="img-fluid" src="@/assets/imgs/startup_process.png" alt="Image" />
    </section>
    <section class="successful_startups container">
      <div class="text-center">
        <h1>Successful Startups</h1>
      </div>
      <div class="d-flex flex-wrap align-content-center">
        <div class="flex_item">
          <img src="@/assets/imgs/1.jpg" alt="Image" />
          <div class="card_text text-center">
            <h3>Title</h3>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut iste dolorum asperiores, consequatur saepe nemo libero a, natus amet ullam excepturi deserunt rem adipisci mollitia. Vero rerum veritatis odio autem.<br>
            <a href="#">Read more</a>
          </div>
        </div>
        <div class="flex_item">
          <img src="@/assets/imgs/2.jpg" alt="Image" />
           <div class="card_text text-center">
            <h3>Title</h3>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut iste dolorum asperiores, consequatur saepe nemo libero a, natus amet ullam excepturi deserunt rem adipisci mollitia. Vero rerum veritatis odio autem.<br>
            <a href="#">Read more</a>
          </div>
        </div>
        <div class="flex_item">
          <img src="@/assets/imgs/3.jpg" alt="Image" />
           <div class="card_text text-center">
            <h3>Title</h3>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut iste dolorum asperiores, consequatur saepe nemo libero a, natus amet ullam excepturi deserunt rem adipisci mollitia. Vero rerum veritatis odio autem.<br>
            <a href="#">Read more</a>
          </div>
        </div>
        <div class="flex_item">
          <img src="@/assets/imgs/4.jpg" alt="Image" />
           <div class="card_text text-center">
            <h3>Title</h3>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut iste dolorum asperiores, consequatur saepe nemo libero a, natus amet ullam excepturi deserunt rem adipisci mollitia. Vero rerum veritatis odio autem.<br>
            <a href="#">Read more</a>
          </div>
        </div>
      </div>
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
  margin-top: 30px;
}
.successful_startups {
  max-width: 90%;
  max-height: 100%;
  margin-top: 30px;
}
.flex_item{
  margin: 10px;
  background-color: rgb(234, 244, 248);
  padding: 10px;
}
.flex_item img{
  border-radius: 5px;
}
.card_text{
  width: 380px;
  padding: 10px;

}

</style>

