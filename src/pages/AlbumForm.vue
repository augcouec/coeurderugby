<template>
  <div>
    <BaseHeader />
    <main>
      <div class="bg-red"></div>
      <div class="introduction">
        <h1>Laisse ton empreinte</h1>
        <p>
          Afin de vous remercier pour tous vos généreux dons, nous vous
          proposons de rejoindre l’album des supporters UBB. Laissez votre
          trace, que ce soit avec votre photo ou avec un avatar.
        </p>
      </div>
      <div class="form">
        <div v-if="!validated" class="w-50">
          <h2>Avatar personnalisé</h2>
          <p>
            Remplis le formulaire ci-dessous avec tes informations personnelles
            pour créer ton avatar personnalisé et rejoindre notre album !
          </p>
          <InputText
            label="Nom"
            placeholder="Ex: Duprès"
            name="lastname"
            @input="updateLastname"
          />
          <InputText
            label="Prénom"
            placeholder="Ex: Henri"
            name="firstname"
            @input="updateFirstname"
          />
          <InputText
            label="Numéro de maillot que vous souhaitez"
            placeholder="Ex: 18"
            name="number"
            @input="updateNumber"
          />
          <h3>Choisissez votre visuel</h3>
          <p class="italic">Optionnel</p>
          <BaseButton :white="true">Importer une photo</BaseButton>
          <BaseButton
            @click="
              () => {
                validated = true;
              }
            "
          >
            Valider
          </BaseButton>
        </div>
        <div v-else class="w-50 congrats">
          <h2>Bienvenue dans la team UBB !</h2>
          <p>
            Voici ton avatar personnalisé. Tu peux le partager sur les réseaux
            sociaux ou bien le consulter à tout moment sur la page album.
          </p>
          <div class="rs">
            <p class="rs-share">Partage ton pilier</p>
            <div class="svg">
              <svg
                id="Twitter"
                xmlns="http://www.w3.org/2000/svg"
                width="41.801"
                height="41.801"
                viewBox="0 0 41.801 41.801"
              >
                <circle
                  id="Ellipse_6"
                  data-name="Ellipse 6"
                  cx="20.9"
                  cy="20.9"
                  r="20.9"
                  fill="#fff"
                />
                <path
                  id="Icon_awesome-twitter"
                  data-name="Icon awesome-twitter"
                  d="M19.954,4.5c.014.2.014.4.014.593A12.88,12.88,0,0,1,7,18.063a12.881,12.881,0,0,1-7-2.046,9.429,9.429,0,0,0,1.1.056A9.129,9.129,0,0,0,6.76,14.126,4.566,4.566,0,0,1,2.5,10.965a5.748,5.748,0,0,0,.861.071,4.821,4.821,0,0,0,1.2-.155A4.559,4.559,0,0,1,.9,6.407V6.35a4.591,4.591,0,0,0,2.06.579A4.565,4.565,0,0,1,1.552.833a12.956,12.956,0,0,0,9.4,4.77,5.146,5.146,0,0,1-.113-1.044,4.563,4.563,0,0,1,7.889-3.119A8.974,8.974,0,0,0,21.62.339a4.546,4.546,0,0,1-2,2.512,9.138,9.138,0,0,0,2.625-.706A9.8,9.8,0,0,1,19.954,4.5Z"
                  transform="translate(8.79 13.346) rotate(-8)"
                  fill="#5f1332"
                />
              </svg>
            </div>
            <div class="svg">
              <svg
                id="Face"
                xmlns="http://www.w3.org/2000/svg"
                width="41.515"
                height="41.515"
                viewBox="0 0 41.515 41.515"
              >
                <circle
                  id="Ellipse_6"
                  data-name="Ellipse 6"
                  cx="20.757"
                  cy="20.757"
                  r="20.757"
                  fill="#fff"
                />
                <path
                  id="Icon_awesome-facebook-f"
                  data-name="Icon awesome-facebook-f"
                  d="M14.506,14.494l.716-4.663H10.747V6.8a2.332,2.332,0,0,1,2.629-2.519H15.41V.315A24.807,24.807,0,0,0,11.8,0C8.114,0,5.706,2.234,5.706,6.277V9.831h-4.1v4.663h4.1V25.768h5.041V14.494Z"
                  transform="translate(12.247 7.873)"
                  fill="#5f1332"
                />
              </svg>
            </div>
            <div class="svg">
              <svg
                id="Youtube"
                xmlns="http://www.w3.org/2000/svg"
                width="41.515"
                height="41.515"
                viewBox="0 0 41.515 41.515"
              >
                <circle
                  id="Ellipse_6"
                  data-name="Ellipse 6"
                  cx="20.757"
                  cy="20.757"
                  r="20.757"
                  fill="#fff"
                />
                <path
                  id="Icon_awesome-youtube"
                  data-name="Icon awesome-youtube"
                  d="M24.966,7.187a3.069,3.069,0,0,0-2.16-2.174C20.9,4.5,13.263,4.5,13.263,4.5s-7.638,0-9.543.514A3.069,3.069,0,0,0,1.56,7.187,32.2,32.2,0,0,0,1.05,13.1a32.2,32.2,0,0,0,.51,5.917,3.023,3.023,0,0,0,2.16,2.139c1.9.514,9.543.514,9.543.514s7.638,0,9.543-.514a3.023,3.023,0,0,0,2.16-2.139,32.2,32.2,0,0,0,.51-5.917A32.2,32.2,0,0,0,24.966,7.187Zm-14.2,9.549V9.473L17.149,13.1l-6.384,3.632Z"
                  transform="translate(7.575 8.026)"
                  fill="#5f1332"
                />
              </svg>
            </div>
          </div>
        </div>
        <div class="w-50">
          <PaniniCard
            :firstname="firstName"
            :lastname="lastName"
            :number="number"
            :imgSrc="wokiSrc"
          />
        </div>
      </div>
    </main>
    <BaseFooter />
  </div>
</template>

<script>
import BaseHeader from "@/components/BaseHeader";
import BaseFooter from "@/components/BaseFooter";
import InputText from "@/components/InputText";
import BaseButton from "@/components/BaseButton";
import PaniniCard from "@/components/PaniniCard";
import Woki from "@/assets/images/woki.png";

export default {
  name: "AlbumForm",
  components: {
    BaseHeader,
    BaseFooter,
    InputText,
    BaseButton,
    PaniniCard,
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      number: "",
      validated: false,
    };
  },
  computed: {
    wokiSrc() {
      return Woki;
    },
  },
  methods: {
    updateLastname(value) {
      this.lastName = value;
    },
    updateFirstname(value) {
      this.firstName = value;
    },
    updateNumber(value) {
      this.number = value;
    },
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
    font-weight: bold;
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

.form {
  background: white;
  margin-top: -50px;
  padding: 0 20%;
  padding-bottom: 130px;
  display: flex;

  h2 {
    font-family: $font-secondary;
    font-size: 60px;
    color: $color-primary;
    margin-bottom: 40px;
    font-weight: bold;
  }

  p {
    line-height: 35px;
    color: $color-primary;
    padding-bottom: 40px;
  }

  h3 {
    font-display: $font-secondary;
    font-size: 30px;
  }

  .italic {
    font-style: italic;
    color: #939393;
  }

  button {
    width: 100%;
    margin-bottom: 16px;
  }

  .w-50 + .w-50 {
    padding-left: 10%;
  }
}
.congrats {
  h2 {
    font-family: $font-secondary;
    font-size: 60px;
    color: $color-primary;
    margin-bottom: 40px;
  }

  p {
    line-height: 35px;
    color: $color-primary;
    padding-bottom: 40px;
  }

  .rs {
    display: inline-block;
    text-align: center;
    margin-top: 50px;

    p {
      padding-bottom: 0;
    }
  }

  .rs-share {
    color: $color-primary;
  }

  .svg {
    display: inline-block;
    margin: 10px;
    cursor: pointer;

    circle {
      fill: #f4f4f4;
    }
  }
}
</style>
