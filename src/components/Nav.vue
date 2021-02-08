<template>
  <div id="nav">
    <b-container>
      <b-row>
        <b-col>
          <div class="d-flex align-items-center">
            <h5 class="m-0">Form Builder</h5>
            <p class="m-auto name font-weight-bold">With Vue 2</p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Nav"
};
</script>

<style lang="scss" scoped>
@import "../styles/variables";
#nav {
  background: $meduim-blue;
  padding: 15px;
}
.name {
  width: 200px;
  text-align: right;
}
</style>
