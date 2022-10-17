<template>
  <h1>Freelancers KZ</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid eaque eius esse explicabo facilis iste molestias, nihil tempora vel! Ab accusamus adipisci debitis dignissimos facere neque nesciunt obcaecati repellendus.</p>
  <router-link to="/advertisements">Advertisements</router-link>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  mounted() {
    console.log('hello world');
    console.log(this.$router)
  }
}
</script>

<style scoped>

</style>