<template>
  <div class="py-10">
    <div v-if="user">
      <h1 class="text-yellow-500 text-6xl py-2">User Information</h1>
      <p class="text-white text-4xl py-2">ID : {{ user.id }}</p>
      <p class="text-white text-4xl py-2">Name : {{ user.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$http
      .get("/api/login")
      .then((res) => {
        const user = res.data.user;
        if (user) {
          this.$store.commit("setUser", user);
        } else {
          this.$router.push({ name: "Login" });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Anton&family=Black+Han+Sans&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap");
* {
  font-family: "Do Hyeon", sans-serif;
}
</style>
