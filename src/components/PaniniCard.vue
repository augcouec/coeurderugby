<template>
  <div>
    <div>{{ person.firstName }} {{ person.lastName }}</div>
  </div>
</template>

<script>
export default {
  name: "PaniniCard",
  props: {
    person: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss"></style>
