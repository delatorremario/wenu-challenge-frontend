<template>
  <b-container class="mt-5">
    <h4>Personajes</h4>
    <div class="overflow-auto">
      <b-table id="my-table" :items="characters.results" :fields="fields" small></b-table>
    </div>
  </b-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  mounted() {
    this.$store.dispatch("loadCharacters");
  },
  computed: {
    ...mapState(["characters"])
  },
  data() {
    return {
      fields: ["id", "name", "status", "species", "type", "gender"]
    };
  }
};
</script>