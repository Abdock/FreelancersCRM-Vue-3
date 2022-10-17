<template>
  <ul class="short-ad-list">
    <ShortAdvertisement v-for="ad in advertisements" v-bind:model="ad" v-bind:key="ad.id" />
  </ul>
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
  }
}
</script>

<style scoped>
.short-ad-item
{
  display: grid;
}
</style>