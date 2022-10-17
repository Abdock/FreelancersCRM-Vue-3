<template>
  <div class="client">
    <Client v-for="client in clients" v-bind:model="client" v-bind:key="client.id" />
  </div>
</template>

<script>
import Client from "@/components/Client/Client";
import UserAccount from "@/components/UserAccount/UserAccount";
export default {
  name: "ClientList",
  components: {
    Client
  },
  data()
  {
    return {
      clients: [
        {
          id:String,
          account:UserAccount
        }
      ]
    }
  },
  mounted() {
    fetch("https://localhost:7040/api/Clients?PageNumber=1&PageSize=15")
        .then(response=>response.json())
        .then(json=>this.clients = json.collection)
  }
}
</script>

<style scoped>

</style>