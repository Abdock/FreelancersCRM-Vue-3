<template>
  <li class="short-ad-item" v-on:click="getFullInformation(model.id)">
    <div class="short-ad-top">
      <span class="short-ad-title">
        {{model.title}}
      </span>
      <span class="short-ad-category">
        {{model.category.name}}
      </span>
    </div>
    <div class="short-ad-bottom">
      <span class="short-ad-price">
        Price: {{model.price}}
      </span>
      <span class="short-ad-deadline">
        Deadline: {{new Date(model.deadline).toLocaleDateString()}}
      </span>
      <span class="short-ad-client" v-if="model?.client?.account?.email">
        {{model.client.account.email}}
      </span>
      <SkillList v-bind:model="model.skills" />
    </div>
  </li>
</template>

<script>
import Category from "@/components/Category/Category";
import Client from "@/components/Client/Client";
import Advertisement from "@/components/Advertisement/Advertisement";

export default {
  name: "ShortAdvertisement",
  components: [
      Advertisement
  ],
  props: {
    model: {
      id: String,
      title: String,
      price: Number,
      deadline: Date,
      client: Client,
      category: Category,
      status: String
    }
  },
  methods:{
    getFullInformation(id)
    {
      const request = {
        name: 'advertisement',
        params: {id}
      };
      this.$router.push(request);
    }
  }
}
</script>

<style scoped>
.short-ad-item
{
  margin: 10px auto auto;
  display: grid;
  grid-template-rows: 40% 60%;
  padding: 15px;
  height: 150px;
  max-width: 70%;
  border: 1px solid silver;
  border-radius: 20px;
}

.short-ad-top
{
  display: grid;
  grid-template-columns: 65% 35%;
}

.short-ad-bottom
{
  display: grid;
  grid-template-columns: 33% 33% 33%;
  justify-content: center;
  align-content: center;
}

.short-ad-title
{
  font-size: 2em;
  justify-content: center;
}

.short-ad-price
{
  color: darkgreen;
  font-size: 1.5em;
  display: grid;
  justify-content: center;
  font-family: "Verdana", "sans-serif";
}

.short-ad-deadline
{
  color: darkred;
  font-size: 1.5em;
}

.short-ad-category
{
  font-size: 1.5em;
  align-content: center;
}

.short-ad-client
{
  font-size: 1.35em;
  align-content: center;
}
</style>