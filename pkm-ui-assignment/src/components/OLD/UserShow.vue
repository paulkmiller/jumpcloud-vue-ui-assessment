<template>
  <section>
    <h1>getUsers()</h1>
    <div class="container">
      <div v-for="user in users" v-bind:key="user.id" >
        <UserShow v-bind:user="user"/>
      </div>
    </div>
  </section>
</template>