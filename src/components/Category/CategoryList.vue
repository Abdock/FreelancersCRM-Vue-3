<template>
  <select class="categories">
    <Category v-for="model of categories" v-bind:model="model" v-bind:key="model.id"/>
  </select>
</template>

<script>
import Category from "@/components/Category/Category";

export default {
  name: "CategoryList",
  components: {
    Category
  },
  data()
  {
    return{
      categories:[
        Category
      ]
    }
  },
  mounted() {
    fetch('https://localhost:7040/api/Categories')
        .then(response=>response.json())
        .then(json=>this.categories=json);
  }
}
</script>

<style scoped>

</style>