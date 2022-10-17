<template>
  <ul class="skills">
    <Skill v-for="skill in model.skills" v-bind:model="skill" v-bind:key="skill.id" />
  </ul>
</template>

<script>
import Skill from "@/components/Skill/Skill";

export default {
  name: "SkillList",
  components: {},
  props: {
    model: {
      skills: [
        Skill
      ]
    }
  }
}
</script>

<style scoped>

</style>