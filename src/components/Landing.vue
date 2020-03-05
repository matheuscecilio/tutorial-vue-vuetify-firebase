<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3 mt-3>
        <h1 class="center">Welcome to Awesome App</h1>

        <blockquote class="blockquote">
          It's a basic Single Page application <br>
          with Google Firebase authentication
        </blockquote>

        <div class="center">
          <v-btn color="primary" to="/signup">Sign Up</v-btn>
          <v-btn to="/signin">Sign In</v-btn>
        </div>

      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
export default {

}
</script>

<style>
</style>