<template>
  <nav class="navbar">
    <div class="mevn">
      <img alt="MEVN logo" src="../../assets/MEVN.png" />
      <h1>MEVN Stack Authentication Template</h1>
    </div>
    <ul>
      <li>
        <button class="btn btn-primary" @click="Logout">Logout</button>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Navbar",
  components: {},
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["Logout"])
  }
};
</script>

<style></style>
