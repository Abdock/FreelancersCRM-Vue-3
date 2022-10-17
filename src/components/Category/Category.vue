<template>
  <option class="category" v-bind:value="model.id">
    {{model.name}}
  </option>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Category",
  props: {
    model: {
      id: String,
      name: String
    }
  }
}
</script>

<style scoped>
.category
{
  display: block;
  height: 20px !important;
  font-size: 1em;
  font-family: "Verdana", "Lucida Sans Unicode", "sans-serif";
  border: 1px solid silver;
  background: white;
}

.category:checked
{
  background: silver;
}
</style>