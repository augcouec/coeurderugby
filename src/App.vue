<template>
  <div>
    <BaseHeader />
    <router-view />
    <SocialBar />
  </div>
</template>

<script>
import BaseHeader from "@/components/BaseHeader";
import SocialBar from "@/components/SocialBar";

export default {
  name: "App",
  components: {
    BaseHeader,
    SocialBar,
  },
};
</script>

<style lang="scss">
@import "@/styles/main.scss";
</style>
