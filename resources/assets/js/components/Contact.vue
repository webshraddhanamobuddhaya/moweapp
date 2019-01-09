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

        <v-btn :loading="loading" :disabled="!valid" @click="submit">submit</v-btn>
        <v-btn @click="clear">clear</v-btn>
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
        axios.post("/api/submit", {
          name: this.name,
          email: this.email,
          subject: this.subject,
          text: this.message
        }).then(response => {
          this.clear();
          this.loading = false;
          this.showAlert();
          console.log(response)
        });
      }
    },
    clear() {
      this.$refs.form.reset();
    },
    showAlert(){
          Swal({
            // position: 'top-end',
            type: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
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