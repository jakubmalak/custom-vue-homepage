<template>
  <v-sheet width="300" class="mx-auto">

    <div id="login-not-successful" class="error-message-box" v-if="errorMessage !== ''">{{ errorMessage }}</div>

    <div v-if="!userStore.isLoggedIn">
      <v-form fast-fail @submit.prevent class="form rounded" elevation="12" style="background-color: #80CBC4;">
        <v-title class="login">Log in</v-title>

        <input type="text" placeholder="Email" v-model="email" id="email" class="textfield rounded">
        <div class="password-input-wrapper">
          <input
            :type="passwordVisible ? 'text' : 'password'"
            placeholder="Password"
            v-model="password"
            class="textfield rounded"
            id="password"
          >
          <button class="toggle-password-button " @click="togglePasswordVisibility">
            {{ passwordVisible ? 'Hide' : 'Show' }}
          </button>
        </div>
        <div class="button">
          <v-btn id="register-button" type="submit" @click="register" block class="mt-2" style="background-color: #B2DFDB;">Register</v-btn>
          <v-btn id="login-button" type="submit" @click="login" block class="mt-2" style="background-color: #B2DFDB;">Login</v-btn>
        </div>
      </v-form>
    </div>
    <div v-else>
      <v-title id="login-successful" class="login">You're logged in!</v-title>
    </div>
  </v-sheet>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import { useUserStore } from "../store/UserStore";

name: "Login";

let email = ref("");
let password = ref("");
let errorMessage = ref("");
let passwordVisible = ref(false);
const userStore = useUserStore();

const login = () => {
  errorMessage.value = "";

  console.log("Email: ", email.value);
  console.log("Password: ", password.value);

  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log("Logged in!");
      userStore.login(data.user);

      // Access and log data from the store
      console.log("User ID:", userStore.currentUser.email);
    })
    .catch((error) => {
      console.error("Error logging in:", error);
      errorMessage.value = error.message;
      // Handle the error here, such as displaying an error message
    });
};

const register = () => {
  errorMessage.value = "";

  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      login();
      console.log("Successfully registered!");
    })
    .catch((error) => {
      console.error("Error registering:", error);
      errorMessage.value = error.message;
      // Handle the error here, such as displaying an error message
    });
};

const togglePasswordVisibility = () => {
  passwordVisible.value = !passwordVisible.value;
};

</script>

<style scoped>
.login {
  font-size: 25px;
}

.form {
  margin-top: 50%;
  padding: 15%;
  border: solid #80CBC4;
  width: 150%;
  margin-left: -20%;
  background-color: #80CBC4;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.button {
  margin-top: 10%;
}

.textfield {
  margin-top: 5%;
  padding: 3%;
  border: 0.5px solid white;
  width: 100%;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.error-message-box {
  margin-top: 15%;
  padding: 15%;
  width: 150%;
  height: 3em;
  margin-left: -20%;
  background-color: #F00000;
  border-radius: 0.2em;
  font-size: 1.1em;
  font-weight: bold;
  display: flex; /* Use flexbox */
  align-items: center; /* Center vertically */
  justify-content: center; /* Center horizontally */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.password-input-wrapper {
  position: relative;
}

.toggle-password-button {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin-top: 10px;
  margin-right: 5px
}

</style>
