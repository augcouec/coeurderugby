<template>
  <div class="field-container">
    <label :for="name">{{ label }}</label>
    <textarea :name="name" :placeholder="placeholder" rows="5" />
  </div>
</template>

<script>
export default {
  name: "InputTextarea",
  props: {
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.field-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;

  label {
    margin-bottom: 10px;
    text-transform: uppercase;
  }

  textarea {
    background-color: #f4f4f4;
    border-radius: 12px;
    border: solid 1px transparent;
    padding: 13px 20px;
    color: black;

    &::placeholder {
      font-style: italic;
      color: #939393;
    }
  }
}
</style>
