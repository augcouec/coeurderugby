<template>
  <div>
    <BaseHeader />
    <main>
      <div class="bg-red"></div>
      <div class="introduction">
        <h1>Mécènat Entreprise</h1>
        <p>
          Le mécénat permet de bénéficier d’une réduction d’impôts de 60% du
          montant du don effectué et retenu dans la limite de 0,5% du chiffre
          d’affaire annuel hors taxe, quel que soit le type de mécénat
          (numéraire, compétence, nature). Le coeur de rugby a besoin de vous !
        </p>
      </div>
      <section class="avantage">
        <h2>Les avantages</h2>
        <div class="card-container">
          <div
            v-for="(avantage, index) in avantages"
            :key="index"
            class="avantage-card"
          >
            <span>{{ avantage.title }}</span>
            <p>{{ avantage.message }}</p>
          </div>
        </div>
      </section>
      <section class="formul">
        <h2>Devenir Mécène</h2>
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
              label="Entreprise*"
              placeholder="Ex : Dupond et fils"
              name="company"
            />
            <InputText
              label="Email*"
              placeholder="Ex : jeandupond@gmail.com"
              name="mail"
            />
          </div>
          <InputTextarea label="Votre Message*" name="message" />
        </div>
        <p>*Champs obligatoires</p>
        <router-link class="link" to="/mecenat">Envoyer</router-link>
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

export default {
  name: "MecenatPage",
  components: {
    BaseHeader,
    BaseFooter,
    InputText,
    InputTextarea,
  },
  data() {
    return {
      avantages: [
        {
          title: "Internet",
          message: "Votre présence sur le site internet www.ubbrugby.com",
        },
        { title: "Mag", message: "Le nom de votre entreprise dans le mag UBB" },
        {
          title: "Réductions",
          message: "Des réductions dans nos boutiques officielles",
        },
        { title: "Cocktail", message: "Un cocktail avant-match (1 fois/an)" },
        {
          title: "Sud Ouest",
          message: "Un listing des noms dans le journal Sud Ouest (1 fois/an)",
        },
        { title: "Newsletter", message: "Une newsletter spécial « mécène »" },
      ],
    };
  },
};
</script>

<style lang="scss">
main {
  background-color: #fff;
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
.avantage {
  h2 {
    font-size: 2em;
    color: $color-primary;
    margin-left: 12%;
    margin-bottom: 5%;
    font-weight: bold;

    font-family: $font-secondary;
  }
}

.card-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 80%;
  margin-left: 10%;
  margin-bottom: 10%;
}
.avantage-card {
  width: 31%;
  border-radius: 10px;
  padding: 2%;
  -webkit-box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.05);
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.05);
  margin: 1%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  span {
    font-size: 1.3em;
    margin-bottom: 20px;
  }
  p {
    font-size: 0.8em;
    text-align: center;
    line-height: 1.5em;
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
    font-family: $font-secondary;
    font-weight: bold;
  }
  .link {
    max-width: 25%;
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
