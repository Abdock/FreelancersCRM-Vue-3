<template>
  <form class="create-ad-form">
    <div class="main-block">
      <input
          type="text"
          placeholder="Title"
          class="ad-title ad-input"
          v-bind:value="advertisement.title"
          v-on:input="advertisement.title=$event.target.value" />
      <textarea
          class="ad-description ad-input"
          placeholder="Description of your task"
          v-bind:value="advertisement.description"
          v-on:input="advertisement.description = $event.target.value"
      ></textarea>
    </div>
    <div class="service-info">
      <input
          type="number"
          class="ad-price ad-input"
          placeholder="Price"
          v-bind:value="advertisement.price"
          v-on:input="advertisement.price = parseFloat($event.target.value)"
      >
      <CategoryList class="ad-category ad-input" @categoryChanged="categoryChanged"/>
      <input
          type="date"
          class="ad-deadline ad-input"
          v-bind:value="advertisement.deadline.toLocaleString()"
          v-on:input="advertisement.deadline = $event.target.value"
      >
    </div>
    <div class="necessary-skills">
      <SkillSelectList class="ad-skills ad-input" @skillAdded="skillAdded"/>
    </div>
    <button class="submit-ad" v-on:click="createAdvertisement(advertisement)">Create advertisement</button>
  </form>
</template>

<script>
import CategoryList from "@/components/Category/CategoryList";
import SkillSelectList from "@/components/Skill/SkillSelectList";

export default {
  name: "CreateAdvertisement",
  components: {CategoryList, SkillSelectList},
  data(){
    return{
      selectedSkills: [
        {
          id: String,
          name:String
        }
      ],
      advertisement:{
        title:'',
        description:'',
        deadline:(()=>{
          const now = new Date()
          const year = now.getFullYear();
          const month = now.getUTCMonth().toString().length < 2 ? '0' + now.getMonth() : now.getMonth().toString();
          const day = now.getDay().toString().length < 2 ? '0' + now.getDay() : now.getDay().toString();
          return year + '-' + month + '-' + day;
        })(),
        price:0,
        clientId:'51EE0DF2-ADA4-4A98-BA83-1A188A8514B2'.toLowerCase(),
        categoryId:'',
        skills:[
          {
            id:''
          }
        ]
      }
    }
  },
  methods: {
    categoryChanged(categoryId)
    {
      this.advertisement.categoryId=categoryId;
    },
    createAdvertisement(advertisement)
    {
      console.log(advertisement);
      fetch('https://localhost:7040/api/Advertisements', {
        method: 'POST',
        body: JSON.stringify(advertisement),
        headers: {
          'Content-Type': 'application/json'
        }
      })
          .then(response=>response.json())
          .then(json=>console.log(json));
    },
    skillAdded(skills)
    {
      this.advertisement.skills=skills.map(skill=>{
        return {id: skill.id}
      });
      console.log(this.advertisement.skills);
    }
  }
}
</script>

<style scoped>
.create-ad-form
{
  border: 1px solid #ddd;
  border-radius: 15px;
  width: 80%;
  margin: auto;
  display: grid;
  grid-template-columns: 80% 20%;
  grid-template-rows: 65% 35%;
  padding: 10px;
  min-height: 60vh;
}

.main-block
{
  display: grid;
  grid-row: 1;
  grid-column: 1;
  grid-template-rows: 10% 90%;
  font-family: "Verdana", "sans-serif";
}

.ad-title
{
  font-size: 1.2em;
  display: block;
  height: 30px;
  border: none;
  width: 80%;
  margin: 15px auto auto;
  outline: none;
}

.ad-description
{
  display: block;
  margin: 40px 20px 20px 20px;
  font-size: 1em;
  font-family: "Verdana", "sans-serif";
  text-align: left;
  resize: none;
  outline: none;
  border: none;
}

.service-info
{
  display: grid;
  grid-row: 1;
  grid-column: 2;
  font-family: "Verdana", "sans-serif";
  font-size: 0.95em;
  grid-template-rows: 33% 33% 33%;
  margin-top: 10px;
  padding: 0 15px;
  min-height: 150px;
  max-height: 200px;
  align-self: center;
}

.ad-price::-webkit-outer-spin-button,
.ad-price::-webkit-inner-spin-button
{
  -webkit-appearance: none;
  margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}

.ad-price[type=number]
{
  -moz-appearance:textfield; /* Firefox */
}

.ad-price
{
  outline: none;
  font-size: 1.125em;
  margin: 10px auto;
  text-align: center;
  width: 175px;
  border: none;
}

.ad-deadline
{
  margin: 10px auto;
  border: none;
  font-size: 1em;
  text-align: center;
}

.ad-input
{
  display: block;
  font-family: "Verdana", "Lucida Sans Unicode", "sans-serif";
}

.necessary-skills
{
  display: grid;
  grid-row: 2;
  grid-column: 1;
}

.submit-ad
{
  max-width: 400px;
  padding: 15px 20px;
  background: white;
  margin: 20px auto auto;
  border: 1px solid silver;
  border-radius: 20px;
  font-size: 1.125em;
  grid-row: 2;
  grid-column: 2;
  align-self: end;
}
</style>