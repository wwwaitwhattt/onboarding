<template>
  <v-container fluid class="fill-height">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Login form</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>

          <v-card-text>
            <v-form
                ref="form"
                v-model="valid"
                validation
            >
              <v-text-field
                  prepend-icon="mdi-account"
                  name="email"
                  label="Email"
                  type="email"
                  v-model="email"
                  :rules="emailRules"
              />
              <v-text-field
                  prepend-icon="mdi-lock"
                  name="password"
                  label="Password"
                  type="password"
                  :counter="8"
                  v-model="password"
                  :rules="passwordRules"
              />
            </v-form>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="primary"
                @click="onSubmit"
                :disabled="!valid"
            >Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/

export default ({
  data() {
    return {
      email: '',
      password: '',
      valid: false,
      emailRules: [
          v => !!v || 'Email is required',
          v => emailRegex.test(v) || 'E-mail must be valid'
      ],
      passwordRules: [
          v => !!v || 'Password is required',
          v => (v && v.length >= 8) || 'Password must be at least 8 characters'
      ]
    }
  },
  methods: {
    onSubmit() {
      if (this.$refs.form.validate()) {
        const user = {
          email: this.email,
          password: this.password,
        }

        console.log(user)
      }
    }
  }
})
</script>

<style scoped>

</style>