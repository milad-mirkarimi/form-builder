<template>
  <div class="control mb-4 position-relative">
    <label v-if="label">{{ label }}</label>
    <textarea
      :value="value"
      @input="updateValue"
      v-bind="$attrs"
      v-on="listeners"
    ></textarea>
  </div>
</template>

<script>
import { formFieldMixin } from "../mixins/formFieldMixin";
export default {
  mixins: [formFieldMixin],
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.updateValue,
      };
    },
  },
};
</script>
