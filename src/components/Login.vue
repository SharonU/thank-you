<template>
  <v-container fluid style="height:100%" class="ma-0 pa-0">
    <v-row>
      <v-col sm="6" class="pt-0 pb-0">
        <div class="img-wrapper">
          <img :src="require('../assets/login_img.jpg')" />
        </div>
      </v-col>
      <v-col sm="6" class="pt-0 pb-0">
        <div class="user-input-wrapper">
          <h2 class="mb-4">Everything You Looks For</h2>
          <div>
            <v-facebook-login app-id="245413143291121" @login="handleLogin"></v-facebook-login>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VFacebookLogin from "vue-facebook-login-component";
export default {
  components: {
    VFacebookLogin
  },
  created() {},
  mounted() {},
  methods: {
    handleLogin() {
      this.$router.push('/main')
    }
  }
};
</script>

<style scoped>
.login-wrapper {
  display: flex;
  flex-direction: row;
}
.user-input-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.btn-register {
  background: #03a9f4;
  text-align: center;
  font-weight: 600;
  text-transform: uppercase;
  width: 15.5rem;
  padding: 0.65rem;
  color: #fff;
  border-radius: 5px;
}

.img-wrapper {
  height: 100vh;
}

.img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>