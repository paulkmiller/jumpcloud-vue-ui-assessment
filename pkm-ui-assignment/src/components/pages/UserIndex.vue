<template>
<div class="container">
    <UserShow />
  </div>
</template>

<script>
import UserShow from './UserShow.vue'
import { APIService } from "../../APIService"

const apiService = new APIService();

export default {
  name: "UserIndex",
  components: {
    UserShow
  },
  methods: {
    getUsers() {
      apiService.getUsers(this)
    }
  },
  mounted() {
    this.getUsers();
  }
}
</script>