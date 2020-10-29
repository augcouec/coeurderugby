<template>
  <div>
    <BaseHeader />
    <main>
      <h1>Coeur de rugby</h1>
    </main>
    <BaseFooter />
  </div>
</template>

<script>
import BaseHeader from "@/components/BaseHeader";
import BaseFooter from "@/components/BaseFooter";

export default {
  name: "HomePage",
  components: {
    BaseHeader,
    BaseFooter,
  },
};
</script>
