<template>
  <div class="user-account">
    <span class="account-full-name">{{model.name + ' ' + model.surname}}</span>
    <span class="account-contacts">{{model.email + ' ' + model.phone}}</span>
  </div>
</template>

<script>


export default {
  name: "UserAccount",
  props: {
      model: {
        name: String,
        surname: String,
        email: String,
        phone: String
      }
  }
}
</script>

<style scoped>

</style>