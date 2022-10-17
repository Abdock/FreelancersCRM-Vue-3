<template>
  <div class="ad-item">
    <div class="main-block">
      <span class="ad-title">
        {{model.title}}
      </span>
      <span class="ad-description">
        {{model.description}}
      </span>
    </div>
    <div class="service-info">
      <span class="client-full-name" v-if="model?.client?.account">
        {{model.client.account.name + ' ' + model.client.account.surname}}
      </span>
      <span class="client-contacts" v-if="model?.client?.account">
        {{model.client.account.email + ' ' + model.client.account.phone}}
      </span>
      <span class="category">
        {{model.category.name}}
      </span>
      <span class="price">
        Price: {{model.price}}
      </span>
      <span class="deadline">
        Deadline: {{new Date(model.deadline).toLocaleDateString()}}
      </span>
    </div>
    <div class="necessary-skills">
      <SkillList v-bind:model="model.skills"/>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import Category from "@/components/Category/Category";
import Client from "@/components/Client/Client";
import SkillOption from "@/components/Skill/SkillOption";

export default
{
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Advertisement",
  components: {},
  data()
  {
    return {
      model: {
        id: String,
        title: String,
        description: String,
        price: Number,
        creationDate: Date,
        deadline: Date,
        client: Client,
        category: Category,
        status: String,
        skills: [SkillOption]
      }
    }
  },
  mounted() {
    fetch('https://localhost:7040/api/Advertisements/' + this.$route.params.id)
        .then(response=>response.json())
        .then(json=> this.model = json)
  }
}
</script>

<style scoped>
.ad-item
{
  border: 1px solid #ddd;
  border-radius: 15px;
  width: 80%;
  margin: auto;
  display: grid;
  grid-template-columns: 80% 20%;
  grid-template-rows: 90% 10%;
  padding: 10px;
  min-height: 300px;
}

.main-block
{
  display: grid;
  grid-template-rows: 10% 90%;
  font-family: "Verdana", "sans-serif";
}

.ad-title
{
  font-size: 1.2em;
  margin-top: 15px;
  display: block;
}

.ad-description
{
  display: block;
  margin: 40px 20px 20px 20px;
  font-size: 1em;
  font-family: "Verdana", "sans-serif";
  text-align: left;
}

.service-info
{
  display: grid;
  font-family: "Verdana", "sans-serif";
  font-size: 0.95em;
  grid-template-rows: 20% 20% 20% 20% 20%;
  margin-top: 10px;
  padding: 0 15px;
  max-height: 200px;
}

.price
{
  color: darkgreen;
  font-size: 1.2em;
  display: grid;
  justify-content: center;
  font-family: "Verdana", "sans-serif";
  align-content: center;
}

.deadline
{
  display: grid;
  color: darkred;
  font-size: 1.125em;
  align-content: center;
}

.client-full-name
{
  display: block;
  align-content: center;
  text-align: center;
}

.category
{
  display: grid;
  justify-content: center;
  align-content: center;
}
</style>