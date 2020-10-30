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
          <InputText label="Nom" placeholder="Ex: Duprès" name="lastname" />
          <InputText label="Prénom" placeholder="Ex: Henri" name="firstname" />
          <InputText
            label="Numéro de maillot que vous souhaitez"
            placeholder="Ex: 18"
            name="number"
          />
          <h3>Choisissez votre visuel</h3>
          <p class="italic">Optionnel</p>
          <BaseButton :white="true">Importer une photo</BaseButton>
          <BaseButton>Valider</BaseButton>
        </div>
        <div class="w-50"></div>
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

export default {
  name: "AlbumForm",
  components: {
    BaseHeader,
    BaseFooter,
    InputText,
    BaseButton,
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
}
</style>
