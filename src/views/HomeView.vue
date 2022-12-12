<template>
  <div class="home">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      img-width="1024"
      img-height="480"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        caption="Welcome Beauty!"
        text="Eager to create a list of your favorite products?"
        :img-src="require('@/assets/img/slide1.jpg')"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="Benefit"
        text="Laughter is the best cosmetic"
        :img-src="require('@/assets/img/slide2.jpg')"
      ></b-carousel-slide>
      <b-carousel-slide
          caption="Colourpop"
          text="With love from california"
          :img-src="require('@/assets/img/slide3.jpg')"
        ></b-carousel-slide>
      <b-carousel-slide
          caption="Fenty Beauty by Rihanna"
          text="Stays fresh wherever, whenever"
          :img-src="require('@/assets/img/slide4.jpg')"
        ></b-carousel-slide>
      <b-carousel-slide
          caption="Milani"
          text="Gifts for everyone on your list"
          :img-src="require('@/assets/img/slide5.jpg')"
        ></b-carousel-slide>
      <b-carousel-slide
          caption="NYX"
          text="Proud artistry for all"
          :img-src="require('@/assets/img/slide6.jpg')"
        ></b-carousel-slide>
      </b-carousel>
  </div>
</template>

<script>
  export default {
    name: 'HomeView',
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>

<style>
  .home {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
  }
  .carousel {
    width: 60%;
    height: auto;
    background: #000;
    text-shadow: 1px 1px 2px #333;
  }

  @media (min-width: 280px) and (max-width: 767px) {
    .carousel {
      width: 80%;
    }
  }
  @media (min-width: 280px) and (max-width: 360px) {
    .carousel-caption h3 {
      font-size: 1em;
    }
    .carousel-caption p {
      font-size: 0.6em;
    }
  }
</style>