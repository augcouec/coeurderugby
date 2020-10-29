<template>
  <main>
    <h1>Album donateurs</h1>
    <PaniniCard
      v-for="(person, index) in persons"
      :key="index"
      :person="person"
    />
  </main>
</template>

<script>
import PaniniCard from "@/components/PaniniCard";

export default {
  name: "CarottePage",
  components: {
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
