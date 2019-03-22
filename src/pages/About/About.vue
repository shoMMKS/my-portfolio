<template>
  <div class="hello">
    <h1>About</h1>
    <h2>Profile</h2>
    <div class="profile-area">
      <p>玉村 庄汰 Tamamura Shota</p>
      <p>京都産業大学 2020年卒業予定</p>
      <p>システムエンジニア 1997年生まれ</p>
      <p>
        大学でwebサービスの開発について学び<br>
        3社で実際にプロジェクトに参加しwebサイトやwebサービスの開発に携わらせていただきました。<br>
        人々の役に立つwebサービスを開発することを目標に日々努力しています。
      </p>
    </div>
    <h2>Data</h2>
    <div class="data-area">
      <div class="flex">
        <p class="flex-left">所在地</p>
        <p class="flex-right">大阪府南河内郡河南町</p>
      </div>
      <div class="flex">
        <p class="flex-left">活動分野</p>
        <p class="flex-right">webサービス開発 / iOS,Andriodアプリ開発</p>
      </div>
      <div class="flex">
        <p class="flex-left">趣味</p>
        <p class="flex-right">スポーツ観戦、ドラマ鑑賞</p>
      </div>
      <div class="flex">
        <p class="flex-left">E-mail</p>
        <p class="flex-right">kananjhs3617sho@gmail.com</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js About'
    }
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
.flex {
  max-width: 800px;
  margin: 0px auto;
  display: flex;
  border-bottom: 1px solid #000;
}
.flex:last-of-type {
  border-bottom: none;
}
.flex-left {
  width: 30%
}
.profile-area {
  background-color: #fff;
  max-width: 800px;
  margin: 0px auto;
  padding: 10px;
  color: #000;
}
.data-area {
  background-color: #fff;
  max-width: 800px;
  margin: 0px auto;
  color: #000;
}
.hello {
  padding-bottom: 30px;
}
</style>
