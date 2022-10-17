<template>
  <option class="skill-opt">
    {{model.name}}
  </option>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "SkillOption",
  props: {
    model: {
      id: String,
      name: String
    }
  }
}
</script>

<style scoped>
.skill-opt
{
  display: inline-block;
  text-align: center;
  font-family: Verdana Arial sans-serif;
  background: none;
  padding: 10px 8px;
  border-bottom: 1px solid black;

}
</style>