<template>
  <div>
    <Navbar></Navbar>
    <h1 class="p">Register</h1>
    <div class="alert alert-danger" v-if="Errors">
      <i class="fas fa-exclamation-circle" style="font-size:24px"></i>
      <p>{{Errors}}</p>
    </div>
    <div>
      <form method="post" @submit.prevent="SubmitForm" class="form">
        <input type="text" placeholder="Name" v-model="name" />
        <input type="email" placeholder="Email" v-model="email" />
        <input type="password" placeholder="Password" v-model="password" />
        <input type="password" placeholder="Confirm Password" v-model="confirm" />
        <button class="btn btn-success">Register</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import Navbar from "../common/Navbar";
export default {
  name: "Register",
  components: { Navbar },
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirm: ""
    };
  },
  methods: {
    ...mapActions(["registerUser", "setAlert"]),
    ...mapMutations(["ClearAlert"]),
    SubmitForm(e) {
      e.preventDefault();
      if (this.password != this.confirm) {
        this.setAlert("Confirm Password and Password do not match");
      } else {
        let user = {
          name: this.name,
          email: this.email,
          password: this.password
        };
        this.registerUser(user);
      }
    }
  },
  computed: {
    ...mapGetters(["Errors"])
  },
  mounted() {
    this.ClearAlert();
  }
};
</script>

<style></style>
