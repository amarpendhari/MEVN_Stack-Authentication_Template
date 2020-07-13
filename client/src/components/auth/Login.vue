<template>
  <div>
    <Navbar></Navbar>
    <h1 class="p">Login</h1>
    <div class="alert alert-danger" v-if="Errors">
      <i class="fas fa-exclamation-circle" style="font-size:24px"></i>
      <p>{{Errors}}</p>
    </div>
    <div>
      <form method="post" @submit.prevent="SubmitForm" class="form">
        <input type="email" placeholder="Email" v-model="email" />
        <input type="password" placeholder="Password" v-model="password" />
        <button class="btn btn-dark">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import Navbar from "../common/Navbar";
export default {
  name: "Login",
  components: { Navbar },
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    ...mapActions(["LoginUser", "setAlert"]),
    ...mapMutations(["ClearAlert"]),
    SubmitForm(e) {
      e.preventDefault();
      let user = {
        email: this.email,
        password: this.password
      };
      this.LoginUser(user);
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
