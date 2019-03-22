<template>
  <div class="skills-wrapper" ref="skills-wrapper" :style="getWrapperStyle()">
    <div class="skill-card-wrapper" v-for="skill in skills" :key="skill.id">
      <div class="skill-card">
        <div class="card-title">{{ skill.name }}</div>
        <div class="card-short-detail" v-html="skill.shortDetail" />
        <div class="card-years-detail">使用歴: {{ skill.year }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    skills: {
      type: Array,
      default: () => []
    }
  },
  data: () => {
    return {
      skillCardsWrapperMargin: 0,
      cardHeight: 0,
      skillsWrapper: null
    }
  },
  methods: {
    handleResize() {
      const innerWidth = window.innerWidth
      let cardWidth = 0
      if (innerWidth < 750) {
        cardWidth = this.skillsWrapper.clientWidth
      } else if (innerWidth < 1024) {
        cardWidth = this.skillsWrapper.clientWidth * (49 / 100)
      } else {
        cardWidth = this.skillsWrapper.clientWidth * (32 / 100)
      }
      this.cardHeight = cardWidth * (5 / 8)
    },
    getWrapperStyle() {
      return `padding: 0 ${this.skillCardsWrapperMargin}px;`
    },
    getCardStyle(skill) {
      return `background-image: url('${skill.image}'); height: ${this.cardHeight}px;`
    }
  },
  mounted() {
    this.skillsWrapper = this.$refs['skills-wrapper']
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
  }
}
</script>

<style>
.skills-wrapper {
  max-width: 800px;
  margin: 0px auto;
  display: flex;
  flex-wrap: wrap;
}
.skill-card {
  position: relative;
  margin: 8px;
  width: 184px;
  height: 280px;
  background-color: rgb(250, 250, 250);
  color: #000;
}
.skills-caption {
  color: rgb(117, 117, 117);
}
.card-title {
  padding: 16px;
  line-height: 1.15;
  text-align: center;
  font-size: 16px;
}
.card-short-detail {
  padding: 0px 16px;
  line-height: 1.15;
  text-align: justify;
  text-justify: inter-ideograph;
  font-size: 14px;
}
.card-years-detail {
  position: absolute;
  bottom: 16px;
  padding: 0px 16px;
  line-height: 1.15;
  text-align: justify;
  text-justify: inter-ideograph;
  font-size: 14px;
}
</style>