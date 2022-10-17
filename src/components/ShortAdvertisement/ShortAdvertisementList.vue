<template>
  <ul class="short-ad-list">
    <ShortAdvertisement v-for="ad in advertisements" v-bind:model="ad" v-bind:key="ad.id" />
  </ul>
  <button class="add-advertisement" v-on:click="createAdvertisement">Add new advertisement</button>
</template>

<script>

import Client from "@/components/Client/Client";
import Category from "@/components/Category/Category";
import ShortAdvertisement from "@/components/ShortAdvertisement/ShortAdvertisement";

export default {
  name: "ShortAdvertisementList",
  components: {
    ShortAdvertisement
  },
  data(){
    return {
      advertisements: [
        {
          id:String,
          title:String,
          price:Number,
          deadline:Date,
          client: Client,
          category: Category,
          status: String
        }
      ]
    }
  },
  mounted() {
    fetch('https://localhost:7040/api/Advertisements?PageNumber=1&PageSize=20')
        .then(response=>response.json())
        .then(json=>this.advertisements=json.collection);
  },
  methods: {
    createAdvertisement()
    {
      const request = {name: 'create-advertisement'};
      this.$router.push(request);
    }
  }
}
</script>

<style scoped>
.short-ad-list
{
  list-style-type: none;
}

.add-advertisement
{
  padding: 20px 30px;
  font-family: "Verdana", "sans-serif";
  font-size: 1.2em;
  background: white;
  border: 1px solid silver;
  border-radius: 25px;
}
</style>