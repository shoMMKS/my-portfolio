<template>
  <div class="hello">
    <h1>Works</h1>
    <work-cards :works="this.works" :on-click-card="handleClickCard" />
    <modal
      :wrapper-style="getModalWrapperStyle()"
      :open="modalOpen"
      :title="validateModalWork('title')"
      :on-close="handleModalClose"
    >
      <div class="work-modal-content">
        <div class="work-modal-detail" v-html="validateModalWork('detail')" />
        <div class="repository-link" v-if="validateModalWork('repository')">
          <a :href="validateModalWork('repository')" target="_blank">Repository</a>
        </div>
        <div class="url-link" v-if="validateModalWork('url')">
          <a :href="validateModalWork('url')" target="_blank">Link</a>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import Modal from 'src/components/Modal'
import WorkCards from './components/WorkCards'
import data from './data'
export default {
  data: () => {
    return {
      modalOpen: false,
      modalWork: null,
      ...data
    }
  },
  methods: {
    handleClickCard(work) {
      this.modalWork = work
      this.modalOpen = true
    },
    handleModalClose() {
      this.modalOpen = false
    },
    validateModalWork(key) {
      if (this.modalWork) {
        return this.modalWork[key]
      }
      return ''
    },
    getModalWrapperStyle() {
      return 'position: relative; width: 70%; max-width: 400px; height: auto;'
    }
  },
  components: {
    Modal,
    WorkCards
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello {
  padding-bottom: 30px;
}
</style>
