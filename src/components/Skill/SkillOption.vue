<template>
  <li class="skill-opt" v-on:click="selectSkill(model)">
    {{model.name}}
  </li>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "SkillOption",
  props: {
    model: {
      id:String,
      name: String
    },
  },
  methods: {
    selectSkill(skill)
    {
      for (const selectedSkill in this.selectedSkills)
      {
        if(selectedSkill.id===skill.id)
        {
          return;
        }
      }
      this.$emit('selectSkill', skill);
    }
  }
}
</script>

<style scoped>
.skill-opt
{
  text-align: center;
  font-family: Verdana Arial sans-serif;
  padding: 10px 15px;
  border: 1px solid silver;
  margin: 5px;
  list-style-type: none;
  border-radius: 10px;
  max-width: 150px;
  display: inline-block;
}
</style>