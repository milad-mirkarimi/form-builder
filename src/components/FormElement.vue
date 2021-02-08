<template>
  <div>
    <button class="btn btn-primary">{{ elementText }}</button>
  </div>
</template>

<script>
export default {
  name: "FormElement",
  props: {
    elementText: {
      required: true,
      type: String
    },
    elementType: {
      required: true,
      type: String
    }
  }
};
</script>

<style lang="scss" scoped></style>
