<template>
    <div class="footer">

              <v-bottom-nav
                :value="true"
                absolute
                color="white"
                fixed
              >
                <v-btn
                  color="teal"
                  flat
                  to="/"
                >
                  <span>Updates</span>
                  <v-icon>update</v-icon>
                </v-btn>

                <v-btn
                  color="teal"
                  flat
                  to="/tv"
                >
                  <span>TV</span>
                  <v-icon>live_tv</v-icon>
                </v-btn>

                <v-btn
                  color="teal"
                  flat
                  to="/radio"
                >
                  <span>Radio</span>
                  <v-icon>radio</v-icon>
                </v-btn>
                <v-btn
                  color="teal"
                  flat
                  to="/contact"
                >
                  <span>Contact</span>
                  <v-icon>email</v-icon>
                </v-btn>
              </v-bottom-nav>

            </div>
</template>
<script>
export default {
    name: 'FooterNav'
}
</script>

<style>
.footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;

    text-align: center;
}
</style>