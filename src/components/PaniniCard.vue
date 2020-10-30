<template>
  <div class="panini">
    <div class="number">{{ number }}</div>
    <img :src="imgSrc" />
    <div class="name">{{ firstname }} {{ lastname }}</div>
  </div>
</template>

<script>
export default {
  name: "PaniniCard",
  props: {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },
    imgSrc: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.panini {
  border: solid 1px $color-primary;
  border-radius: 16px;
  padding: 20px;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    background-color: #f4f4f4;
  }

  .number {
    position: absolute;
    top: 20px;
    color: $color-primary;
    font-weight: bold;
    font-size: 24px;
    border: solid 1px $color-primary;
    border-radius: 220% / 80px;
    padding: 5px 20px;
    transform: rotate(-20deg);
    min-height: 36px;
    min-width: 68px;
    background-color: white;
  }

  .name {
    background-color: white;
    position: absolute;
    top: 50%;
    transform: translateY(-50%) rotate(-20deg);
    width: 120%;
    color: $color-primary;
    padding: 15px;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    left: -10%;
  }
}
</style>
