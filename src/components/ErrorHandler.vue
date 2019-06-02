<template>
  <v-flex xs12>
    <div class="red--text error">
      <h1 class>Sorry, Something goes Wrong! 🙄</h1>
      <h2 class>{{message}}</h2>
    </div>
  </v-flex>
</template>

<script>
export default {
  name: "ErrorHandler",
  props: {
    message: String
  }
};
</script>

<style lang="scss" scoped>
.error {
  text-align: center;
}
</style>