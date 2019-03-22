<template>
  <div class="hello">
    <h1>Skills</h1>
    <h2>Languages</h2>
    <skill-cards :skills="this.languages" />
    <h2>Skills</h2>
    <skill-cards :skills="this.skills" />
  </div>
</template>

<script>
import SkillCards from './components/SkillCards'
import data from './data'

export default {
  data: () => {
    return {
      ...data
    }
  },
  components: {
    SkillCards
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
