<template>
    <!-- this dialog is used for both create and update -->
    <v-dialog v-model="dialog" max-width="500px">
        <template v-slot:activator="{ on }">
        <div class="d-flex">
            <v-btn color="primary" dark class="ml-auto ma-3" v-on="on">
                New 
            </v-btn>
        </div>
        </template>
        <v-card>
        <v-card-title>
            <span v-if="editedUser.id">Edit {{editedUser.id}}</span>
            <span v-else>Create</span>
        </v-card-title>
        <v-card-text>
            <v-row>
                <v-col cols="12" sm="4">
                <v-text-field v-model="editedUser.displayname" label="Username"></v-text-field>
                </v-col>
                <v-col cols="12" sm="8">
                <v-text-field v-model="editedUser.description" label="Description"></v-text-field>
                </v-col>
                <v-col cols="12" sm="12">
                <v-text-field v-model="editedUser.email" label="Email"></v-text-field>
                </v-col>
            </v-row>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue" text @click="showEditDialog()">Cancel</v-btn>
            <v-btn color="blue" text @click="saveUser(editedUser)">Save</v-btn>
        </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import { APIService } from "../../APIService"

const apiService = new APIService();

export default {
  name: 'UserSave',
  props: {
      user: { type: Object }
  },
  data: function(){
    return { 
      dialog: false,
      editedUser: {}
    }
  },
  methods: {
    showEditDialog(user) {
        this.editedUser = user||{}
        this.dialog = !this.dialog
    },
    saveUser(editedUser){
      apiService.saveUser(editedUser)
    }
  }
}
</script>