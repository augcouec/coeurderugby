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
import PaniniCard from "@/components/PaniniCard";

export default {
  name: "CarottePage",
  components: {
    BaseHeader,
    BaseFooter,
    PaniniCard,
  },
  data() {
    return {
      persons: [
        { firstName: "John", lastName: "Doe" },
        { firstName: "Jane", lastName: "Doe" },
        { firstName: "Jack", lastName: "Doe" },
      ],
    };
  },
};
</script>

<style></style>
