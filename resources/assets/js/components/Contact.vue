<template>
  <v-flex xs12 sm6 offset-sm3>
    <v-card id="message-card">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field v-model="name" :rules="nameRules" :counter="20" label="Your Name" required></v-text-field>
        <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
        <v-text-field
          v-model="subject"
          :rules="subjectRules"
          :counter="50"
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

        <v-btn :disabled="!valid" @click="submit">submit</v-btn>
        <v-btn @click="clear">clear</v-btn>
        <v-btn @click="alert">alert</v-btn>
      </v-form>
    </v-card>
  </v-flex>
</template>

<script>
import axios from "axios";
import store from "../store/store";
export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ],
    subject: "",
    subjectRules: [
      v => !!v || "Subject is required",
      v => (v && v.length <= 50) || "Name must be less than 50 characters"
    ],
    message: "",
    messageRules: [v => !!v || "Message is required"]
  }),
  created() {
    store.dispatch("setNavTitle", "Send Your Message");
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        // Native form submission is not yet supported

        store.dispatch("sendMessage", {
                name: this.name,
                email: this.email,
                subject: this.subject,
                message: this.message
        } );
        // return new Promise((resolve, reject) => {
        //         axios.post("/api/submit", {
        //             name: this.name,
        //             email: this.email,
        //             subject: this.subject,
        //             message: this.message
        //           }).then((response) => {
        //             console.log(response.data.success);
        //             if(response.data.success){
        //               this.alert();
        //               console.log("OK...: "+response.data.success);
        //             }else{
        //               console.log("fail: "+response.data.success);

        //             }
                  
        //             resolve(response); // Let the calling function know that http is done. You may send some data back
        //         }, error => {
        //             // http failed, let the calling function know that action did not work out
        //             reject(error);
        //         })
        //     });






        // axios.post("/api/submit", {
        //   name: this.name,
        //   email: this.email,
        //   subject: this.subject,
        //   message: this.message
        // }).then((response) => {
        //   console.log(response.data.success);
        // });
      }
    },
    clear() {
      this.$refs.form.reset();
    },
    alert(){
      this.$swal({
          type: 'success',
          title: 'The Message has been sent',
          showConfirmButton: false,
          timer: 1700
        });
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