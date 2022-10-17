<template>
  <header>
    <ul class="main-menu">
      <li class="main-menu-item">
        <router-link to="/">
          Home
        </router-link>
      </li>
      <li class="main-menu-item">
        <router-link to="/advertisements">
          Advertisements
        </router-link>
      </li>
      <li class="main-menu-item">
        <router-link to="/freelancers">
          Freelancers
        </router-link>
      </li>
      <li class="main-menu-item">
        <router-link to="/about">
          About
        </router-link>
      </li>
      <li class="main-menu-item">
        <router-link to="/Account">
          Account
        </router-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Menu"
}
</script>

<style scoped>

</style>