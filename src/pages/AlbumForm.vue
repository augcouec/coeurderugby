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
        <div class="w-50">
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
          <BaseButton>Valider</BaseButton>
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
  padding: 110px 100px 100px 100px;
  margin: 0 150px;
  background-color: #f4f4f4;
  transform: translateY(-50%);

  h1 {
    font-size: 60px;
    font-family: $font-secondary;
    font-weight: normal;
    text-transform: uppercase;
    color: $color-primary;
  }

  p {
    color: $color-primary;
    width: 50%;
    line-height: 35px;
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
</style>
