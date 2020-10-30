<template>
  <div>
    <BaseHeader />
    <main>
      <div class="bg-red"></div>
      <div class="introduction">
        <h1>Votre Mécènat</h1>
        <p>
          Le mécénat particulier permet de bénéficier d’une réduction d’impôts
          de 66% des sommes versées, retenues dans la limite annuelle de 20% du
          revenu imposable. Le coeur de rugby a besoin de vous !
        </p>
      </div>
      <section class="slider">
        <div class="slider-left">
          <h2>Laissez-votre empreinte</h2>
          <p>
            En devenant mécène, vous avez la possibilité, si vous le souhaitez,
            de laisser votre empreinte au pied du stade Chaban-Delmas.
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
                  >Aider les initiatives solidaires, intensifier le soutien aux
                  associations et opérations caritatives</span
                >
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="card bg-3">
                <h4>Rugby amateur</h4>
                <span
                  >Aider les initiatives solidaires, intensifier le soutien aux
                  associations et opérations caritatives</span
                >
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="card bg-4">
                <h4>Eco-Responsable</h4>
                <span
                  >Aider les initiatives solidaires, intensifier le soutien aux
                  associations et opérations caritatives</span
                >
              </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
      </section>
      <section class="formul">
        <h2>Devenir Mécène avec Allo Asso</h2>
        <div class="formul-container">
          <div class="double">
            <InputText label="Nom*" placeholder="Ex : Dupond" name="lastname" />
            <InputText
              label="Prénom*"
              placeholder="Ex : Jean"
              name="firstname"
            />
          </div>
          <div class="double">
            <InputText
              label="Date de naissance*"
              placeholder="Ex : 24/11/1978"
              name="company"
            />
            <InputText
              label="Email*"
              placeholder="Ex : jeandupond@gmail.com"
              name="mail"
            />
          </div>
          <div class="double">
            <InputText
              label="Adresse*"
              placeholder="Ex : 10 cours de lagune"
              name="company"
            />
            <InputText label="Ville*" placeholder="Ex : Bordeaux" name="mail" />
          </div>
          <InputText
            label="Montant Libre*"
            placeholder="Ex : 10€"
            name="lastname"
          />
        </div>
        <p>*Champs obligatoires</p>
        <router-link class="link" to="/album/nouveau"
          >Valider et payer</router-link
        >
      </section>
    </main>
    <BaseFooter />
  </div>
</template>

<script>
import BaseHeader from "@/components/BaseHeader";
import BaseFooter from "@/components/BaseFooter";
import InputText from "@/components/InputText";
import InputTextarea from "@/components/InputTextarea";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";

export default {
  name: "DonationPage",
  components: {
    BaseHeader,
    BaseFooter,
    Swiper,
    SwiperSlide,
    InputText,
    InputTextarea,
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
main {
  background: white;
}
.bg-red {
  background-color: $color-primary;
  height: 500px;
}

.introduction {
  padding: 8%;
  margin: 0 150px;
  background: url("../assets/images/image 15.png");
  background-size: cover;
  transform: translateY(-50%);

  h1 {
    font-size: 44px;
    font-family: $font-secondary;
    font-weight: normal;
    text-transform: uppercase;
    color: $color-primary;
  }

  p {
    color: $color-primary;
    width: 50%;
    line-height: 35px;
    font-size: 0.8em;
    margin-top: 5%;
  }
}
.slider {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
}
.slider-left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  padding: 10%;
  h2 {
    color: $color-primary;
  }
  p {
    line-height: 2em;
    font-size: 0.8em;
    color: $color-primary;
    margin-top: 10%;
  }
}
.slider-right {
  width: 55%;
}
.bg-1 {
  background: url("../assets/images/image 17.png");
}
.bg-2 {
  background: url("../assets/images/image 18.png");
}
.bg-3 {
  background: url("../assets/images/image 17.png");
}
.bg-4 {
  background: url("../assets/images/image 18.png");
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
.formul {
  width: 78%;
  margin-left: 11%;
  padding-bottom: 5%;

  h2 {
    font-size: 2em;
    color: $color-primary;
    margin-bottom: 5%;
  }
  .link {
    max-width: 45%;
    margin-top: 3%;
    margin-bottom: 5%;
  }
}
.double {
  width: 100%;
  display: flex;
  justify-content: space-between;
  .field-container {
    width: 45%;
  }
}
</style>
