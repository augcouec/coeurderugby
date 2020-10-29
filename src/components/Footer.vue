<template>
  <main>
    <div class="img-left">
      <img src="../assets/images/logo.svg" alt="" />
    </div>
    <ul class="liste-nav">
      <li><a href="">Accueil</a></li>
      <li><a href="">Piliers</a></li>
      <li><a href="">Cookies</a></li>
      <li><a href="">Don</a></li>
      <li><a href="">Jeu</a></li>
      <li><a href="">Politique de confidentialitée</a></li>
    </ul>
    <div class="aside-right">
      <SocialBar color="#691C33" />
      <div class="newsletter">
        <input type="search" class="search" placeholder="Adresse e-mail" />
        <button class="newsletter-valid">Valider</button>
      </div>
    </div>
  </main>
</template>

<script>
import SocialBar from "./SocialBar";
export default {
  name: "Footer",
  components: {
    SocialBar,
  },
};
</script>

<style lang="scss" scoped>
main {
  background-color: #f4f4f4;
  display: flex;
  padding: 5%;
}
.img-left {
  width: 20%;
  display: flex;
  justify-content: center;
  align-content: center;
}
.img-left img {
  max-width: 200px;
}
.liste-nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  width: 50%;
}
li {
  width: 20%;
  margin: 3% !important;
}
a {
  text-decoration: none;
  color: $color-primary;
}
.aside-right {
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
}
.newsletter {
  display: flex;
  justify-content: center;
  margin: 5%;
  width: 100%;
}
.search {
  width: 90%;
  border-radius: 100px 0 0 100px;
  border: 1px solid $color-primary;
  padding: 5px;
}
.search::placeholder {
  color: $color-primary;
  font-size: 1.2em;
  padding: 5%;
  font-family: $font-primary;
}
.newsletter-valid {
  background-color: $color-primary;
  color: #fff;
  border-radius: 0 100px 100px 0;
  border: none;
  padding: 3% 5% 3% 5%;
  font-family: $font-primary;
}
</style>
