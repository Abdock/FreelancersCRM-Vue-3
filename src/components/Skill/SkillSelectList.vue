<template>
  <select class="skill-selector">
    <SkillOption v-for="skill in skills" v-bind:model="skill" v-bind:key="skill.id" />
  </select>
</template>

<script>
import SkillOption from "@/components/Skill/SkillOption";

export default {
  name: "SkillSelectList",
  components: {
    SkillOption
  },
  data() {
    return {
      skills: [
        {
          id:String,
          name:String
        }
      ]
    }
  },
  mounted() {
    fetch("https://localhost:7040/api/Skills")
        .then(response=>response.json())
        .then(json=>this.skills=json);
  }
}
</script>

<style scoped>
.skill-selector
{
  padding: 7px 10px;
  text-align: center;
  border: 1px solid #2c3e50;
  outline: none;
  font-family: Verdana Arial sans-serif;
  font-size: 1.2em;
}
</style>