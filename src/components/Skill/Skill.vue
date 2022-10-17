<template>
  <li class="skill">
    {{model.name}}
  </li>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Skill",
  props: {
    model: {
      id: String,
      name: String
    }
  }
}
</script>

<style scoped>
.skill
{
  font-size: 1.0875em;
  font-family: "Verdana", "sans-serif";
}
</style>