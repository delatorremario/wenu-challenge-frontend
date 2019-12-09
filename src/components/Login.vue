<template>
  <b-container>
    <b-row align-h="center" class="mt-5">
      <b-col cols="5">
        <b-card class="p3">
          <h4 class="mb-4">Iniciar de Sesión</h4>
          <b-alert variant="danger" :show="error">Email o constraseña incorrectos !!!</b-alert>
          <b-form @submit="onSubmit" v-if="show">
            <b-form-group id="input-group-1">
              <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                required
                placeholder="Ingrese su Email"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2">
              <b-form-input
                id="input-2"
                v-model="form.password"
                type="password"
                required
                placeholder="Ingrese su Password"
              ></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">Ingresar</b-button>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>


<script>
export default {
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      show: true,
      error: false
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      // alert(JSON.stringify(this.form));
      this.$store
        .dispatch("LOGIN", {
          email: this.form.email,
          password: this.form.password
        })
        .then(success => this.$router.push("/"))
        .catch(err => (this.error = true));
    }
  }
};
</script>