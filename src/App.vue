<template>
  <div>
    <BaseHeader />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import BaseHeader from "@/components/BaseHeader";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: {
    BaseHeader,
    Footer,
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: "Gotham";
  src: url("./assets/fonts/GothamBook.ttf");
  font-weight: normal;
}

@font-face {
  font-family: "Gotham";
  src: url("./assets/fonts/Gotham-Black.otf");
  font-weight: bold;
}

@font-face {
  font-family: "Poppins";
  src: url("./assets/fonts/Poppins-Regular.ttf");
  font-weight: normal;
}

@font-face {
  font-family: "Poppins";
  src: url("./assets/fonts/Poppins-Bold.ttf");
  font-weight: bold;
}

@import "@/styles/main.scss";
</style>
