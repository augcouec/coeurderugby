<template>
  <div>
    <BaseHeader />
    <main>
      <h1>Album donateurs</h1>
      <PaniniCard
        v-for="(person, index) in persons"
        :key="index"
        :person="person"
      />
    </main>
    <BaseFooter />
  </div>
</template>

<script>
import BaseHeader from "@/components/BaseHeader";
import BaseFooter from "@/components/BaseFooter";

export default {
  name: "DonationPage",
  components: {
    BaseHeader,
    BaseFooter,
  },
};
</script>

<style></style>
