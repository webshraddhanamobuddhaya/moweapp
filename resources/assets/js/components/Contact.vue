<template>
    <v-flex xs12 sm6 offset-sm3>
        <v-card id="message-card">
            <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
                v-model="name"
                :rules="nameRules"
                :counter="10"
                label="Your Name"
                required
            ></v-text-field>
            <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
            ></v-text-field>
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
                value=""
                required
            ></v-textarea>


            <v-btn
                :disabled="!valid"
                @click="submit"
            >
                submit
            </v-btn>
            <v-btn @click="clear">clear</v-btn>
            </v-form>
        </v-card>
    </v-flex>
</template>

<script>
  import axios from 'axios'

  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      subject: '',
      subjectRules: [
        v => !!v || 'Subject is required',
        v => (v && v.length <= 50) || 'Name must be less than 50 characters'
      ],
      message: '',
      messageRules: [
          v=> !!v || 'Message is required'
      ]

    }),

    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          // Native form submission is not yet supported
          axios.post('/api/submit', {
            name: this.name,
            email: this.email,
            select: this.select,
            checkbox: this.checkbox
          })
        }
      },
      clear () {
        this.$refs.form.reset()
      }
    }
  }
</script>
<style>
#message-card{
    padding:15px;
}
</style>