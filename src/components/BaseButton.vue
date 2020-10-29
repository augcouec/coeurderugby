<template>
  <button @click="$emit('click')" :class="white ? 'white' : null">
    <slot />
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    white: {
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  background: $color-primary;
  padding: 12px 80px;
  border: solid 1px $color-primary;
  border-radius: 60px;
  color: white;
  cursor: pointer;
}

.white {
  background-color: white;
  color: $color-primary;
}
</style>
