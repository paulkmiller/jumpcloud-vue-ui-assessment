<template v-slot:user.actions="{ user }">
  <!-- this dialog is used for both edit and delete -->
  <div class="text-truncate">
    <v-icon 
        small 
        class="mr-2" 
        @click="showEditDialog(user)" 
        color="primary"
    >
      mdi-pencil
    </v-icon>
    <v-icon 
        small 
        @click="deleteUser(user)" 
        color="red"
    > 
        mdi-delete
    </v-icon>
  </div>
</template>

<script>
import { APIService } from "../../APIService"

const apiService = new APIService();

export default {
  name: "UserEdit",
  props: {
    user: { type: Object },
  },
  methods: {
    showEditDialog(user) {
        this.editedUser = user||{}
        this.dialog = !this.dialog
    },
    deleteUser(){
      apiService.deleteUser(this)
    }
  }
};
</script>