<template>
  <div>
    <BaseHeader :forceFixed="true" />
    <main>
      <section class="business-form">
        <div class="business-form-right">
          <h2>Je souhaite être contacté</h2>
          <p>
            Nous vous remercions de votre demande de contact. En remplissant ce
            formulaire, nous nous engageons à vous appeler dans un délais de 48
            heures.
          </p>
        </div>
        <div class="formular">
          <InputText
            label="Entreprise*"
            placeholder="Ex : Dupond et fils"
            name="company"
          />
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
              label="Email*"
              placeholder="Ex : jeandupond@gmail.com"
              name="mail"
            />
            <InputText
              label="Telephone*"
              placeholder="Ex : 0758636352"
              name="phone"
            />
          </div>
          <InputTextarea label="Votre Message" name="message" />
          <p>*Champs obligatoires</p>
          <router-link class="link" to="/Business-form">Envoyer</router-link>
        </div>
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
  name: "BusinessPage",
  components: {
    BaseHeader,
    BaseFooter,
    InputText,
    InputTextarea,
  },
};
</script>

<style lang="scss" scoped>
.business-form {
  background-color: #fff;
  margin-top: 120px;
  display: flex;
  justify-content: center;
}
.business-form-right {
  width: 50%;
  background: url("../assets/images/business-form.png");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h2 {
    font-size: 35px;
    color: #fff;
    text-transform: uppercase;
    font-family: $font-secondary;
    font-weight: bold;

    width: 50%;
    line-height: 1.5em;
  }
  p {
    color: #fff;
    line-height: 2em;
    font-size: 0.8em;
    width: 50%;
    margin-top: 5%;
  }
}
.formular {
  width: 50%;
  padding: 5%;
  margin-bottom: 5%;

  .link {
    max-width: 30%;
    margin-top: 3%;
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
