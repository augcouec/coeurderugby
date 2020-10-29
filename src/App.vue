<template>
  <div>
    <BaseHeader />
    <router-view />
  </div>
</template>

<script>
import BaseHeader from "@/components/BaseHeader";

export default {
  name: "App",
  components: {
    BaseHeader,
  },
};
</script>

<style lang="scss">
@import "@/styles/main.scss";
</style>
