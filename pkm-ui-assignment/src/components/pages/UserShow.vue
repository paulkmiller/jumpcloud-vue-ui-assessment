<template>
  <v-main class="container align-center px-1">
    <h2 class="font-weight-light mb-2">Admin UI</h2>
    <v-card>
      <v-data-table 
        :headers="headers" 
        :items="users"
        mobile-breakpoint="800"
        class="elevation-0"> 
        
      <UserEdit />
      </v-data-table>
      <UserSave />
    </v-card>
  </v-main>
</template>

<script>
import { APIService } from "../../APIService"
import UserEdit from './UserEdit.vue'
import UserSave from './UserSave.vue'

const apiService = new APIService();

export default {
  name: 'UserShow',
  props: {
      user: { type: Object }
  },
  components: {
    UserEdit,
    UserSave
  },
   data: function(){
    return { 
      headers: [
          { text: 'Id', value: 'id' },
          { text: 'Name', value: 'name' },
          { text: 'Description', value: 'description', sortable: false, width:"100" },
          { text: 'Email', value: 'email', name:'email', width:"180" },
          { text: 'Action', value: 'actions', sortable: false },
      ],
      users: [],
      dialog: false,
      editedUser: {},
    }
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      apiService.getUsers(this)
    }
  }
}
</script>