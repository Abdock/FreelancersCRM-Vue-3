<template>
  <select class="categories" v-on:change="changeCategory">
    <option selected>Select category</option>
    <Category v-for="category of categories" v-bind:model="category" v-bind:key="category.id"/>
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
  },
  methods: {
    changeCategory(e)
    {
      const select = e.target;
      this.$emit('categoryChanged', select.options[select.selectedIndex].value);
    }
  }
}
</script>

<style scoped>
.categories
{
  border: 1px solid silver;
  border-radius: 10px;
  padding: 10px 15px;
  appearance: none;
  margin: auto;
  outline: none;
}
</style>