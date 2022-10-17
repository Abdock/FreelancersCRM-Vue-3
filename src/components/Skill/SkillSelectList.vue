<template>
  <div class="skill-select-block">
    <input type="text" class="skill-search" placeholder="Skill name" v-on:input="searchSkill">
    <ul class="skill-selector">
      <SkillOption v-for="skill in skills" v-bind:model="skill" v-bind:key="skill.id" @selectSkill="addSkillToList"/>
    </ul>
  </div>
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
      allSkills: [
        {
          id:String,
          name:String
        }
      ],
      skills: [
        {
          id:String,
          name:String
        }
      ],
      selectedSkills: [
        {
          id:String,
          name:String
        }
      ]
    }
  },
  mounted() {
    this.skills = [];
    this.selectedSkills = [];
    this.allSkills = [];
    fetch("https://localhost:7040/api/Skills")
        .then(response=>response.json())
        .then(json=>{
          this.allSkills=json;
          this.skills = this.allSkills;
        });
  },
  methods:{
    searchSkill(e)
    {
      const text = e.target.value.trim();
      this.skills = this.allSkills.filter(s=>s.name.includes(text))
    },
    addSkillToList(skill)
    {
      this.selectedSkills.push(skill);
      this.skills = this.allSkills.filter(s=>this.selectedSkills.every(sk=>sk.id!==s.id));
      this.$emit('skillAdded', this.selectedSkills)
    }
  }
}
</script>

<style scoped>
.skill-selector
{
  padding: 7px 10px;
  text-align: center;
  font-family: Verdana Arial sans-serif;
  font-size: 1.2em;
  max-height: 200px;
  overflow-y: auto;
}

.skill-search
{
  border: 1px solid silver;
  height: 40px;
  display: block;
  margin: 10px auto auto;
  width: 40%;
  border-radius: 10px;
  text-align: center;
  font-size: 1.125em;
  font-family: "Verdana", "Lucida Sans Unicode", "sans-serif";
  outline: none;
  max-width: 500px;
}
</style>