<template>
  <v-flex xs12 sm6 offset-sm3>
    <v-card id="message-card">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field v-model="name" :rules="nameRules" :counter="50" label="Your Name" required></v-text-field>
        <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
        <v-text-field
          v-model="subject"
          :rules="subjectRules"
          :counter="150"
          label="Subject"
          required
        ></v-text-field>

        <v-textarea
          v-model="message"
          :rules="messageRules"
          label="Your Message"
          auto-grow
          value
          required
        ></v-textarea>

        <v-alert v-for="error in errors" :key="error"
          :value="hasErrors"
          color="error"
          icon="warning"
          outline
        >
          {{error}}
        </v-alert>

        <v-btn :loading="loading" :disabled="!valid" @click="submit">Submit</v-btn>
        <v-btn @click="clear">Reset</v-btn>
      </v-form>
    </v-card>
  </v-flex>
</template>

<script>
import axios from "axios";
import store from "../store/store";

export default {
  data: () => ({
    loading: false,
    hasErrors: false,
    errors: [],
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 50) || "Name must be less than 50 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ],
    subject: "",
    subjectRules: [
      v => !!v || "Subject is required",
      v => (v && v.length <= 150) || "Name must be less than 150 characters"
    ],
    message: "",
    messageRules: [v => !!v || "Message is required"]
  }),
  created() {
    store.dispatch("setNavTitle", "Send Your Message");
  },
  watch: {
    loading(){

    }
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        // Native form submission is not yet supported
        this.loading = true;
        this.hasErrors = false;
        axios.post("/api/submit", {
          name: this.name,
          email: this.email,
          subject: this.subject,
          text: this.message
        }).then(response => {
          this.loading = false;
          if(response.data.success){
          this.clear();

            this.showAlert('success',response.data.message);
          }else{
            this.showAlert('error',response.data.message);
            this.hasErrors = true;
            this.errors = response.data.errors;

          }
          console.log(response.data)
        });
      }
    },
    clear() {
      this.$refs.form.reset();
      this.loading = false;
    },
    showAlert(type, message){
          this.$swal({
            // position: 'top-end',
            type: type,
            title: message,
            showConfirmButton: false,
            timer: 1800
          })
    }
  }
};
</script>
<style>
#message-card {
  padding: 15px;
  padding-bottom: 50px;
  margin-bottom: 200px;
}
</style>