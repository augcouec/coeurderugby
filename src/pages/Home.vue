<template>
  <div>
    <BaseHeader />
    <main>
      <section class="hero">
        <div class="social">
          <SocialBar />
        </div>
        <h1 class="title">
          Engagez-vous à nos côtés
        </h1>
        <h1 class="subtitle">Engagez-vous à nos côtés</h1>
        <hr />
      </section>
      <section class="emsemble">
        <div class="emsemble_title">
          <h2>Ensemble, répondons aux défis de notre société</h2>
        </div>
        <div class="emsemble_text">
          <p>
            La réussite populaire de l’Union Bordeaux Bègles appartient à tous
            les Girondins. C’est une fierté, c’est aussi une responsabilité qui
            nous confère un rôle social et une mission : faire rayonner les
            valeurs fortes du rugby auprès de tous, et en particulier auprès des
            jeunes, qui sont au coeur de notre projet. En créant Coeur de Rugby,
            nous renforçons notre engagement vis à vis de notre jeunesse et des
            actions solidaires.
          </p>
        </div>
      </section>
      <section class="slider">
        <div class="slider-left">
          <h2>Nos terrains de jeu</h2>
          <p>
            Coeur de Rugby joue sur tous les terrains. Nous apportons notre aide
            autour de 4 piliers fondamentaux. La solidarité, l’éducation, le
            rugby amateur et l’éco-responsabilité.
          </p>
        </div>
        <div class="slider-right">
          <swiper class="swiper " :options="swiperOption">
            <swiper-slide>
              <div class="card bg-1">
                <h4>Solidarité</h4>
                <span
                  >Aider les initiatives solidaires, intensifier le soutien aux
                  associations et opérations caritatives</span
                >
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="card bg-2">
                <h4>Education & Citoyenneté</h4>
                <span
                  >Porter et transmettre les valeurs du rugby, éveiller,
                  sensibiliser les jeunes</span
                >
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="card bg-3">
                <h4>Rugby amateur</h4>
                <span
                  >Soutenir la formation du rugby, échanger, rencontrer, faire
                  briller le regard des enfants…</span
                >
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="card bg-4">
                <h4>Eco-Responsable</h4>
                <span
                  >Rendre encore plus responsable notre organisation et
                  sensibiliser notre public et notre réseau.</span
                >
              </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
      </section>
      <section class="print">
        <div class="print-left">
          <h2>Laissez votre empreinte !</h2>
          <p>
            Figurez dans l’album de la famille UBB, vous aussi vous faite partie
            de l’équipe !
          </p>
          <router-link class="link" to="/donation"
            >Devenir donateur</router-link
          >
        </div>
        <img src="../assets/images/test-panini-2.png" alt="" />
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
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";

export default {
  name: "HomePage",
  components: {
    BaseHeader,
    BaseFooter,
    SocialBar,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 2,
        spaceBetween: 20,
        freeMode: true,
        height: 300,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
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
.hero {
  background: url("../assets/images/fond_home.png");
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .title {
    font-family: $font-secondary;
    text-transform: uppercase;
    font-size: 80px;
    transform: rotate(-8deg);
    color: transparent;
    -webkit-text-stroke: 2px white;
    opacity: 0.3;
  }

  .subtitle {
    font-family: $font-secondary;
    text-transform: uppercase;
    font-size: 80px;
    transform: rotate(-8deg) translateY(-150%);
    color: white;
  }
  hr {
    transform: rotate(-10deg);
    width: 300px;
    border: 3px solid #fff;
    border-radius: 10px;
  }
}
.emsemble {
  background: url("../assets/images/fond_home_section_1.png");
  background-size: cover;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.emsemble_title {
  width: 50%;
  padding: 10%;
  h2 {
    font-size: 40px;
    line-height: 1.5em;
    color: $color-primary;
    font-weight: bold;

    font-family: $font-secondary;
  }
}
.emsemble_text {
  width: 50%;
  padding: 10%;
  p {
    font-family: $font-primary;
    color: #707070;
    line-height: 2em;
    font-size: 0.8em;
  }
}
.slider {
  display: flex;
  justify-content: center;
  align-items: center;
  background: $color-primary;
}
.slider-left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
  padding: 10%;
  h2 {
    color: #fff;
    font-family: $font-secondary;
    font-weight: bold;
  }
  p {
    line-height: 2em;
    font-size: 0.8em;
    color: #fff;
    margin-top: 10%;
  }
}
.slider-right {
  width: 65%;
}
.bg-1 {
  background: url("../assets/images/slide1.png");
}
.bg-2 {
  background: url("../assets/images/slide2.png");
}
.bg-3 {
  background: url("../assets/images/slide3.png");
}
.bg-4 {
  background: url("../assets/images/slide4.png");
}
.card {
  background-size: cover;
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  h4 {
    margin-top: 60%;
    color: #fff;
    font-family: $font-primary;
    font-size: 24px;
    margin: 20vh 10% 0 5%;
  }
  span {
    color: #fff;
    line-height: 2em;
    font-size: 0.8em;
    margin: 5%;
  }
}
.print {
  display: flex;
  padding: 0 0 0 10%;
  img {
    max-width: 80%;
    margin-left: 10%;
  }
}
.print-left {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 30%;
  h2 {
    color: $color-primary;
    margin-bottom: 10%;
    font-family: $font-secondary;
    font-weight: bold;
  }
  p {
    color: $color-primary;
    line-height: 2em;
    font-size: 0.8em;
    margin-bottom: 10%;
  }
  .link {
    width: 95%;
  }
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
