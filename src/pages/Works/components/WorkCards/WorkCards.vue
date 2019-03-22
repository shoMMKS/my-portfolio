<template>
  <div class="works-wrapper" ref="works-wrapper">
    <div class="card" @click="onClickCard(work)" v-for="work in works" :key="work.id">
      <img :src="getImage(work)" class="card-image-wrapper"/>
      <div class="card-text-wrapper">
        <div class="card-title card-hover-transition">{{ work.title }}</div>
        <div class="card-short-detail card-hover-transition">{{ work.shortDetail }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    works: {
      type: Array,
      default: () => []
    },
    onClickCard: {
      type: Function,
      default: () => {}
    }
  },
  data: () => {
    return {
      cardHeight: 0,
      worksWrapper: null
    }
  },
  methods: {
    handleResize() {
      const innerWidth = window.innerWidth
      let cardWidth = 0
      if (innerWidth < 750) {
        cardWidth = this.worksWrapper.clientWidth
      } else if (innerWidth < 1024) {
        cardWidth = this.worksWrapper.clientWidth * (49 / 100)
      } else {
        cardWidth = this.worksWrapper.clientWidth * (32 / 100)
      }
      this.cardHeight = cardWidth * (5 / 8)
    },
    getImage(work) {
      return require('@/assets/' + work.image)
    },
    getImageStyle(work) {
      return {
        'background': `url(${require('@/assets/' + work.image)});`,
        'height': `${this.cardHeight}px;`
      }
    }
  },
  mounted() {
    this.worksWrapper = this.$refs['works-wrapper']
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
  }
}
</script>

<style>
.works-wrapper {
  display: flex;
  max-width: 800px;
  margin: 0px auto;
  flex-flow: row;
  flex-wrap: wrap;
}
.card {
  position: relative;
  width: 32%;
  min-width: 200px;
  margin: 0.5%;
  line-height: 0;
  background-color: white;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
  cursor: pointer;
}
.card-image-wrapper {
  margin: 8px;
  width: calc(100% - 16px);
  object-fit: cover;
  height: 200px;
  z-index: 0;
}
.card-text-wrapper {
  margin: auto;
  color: #000;
  z-index: 4;
}
.card-title {
  margin: 16px;
  line-height: 1.15;
  text-align: center;
  font-size: 16px;
}
.card-short-detail {
  margin: 16px;
  line-height: 1.15;
  text-align: justify;
  text-justify: inter-ideograph;
  font-size: 14px;
}
@media screen and (max-width: 1024px) {
  .card {
    width: 49%;
    margin: 0.5%;
  }
}
@media screen and (max-width: 750px) {
  .card {
    width: 100%;
    margin: 0.5% 0;
  }
}
@media screen and (max-width: 480px) {
  .card {
    width: 100%;
    margin: 0.5% 0;
  }
}
@media screen and (min-width: 1024px) {
  .card:hover {
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
    opacity: 1;
  }
}
</style>