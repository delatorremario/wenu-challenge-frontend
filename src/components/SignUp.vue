<template>
  <b-container>
    <b-row align-h="center" class="mt-5">
      <b-col cols="5">
        <b-card class="p3">
          <h4 class="mb-4">Registrar</h4>
          <b-alert variant="danger" :show="error">{{errorMsg}}</b-alert>
          <b-form @submit="onSubmit" v-if="show">
            <b-form-group id="input-group-0">
              <b-form-input
                id="input-0"
                v-model="form.name"
                type="text"
                required
                placeholder="Ingrese su Nombre"
              ></b-form-input>
            </b-form-group>
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
                placeholder="Ingrese su Contraseña"
              ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-2">
              <b-form-input
                id="input-2"
                v-model="form.confirm_password"
                type="password"
                required
                placeholder="Repita su Contraseña"
              ></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">Registrarse</b-button>
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
        name: "",
        email: "",
        password: "",
        confirm_password: ""
      },
      error: false,
      show: true,
      errorMsg: ""
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      if (this.valid()) {
        this.$store
          .dispatch("REGISTER", {
            name: this.form.name,
            email: this.form.email,
            password: this.form.password
          })
          .then(success => {
            this.$router.push("/login");
          })
          .catch(err => {
            this.error = true;
            this.errorMsg = err.message;
          });
      }
    },
    valid() {
      return this.form.password === this.form.confirm_password;
    }
  }
};
</script>