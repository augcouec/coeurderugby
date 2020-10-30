<template>
  <div>
    <BaseHeader />
    <main>
      <section class="hero">
        <div class="social">
          <SocialBar />
        </div>
        <div class="hero-content">
          <h2>Pilier de la Solidarité</h2>
          <p>
            Aider les initiatives solidaires, intensifier le soutien aux
            associations et opérations caritatives.
          </p>
          <img src="../assets/images/Assets_pilier/img_solidaire.png" alt="" />
        </div>
      </section>
      <section class="intro">
        <p>
          Institution reconnue et respectée, l’Union Bordeaux Bègles profite de
          sa médiatisation pour sensibiliser et faire connaitre les actions
          positives issues du milieu associatif. L’UBB a noué de nombreux
          partenariats avec des associations parmi lesquelles :
        </p>
        <div class="logo-asso">
          <img src="../assets/images/Assets_pilier/aladin.png" alt="" />
          <img src="../assets/images/Assets_pilier/BMS.png" alt="" />
          <img src="../assets/images/Assets_pilier/macdo.png" alt="" />
          <img src="../assets/images/Assets_pilier/ovale.png" alt="" />
          <img src="../assets/images/Assets_pilier/mov.png" alt="" />
          <img src="../assets/images/Assets_pilier/DDB.png" alt="" />
          <img src="../assets/images/Assets_pilier/chien.png" alt="" />
          <img src="../assets/images/Assets_pilier/ovale_citoyen.png" alt="" />
          <img src="../assets/images/Assets_pilier/police.png" alt="" />
          <img src="../assets/images/Assets_pilier/you.png" alt="" />
        </div>
      </section>
      <section class="actions">
        <div class="text-area">
          <h2>Rencontre dans les hôpitaux</h2>
          <p>
            L’UBB a noué de nombreux partenariats avec des associations parmi
            lesquelles Drop de Béton, Ovale de l’Espoir, Bordeaux Mécène
            Solidaire, Octobre Rose, Movember, Aladin, Ovale Citoyen, Maison
            Ronald Mc Donald’s, Bleuet de France, Aladin, etc…
          </p>
        </div>
      </section>
      <section class="dons">
        <h2>Je deviens mécène</h2>
        <div class="dons-container">
          <div class="don-unit">
            <img src="../assets/images/Assets_pilier/user.svg" alt="" />
            <span>Je suis</span>
            <h4>un particulier</h4>
            <p>
              Le mécénat particulier permet de bénéficier d’une réduction
              d’impôts de 66% des sommes versées, retenues dans la limite
              annuelle de 20% du revenu imposable.
            </p>
            <router-link class="link" to="/donation"
              >Devenir donateur</router-link
            >
          </div>
          <div class="vl"></div>

          <div class="don-unit">
            <img src="../assets/images/Assets_pilier/bat.svg" alt="" />
            <span>Je suis</span>
            <h4>une entreprise</h4>
            <p>
              Le mécénat entreprise permet de bénéficier d’une réduction
              d’impôts de 60% du montant du don effectué et retenu dans la
              limite de 0,5% du chiffre d’affaire annuel hors taxe.
            </p>
            <router-link class="link secondary-button" to="/mecenat"
              >Contactez-nous</router-link
            >
          </div>
        </div>
      </section>
    </main>
    <BaseFooter />
  </div>
</template>

<script>
import BaseHeader from "@/components/BaseHeader";
import BaseFooter from "@/components/BaseFooter";
import SocialBar from "@/components/SocialBar";

export default {
  name: "ValuesPage",
  components: {
    BaseHeader,
    BaseFooter,
    SocialBar,
  },
};
</script>

<style lang="scss" scoped>
.social {
  align-self: flex-end;
  margin: 0 0 3% 3%;
  position: absolute;
  bottom: 0;
  left: 0;
}
h2 {
  color: #fff;
  margin-bottom: 3%;
  font-family: $font-secondary;
  font-weight: bold;
}
.hero {
  background: url("../assets/images/Fond.jpg");
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
}
.hero-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15%;
}
.hero-content p {
  color: #fff;
  width: 40%;
  text-align: center;
  margin-bottom: 5%;
  line-height: 1.5em;
}
.hero-content img {
  max-width: 65%;
}
.intro {
  padding: 8% 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.intro p {
  font-family: $font-primary;
  color: #707070;
  width: 35%;
  line-height: 2em;
  font-size: 0.8em;
}
.logo-asso {
  display: flex;
  flex-wrap: wrap;
  width: 60%;
  margin: 5%;
}
.logo-asso img {
  width: 10%;
  margin: 5%;
  height: 100%;
}

.actions {
  background: url("../assets/images/Assets_pilier/infirmiere.png");
  background-size: cover;
  width: 100%;
  height: auto;
}
.text-area {
  width: 30%;
  background-color: $color-primary;
  display: flex;
  flex-direction: column;
  padding: 5% 3% 5% 3%;
  margin: 10%;
  transform: translateY(-80px);
}
.text-area p {
  color: #fff;
  line-height: 2em;
  font-size: 0.8em;
  margin-top: 10%;
}
.dons {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.dons h2 {
  color: $color-primary;
  font-family: $font-secondary;
  font-weight: bold;
}
.dons-container {
  display: flex;
  justify-content: center;
}
.don-unit {
  width: 40%;
  padding: 5% 8% 5% 8%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  margin-bottom: 5%;
}
.don-unit img {
  width: 35px;
  height: 35px;
  margin-bottom: 5%;
}
.don-unit span {
  color: #c4c4c4;
  margin: 2% 0 2% 0;
}
.don-unit h4 {
  font-size: 24px;
  margin: 3% 0 3% 0;
}
.don-unit p {
  font-family: $font-primary;
  color: #707070;
  width: 100%;
  line-height: 2em;
  font-size: 0.8em;
  margin-bottom: 10%;
}
.vl {
  border-left: 1px solid #707070;
  height: 80px;
  margin-top: 15%;
}
.secondary-button {
  background-color: #fff;
  border: 2px solid $color-primary;
  color: $color-primary;
}
</style>
