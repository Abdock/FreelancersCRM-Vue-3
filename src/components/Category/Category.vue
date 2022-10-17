<template>
  <option class="category">
    {{category.name}}
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

</style>