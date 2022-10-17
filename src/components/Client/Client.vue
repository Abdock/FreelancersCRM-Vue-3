<template>
  <div>
    <UserAccount v-bind:model="model.account" />
  </div>
</template>

<script>
import UserAccount from "@/components/UserAccount/UserAccount";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Client",
  components: {
    UserAccount
  },
  props: {
    model: {
      id: String,
      account: UserAccount
    }
  }
}
</script>

<style scoped>

</style>