<template></template>


<script>
export default {
  created() {
    this.$store.dispatch("destroyToken").then(success => this.$router.push("/"));
  }
};
</script>