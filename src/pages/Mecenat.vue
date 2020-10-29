<template>
<main>
 <h1>Mécénat</h1>

 <section >
   <h2>Devenir Mécène</h2>
   <div class="formulaire">
      <div class="aside">
     <h2>Salut les rheys</h2>
     <span>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</span>
   </div>
      <form class="form">

      <div class="field-container"> 
        <label for="name">Nom *</label>
        <input name="name" placeholder="Dupont"></input>
      </div>
      <div class="field-container"> 
        <label for="surname">Prénom*</label>
        <input name="surname" placeholder="Jean"></input>
      </div>
      <div class="field-container"> 
        <label for="company">Nom  de l'entreprise</label>
        <input name="company" placeholder="Jean Dupont SARL"></input>
      </div>
      <div class="field-container"> 
        <label for="mail">Mail *</label>
        <input name="mail" type="mail" placeholder="jeandupont@mail.com"></input>
      </div>
      <div class="field-container"> 
        <label for="phone">Télephone *</label>
        <input name="phone" type="phone" placeholder="+33 6 66 66 66"></input>
      </div>
      <div class="field-container"> 
        <label for="message">Message *</label>
        <input name="message" type="textarea" placeholder="Votre message"></input>
      </div>
         </form>


   </div>
   
  
 </section>

  
</main>
 
</template>

<script>
export default {
  name: "MecenatPage",
};
</script>

<style lang="scss">
h1 {
  font-weight: bold;
  font-size:48px;
  margin: 5%;
}
h2 {
  font-weight: normal;
  margin: 5%;
  font-size:24px;
}
.formulaire{
  display: flex;
  justify-content: center;
}
.aside{
  width: 45%;
  background: url('../assets/images/Fond.jpg');
  background-size: cover;
  color: #FFF;
  margin-right: 5%;
}
.form{
  width: 45%;
}
label{
  margin-bottom: 0.75em;
}
.field-container{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
    margin-bottom: 5%;


}
</style>
